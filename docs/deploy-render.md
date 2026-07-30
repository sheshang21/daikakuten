# Deploying to Render

The whole site is static HTML/CSS/JS — no build step, no server, no
environment variables. Content lives in `js/lesson-data.js` at rest and is
optionally overlaid at runtime from Google Sheets via `js/sheets-config.js`
(both are just files the browser fetches; Render doesn't need to know
about either).

## Option A — Blueprint (recommended)
1. Push this repo to GitHub or GitLab, with `render.yaml` at the repo root
   (same level as `index.html`).
2. In Render: **New → Blueprint** → pick the repo → **Apply**.
3. Render reads `render.yaml` and creates the static site — done. No
   dashboard configuration needed.

## Option B — Manual static site
1. In Render: **New → Static Site** → connect the repo.
2. **Build Command:** leave blank.
3. **Publish Directory:** `.`
4. Deploy.

## After the first deploy
- Custom domain: Render dashboard → the site → **Settings → Custom Domains**.
- Every push to the connected branch auto-redeploys.
- `404.html` at the repo root is served for any unmatched path (see the
  `routes` rewrite in `render.yaml`).
- Nothing here needs Render secrets/env vars. Accounts (see below) are
  handled by Supabase directly from the browser, so this stays a
  single static site on Render — no second service needed.

## Accounts / cross-device sync (Supabase)
Login and progress-sync run entirely client-side against Supabase — no
change to the Render deploy above.

1. Create a free project at [supabase.com](https://supabase.com).
2. Dashboard → **SQL Editor** → paste and run `docs/supabase-schema.sql`.
   This creates the `user_progress` table, its Row Level Security
   policies, and the Data API grants it needs.
3. Dashboard → **Settings → API** → copy the **Project URL** and the
   **anon / publishable** key (never the `service_role` key).
4. Paste both into `js/supabase-config.js` and redeploy (or just push —
   Render auto-redeploys on push).

Until `js/supabase-config.js` is filled in, `account.html` shows a
"not set up yet" notice and the rest of the site behaves exactly as
before — local-only progress, no accounts. Nothing breaks either way.
