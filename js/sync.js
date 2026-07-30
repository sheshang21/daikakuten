/* ---------------------------------------------------------
   DAIKOKUTEN — cross-device progress sync (Supabase)

   Bridges the existing localStorage state (js/app.js: loadState/
   saveState, key "daikokuten_state_v1") with a Supabase table so an
   account's progress follows them across devices.

   Load order matters: this file must come after js/app.js AND
   js/auth.js.

     <script src="js/app.js"></script>
     ...
     <script src="js/auth.js"></script>
     <script src="js/sync.js"></script>

   Design, in plain terms:
   - Nothing about offline/anonymous play changes. loadState() and
     saveState() still read/write localStorage exactly as before, and
     the site works fully logged-out, same as always.
   - When signed in, every saveState() call (via the onStateSaved hook
     app.js already calls) schedules a debounced push of the full
     state to Supabase.
   - On sign-in (including page load with an existing session), the
     local copy and the remote copy are compared using each one's
     embedded `updatedAt` timestamp, and whichever is newer wins —
     simple last-write-wins, which is enough for a single learner
     syncing across a couple of their own devices.
   - After a merge, a "daikokuten:synced" event fires on window so any
     already-rendered UI (dashboard stats, etc.) can re-render from the
     possibly-updated state. Pages that call renderDashStats() can just
     listen for this event and re-call it.
--------------------------------------------------------- */
const DaikokutenSync = (function(){
  let currentUser = null;
  let pushTimer = null;
  let lastStatus = "idle"; // idle | syncing | synced | error | offline
  const PUSH_DEBOUNCE_MS = 1500;

  function setStatus(s){
    lastStatus = s;
    window.dispatchEvent(new CustomEvent("daikokuten:syncstatus", { detail: s }));
  }

  async function pushState(state){
    if(!currentUser || !Auth.client) return;
    setStatus("syncing");
    try{
      const { error } = await Auth.client
        .from("user_progress")
        .upsert({ user_id: currentUser.id, data: state }, { onConflict: "user_id" });
      setStatus(error ? "error" : "synced");
    }catch(e){
      setStatus("offline"); // network hiccup — next save schedules another push
    }
  }

  /** Pulls the remote row (if any), merges with local by newest updatedAt, saves the winner locally, and pushes it back up if local won. */
  async function pullAndMerge(){
    if(!currentUser || !Auth.client) return;
    setStatus("syncing");
    const local = loadState();
    let remote = null;
    try{
      const { data, error } = await Auth.client
        .from("user_progress")
        .select("data")
        .eq("user_id", currentUser.id)
        .maybeSingle();
      if(!error && data && data.data) remote = Object.assign(defaultState(), data.data);
    }catch(e){
      setStatus("offline");
    }

    if(!remote){
      // First time this account has synced from any device — seed the server.
      saveState(local);
      await pushState(local);
      return;
    }

    const localIsNewer = (local.updatedAt || 0) > (remote.updatedAt || 0);
    const winner = localIsNewer ? local : remote;
    saveState(winner); // writes localStorage; also re-arms the debounced push below via onStateSaved
    if(localIsNewer) await pushState(winner);
    else setStatus("synced");

    window.dispatchEvent(new CustomEvent("daikokuten:synced", { detail: winner }));
  }

  // Wire into the same hook app.js already calls after every saveState().
  window.onStateSaved = function(state){
    if(!currentUser) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => pushState(state), PUSH_DEBOUNCE_MS);
  };

  if(typeof Auth !== "undefined"){
    Auth.onChange(async (user) => {
      const wasSignedIn = !!currentUser;
      currentUser = user;
      if(user && !wasSignedIn){
        await pullAndMerge();
      }
      if(!user){
        setStatus("idle");
      }
    });
  }

  /** Flushes any pending debounced push immediately — call before sign-out or navigating away. */
  async function flush(){
    clearTimeout(pushTimer);
    if(currentUser) await pushState(loadState());
  }

  function status(){ return lastStatus; }

  return { pullAndMerge, flush, status };
})();
