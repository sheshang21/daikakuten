/* ---------------------------------------------------------
   DAIKOKUTEN — Google Sheets content config

   HOW TO USE THIS FILE
   1. Make a copy of the starter sheet (see /docs/content-pipeline.md
      for the exact column layout and a step-by-step walkthrough).
   2. In Google Sheets: File → Share → Publish to web →
      choose the specific TAB for a unit → format "Comma-separated
      values (.csv)" → Publish.
   3. Copy the URL Google gives you and paste it below, next to
      that unit's id. Leave a unit's URL empty (or as null) to keep
      using the lessons already baked into js/lesson-data.js.
   4. Save this file and reload the site — no other code changes
      needed. A broken or unreachable URL just falls back to the
      local lesson-data.js content for that unit, silently.

   Nothing here is required for the site to work — it runs fine
   with zero URLs configured, using the bundled lessons.
--------------------------------------------------------- */
const CSV_URLS = {
  u1: null,   // The Basics of Value            — currently using local content
  u2: null,   // Statistics I: Describing Data
  u3: null,   // Statistics II: Probability & Risk
  u4: null,   // Reading Financial Statements
  u5: null,   // Comparables & Multiples
  u6: null,   // Discounted Cash Flow Foundations
  u7: null,   // Small Business & Rule-of-Thumb Valuation
  u8: null,   // Deals, Mergers & Acquisitions
  u9: null,   // IPOs & Capital Markets
  u10: null   // Building a Full Valuation Model
};
