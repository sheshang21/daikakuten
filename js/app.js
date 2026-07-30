/* ---------------------------------------------------------
   DAIKOKUTEN — shared state & gamification helpers
   Progress lives in localStorage on this device. No account,
   no server — simple by design while the course is young.
--------------------------------------------------------- */
const STORE_KEY = "daikokuten_state_v1";

// Energy is a global, cross-lesson pool — separate from the 5 in-lesson
// "lives" in lesson.js. It gates whether you can *start* a fresh lesson at
// all, drains on wrong answers, and refills passively over time.
const ENERGY_MAX = 5;
const ENERGY_REFILL_MS = 30 * 60 * 1000; // one heart back every 30 minutes

const LEVELS = [
  { at: 0,    title: "Apprentice of the Bale" },
  { at: 60,   title: "Keeper of Small Coin" },
  { at: 150,  title: "Reader of Ledgers" },
  { at: 300,  title: "Student of Mr. Market" },
  { at: 520,  title: "Margin-of-Safety Adept" },
  { at: 800,  title: "Fortune's Apprentice" },
  { at: 1200, title: "Merchant Sage" }
];

// Streak length -> bonus coins for hitting it, once each, ever.
const STREAK_MILESTONES = [
  { days: 3,   coins: 15 },
  { days: 7,   coins: 30 },
  { days: 14,  coins: 50 },
  { days: 30,  coins: 100 },
  { days: 60,  coins: 175 },
  { days: 100, coins: 300 }
];

const UNIT_COMPLETE_COINS = 60;

function defaultState(){
  return {
    merit: 0,
    coins: 0,
    streak: 0,
    lastPlayedISO: null,
    completed: {},
    energy: ENERGY_MAX,
    energyUpdatedAt: null,
    claimedRewards: {},
    // Bumped on every saveState(). Used only to decide, during account sync,
    // which of two copies of this state (this device vs. the server) is
    // newer. Not used anywhere in gameplay logic.
    updatedAt: 0
  };
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){
    return defaultState();
  }
}

function saveState(state){
  state.updatedAt = Date.now();
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){ /* storage unavailable, continue silently */ }
  // If js/sync.js is loaded (account sync is set up), it registers this hook
  // to push the freshly-saved state to Supabase, debounced. Absent sync.js,
  // this is a no-op and behavior is identical to before.
  if(typeof window !== "undefined" && typeof window.onStateSaved === "function"){
    window.onStateSaved(state);
  }
}

function todayISO(){
  return new Date().toISOString().slice(0,10);
}

function daysBetween(a, b){
  const d1 = new Date(a + "T00:00:00");
  const d2 = new Date(b + "T00:00:00");
  return Math.round((d2 - d1) / 86400000);
}

/** Call once when the learner finishes something today. Keeps the streak logic in one place. */
function touchStreak(state){
  const today = todayISO();
  if(state.lastPlayedISO === today) return state; // already counted today
  if(!state.lastPlayedISO){
    state.streak = 1;
  }else{
    const gap = daysBetween(state.lastPlayedISO, today);
    state.streak = (gap === 1) ? state.streak + 1 : 1;
  }
  state.lastPlayedISO = today;
  return state;
}

/**
 * Brings state.energy up to date against wall-clock time without spending
 * anything. Call this before reading OR before spending energy — it never
 * needs to be called more than once per read since it's idempotent.
 */
function syncEnergy(state){
  if(state.energy === undefined || state.energy === null) state.energy = ENERGY_MAX;
  if(!state.energyUpdatedAt || state.energy >= ENERGY_MAX){
    state.energy = Math.min(state.energy, ENERGY_MAX);
    state.energyUpdatedAt = Date.now();
    return state;
  }
  const elapsed = Date.now() - state.energyUpdatedAt;
  const heartsToAdd = Math.floor(elapsed / ENERGY_REFILL_MS);
  if(heartsToAdd > 0){
    state.energy = Math.min(ENERGY_MAX, state.energy + heartsToAdd);
    // carry forward any leftover progress toward the *next* heart rather than
    // resetting the clock to now, so partial regen time is never lost
    state.energyUpdatedAt = state.energy >= ENERGY_MAX ? Date.now() : state.energyUpdatedAt + heartsToAdd * ENERGY_REFILL_MS;
  }
  return state;
}

function hasEnergy(state){
  syncEnergy(state);
  return state.energy > 0;
}

/** Spends energy (default 1). Only resets the regen clock if you were spending from a full pool. */
function spendEnergy(state, amount){
  amount = amount || 1;
  syncEnergy(state);
  const wasFull = state.energy >= ENERGY_MAX;
  state.energy = Math.max(0, state.energy - amount);
  if(wasFull) state.energyUpdatedAt = Date.now();
  return state;
}

