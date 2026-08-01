# Tekisei — the 1000-lesson roadmap

100 units × 10 lessons, organized into 10 ten-unit "books" that take a learner from what value even means through to a full sell-side-style valuation and deal toolkit. Unit 1 is fully built (teach cards + questions, live in `js/lesson-data.js` and `sheets-templates/u1-the-basics-of-value.csv`). Every other unit is scaffolded — id, name, description, guide, and unlock order are all wired into the app — but empty, ready to be filled in one unit at a time, the same "slowly, slowly" way Unit 1 was built.

Content for a unit can live either directly in `js/lesson-data.js` or in a CSV file referenced from `js/sheets-config.js` (a repo file path or a published Google Sheet both work identically) — see `docs/content-pipeline.md` for the full workflow. u2–u10 already have correctly-named empty CSV templates waiting in `sheets-templates/`; units beyond u10 don't have a template file yet — create one when you're ready to plan that unit.

---

## Book I — Foundations of Value & Financial Statements · guide: Daikokuten

**Unit 1 — The Basics of Value**  🟢 LIVE (10 lessons built)  
What value actually means, and why price isn't it.

**Unit 2 — Markets, Prices & Participants**  
Who trades, why prices move, and what a market actually is.

**Unit 3 — The Time Value of Money**  
Present value, future value, and why a rupee today beats a rupee later.

**Unit 4 — Reading a Balance Sheet**  
Assets, liabilities, and equity — a snapshot of what a company owns and owes.

**Unit 5 — Reading an Income Statement**  
Revenue down to net profit, one line at a time.

**Unit 6 — Reading a Cash Flow Statement**  
Why profit and cash aren't the same, and where the difference hides.

**Unit 7 — Linking the Three Statements**  
How the balance sheet, income statement, and cash flow statement connect.

**Unit 8 — Ratio Analysis I: Profitability & Efficiency**  
Margins, returns on capital, and turnover ratios.

**Unit 9 — Ratio Analysis II: Liquidity & Solvency**  
Current ratio, quick ratio, debt ratios, and interest cover.

**Unit 10 — Capstone: Diagnosing a Company From Its Filings**  
Put every statement-reading skill together on one real set of filings.


## Book II — Statistics & Quantitative Foundations · guide: Plutus

**Unit 11 — Statistics I: Describing Data**  
Mean, median, mode, and the shape of a distribution.

**Unit 12 — Statistics II: Spread & Variability**  
Range, variance, and standard deviation, demystified.

**Unit 13 — Probability Foundations**  
What probability really measures, and how odds are built from it.

**Unit 14 — Expected Value & Decision-Making**  
Weighing outcomes by their probability to compare choices.

**Unit 15 — Distributions & the Bell Curve**  
Normal distributions, skew, and what a bell curve tells an investor.

**Unit 16 — Correlation & Causation**  
When two things move together — and when that means nothing at all.

**Unit 17 — Regression Basics**  
Fitting a line through data to estimate a relationship.

**Unit 18 — Sampling & Estimation**  
Why a sample can stand in for a population, and where that breaks down.

**Unit 19 — Hypothesis Testing, Simply**  
Testing a claim against data without the jargon overload.

**Unit 20 — Capstone: Reading a Research Report's Statistics**  
Interpret the stats behind a real market or economic research note.


## Book III — Comparable Company & Precedent Analysis · guide: Kubera

**Unit 21 — What Is a Comparable Company?**  
Choosing peers that actually belong in the same conversation.

**Unit 22 — Enterprise Value vs. Equity Value**  
Two different prices for two different claims on a company.

**Unit 23 — Core Trading Multiples**  
P/E, EV/EBITDA, and EV/Sales, and when each one fits.

**Unit 24 — Choosing the Right Peer Group**  
Sector, size, growth, and geography — what makes a peer set fair.

**Unit 25 — Normalizing Earnings**  
Stripping out one-offs so multiples compare like with like.

**Unit 26 — Precedent Transactions Analysis**  
Valuing a company against what similar businesses actually sold for.

**Unit 27 — Control Premiums & Synergies**  
Why buyers pay more than the trading price — and how much more.

**Unit 28 — Building a Comps Table**  
Assembling peer data into a clean, defensible comparison.

**Unit 29 — Football Fields & Valuation Ranges**  
Presenting a range of valuation methods on a single chart.

**Unit 30 — Capstone: A Full Comps-Based Valuation**  
Value a real company using trading comps and precedents together.


## Book IV — Discounted Cash Flow & Intrinsic Valuation · guide: Kubera

