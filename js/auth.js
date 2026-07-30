/* ---------------------------------------------------------
   DAIKOKUTEN — account auth (Supabase)

   Thin wrapper around Supabase Auth, exposed as window.Auth.
   Requires js/supabase-config.js loaded first, and the Supabase
   CDN script tag loaded before this file:

     <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
     <script src="js/supabase-config.js"></script>
     <script src="js/auth.js"></script>
     <script src="js/sync.js"></script>   (must come after auth.js)

   If SUPABASE_URL/SUPABASE_ANON_KEY aren't set, every method below
   rejects with a clear "not configured" error instead of throwing —
   pages that never call Auth just keep working exactly as before.
--------------------------------------------------------- */
const Auth = (function(){
  const configured = !!(typeof SUPABASE_URL !== "undefined" && SUPABASE_URL && SUPABASE_ANON_KEY);
  const client = configured && typeof supabase !== "undefined"
    ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

  const notConfiguredError = () =>
    Promise.reject(new Error("Supabase isn't configured yet — fill in js/supabase-config.js."));

  async function signUp(email, password){
    if(!client) return notConfiguredError();
    return client.auth.signUp({ email, password });
  }

  async function signIn(email, password){
    if(!client) return notConfiguredError();
    return client.auth.signInWithPassword({ email, password });
  }

  async function signInWithMagicLink(email){
    if(!client) return notConfiguredError();
    return client.auth.signInWithOtp({ email });
  }

  async function signOut(){
    if(!client) return notConfiguredError();
    return client.auth.signOut();
  }

  /** Resolves the current user (or null if signed out / not configured). */
  async function getUser(){
    if(!client) return null;
    const { data } = await client.auth.getUser();
    return data ? data.user : null;
  }

  /** callback(user|null) fires immediately with current state, then on every change. */
  function onChange(callback){
    if(!client){ callback(null); return { unsubscribe(){} }; }
    client.auth.getSession().then(({ data }) => callback(data.session ? data.session.user : null));
    const { data: sub } = client.auth.onAuthStateChange((_event, session) => {
      callback(session ? session.user : null);
    });
    return sub.subscription;
  }

  return { configured, client, signUp, signIn, signInWithMagicLink, signOut, getUser, onChange };
})();
