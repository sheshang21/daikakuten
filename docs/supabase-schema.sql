-- DAIKOKUTEN — Supabase schema for cross-device account sync
--
-- Run this once against a fresh Supabase project:
-- Dashboard → SQL Editor → New query → paste this whole file → Run.
--
-- Stores each learner's game state (merit, coins, streak, energy,
-- completed lessons, claimed rewards) as a single JSON blob per user,
-- mirroring exactly what already lives in localStorage under the key
-- "daikokuten_state_v1". No columns need to match the JS state shape —
-- if that shape changes later, this table needs no migration.

create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Row Level Security: a user can only ever see or touch their own row.
-- This is the entire access-control model — the anon key shipped in
-- js/supabase-config.js has no special privileges beyond what these
-- policies grant, so it's safe to have that key visible in client code.
alter table public.user_progress enable row level security;

create policy "select own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

create policy "insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

create policy "update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Data API grants. Supabase projects created after May 30, 2026 need
-- these explicit grants for PostgREST (the auto-generated REST API
-- supabase-js talks to) to expose this table at all — RLS above still
-- governs which *rows* are visible, this just allows the table itself
-- to be queried through the API.
grant select, insert, update on public.user_progress to authenticated;

-- Keep updated_at current on every write, so "last write wins" merge
-- logic on the client has a reliable server-side timestamp to compare
-- against, independent of the updatedAt field inside the JSON blob.
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_user_progress_updated_at on public.user_progress;
create trigger trg_user_progress_updated_at
  before update on public.user_progress
  for each row execute function public.set_updated_at();
