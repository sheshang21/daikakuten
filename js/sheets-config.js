/* ---------------------------------------------------------
   TEKISEI — content source config

   Each unit's value here is just a URL that gets fetch()'d at page
   load. It can point at EITHER of two places:

   OPTION A — a CSV file living in this repo (no Google account needed)
   1. Edit the matching file in /sheets-templates/ (see
      /docs/content-pipeline.md for the column layout).
   2. Point this unit at it with a path relative to the site root, e.g.
        u2: "sheets-templates/u2-markets-prices-participants.csv",
   3. Commit + push + redeploy. Since Render serves every file in the
      repo, that path is fetchable exactly like any other asset — no
      Google Sheets, no publishing step. Edit the CSV, redeploy, done.

   OPTION B — a Google Sheet published to the web
   1. Create a Sheet, import the same CSV, edit it there.
   2. File → Share → Publish to web → pick that tab → CSV → Publish.
   3. Paste the URL Google gives you here instead of a local path.
   4. Edits to the Sheet go live on next page load — no redeploy needed,
      but it does depend on a Google account staying set up.

   Leave a unit's URL empty (or as null) to keep using the lessons
   already baked into js/lesson-data.js. A broken or unreachable URL
   just falls back to that local content too, silently — check the
   browser console for a one-line note either way (see js/sheets-loader.js).

   Nothing here is required for the site to work — it runs fine with
   zero URLs configured, using the bundled lessons.

   Scaled to the full 100-unit / 1000-lesson plan (u1 … u100) — see
   /docs/curriculum-roadmap.md for what each unit covers. Units 11–100
   are placeholders in js/lesson-data.js until each one's curriculum is
   written; their template CSVs don't exist yet either — create one in
   /sheets-templates/ and point this file at it whenever a unit is
   ready to go live.
--------------------------------------------------------- */
const CSV_URLS = {
  u1:    "sheets-templates/u1-the-basics-of-value.csv",   // The Basics of Value
  u2:    "sheets-templates/u2-markets-prices-participants.csv",   // Markets, Prices & Participants
  u3:    "sheets-templates/u3-the-time-value-of-money.csv",   // The Time Value of Money
  u4:    "sheets-templates/u4-reading-a-balance-sheet.csv",   // Reading a Balance Sheet
  u5:    "sheets-templates/u5-reading-an-income-statement.csv",   // Reading an Income Statement
  u6:    "sheets-templates/u6-reading-a-cash-flow-statement.csv",   // Reading a Cash Flow Statement
  u7:    "sheets-templates/u7-linking-the-three-statements.csv",   // Linking the Three Statements
  u8:    "sheets-templates/u8-ratio-analysis-i-profitability-efficiency.csv",   // Ratio Analysis I: Profitability & Efficiency
  u9:    "sheets-templates/u9-ratio-analysis-ii-liquidity-solvency.csv",   // Ratio Analysis II: Liquidity & Solvency
  u10:   "sheets-templates/u10-capstone-diagnosing-a-company-from-its-filings.csv",   // Capstone: Diagnosing a Company From Its Filings
  u11:   null,   // Statistics I: Describing Data
  u12:   null,   // Statistics II: Spread & Variability
  u13:   null,   // Probability Foundations
  u14:   null,   // Expected Value & Decision-Making
  u15:   null,   // Distributions & the Bell Curve
  u16:   null,   // Correlation & Causation
  u17:   null,   // Regression Basics
  u18:   null,   // Sampling & Estimation
  u19:   null,   // Hypothesis Testing, Simply
  u20:   null,   // Capstone: Reading a Research Report's Statistics
  u21:   null,   // What Is a Comparable Company?
  u22:   null,   // Enterprise Value vs. Equity Value
  u23:   null,   // Core Trading Multiples
  u24:   null,   // Choosing the Right Peer Group
  u25:   null,   // Normalizing Earnings
  u26:   null,   // Precedent Transactions Analysis
  u27:   null,   // Control Premiums & Synergies
  u28:   null,   // Building a Comps Table
  u29:   null,   // Football Fields & Valuation Ranges
  u30:   null,   // Capstone: A Full Comps-Based Valuation
  u31:   null,   // Free Cash Flow, Defined
  u32:   null,   // Forecasting Revenue
  u33:   null,   // Forecasting Margins & Costs
  u34:   null,   // Forecasting Capex & Working Capital
  u35:   null,   // The Cost of Equity
  u36:   null,   // WACC: Blending the Cost of Capital
  u37:   null,   // Terminal Value
  u38:   null,   // Building a Full DCF Model
  u39:   null,   // Sensitivity & Scenario Analysis
  u40:   null,   // Capstone: DCF vs. Market Price
  u41:   null,   // Capital Structure Basics
  u42:   null,   // The Cost of Debt & Credit Spreads
  u43:   null,   // Leverage & Financial Risk
  u44:   null,   // Dividend Policy & Buybacks
  u45:   null,   // Capital Budgeting: NPV & IRR
  u46:   null,   // Working Capital Management
  u47:   null,   // Bonds & Credit Ratings, Explained
  u48:   null,   // Convertible & Hybrid Securities
  u49:   null,   // Raising Capital: Debt vs. Equity Markets
  u50:   null,   // Capstone: Choosing an Optimal Capital Structure
  u51:   null,   // Why Companies Buy Other Companies
  u52:   null,   // Strategic vs. Financial Buyers
  u53:   null,   // The M&A Process, Step by Step
  u54:   null,   // Deal Structuring: Cash, Stock, or Both
  u55:   null,   // Accretion / Dilution Analysis
  u56:   null,   // Synergies: Real and Imagined
  u57:   null,   // Due Diligence, Explained
  u58:   null,   // Financing an Acquisition
  u59:   null,   // Earnouts, Escrows & Deal Terms
  u60:   null,   // Capstone: Modeling an M&A Deal
  u61:   null,   // What Is a Leveraged Buyout?
  u62:   null,   // What Makes a Good LBO Candidate
  u63:   null,   // Sources & Uses in an LBO
  u64:   null,   // Debt Structuring in LBOs
  u65:   null,   // Building a Simple LBO Model
  u66:   null,   // Returns Analysis: IRR & MOIC
  u67:   null,   // Exit Strategies for PE Firms
  u68:   null,   // Add-On Acquisitions & Roll-Ups
  u69:   null,   // Venture Capital vs. Private Equity
  u70:   null,   // Capstone: A Full LBO Model Walkthrough
  u71:   null,   // Why Companies Go Public
  u72:   null,   // The IPO Process, Step by Step
  u73:   null,   // Underwriters, Roadshows & Book-Building
  u74:   null,   // The IPO Pop, Explained
  u75:   null,   // Lock-Ups & Life After the IPO
  u76:   null,   // Direct Listings & SPACs
  u77:   null,   // Follow-On & Secondary Offerings
  u78:   null,   // Debt Capital Markets
  u79:   null,   // Rating Agencies & the Credit Market
  u80:   null,   // Capstone: Reading a Real Prospectus
  u81:   null,   // Why Small Businesses Value Differently
  u82:   null,   // Seller's Discretionary Earnings
  u83:   null,   // Industry Rules of Thumb
  u84:   null,   // Valuing Real Estate
  u85:   null,   // Valuing Banks & Financial Institutions
  u86:   null,   // Valuing Early-Stage & Pre-Revenue Companies
  u87:   null,   // Intangible Assets & Brand Value
  u88:   null,   // Valuing for Disputes: Divorce & Estate Cases
  u89:   null,   // Discounts for Marketability & Minority Stakes
  u90:   null,   // Capstone: A Practical Small-Business Valuation
  u91:   null,   // How an Investment Bank Is Organized
  u92:   null,   // Life as an Analyst
  u93:   null,   // Financial Modeling Best Practices
  u94:   null,   // Building a Pitch Book
  u95:   null,   // Presenting a Valuation Like an Analyst
  u96:   null,   // Ethics, Conflicts of Interest & Regulation
  u97:   null,   // Behavioral Biases in Investing
  u98:   null,   // ESG & Sustainable Investing Basics
  u99:   null,   // Macro Context: Rates, Cycles & Markets
  u100:  null   // Capstone: Your First Full Company Valuation
};
