/* ---------------------------------------------------------
   TEKISEI — Google Sheets content config

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

   Scaled to the full 100-unit / 1000-lesson plan (u1 … u100). Units
   beyond u10 are placeholders in js/lesson-data.js until each one's
   curriculum is written — add its URL here (or its content directly
   to lesson-data.js) whenever that unit is ready to go live.
--------------------------------------------------------- */
const CSV_URLS = {
  u1:    null,   // The Basics of Value            — currently using local content
  u2:    null,   // Statistics I: Describing Data
  u3:    null,   // Statistics II: Probability & Risk
  u4:    null,   // Reading Financial Statements
  u5:    null,   // Comparables & Multiples
  u6:    null,   // Discounted Cash Flow Foundations
  u7:    null,   // Small Business & Rule-of-Thumb Valuation
  u8:    null,   // Deals, Mergers & Acquisitions
  u9:    null,   // IPOs & Capital Markets
  u10:   null,   // Building a Full Valuation Model
  u11:   null,   // not yet planned
  u12:   null,   // not yet planned
  u13:   null,   // not yet planned
  u14:   null,   // not yet planned
  u15:   null,   // not yet planned
  u16:   null,   // not yet planned
  u17:   null,   // not yet planned
  u18:   null,   // not yet planned
  u19:   null,   // not yet planned
  u20:   null,   // not yet planned
  u21:   null,   // not yet planned
  u22:   null,   // not yet planned
  u23:   null,   // not yet planned
  u24:   null,   // not yet planned
  u25:   null,   // not yet planned
  u26:   null,   // not yet planned
  u27:   null,   // not yet planned
  u28:   null,   // not yet planned
  u29:   null,   // not yet planned
  u30:   null,   // not yet planned
  u31:   null,   // not yet planned
  u32:   null,   // not yet planned
  u33:   null,   // not yet planned
  u34:   null,   // not yet planned
  u35:   null,   // not yet planned
  u36:   null,   // not yet planned
  u37:   null,   // not yet planned
  u38:   null,   // not yet planned
  u39:   null,   // not yet planned
  u40:   null,   // not yet planned
  u41:   null,   // not yet planned
  u42:   null,   // not yet planned
  u43:   null,   // not yet planned
  u44:   null,   // not yet planned
  u45:   null,   // not yet planned
  u46:   null,   // not yet planned
  u47:   null,   // not yet planned
  u48:   null,   // not yet planned
  u49:   null,   // not yet planned
  u50:   null,   // not yet planned
  u51:   null,   // not yet planned
  u52:   null,   // not yet planned
  u53:   null,   // not yet planned
  u54:   null,   // not yet planned
  u55:   null,   // not yet planned
  u56:   null,   // not yet planned
  u57:   null,   // not yet planned
  u58:   null,   // not yet planned
  u59:   null,   // not yet planned
  u60:   null,   // not yet planned
  u61:   null,   // not yet planned
  u62:   null,   // not yet planned
  u63:   null,   // not yet planned
  u64:   null,   // not yet planned
  u65:   null,   // not yet planned
  u66:   null,   // not yet planned
  u67:   null,   // not yet planned
  u68:   null,   // not yet planned
  u69:   null,   // not yet planned
  u70:   null,   // not yet planned
  u71:   null,   // not yet planned
  u72:   null,   // not yet planned
  u73:   null,   // not yet planned
  u74:   null,   // not yet planned
  u75:   null,   // not yet planned
  u76:   null,   // not yet planned
  u77:   null,   // not yet planned
  u78:   null,   // not yet planned
  u79:   null,   // not yet planned
  u80:   null,   // not yet planned
  u81:   null,   // not yet planned
  u82:   null,   // not yet planned
  u83:   null,   // not yet planned
  u84:   null,   // not yet planned
  u85:   null,   // not yet planned
  u86:   null,   // not yet planned
  u87:   null,   // not yet planned
  u88:   null,   // not yet planned
  u89:   null,   // not yet planned
  u90:   null,   // not yet planned
  u91:   null,   // not yet planned
  u92:   null,   // not yet planned
  u93:   null,   // not yet planned
  u94:   null,   // not yet planned
  u95:   null,   // not yet planned
  u96:   null,   // not yet planned
  u97:   null,   // not yet planned
  u98:   null,   // not yet planned
  u99:   null,   // not yet planned
  u100:  null   // not yet planned
};
