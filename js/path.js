/* ---------------------------------------------------------
   DAIKOKUTEN — renders the learning path from COURSE + state
--------------------------------------------------------- */
(function(){
  function touchStreakIfReturning(s){
    // Visiting the path does not itself extend the streak — only finishing
    // a lesson does. We just read state here.
    return s;
  }

  const LESSON_ICONS = {
    coin:  '<circle cx="12" cy="12" r="8"/><path d="M12 8v8M9 10.5c0-1 1-1.5 3-1.5s3 1 3 2-1 1.5-3 1.5-3 .5-3 1.5 1 2 3 2 3-.5 3-1.5"/>',
    scale: '<path d="M12 3v18M7 7l-4 8a4 4 0 008 0zM17 7l-4 8a4 4 0 008 0zM5 7h14M9 3h6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
    book:  '<path d="M4 5.5A2.5 2.5 0 016.5 3H20v15.5A2.5 2.5 0 0117.5 21H4z"/><path d="M4 18.5A2.5 2.5 0 016.5 16H20"/>'
  };

  function svgIcon(name){
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${LESSON_ICONS[name] || LESSON_ICONS.coin}</svg>`;
  }

  // Each guide's face + attribute, on a shared 60..260 / 20..200 stage so they
  // drop into the same .guide-figure slot. Face rig is identical across guides
  // (same eyes/blush/smile) — only headwear + the item beside the face changes.
  const GUIDE_ART = {
    Daikokuten: `
      <svg viewBox="60 20 200 180" class="guide-figure">
        <circle cx="160" cy="150" r="60" fill="#F6D9AE"/>
        <circle cx="120" cy="164" r="10" fill="#F0916B" opacity="0.55"/>
        <circle cx="200" cy="164" r="10" fill="#F0916B" opacity="0.55"/>
        <path d="M130 148 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M173 148 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M136 180 q24 20 48 0" stroke="#2A160D" stroke-width="5" fill="none" stroke-linecap="round"/>
        <g transform="rotate(-7 160 100)">
          <path d="M92 148 Q86 52 160 48 Q234 52 228 148 Q160 128 92 148 Z" fill="#2A2140"/>
          <circle cx="222" cy="60" r="11" fill="#2A2140"/>
        </g>
      </svg>`,
    Plutus: `
      <svg viewBox="60 20 200 180" class="guide-figure">
        <circle cx="160" cy="150" r="58" fill="#F6D9AE"/>
        <circle cx="124" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <circle cx="196" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <path d="M134 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M169 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M140 178 q20 18 40 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M110 117 Q120 91 160 91 Q200 91 210 117" stroke="#C68A16" stroke-width="7" fill="none" stroke-linecap="round"/>
        <path d="M116 101 Q160 81 204 101" stroke="#E8A61F" stroke-width="6" fill="none" stroke-linecap="round"/>
        <g transform="translate(208,193) rotate(20)">
          <path d="M0 0 Q-30 -6 -34 20 Q-36 34 -20 30" fill="#E8A61F" stroke="#B5790F" stroke-width="2.5"/>
          <circle cx="-28" cy="10" r="4" fill="#FFF6E6" stroke="#B5790F" stroke-width="1.5"/>
          <circle cx="-20" cy="20" r="3.5" fill="#FFF6E6" stroke="#B5790F" stroke-width="1.5"/>
          <circle cx="-32" cy="20" r="3" fill="#FFF6E6" stroke="#B5790F" stroke-width="1.5"/>
        </g>
      </svg>`,
    Ebisu: `
      <svg viewBox="60 20 200 180" class="guide-figure">
        <circle cx="160" cy="150" r="58" fill="#F6D9AE"/>
        <circle cx="124" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <circle cx="196" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <path d="M132 144 q10 -12 18 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M170 144 q10 -12 18 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M134 174 q26 24 52 0" stroke="#2A160D" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M122 113 Q122 55 160 53 Q160 95 160 113Z" fill="#2A2140" stroke="#17101f" stroke-width="2.5"/>
        <path d="M122 113 Q140 101 160 101 Q120 101 122 113Z" fill="#2A2140"/>
        <g transform="translate(208,193) rotate(-10)">
          <ellipse cx="0" cy="0" rx="22" ry="11" fill="#E14B2A" stroke="#B93A1E" stroke-width="2"/>
          <path d="M-22 0 L-30 -4 L-30 4 Z" fill="#E14B2A" stroke="#B93A1E" stroke-width="2"/>
        </g>
        <line x1="210" y1="155" x2="232" y2="135" stroke="#8A5A32" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    Kubera: `
      <svg viewBox="60 20 200 180" class="guide-figure">
        <circle cx="160" cy="150" r="58" fill="#F6D9AE"/>
        <circle cx="124" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <circle cx="196" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <path d="M134 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M169 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M140 178 q20 18 40 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M110 113 Q110 63 160 61 Q210 63 210 113 L196 99 L180 117 L160 95 L140 117 L124 99 Z" fill="#E8A61F" stroke="#B5790F" stroke-width="3"/>
        <circle cx="160" cy="79" r="7" fill="#E14B2A"/>
        <g transform="translate(210,193)">
          <path d="M-16 8 Q-18 -8 0 -10 Q18 -8 16 8 Q18 18 0 20 Q-18 18 -16 8Z" fill="#E8A61F" stroke="#B5790F" stroke-width="2.5"/>
          <circle cx="-6" cy="-14" r="4" fill="#E8A61F" stroke="#B5790F" stroke-width="1.5"/>
          <circle cx="6" cy="-18" r="3.5" fill="#E8A61F" stroke="#B5790F" stroke-width="1.5"/>
        </g>
      </svg>`,
    Hermes: `
      <svg viewBox="60 20 200 180" class="guide-figure">
        <circle cx="160" cy="150" r="58" fill="#F6D9AE"/>
        <circle cx="124" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <circle cx="196" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <path d="M134 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M169 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M140 178 q20 18 40 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M120 115 Q120 89 160 87 Q200 89 200 115 Q200 101 160 99 Q120 101 120 115Z" fill="#E8A61F" stroke="#B5790F" stroke-width="3"/>
        <path d="M120 103 Q94 93 90 109 Q88 121 104 119 Q100 107 120 103Z" fill="#FFF6E6" stroke="#B5790F" stroke-width="2.5"/>
        <path d="M200 103 Q226 93 230 109 Q232 121 216 119 Q220 107 200 103Z" fill="#FFF6E6" stroke="#B5790F" stroke-width="2.5"/>
        <g transform="translate(210,195) rotate(15)">
          <rect x="-3" y="-30" width="6" height="40" rx="3" fill="#8A5A32"/>
          <path d="M-16 -30 Q0 -42 16 -30 Q0 -34 0 -30Z" fill="#FFF6E6" stroke="#B5790F" stroke-width="2"/>
        </g>
      </svg>`,
    Caishen: `
      <svg viewBox="60 20 200 180" class="guide-figure">
        <circle cx="160" cy="150" r="58" fill="#F6D9AE"/>
        <circle cx="124" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <circle cx="196" cy="163" r="9" fill="#F0916B" opacity="0.55"/>
        <path d="M134 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M169 147 q9 -11 17 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M140 181 q20 16 40 0" stroke="#2A160D" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M146 187 Q160 207 176 187" stroke="#FFF6E6" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.9"/>
        <path d="M118 117 Q118 91 160 89 Q202 91 202 117 L202 105 Q160 97 118 105Z" fill="#2A2140" stroke="#17101f" stroke-width="2"/>
        <rect x="94" y="101" width="24" height="7" rx="3" fill="#2A2140"/>
        <rect x="202" y="101" width="24" height="7" rx="3" fill="#2A2140"/>
        <g transform="translate(210,193)">
          <path d="M-18 8 Q-20 -8 0 -10 Q20 -8 18 8 Q20 16 0 18 Q-20 16 -18 8Z" fill="#E8A61F" stroke="#B5790F" stroke-width="2.5"/>
        </g>
      </svg>`
  };

  function starRow(accuracy){
    const stars = accuracy >= 95 ? 3 : accuracy >= 75 ? 2 : 1;
    let out = '<span class="node-stars">';
    for(let i=0;i<3;i++){
      const filled = i < stars;
      out += `<svg viewBox="0 0 24 24" fill="${filled ? '#E8A61F' : '#E9D9B7'}"><polygon points="12,2 15,9 22,10 17,15 18,22 12,18 6,22 7,15 2,10 9,9"/></svg>`;
    }
    return out + '</span>';
  }

  function guideTip(state, isFirstUnlockedUnit, nextGuide){
    if(!isFirstUnlockedUnit){
      return "New ground, new lessons. Let's begin.";
    }
    if(!hasEnergy(state)){
      return `You're out of energy for now \u2014 it refills in ${formatDuration(msUntilNextEnergy(state))}. Rest a moment, or come back for the next unit.`;
    }
    const n = lessonsCompletedCount(state);
    if(n === 0) return "Sit, and let's begin with the very first coin. No rush.";
    if(n < 4) return "Good work so far \u2014 the path only gets more interesting.";
    return nextGuide
      ? `You've cleared a lot of ground. ${nextGuide} is watching, waiting for you to earn the next unit.`
      : "You've cleared a lot of ground. Keep going \u2014 more is on the way.";
  }

  function renderPath(state){
    const root = document.getElementById('pathRoot');
    let html = `<div class="path-header"><span class="eyebrow">The path of prosperity</span></div>`;

    // determine global unlock cursor across unlocked units, in order
    let unlockedReached = false;
    let previousUnitName = null;
    const ART_AVAILABLE = new Set(Object.keys(GUIDE_ART)); // guides without a portrait yet fall back to a text line

    COURSE.units.forEach(unit => {
      if(unit.locked){
        const unlockLine = previousUnitName
          ? `Opens once ${previousUnitName} is complete`
          : `Opens later`;
        html += `
          <div class="unit-locked-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>
            <h3 style="font-family:var(--font-display); font-weight:400; font-size:1.2rem; margin-bottom:6px;">${unit.name}</h3>
            <p style="font-size:0.9rem;">${unit.desc}</p>
            <p style="font-size:0.78rem; margin-top:10px; font-family:var(--font-mono); letter-spacing:0.04em;">Guided by ${unit.guide} &middot; ${unlockLine}</p>
          </div>`;
        previousUnitName = unit.name;
        return;
      }

      html += `
        <div class="unit-banner">
          <div><div class="unit-name">${unit.name}</div><div class="unit-desc">${unit.desc}</div></div>
        </div>`;

      const isFirstUnlockedUnit = !unlockedReached;
      if(ART_AVAILABLE.has(unit.guide)){
        const nextLockedUnit = COURSE.units.find(u => u.locked);
        html += `${GUIDE_ART[unit.guide]}<div class="guide-bubble">${guideTip(state, isFirstUnlockedUnit, nextLockedUnit ? nextLockedUnit.guide : null)}</div>`;
      }else{
        html += `<div class="guide-line">&middot; guided by ${unit.guide} &middot;</div>`;
      }

      html += `<div class="node-column">`;
      const alignPattern = ['align-c','align-r','align-c','align-l'];
      unit.lessons.forEach((lesson, i) => {
        const done = state.completed[lesson.id];
        let cls = 'locked';
        if(done){ cls = 'done'; }
        else if(!unlockedReached){ cls = 'current'; unlockedReached = true; }
        const outOfEnergy = cls === 'current' && !hasEnergy(state);
        if(outOfEnergy) cls += ' no-energy';
        const align = alignPattern[i % alignPattern.length];
        const iconMarkup = done
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
          : (cls === 'locked'
              ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>'
              : svgIcon(lesson.icon));
        const href = (cls === 'locked' || outOfEnergy) ? '#' : `lesson.html?lesson=${lesson.id}`;
        const title = outOfEnergy ? `Out of energy \u2014 refills in ${formatDuration(msUntilNextEnergy(state))}` : lesson.title;
        html += `
          <div class="node-row ${align}">
            <a class="lesson-node ${cls}" href="${href}" aria-label="${title}" title="${title}">
              ${iconMarkup}
              <span class="node-label">${lesson.title}</span>
              ${done ? starRow(done.accuracy) : ''}
            </a>
          </div>`;
      });
      html += `</div>`;
      previousUnitName = unit.name;
    });

    root.innerHTML = html;
  }

  loadCourseData().then(() => {
    const state = touchStreakIfReturning(loadState());
    syncEnergy(state);
    saveState(state);
    renderDashStats(state);
    renderPath(state);
  });
})();