**Unit 31 — Free Cash Flow, Defined**  
The cash a business actually generates, after keeping the lights on.

**Unit 32 — Forecasting Revenue**  
Building a growth story from drivers, not just a trend line.

**Unit 33 — Forecasting Margins & Costs**  
Projecting the cost side of the business with discipline.

**Unit 34 — Forecasting Capex & Working Capital**  
The two line items that quietly decide how much cash is left over.

**Unit 35 — The Cost of Equity**  
What shareholders require to hold the risk of owning the business.

**Unit 36 — WACC: Blending the Cost of Capital**  
Combining the cost of debt and equity into one discount rate.

**Unit 37 — Terminal Value**  
Valuing everything after the forecast period ends, in one number.

**Unit 38 — Building a Full DCF Model**  
Assembling forecasts, discount rate, and terminal value into a valuation.

**Unit 39 — Sensitivity & Scenario Analysis**  
Testing how much the valuation moves when assumptions change.

**Unit 40 — Capstone: DCF vs. Market Price**  
Compare your intrinsic value estimate against what the market says today.


## Book V — Corporate Finance & Capital Structure · guide: Ebisu

**Unit 41 — Capital Structure Basics**  
The mix of debt and equity a company chooses to fund itself.

**Unit 42 — The Cost of Debt & Credit Spreads**  
What lenders charge, and why it varies company to company.

**Unit 43 — Leverage & Financial Risk**  
How borrowing amplifies both returns and the chance of ruin.

**Unit 44 — Dividend Policy & Buybacks**  
How companies decide what to do with cash they don't reinvest.

**Unit 45 — Capital Budgeting: NPV & IRR**  
Deciding which projects are worth funding, with real numbers.

**Unit 46 — Working Capital Management**  
Managing the cash tied up in receivables, payables, and inventory.

**Unit 47 — Bonds & Credit Ratings, Explained**  
How debt gets priced, rated, and traded.

**Unit 48 — Convertible & Hybrid Securities**  
Instruments that blend features of debt and equity.

**Unit 49 — Raising Capital: Debt vs. Equity Markets**  
Where companies go to raise money, and why they pick one route over another.

**Unit 50 — Capstone: Choosing an Optimal Capital Structure**  
Recommend a funding mix for a real company scenario.


## Book VI — M&A & Deal-Making · guide: Hermes

**Unit 51 — Why Companies Buy Other Companies**  
The strategic and financial logic behind an acquisition.

**Unit 52 — Strategic vs. Financial Buyers**  
Two very different reasons to buy the same company.

**Unit 53 — The M&A Process, Step by Step**  
From first approach to signed deal.

**Unit 54 — Deal Structuring: Cash, Stock, or Both**  
How the form of payment changes risk for both sides.

**Unit 55 — Accretion / Dilution Analysis**  
Whether a deal helps or hurts the buyer's earnings per share.

**Unit 56 — Synergies: Real and Imagined**  
Cost and revenue synergies, and why they're so often overestimated.

**Unit 57 — Due Diligence, Explained**  
What buyers actually check before signing.

**Unit 58 — Financing an Acquisition**  
Sources and uses — where the money for a deal comes from.

**Unit 59 — Earnouts, Escrows & Deal Terms**  
The fine print that allocates risk after the deal closes.

**Unit 60 — Capstone: Modeling an M&A Deal**  
Build a simple accretion/dilution model for a real-style deal.


## Book VII — Leveraged Buyouts & Private Equity · guide: Hermes

**Unit 61 — What Is a Leveraged Buyout?**  
Buying a company mostly with borrowed money, and why that works.

**Unit 62 — What Makes a Good LBO Candidate**  
The traits private equity firms look for before they'll bid.

**Unit 63 — Sources & Uses in an LBO**  
Where the purchase price comes from, and where it goes.

**Unit 64 — Debt Structuring in LBOs**  
Senior debt, subordinated debt, and how leverage gets layered.

**Unit 65 — Building a Simple LBO Model**  
Projecting cash flows to pay down acquisition debt over time.

**Unit 66 — Returns Analysis: IRR & MOIC**  
How private equity firms measure whether a deal actually worked.

**Unit 67 — Exit Strategies for PE Firms**  
Sale, IPO, or recapitalization — how a fund gets its money back out.

**Unit 68 — Add-On Acquisitions & Roll-Ups**  
Growing a platform company through smaller follow-on deals.

**Unit 69 — Venture Capital vs. Private Equity**  
Two very different games played with very different companies.

**Unit 70 — Capstone: A Full LBO Model Walkthrough**  
Build and interpret a complete LBO model, start to exit.


