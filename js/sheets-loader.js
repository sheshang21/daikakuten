/* ---------------------------------------------------------
   DAIKOKUTEN — dynamic content loader (Google Sheets → COURSE)

   Column layout expected in each unit's published CSV, from row 2
   (row 1 is a header row, for your own reference — content ignores it):

     A lesson_id | B lesson_title | C row_type | D question_or_heading
     | E option_a_or_body | F option_b | G option_c | H option_d
     | I answer (A/B/C/D) | J hint | K explanation | L key_phrase | M icon

   row_type is either "intro" (a teach card) or "question".
   For "intro" rows: D = heading, E = body, L = TRUE/FALSE (key phrase).
   For "question" rows: D = question text, E–H = up to 4 options,
   I = the correct option's letter, J = hint, K = explanation.

   lesson_id/lesson_title/icon are repeated on every row for that
   lesson — that repetition is what lets a flat spreadsheet describe
   many lessons in one tab. Lesson and question order follow the
   order rows appear in the sheet.
--------------------------------------------------------- */

/** Minimal CSV parser that handles quoted fields containing commas/newlines. */
function parseCSV(text){
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for(let i=0;i<text.length;i++){
    const c = text[i];
    if(inQuotes){
      if(c === '"'){
        if(text[i+1] === '"'){ field += '"'; i++; }
        else inQuotes = false;
      }else field += c;
    }else{
      if(c === '"') inQuotes = true;
      else if(c === ','){ row.push(field); field = ''; }
      else if(c === '\n'){ row.push(field); rows.push(row); row = []; field = ''; }
      else if(c === '\r'){ /* skip, \n handles the line break */ }
      else field += c;
    }
  }
  if(field.length || row.length){ row.push(field); rows.push(row); }
  return rows.filter(r => r.some(cell => cell !== ''));
}

function csvRowsToLessons(rows){
  if(rows.length < 2) return [];
  const dataRows = rows.slice(1); // skip header row
  const byId = {};
  const order = [];
  const letterToIndex = { A:0, B:1, C:2, D:3 };

  dataRows.forEach(r => {
    const [lessonId, lessonTitle, rowType, d, e, f, g, h, answer, hint, explanation, keyFlag, icon] = r;
    if(!lessonId || !rowType) return;

    if(!byId[lessonId]){
      byId[lessonId] = { id: lessonId.trim(), title: (lessonTitle||lessonId).trim(), icon: (icon||'coin').trim(), intro: [], questions: [] };
      order.push(lessonId);
    }
    const lesson = byId[lessonId];
    if(lessonTitle) lesson.title = lessonTitle.trim();
    if(icon) lesson.icon = icon.trim();

    const type = (rowType||'').trim().toLowerCase();
    if(type === 'intro'){
      lesson.intro.push({
        heading: (d||'').trim(),
        body: (e||'').trim(),
        key: /^true$/i.test((keyFlag||'').trim())
      });
    }else{
      const prompt = (d||'').trim();
      const opts = [e,f,g,h].filter(v => v !== undefined && String(v).trim() !== '').map(v => v.trim());
      const answerLetter = (answer||'A').trim().toUpperCase();
      const answerIndex = letterToIndex.hasOwnProperty(answerLetter) ? letterToIndex[answerLetter] : 0;
      lesson.questions.push({
        type: opts.length <= 2 ? 'truefalse' : 'mcq',
        prompt,
        options: opts,
        answer: Math.min(answerIndex, Math.max(opts.length-1,0)),
        hint: (hint||'').trim(),
        explain: (explanation||'').trim()
      });
    }
  });

  return order
    .filter((id, i) => order.indexOf(id) === i) // first occurrence only, preserves first-seen order
    .map(id => byId[id])
    .filter(l => l.questions.length > 0); // a lesson with no valid questions isn't playable — skip it
}

/**
 * Fetches every configured unit CSV and overlays the parsed lessons onto
 * the matching unit in COURSE. Always resolves (never rejects) — any
 * network or parsing failure for a given unit just leaves that unit's
 * local fallback lessons untouched, logged as a warning.
 */
async function loadCourseData(){
  const urls = (typeof CSV_URLS !== 'undefined' && CSV_URLS) ? CSV_URLS : {};
  const jobs = Object.keys(urls)
    .filter(unitId => urls[unitId])
    .map(async unitId => {
      try{
        const res = await fetch(urls[unitId], { cache: 'no-store' });
        if(!res.ok) throw new Error('HTTP ' + res.status);
        const text = await res.text();
        const lessons = csvRowsToLessons(parseCSV(text));
        if(lessons.length){
          const unit = COURSE.units.find(u => u.id === unitId);
          if(unit){
            unit.lessons = lessons;
            unit.locked = false; // content arrived — no manual code edit needed to unlock it
          }
        }
      }catch(err){
        console.warn(`[Daikokuten] Could not load Sheets content for unit "${unitId}" — using local fallback. (${err.message})`);
      }
    });
  await Promise.all(jobs);
  return COURSE;
}