function msUntilNextEnergy(state){
  syncEnergy(state);
  if(state.energy >= ENERGY_MAX) return 0;
  return Math.max(0, ENERGY_REFILL_MS - (Date.now() - state.energyUpdatedAt));
}

/** "3m" / "1h 12m" style label for a countdown. */
function formatDuration(ms){
  const totalMin = Math.max(1, Math.ceil(ms / 60000));
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function getLevel(merit){
  let current = LEVELS[0];
  let next = null;
  for(let i=0;i<LEVELS.length;i++){
    if(merit >= LEVELS[i].at) current = LEVELS[i];
    else { next = LEVELS[i]; break; }
  }
  return { title: current.title, next };
}

/**
 * Call right after merit/streak/coins are updated for a completed lesson.
 * Claims any newly-crossed level or streak milestones exactly once (tracked
 * in state.claimedRewards), adds their coin bonus into state.coins, and
 * returns the list of rewards just earned so the UI can show them.
 */
function checkStandingRewards(state){
  if(!state.claimedRewards) state.claimedRewards = {};
  const earned = [];

  LEVELS.forEach((lvl, i) => {
    if(i === 0) return; // baseline tier, nothing to claim
    const key = `level:${i}`;
    if(state.merit >= lvl.at && !state.claimedRewards[key]){
      state.claimedRewards[key] = true;
      const coins = i * 15;
      state.coins += coins;
      earned.push({ type: 'level', title: lvl.title, coins });
    }
  });

  STREAK_MILESTONES.forEach(m => {
    const key = `streak:${m.days}`;
    if(state.streak >= m.days && !state.claimedRewards[key]){
      state.claimedRewards[key] = true;
      state.coins += m.coins;
      earned.push({ type: 'streak', title: `${m.days}-day streak`, coins: m.coins });
    }
  });

  return earned;
}

/** Call after a lesson completes, passing the unit it belongs to. Awards a one-time chest for finishing every lesson in a unit. */
function checkUnitReward(state, unit){
  if(!unit || !unit.lessons.length) return null;
  const key = `unit:${unit.id}`;
  if(state.claimedRewards[key]) return null;
  const allDone = unit.lessons.every(l => state.completed[l.id]);
  if(!allDone) return null;
  state.claimedRewards[key] = true;
  state.coins += UNIT_COMPLETE_COINS;
  return { type: 'unit', title: `${unit.name} complete`, coins: UNIT_COMPLETE_COINS };
}

const CHEST_ICON = '<svg viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="10" rx="2" fill="#E8A61F" stroke="#B5790F" stroke-width="1.6"/><path d="M3 10a9 5 0 0118 0" fill="none" stroke="#B5790F" stroke-width="1.6"/><rect x="10.5" y="10" width="3" height="6" fill="#B5790F"/></svg>';


const ICONS = {
  coin: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#E8A61F" stroke="#B5790F" stroke-width="1.6"/><rect x="8.5" y="8.5" width="7" height="7" fill="#FFF6E6" transform="rotate(45 12 12)"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c1 4-4 6-4 10a4 4 0 008 0c0-2-1-3-1-5 2 1 3 3 3 5a6 6 0 01-12 0c0-5 4-7 6-10z"/></svg>',
  merit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M8 13l-2 8 6-3 6 3-2-8"/></svg>',
  energy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.6-4.7-10-9.3C.4 8.2 2.3 4.6 6 4.6c2.1 0 3.6 1.1 6 3.7 2.4-2.6 3.9-3.7 6-3.7 3.7 0 5.6 3.6 4 7.1C19.6 16.3 12 21 12 21z"/></svg>'
};

/** Renders the dashboard pill bar into any element with [data-dash-stats]. */
function renderDashStats(state){
  syncEnergy(state);
  const hosts = document.querySelectorAll("[data-dash-stats]");
  const energyEmpty = state.energy <= 0;
  const energyTitle = energyEmpty
    ? `Refills in ${formatDuration(msUntilNextEnergy(state))}`
    : (state.energy < ENERGY_MAX ? `Next heart in ${formatDuration(msUntilNextEnergy(state))}` : "Full energy");
  hosts.forEach(host => {
    host.innerHTML = `
      <span class="stat-pill streak" title="Prosperity streak">${ICONS.flame}${state.streak}</span>
      <span class="stat-pill energy${energyEmpty ? ' empty' : ''}" title="${energyTitle}">${ICONS.energy}${state.energy}/${ENERGY_MAX}</span>
      <span class="stat-pill coins" title="Coins earned">${ICONS.coin}${state.coins}</span>
      <span class="stat-pill merit" title="Merit points">${ICONS.merit}${state.merit}</span>
    `;
  });
}

function lessonsCompletedCount(state){
  return Object.keys(state.completed).length;
}
