/* ---------------------------------------------------------
   DAIKOKUTEN — lesson/quiz engine
--------------------------------------------------------- */
(function(){
  const params = new URLSearchParams(location.search);
  const lessonId = params.get('lesson');

  const main = document.getElementById('lessonMain');
  const shell = document.getElementById('lessonShell');
  const progressFill = document.getElementById('progressFill');
  const livesTally = document.getElementById('livesTally');

  loadCourseData().then(() => {
    const found = findLesson(lessonId);
    if(!found){
      main.innerHTML = notFoundScreen();
    }else{
      const state = loadState();
      syncEnergy(state);
      saveState(state);
      const alreadyDone = !!state.completed[found.lesson.id];
      if(!alreadyDone && !hasEnergy(state)){
        main.innerHTML = outOfEnergyScreen(found.lesson, state);
        progressFill.style.width = '0%';
        livesTally.style.visibility = 'hidden';
      }else{
        runLesson(found.unit, found.lesson, alreadyDone);
      }
    }
  });

  function outOfEnergyScreen(lesson, state){
    return `
      <div class="end-screen"><div class="end-card">
        <svg class="end-art" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="#FBDCCF"/><path d="M100 130s-28-17-38-35C56 82 63 68 76 68c8 0 14 4 24 14 10-10 16-14 24-14 13 0 20 14 14 27-10 18-38 35-38 35z" fill="#E14B2A" stroke="#B93A1E" stroke-width="2"/></svg>
        <h2>Out of energy</h2>
        <p class="sub">Next heart in ${formatDuration(msUntilNextEnergy(state))}. No harm done \u2014 this lesson is right where you left it.</p>
        <div class="hero-actions" style="justify-content:center;">
          <a class="btn btn-ghost btn-lg" href="learn.html">Back to path</a>
        </div>
      </div></div>`;
  }

  function findLesson(id){
    for(const unit of COURSE.units){
      for(const lesson of unit.lessons){
        if(lesson.id === id) return { unit, lesson };
      }
    }
    return null;
  }

  function notFoundScreen(){
    return `
      <div class="end-screen"><div class="end-card">
        <h2>This lesson hasn't been carved yet.</h2>
        <p class="sub">That path node isn't open. Head back and pick a lit-up coin.</p>
        <a class="btn btn-vermilion btn-lg" href="learn.html">Back to the path</a>
      </div></div>`;
  }

  function coinIcon(){
    return '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#E8A61F" stroke="#B5790F" stroke-width="1.6"/><rect x="8.5" y="8.5" width="7" height="7" fill="#FFF6E6" transform="rotate(45 12 12)"/></svg>';
  }

  function shuffledQuestion(q){
    // shuffle options, remapping the answer index so content authors
    // don't have to think about order.
    const order = q.options.map((_, i) => i);
    for(let i=order.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [order[i],order[j]] = [order[j],order[i]];
    }
    return {
      ...q,
      options: order.map(i => q.options[i]),
      answer: order.indexOf(q.answer)
    };
  }

  function runLesson(unit, lesson, isReplay){
    const introCards = lesson.intro || [];
    const questions = lesson.questions.map(shuffledQuestion);
    const totalQ = questions.length;
    const totalSteps = introCards.length + totalQ;
    let qIndex = 0;
    let lives = 5;
    let correct = 0;
    let answered = false;
    let hintShown = false;
    let energyExhausted = false;

    function setProgress(stepsDone){
      progressFill.style.width = Math.round((stepsDone/totalSteps)*100) + '%';
    }

    function updateLives(){
      let livesHtml = '';
      for(let i=0;i<5;i++){
        livesHtml += `<svg viewBox="0 0 24 24" fill="${i < lives ? '#E8A61F':'#E9D9B7'}" stroke="#B5790F" stroke-width="1"><circle cx="12" cy="12" r="9"/><rect x="9" y="9" width="6" height="6" fill="#FFF6E6" transform="rotate(45 12 12)"/></svg>`;
      }
      livesTally.innerHTML = livesHtml;
    }

    // ---------- teach-first intro cards ----------
    function renderIntro(i){
      shell.classList.remove('state-ok','state-no');
      livesTally.style.visibility = 'hidden';
      setProgress(i);
      const card = introCards[i];
      const isLast = i === introCards.length - 1;
      main.innerHTML = `
        <div class="lesson-body">
          <div class="question-card teach-card ${card.key ? 'teach-card-key':''}">
            <div class="q-kicker">${lesson.title} &middot; Learn ${i+1} of ${introCards.length}</div>
            <h2 class="teach-heading">${card.heading}</h2>
            <p class="teach-body">${card.body}</p>
          </div>
        </div>
        <div class="lesson-footer" style="display:block;">
          <div class="lesson-footer-inner">
            ${i > 0
              ? `<button class="btn btn-ghost" id="teachBackBtn">Back</button>`
              : `<button class="btn btn-ghost" id="skipIntroBtn">Skip to quiz</button>`}
            <button class="btn btn-jade" id="teachNextBtn">${isLast ? "Start the quiz" : "Next"}</button>
          </div>
        </div>`;
      const nextBtn = document.getElementById('teachNextBtn');
      nextBtn.onclick = () => { isLast ? beginQuiz() : renderIntro(i+1); };
      const backBtn = document.getElementById('teachBackBtn');
      if(backBtn) backBtn.onclick = () => renderIntro(i-1);
      const skipBtn = document.getElementById('skipIntroBtn');
      if(skipBtn) skipBtn.onclick = beginQuiz;
    }

    function beginQuiz(){
      livesTally.style.visibility = 'visible';
      renderQuestion();
    }

    function updateChrome(){
      setProgress(introCards.length + qIndex);
      updateLives();
    }

    function renderQuestion(){
      shell.classList.remove('state-ok','state-no');
      answered = false;
      hintShown = false;
      const q = questions[qIndex];
      const letters = ['A','B','C','D'];
      main.innerHTML = `
        <div class="lesson-body">
          <div class="question-card">
            <div class="q-kicker">${lesson.title} &middot; Question ${qIndex+1} of ${totalQ}</div>
            <div class="q-prompt">${q.prompt}</div>
            ${q.hint ? `
              <button class="hint-toggle" id="hintToggle" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.5.5.8 1 .8 1.7V16h6.4v-.8c0-.7.3-1.2.8-1.7A6 6 0 0012 3z"/></svg>
                Need a hint?
              </button>
              <div class="hint-box" id="hintBox" hidden>${q.hint}</div>` : ''}
            <div class="options-list" id="optionsList">
              ${q.options.map((opt,i) => `
                <button class="option-btn" data-i="${i}">
                  <span class="opt-key">${letters[i] || i+1}</span>
                  <span>${opt}</span>
                </button>`).join('')}
            </div>
          </div>
        </div>
        <div class="lesson-footer" id="lessonFooter" style="display:none;">
          <div class="lesson-footer-inner">
            <div class="feedback-text">
              <div class="feedback-title" id="feedbackTitle"></div>
              <div class="feedback-sub" id="feedbackSub"></div>
            </div>
            <button class="btn btn-jade" id="continueBtn">Continue</button>
          </div>
        </div>`;
      updateChrome();

      const hintToggle = document.getElementById('hintToggle');
      if(hintToggle){
        hintToggle.addEventListener('click', () => {
          hintShown = !hintShown;
          document.getElementById('hintBox').hidden = !hintShown;
          hintToggle.classList.toggle('active', hintShown);
        });
      }

      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => onAnswer(parseInt(btn.dataset.i,10)));
      });
    }

    function onAnswer(choice){
      if(answered) return;
      answered = true;
      const q = questions[qIndex];
      const isCorrect = choice === q.answer;
      if(isCorrect){
        correct++;
      }else{
        lives--;
        if(!isReplay){
          const state = loadState();
          spendEnergy(state, 1);
          saveState(state);
          if(state.energy <= 0) energyExhausted = true;
        }
      }

      document.querySelectorAll('.option-btn').forEach((btn,i) => {
        btn.setAttribute('disabled','');
        if(i === q.answer) btn.classList.add('correct');
        else if(i === choice) btn.classList.add('wrong');
      });
      const hintToggle = document.getElementById('hintToggle');
      if(hintToggle) hintToggle.setAttribute('disabled','');

      shell.classList.add(isCorrect ? 'state-ok' : 'state-no');
      document.getElementById('feedbackTitle').textContent = isCorrect ? 'Correct!' : 'Not quite.';
      document.getElementById('feedbackTitle').className = 'feedback-title ' + (isCorrect ? 'ok':'no');
      document.getElementById('feedbackSub').textContent = q.explain;

      const footer = document.getElementById('lessonFooter');
      footer.style.display = 'block';
      const btn = document.getElementById('continueBtn');
      btn.className = 'btn ' + (isCorrect ? 'btn-jade' : 'btn-vermilion');
      btn.textContent = (lives <= 0 || energyExhausted) && !isCorrect ? 'See results' : 'Continue';
      btn.onclick = advance;
    }

    function advance(){
      if(lives <= 0){
        renderFail();
        return;
      }
      if(energyExhausted){
        renderEnergyExhausted();
        return;
      }
      qIndex++;
      if(qIndex >= totalQ){
        renderComplete();
      }else{
        renderQuestion();
      }
    }

    function renderEnergyExhausted(){
      const state = loadState();
      main.innerHTML = `
        <div class="end-screen"><div class="end-card">
          <svg class="end-art" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="#FBDCCF"/><path d="M100 130s-28-17-38-35C56 82 63 68 76 68c8 0 14 4 24 14 10-10 16-14 24-14 13 0 20 14 14 27-10 18-38 35-38 35z" fill="#E14B2A" stroke="#B93A1E" stroke-width="2"/></svg>
          <h2>Out of energy</h2>
          <p class="sub">Next heart in ${formatDuration(msUntilNextEnergy(state))}. This lesson stays right where you left it \u2014 come back and finish it then.</p>
          <div class="hero-actions" style="justify-content:center;">
            <a class="btn btn-ghost btn-lg" href="learn.html">Back to path</a>
          </div>
        </div></div>`;
      progressFill.style.width = '0%';
    }

    function renderFail(){
      main.innerHTML = `
        <div class="end-screen"><div class="end-card">
          <svg class="end-art" viewBox="0 0 200 200"><circle cx="100" cy="100" r="90" fill="#FBDCCF"/><path d="M70 85q7-9 14 0M116 85q7-9 14 0" stroke="#2A160D" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M75 130q25-14 50 0" stroke="#2A160D" stroke-width="5" fill="none" stroke-linecap="round"/></svg>
          <h2>Out of coins for today</h2>
          <p class="sub">No harm done \u2014 nothing was lost, and the lesson is right where you left it. Take a breath and try again.</p>
          <div class="hero-actions" style="justify-content:center;">
            <a class="btn btn-vermilion btn-lg" href="lesson.html?lesson=${lesson.id}">Try again</a>
            <a class="btn btn-ghost btn-lg" href="learn.html">Back to path</a>
          </div>
        </div></div>`;
      progressFill.style.width = '0%';
    }

    function renderComplete(){
      progressFill.style.width = '100%';
      const accuracy = Math.round((correct/totalQ)*100);
      const meritEarned = correct * 10;
      const bonus = accuracy === 100 ? 10 : 0;
      const coinsEarned = correct * 2 + bonus;

      const state = loadState();
      state.merit += meritEarned;
      state.coins += coinsEarned;
      state.completed[lesson.id] = { accuracy, completedOn: todayISO() };
      touchStreak(state);

      const standingRewards = isReplay ? [] : checkStandingRewards(state);
      const unitReward = isReplay ? null : checkUnitReward(state, unit);
      const rewards = unitReward ? [...standingRewards, unitReward] : standingRewards;

      saveState(state);

      main.innerHTML = `
        <div class="end-screen"><div class="end-card">
          <svg class="end-art" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="#D8ECE5"/>
            <circle cx="100" cy="110" r="46" fill="#F6D9AE"/>
            <circle cx="78" cy="120" r="8" fill="#F0916B" opacity="0.55"/>
            <circle cx="122" cy="120" r="8" fill="#F0916B" opacity="0.55"/>
            <path d="M84 108q7-8 14 0M102 108q7-8 14 0" stroke="#2A160D" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M86 132q14 12 28 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
            <g transform="rotate(-8 100 76)"><path d="M60 92Q56 40 100 36Q144 40 140 92Q100 78 60 92Z" fill="#2A2140"/><circle cx="136" cy="46" r="7" fill="#2A2140"/></g>
            <circle cx="40" cy="60" r="10" fill="#E8A61F" stroke="#B5790F" stroke-width="2"/>
            <circle cx="164" cy="52" r="8" fill="#E8A61F" stroke="#B5790F" stroke-width="2"/>
            <circle cx="150" cy="150" r="9" fill="#E8A61F" stroke="#B5790F" stroke-width="2"/>
          </svg>
          <h2>Lesson complete</h2>
          <p class="sub">${accuracyLine(accuracy)}</p>
          <div class="end-stats">
            <div class="end-stat"><div class="n">${accuracy}%</div><div class="l">Accuracy</div></div>
            <div class="end-stat"><div class="n">+${meritEarned}</div><div class="l">Merit</div></div>
            <div class="end-stat"><div class="n">+${coinsEarned}</div><div class="l">Coins</div></div>
          </div>
          ${rewards.length ? `
            <div class="reward-list">
              ${rewards.map(r => `
                <div class="reward-item">
                  ${CHEST_ICON}
                  <div><div class="reward-title">${r.title}</div><div class="reward-coins">+${r.coins} bonus coins</div></div>
                </div>`).join('')}
            </div>` : ''}
          <a class="btn btn-jade btn-lg btn-block" href="learn.html">Continue on the path</a>
        </div></div>`;
    }

    function accuracyLine(a){
      if(a === 100) return "A perfect run. Daikokuten nods once \u2014 that's high praise.";
      if(a >= 80) return "Strong work. That's the kind of instinct that compounds.";
      if(a >= 50) return "Solid start. A little revisiting and this will stick for good.";
      return "That one was tricky. Worth a second pass when you're ready.";
    }

    if(introCards.length){
      renderIntro(0);
    }else{
      beginQuiz();
    }
  }
})();
