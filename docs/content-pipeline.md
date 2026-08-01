# Tekisei content pipeline — editing lessons without touching code

Every lesson (teach cards + questions) can live in a Google Sheet instead of
in `js/lesson-data.js`. The site checks Sheets first; if a unit has no sheet
configured, or the sheet can't be reached, it quietly falls back to the
lessons already bundled in `js/lesson-data.js`. Nothing breaks either way.

## 1. The column layout

One Google Sheet, one **tab per unit** (`u1` … `u10`). Each tab is a flat
table — row 1 is a header (for your own reference; the loader ignores the
text and just uses column position), and every row from row 2 down is either
a **teach card** or a **question**:

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
format — the easiest way to see the pattern is to open it. The other nine
files in that folder are empty (header row only), one per future unit,
ready for you to fill in.

## 2. Setting it up in Google Sheets

1. Create a new Google Sheet. Rename the first tab `u1`, and add tabs `u2`
   through `u10` (Sheets → right-click a tab → Duplicate, then rename).
2. Import each CSV from `sheets-templates/` into its matching tab:
   File → Import → Upload → pick the CSV → **Insert new sheet** or
   **Replace current sheet**, whichever tab you're filling.
3. Edit freely — add rows, rewrite questions, add whole new lessons. The
   site doesn't care how many lessons or questions a unit has.
4. For each tab you want live: **File → Share → Publish to web** → in the
   first dropdown choose that specific tab (not "Entire document") → in the
   second dropdown choose **Comma-separated values (.csv)** → **Publish**.
   Copy the URL it gives you.
5. Open `js/sheets-config.js` and paste that URL next to the matching unit
   id, e.g.:
   ```js
   u2: "https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?gid=123&single=true&output=csv",
   ```
6. Save, reload the site. That unit now loads live from your sheet. Leave a
   unit's entry as `null` to keep using the bundled fallback content.

No rebuild step, no server, no API key — just a public "published" CSV
link, which is read-only to visitors regardless of the sheet's actual
sharing settings.

## 3. Good habits when editing

- Keep `answer` as a single letter (`A`–`D`) that matches the position of
  the correct option in columns E–H — if you reorder the options, update
  the letter too.
- One row per teach card, one row per question. Order in the sheet = order
  in the lesson.
- Exactly one `intro` row per lesson should have `key_phrase = TRUE` — it
  gets the highlighted callout treatment.
- If a row's `lesson_id` is blank, the loader skips it — handy for leaving
  a blank spacer row between lessons for your own readability.
- Test a tab by pasting its published CSV URL directly into a browser tab —
  you should see plain comma-separated text, not an HTML page. If you see
  HTML, the "Publish to web" step didn't complete for that tab.

## 4. What happens on failure

If a unit's URL is unreachable, returns something that isn't valid CSV, or
simply isn't set — that unit silently uses whatever's in
`js/lesson-data.js` for it. Check the browser console for a one-line
warning naming the unit if you're troubleshooting; visitors never see an
error state.
