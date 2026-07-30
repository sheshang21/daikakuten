/* ---------------------------------------------------------
   DAIKOKUTEN — Supabase account config

   HOW TO USE THIS FILE
   1. Create a free project at https://supabase.com.
   2. Run the SQL in /docs/supabase-schema.sql against it
      (Dashboard → SQL Editor → paste → Run). This creates the
      user_progress table, its Row Level Security policies, and
      the Data API grants it needs.
   3. In your Supabase project: Settings → API. Copy the
      "Project URL" and the "anon" / "publishable" key (NOT the
      service_role key — that one must never appear in client code).
   4. Paste both values below and save.

   The anon/publishable key is safe to ship in client-side code —
   it's the SAME public key already visible in every request the
   browser makes. All real protection comes from the Row Level
   Security policies in supabase-schema.sql, which restrict every
   row to its own owner regardless of who holds this key.

   Leave SUPABASE_URL empty (or null) to keep running fully
   offline/local, exactly as before — js/auth.js and js/sync.js
   both no-op gracefully when this isn't configured, so nothing
   here is required for the site to work.
--------------------------------------------------------- */
const SUPABASE_URL = "https://nyoubqpafeewoqpfedqc.supabase.co";       // e.g. "https://xyzcompany.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55b3VicXBhZmVld29xcGZlZHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzOTk2NjUsImV4cCI6MjEwMDk3NTY2NX0.ZB35DEpUB3s6ZJQDo3eGAlF_nOfFaHg6j-WQ2ly4cDY";  // the public anon/publishable key, not service_role
