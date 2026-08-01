# Tekisei content pipeline — editing lessons without touching code

Every lesson (teach cards + questions) can live in a CSV file instead of
directly in `js/lesson-data.js`. The site checks the URL configured for a
unit in `js/sheets-config.js` first; if a unit has none, or it can't be
reached, it quietly falls back to the lessons already bundled in
`js/lesson-data.js`. Nothing breaks either way.

That "URL" can point at a plain CSV file sitting in this repo — **Google
Sheets is entirely optional.** See §2 for both options.

## 1. The column layout

One CSV per unit, matching files in `sheets-templates/` (`u1` … `u100`,
create the file when you're ready to plan that unit — see
`docs/curriculum-roadmap.md`). Row 1 is a header (for your own reference;
the loader ignores the text and just uses column position), and every row
from row 2 down is either a **teach card** or a **question**:

| Col | Name | Used by | Notes |
|---|---|---|---|
| A | `lesson_id` | both | e.g. `u2l1`. Repeat it on every row of that lesson. |
| B | `lesson_title` | both | e.g. `Mean, Median, and Mode`. Repeat on every row. |
| C | `row_type` | both | exactly `intro` or `question` |
| D | `question_or_heading` | both | the heading (intro) or the question text (question) |
| E | `option_a_or_body` | both | the card body (intro) or option A (question) |
| F | `option_b` | question only | |
| G | `option_c` | question only | leave blank for a true/false question |
| H | `option_d` | question only | leave blank for a true/false question |
| I | `answer` | question only | the correct option's letter: `A`, `B`, `C`, or `D` |
| J | `hint` | question only | one short nudging sentence |
| K | `explanation` | question only | shown after the learner answers |
| L | `key_phrase` | intro only | `TRUE` for the one "key phrase" card in a lesson, else `FALSE` |
| M | `icon` | both | `coin`, `scale`, `clock`, or `book` — repeat per lesson |

A lesson is just every row sharing the same `lesson_id`, in the order those
rows appear in the sheet. Lessons appear in the unit in the order their
`lesson_id` is first seen. True/false questions are just questions with only
two options filled in (columns G and H left blank).

**Ready-made example:** `sheets-templates/u1-the-basics-of-value.csv` is the
actual, live Unit 1 content (10 lessons, 83 rows) exported in exactly this
format — the easiest way to see the pattern is to open it. `sheets-templates/`
also has one blank template (header row only) for each of Units 2–10. Units
11–100 don't have a template file yet — when you're ready to plan one of
those, copy `sheets-templates/u2-....csv`'s header row into a new
`u{N}-....csv` file.

## 2. Making a unit go live: two options

### Option A — CSV file in the repo (no Google account, this is the default workflow)
1. Edit `sheets-templates/u{N}-....csv` directly — add rows, rewrite
   questions, add whole new lessons. The site doesn't care how many
   lessons or questions a unit has.
2. Open `js/sheets-config.js` and point that unit at the file's path,
   relative to the site root:
   ```js
   u2: "sheets-templates/u2-markets-prices-participants.csv",
   ```
3. Commit, push, let Render redeploy. That's it — Render serves the CSV
   like any other static file, so the site fetches whatever's currently
   in that file on every page load.
4. To make further edits: just edit the CSV and redeploy again. There's
   no publishing step, no separate "live" copy to sync — the file in the
   repo *is* the live content.

### Option B — Google Sheets (skip this unless you want to edit without redeploying)
1. Create a new Google Sheet, import the CSV: **File → Import → Upload**
   → pick the CSV → **Insert new sheet**.
2. Edit freely in Sheets.
3. **File → Share → Publish to web** → in the first dropdown choose that
   specific tab (not "Entire document") → second dropdown: **CSV** →
   **Publish**. Copy the URL it gives you.
4. Paste that URL into `js/sheets-config.js` instead of a local path:
   ```js
   u2: "https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=123&single=true&output=csv",
   ```
5. Save, reload the site — no redeploy needed for future edits to the
   Sheet itself, since the site re-fetches that URL on every page load.

Either option uses the exact same column layout and the exact same
loader code — the only difference is where the CSV physically lives, and
whether "publish" means "push to git" or "click Publish in Sheets."

## 3. Good habits when editing

- Keep `answer` as a single letter (`A`–`D`) that matches the position of
  the correct option in columns E–H — if you reorder the options, update
  the letter too.
- One row per teach card, one row per question. Order in the file = order
  in the lesson.
- Exactly one `intro` row per lesson should have `key_phrase = TRUE` — it
  gets the highlighted callout treatment.
- If a row's `lesson_id` is blank, the loader skips it — handy for leaving
  a blank spacer row between lessons for your own readability.
- If you're using Option B, test a tab by pasting its published CSV URL
  directly into a browser tab — you should see plain comma-separated
  text, not an HTML page. If you see HTML, the "Publish to web" step
  didn't complete for that tab. (Option A has no equivalent failure mode
  — if the file's there, it's there.)

## 4. What happens on failure

If a unit's URL is unreachable, returns something that isn't valid CSV, or
simply isn't set — that unit silently uses whatever's in
`js/lesson-data.js` for it. Check the browser console for a one-line
note either way when troubleshooting — success and failure both log,
see `js/sheets-loader.js`; visitors never see an error state.