## Book VIII — Capital Markets, IPOs & Debt Issuance · guide: Ebisu

**Unit 71 — Why Companies Go Public**  
The trade-offs of leaving private ownership behind.

**Unit 72 — The IPO Process, Step by Step**  
From filing to first day of trading.

**Unit 73 — Underwriters, Roadshows & Book-Building**  
How an IPO actually gets priced and sold.

**Unit 74 — The IPO Pop, Explained**  
Why a stock often jumps on day one — and who that favors.

**Unit 75 — Lock-Ups & Life After the IPO**  
What happens to insiders' shares, and to the stock, after listing.

**Unit 76 — Direct Listings & SPACs**  
Alternative routes to going public, and how they differ from a classic IPO.

**Unit 77 — Follow-On & Secondary Offerings**  
How already-public companies raise more equity capital.

**Unit 78 — Debt Capital Markets**  
How companies issue bonds instead of selling shares.

**Unit 79 — Rating Agencies & the Credit Market**  
Who rates debt, and how that rating moves its price.

**Unit 80 — Capstone: Reading a Real Prospectus**  
Pull the key facts out of an actual IPO or bond prospectus.


## Book IX — Small Business & Specialized Valuation · guide: Daikokuten

**Unit 81 — Why Small Businesses Value Differently**  
No public price, thin data, and a very different buyer pool.

**Unit 82 — Seller's Discretionary Earnings**  
Adjusting a small business's profit to reflect its true earning power.

**Unit 83 — Industry Rules of Thumb**  
Quick valuation shortcuts used in specific trades — and their limits.

**Unit 84 — Valuing Real Estate**  
Cap rates, comparable sales, and income approaches to property value.

**Unit 85 — Valuing Banks & Financial Institutions**  
Why normal valuation tools break down for lenders.

**Unit 86 — Valuing Early-Stage & Pre-Revenue Companies**  
Estimating worth before there's much to measure yet.

**Unit 87 — Intangible Assets & Brand Value**  
Putting a number on things you can't touch.

**Unit 88 — Valuing for Disputes: Divorce & Estate Cases**  
Where valuation meets law, and why the standard of value changes.

**Unit 89 — Discounts for Marketability & Minority Stakes**  
Why a small, illiquid stake is worth less per share than control.

**Unit 90 — Capstone: A Practical Small-Business Valuation**  
Walk a real small business from raw numbers to a defensible value.


## Book X — IB Practice, Careers, Ethics & Capstone · guide: Caishen

**Unit 91 — How an Investment Bank Is Organized**  
Front office, middle office, back office — who does what.

**Unit 92 — Life as an Analyst**  
The day-to-day workflow behind the deals and the decks.

**Unit 93 — Financial Modeling Best Practices**  
Building models that don't break the moment someone else opens them.

**Unit 94 — Building a Pitch Book**  
What goes into the deck bankers actually bring to a client meeting.

**Unit 95 — Presenting a Valuation Like an Analyst**  
Turning a model into a clear, defensible story.

**Unit 96 — Ethics, Conflicts of Interest & Regulation**  
The rules and pressures that shape how deals get done.

**Unit 97 — Behavioral Biases in Investing**  
The mental shortcuts that quietly distort financial judgment.

**Unit 98 — ESG & Sustainable Investing Basics**  
How environmental and social factors enter investment decisions.

**Unit 99 — Macro Context: Rates, Cycles & Markets**  
How interest rates and the business cycle move every valuation you've built.

**Unit 100 — Capstone: Your First Full Company Valuation**  
Every earlier lesson, brought together into one complete valuation.


---

## How to fill in a unit

1. For units 2–10: open the matching `sheets-templates/u{N}-....csv` —
   it already has the correct header row, named for the unit above.
   For units 11–100: create that file yourself first (copy the header
   row from any existing template), named `u{N}-slug-of-the-name.csv`.
2. Write 3–4 teach (`intro`) cards per lesson (one of them the "key
   phrase" card), then 5–6 `question` rows — mix formats: a scenario,
   a plain definition check, a small calculation, a true/false. See
   `docs/content-pipeline.md` for the exact column meanings.
3. Point that unit's entry in `js/sheets-config.js` at the file's path
   (or a published Google Sheet URL — either works), commit, and
   redeploy — or send me the filled-in CSV and I'll wire it in.
4. Flip that unit's `locked: false` in `js/lesson-data.js` once at least
   its first lesson is ready, so it appears unlocked on the path.

Ten lessons is a comfortable unit-sized chunk of work — that's the pace
this roadmap assumes, one unit at a time, book by book.
