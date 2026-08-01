# Tekisei — the 1000-lesson roadmap

100 units × 10 lessons. Unit 1 is fully built (teach cards + questions, live
in `js/lesson-data.js` and `sheets-templates/u1-*.csv`). Units 2–10 are
scaffolded (name, description, guide, unlock order all wired into the app)
but empty — titles below are the plan for filling them in, one unit at a
time, the same "slowly, slowly" way Unit 1 was built.

Units 11–100 exist in `js/lesson-data.js` and `js/sheets-config.js` as
reserved slots (id, a placeholder name, `locked: true`, and a guide already
assigned) so the app and the roster on `index.html` work at full scale —
but their actual titles and lessons haven't been planned yet. Plan and
build them in batches of 10, the same way as Units 1–10 below: pick a
theme for the batch, write ten lesson titles, then fill in one unit's
`sheets-templates/u{N}-....csv` at a time.

Each unit is guided by one deity from the roster; with 100 units the six
guides now each cover a contiguous block instead of just one or two units
— see the `roster-tag` ranges in `index.html` for the current split
(editable there any time the plan changes).

---

### Unit 1 — The Basics of Value · guide: Daikokuten · 🟢 LIVE
1. What Is Value?
2. Price vs. Value
3. The Time Value of Money
4. Reading a Balance Sheet
5. Three Ways to Value a Business
6. Growth vs. Value
7. Risk and Return
8. What Makes Cash Flow "Free"?
9. The P/E Ratio
10. Reading an Income Statement

### Unit 2 — Statistics I: Describing Data · guide: Plutus
1. Why Statistics Matters in Investing
2. Mean, Median, and Mode
3. Spotting an Outlier
4. Measuring Spread: Range and Variance
5. Standard Deviation, Demystified
6. What a Normal Distribution Looks Like
7. Skew: When Data Leans
8. Correlation: Do Two Things Move Together?
9. Correlation Is Not Causation
10. Sample vs. Population

### Unit 3 — Statistics II: Probability & Risk · guide: Plutus
1. What Is Probability, Really?
2. Independent vs. Dependent Events
3. Expected Value
4. Risk vs. Uncertainty
5. Diversification and Variance
6. The Bell Curve of Stock Returns
7. Volatility as a Risk Measure
8. Beta: Measuring Market Sensitivity
9. Base Rates and Why They're Ignored
10. Common Statistical Traps in Investing

### Unit 4 — Reading Financial Statements · guide: Ebisu
1. The Three Statements, at a Glance
2. Revenue: Where the Story Starts
3. Cost of Goods Sold and Gross Margin
4. Operating Expenses and Operating Profit
5. Net Profit and the Bottom Line
6. The Cash Flow Statement, Simply
7. Why Profit and Cash Aren't the Same
8. Depreciation and Amortization
9. Working Capital, Explained
10. Red Flags in a Financial Statement

### Unit 5 — Comparables & Multiples · guide: Kubera
1. What Is a "Comparable" Company?
2. The P/E Ratio, Revisited
3. EV/EBITDA, Unpacked
4. Price-to-Book Ratio
5. Price-to-Sales Ratio
6. Choosing the Right Peer Group
7. Why Multiples Can Mislead
8. Growth-Adjusted Multiples (PEG)
9. Building a Comps Table
10. From Multiples to a Value Estimate

### Unit 6 — Discounted Cash Flow Foundations · guide: Kubera
1. Free Cash Flow, Defined
2. Forecasting Revenue Growth
3. Projecting Margins Forward
4. What Is a Discount Rate, Really?
5. WACC: Blending the Cost of Capital
6. The Terminal Value Problem
7. Putting Together a Simple DCF
8. Sensitivity: What If You're Wrong?
9. DCF vs. Multiples: Strengths and Weak Spots
10. When a DCF Should Be Ignored

### Unit 7 — Small Business & Rule-of-Thumb Valuation · guide: Ebisu
1. Why Small Businesses Value Differently
2. Seller's Discretionary Earnings
3. Industry Rules of Thumb
4. Valuing a Business With No Formal Books
5. Family Business Complications
6. Buy-Sell Agreements, Explained
7. Valuing for Divorce, Estate, or Exit
8. Goodwill in a Small Business
9. Discounts for Lack of Marketability
10. A Practical Small-Business Valuation Walkthrough

### Unit 8 — Deals, Mergers & Acquisitions · guide: Hermes
1. Why Companies Buy Other Companies
2. Strategic vs. Financial Buyers
3. The M&A Process, Step by Step
4. Synergies: Real and Imagined
5. Premiums Paid in Acquisitions
6. Due Diligence, Explained Simply
7. How Deals Get Financed
8. Earnouts and Deferred Payments
9. When Mergers Fail
10. Reading a Real Deal Announcement

### Unit 9 — IPOs & Capital Markets · guide: Hermes
1. Why Companies Go Public
2. The IPO Process, Step by Step
3. Underwriters and Their Role
4. Pricing an IPO
5. IPO Pop: Why It Happens
6. Lock-Up Periods, Explained
7. Direct Listings vs. Traditional IPOs
8. SPACs, Demystified
9. Life as a Public Company
10. Reading an IPO Prospectus

### Unit 10 — Building a Full Valuation Model · guide: Caishen
1. Gathering the Inputs
2. Building the Revenue Model
3. Building the Cost Model
4. Projecting the Three Statements Together
5. Assembling the DCF
6. Cross-Checking With Comparables
7. Stress-Testing Your Assumptions
8. Writing Up Your Valuation Thesis
9. Presenting a Valuation Like an Analyst
10. Your First Full Company Valuation

### Units 11–100 · 🔲 NOT YET PLANNED
Reserved and wired into the app (`js/lesson-data.js`, `js/sheets-config.js`)
as empty, locked placeholders — `id`, a numbered stand-in `name`, and a
guide are already set so nothing needs code changes when it's time to plan
them. Design each remaining batch of 10 the same way this first set was
designed: pick the batch's theme, draft 10 lesson titles here in this doc,
then build lessons unit by unit. Current guide blocks:

| Units | Guide |
|---|---|
| 2–23 | Plutus |
| 24–45 | Ebisu |
| 46–67 | Kubera |
| 68–89 | Hermes |
| 90–100 | Caishen (Unit 100 is the capstone) |

---

## How to fill in a unit

1. Open `sheets-templates/u{N}-....csv` for the unit — it already has the
   correct header row and lesson titles are yours to add.
2. Write 3–4 teach (`intro`) cards per lesson (one of them the "key
   phrase" card), then 5–6 `question` rows — mix formats: a scenario,
   a plain definition check, a small calculation, a true/false. See
   `docs/content-pipeline.md` for the exact column meanings.
3. Import into the matching Google Sheets tab, publish it, drop the URL
   into `js/sheets-config.js` — or send me the filled-in CSV and I'll
   wire it into `js/lesson-data.js` directly as the new local fallback.
4. Flip that unit's `locked: false` in `js/lesson-data.js` once at least
   its first lesson is ready, so it appears unlocked on the path.

Ten lessons is a comfortable unit-sized chunk of work — that's the pace
this roadmap assumes, one unit at a time.
