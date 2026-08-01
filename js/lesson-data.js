/* ---------------------------------------------------------
   TEKISEI — lesson content (local fallback / seed data)

   NOTE: this file is the OFFLINE FALLBACK. If js/sheets-config.js
   defines a URL for a unit, js/sheets-loader.js will fetch that
   unit's lessons from there at runtime and use those instead — so
   this file can stay small while each unit grows.
   See /docs/content-pipeline.md for the full editing workflow and
   /docs/curriculum-roadmap.md for the full 100-unit plan.
--------------------------------------------------------- */
const COURSE = {
  units: [
    {
      id: "u1",
      name: "The Basics of Value",
      desc: "What value actually means, and why price isn't it.",
      locked: false,
      guide: "Daikokuten",
      lessons: [
        {
          id: "u1l1",
          title: "What Is Value?",
          icon: "coin",
          intro: [
            { heading: "Price is a number. Value is a judgment.", body: "Price is whatever someone will pay right now \u2014 it can be pushed around by mood, urgency, or bad luck. Value is your own honest estimate of what a business is actually worth, based on the cash it can produce over time." },
            { heading: "Meet Mr. Market", body: "Picture a business partner who knocks on your door every single day with a new price for your shares \u2014 sometimes cheerful and generous, sometimes gloomy and desperate. You're never obliged to trade with him. Some days you just say no thanks." },
            { heading: "Key phrase", body: "Intrinsic value = what a business is worth, independent of whatever its current price happens to say.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "Two identical push-carts sell the same tea recipe on the same street. One is priced at \u20b92 lakh, the other at \u20b93 lakh, just because its owner is short on cash and needs to sell fast. What does this tell you?", hint: "Think about what changed \u2014 the recipe and footfall, or just the seller's situation?", options: ["The \u20b93 lakh cart must be the better business", "Price can be pushed around by circumstances that have nothing to do with what the business is actually worth", "Tea carts can't be valued at all", "The cheaper cart is definitely a scam"], answer: 1, explain: "A seller's urgency, mood, or bad luck can move the price tag without changing anything about the cart's ovens, recipe, or footfall \u2014 that's the gap between price and value." },
            { type: "mcq", prompt: "\u201cIntrinsic value\u201d is best described as:", hint: "Re-read the key phrase from this lesson's opening cards.", options: ["Whatever number is printed on today's price tag", "What a business is actually worth, based on the cash it can generate over time", "The size of a company's advertising budget", "A rule that only applies to publicly listed companies"], answer: 1, explain: "Intrinsic value looks past the sticker price and asks a harder question: how much cash can this business realistically produce, and for how long?" },
            { type: "truefalse", prompt: "Since price is easy to look up and value takes effort to estimate, most investors are better off just trusting the price.", hint: "Easy to find isn't the same as reliable.", options: ["True", "False"], answer: 1, explain: "Price is convenient, not correct. It reflects whatever the crowd feels this instant \u2014 which is a very different thing from what the business is worth." },
            { type: "mcq", prompt: "A news channel runs a scary headline and a stock drops 8% within an hour, even though nothing changed inside the company. What best explains this?", hint: "Could a factory or customer base really shrink 8% in sixty minutes?", options: ["The company's factories and contracts shrank by 8% in that hour", "Short-term price is driven by mood and headlines; the underlying business moves far more slowly", "The stock exchange revalues every company hourly", "This kind of thing never actually happens"], answer: 1, explain: "Sentiment can swing in minutes. A factory, a customer base, a brand \u2014 none of that gets rebuilt that fast, which is exactly why price and value can drift apart." },
            { type: "mcq", prompt: "Benjamin Graham imagined the market as a business partner, \u2018Mr. Market,\u2019 who shows up daily with a new price. His point was:", hint: "Remember \u2014 are you ever forced to say yes to him?", options: ["You must trade with Mr. Market every day, or you're doing it wrong", "You're free to ignore Mr. Market on the days his offer looks foolish, and act only when it favours you", "Mr. Market is always rational, so always take his price", "Mr. Market only appears once a year"], answer: 1, explain: "Mr. Market is moody \u2014 sometimes euphoric, sometimes gloomy. You're never obligated to trade with him; his silly offers are simply ones you walk past." }
          ]
        },
        {
          id: "u1l2",
          title: "Price vs. Value",
          icon: "scale",
          intro: [
            { heading: "The wider the gap, the safer your bet", body: "When you buy well below your own honest estimate of worth, you build in a cushion. If your estimate turns out a little too optimistic, that cushion is what protects you." },
            { heading: "Quality isn't the whole story", body: "A wonderful business bought at a foolish price can still be a poor investment. What you pay relative to what you get is the entire game \u2014 not just how good the business is." },
            { heading: "Key phrase", body: "Margin of safety = the cushion between what you pay and what you honestly believe something is worth.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "You estimate a snack-stall chain is worth about \u20b910 lakh. Mr. Market offers it to you at \u20b97 lakh today. The sensible move is to:", hint: "Is this one of the days Mr. Market's price actually favours you?", options: ["Refuse, because a discount always means something is wrong", "Take the offer seriously \u2014 buying below your own honest estimate is exactly when Mr. Market is worth listening to", "Wait for Mr. Market to raise the price first", "Ignore price entirely and only look at value"], answer: 1, explain: "This is the whole point of the Mr. Market idea: his usefulness shows up on the days his price sits below what you believe the business is really worth." },
            { type: "mcq", prompt: "Your estimate of worth is \u20b9500/share. You buy at \u20b9350/share. Roughly how big is your margin of safety?", hint: "Find the gap first, then divide it by the value estimate \u2014 not the price paid.", options: ["10%", "20%", "30%", "50%"], answer: 2, explain: "\u20b9500 \u2212 \u20b9350 = \u20b9150, and \u20b9150 \u00f7 \u20b9500 = 30%. That gap is your cushion if your estimate turns out to be a little optimistic." },
            { type: "mcq", prompt: "\u201cMargin of safety\u201d exists mainly to protect you from:", hint: "It's not about fees, logos, or paperwork \u2014 think about where the real uncertainty lives.", options: ["Paying brokerage fees", "Your own estimate of value being wrong", "The company changing its logo", "Having to file taxes"], answer: 1, explain: "No one's value estimate is perfect. Buying with a cushion below that estimate means small errors don't sink you." },
            { type: "truefalse", prompt: "A falling share price is always proof that a business is getting worse.", hint: "Could fear, forced selling, or market-wide panic move a price with the business untouched?", options: ["True", "False"], answer: 1, explain: "Prices fall for plenty of reasons unrelated to the business \u2014 sector-wide fear, forced selling, a bad quarter for the whole market. The business itself may be untouched." },
            { type: "mcq", prompt: "Two friends each buy the same excellent bakery chain. Rina pays 12\u00d7 its yearly profit; Dev pays 40\u00d7. A year later, both bakeries perform identically. Whose investment is more likely to disappoint?", hint: "Same business, same results \u2014 so what's actually different between Rina and Dev?", options: ["Rina's \u2014 she paid too little", "Dev's \u2014 he paid a price that already assumed years of growth that may not show up", "Neither \u2014 price paid never matters", "Both equally, since it's the same bakery"], answer: 1, explain: "A wonderful business bought at a foolish price can still be a poor investment. What you pay relative to what you get is the whole game." }
          ]
        },
        {
          id: "u1l3",
          title: "The Time Value of Money",
          icon: "clock",
          intro: [
            { heading: "A rupee today beats a rupee tomorrow", body: "Money in hand right now can be invested and start growing immediately. That earning window is the entire reason sooner is worth more than later \u2014 this idea is called the time value of money." },
            { heading: "Compounding vs. simple interest", body: "Simple interest only ever pays on your original amount. Compound interest pays interest on the interest you've already earned too \u2014 which is why growth accelerates the longer you wait." },
            { heading: "Discounting runs the clock backward", body: "To find what a future rupee is worth today, you shrink it using a discount rate. The higher the rate, the smaller that future amount looks in today's money." },
            { heading: "Key phrase", body: "Rule of 72: divide 72 by the annual growth rate to estimate how many years money takes to double.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "Your uncle offers you \u20b91,00,000 today, or \u20b91,00,000 in five years. Which should you prefer, and why?", hint: "What could you do with the money in the meantime?", options: ["Either \u2014 it's the same amount", "Today \u2014 money in hand now can be invested and start growing immediately", "In five years \u2014 money left untouched always becomes more valuable on its own", "In five years, to avoid the responsibility of managing it"], answer: 1, explain: "Money today can be put to work right away. That earning window is the entire reason sooner is worth more than later." },
            { type: "mcq", prompt: "\u20b910,000 is invested at 10% annual compound interest. What is it worth after 2 years (roughly)?", hint: "Grow it by 10% once, then grow that new total by 10% again.", options: ["\u20b911,000", "\u20b911,600", "\u20b912,100", "\u20b913,000"], answer: 2, explain: "Year 1: \u20b910,000 \u00d7 1.10 = \u20b911,000. Year 2: \u20b911,000 \u00d7 1.10 = \u20b912,100. The second year's interest is earned on the first year's interest too \u2014 that's compounding." },
            { type: "mcq", prompt: "\u201cDiscounting\u201d a future cash flow means:", hint: "It's the mirror image of compounding \u2014 working backward from the future.", options: ["Applying a retail markdown to it", "Converting a future rupee amount into its equivalent worth in today's rupees", "Deleting it from your calculations", "Adding a bonus for good luck"], answer: 1, explain: "Discounting runs the compounding logic backward: it asks what amount today would grow into that future number, at a chosen rate of return." },
            { type: "mcq", prompt: "Two analysts value the same \u20b91,00,000 cash flow arriving in 5 years. Anaya uses a 6% discount rate, Vikram uses a 12% rate. Whose present-value estimate comes out lower?", hint: "A bigger discount rate shrinks the future faster.", options: ["Anaya's", "Vikram's", "They must be equal", "Impossible to say"], answer: 1, explain: "A higher discount rate shrinks future money faster \u2014 you're demanding more return for waiting, so the same future amount is worth less to you today." },
            { type: "truefalse", prompt: "Simple interest and compound interest give you the same result over multiple years.", hint: "Does simple interest ever pay interest on interest already earned?", options: ["True", "False"], answer: 1, explain: "Simple interest only ever pays on the original amount. Compound interest pays interest on the interest too, so it pulls ahead more and more each year." },
            { type: "mcq", prompt: "The \u201cRule of 72\u201d is a quick trick to estimate how long money takes to double. At 9% annual growth, roughly how many years until it doubles?", hint: "72 \u00f7 9 = ?", options: ["4 years", "6 years", "8 years", "12 years"], answer: 2, explain: "72 \u00f7 9 = 8. Divide 72 by the annual growth rate and you get a rough doubling time \u2014 handy for gut-checking compounding without a calculator." }
          ]
        },
        {
          id: "u1l4",
          title: "Reading a Balance Sheet",
          icon: "book",
          intro: [
            { heading: "Everything owned must be paid for by something", body: "A balance sheet always balances: what a business owns (assets) was funded either by what it owes others (liabilities) or by the owner's own stake (equity)." },
            { heading: "Assets vs. liabilities", body: "Assets are things the business owns or controls that hold economic value \u2014 cash, equipment, a delivery scooter. Liabilities are obligations it must eventually settle \u2014 loans, unpaid bills." },
            { heading: "Key phrase", body: "Equity = Assets \u2212 Liabilities \u2014 what's actually left over for the owner once every debt is accounted for.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "Meera's Tiffin Service owns a delivery scooter, a rented kitchen deposit, and \u20b950,000 cash \u2014 \u20b91,00,000 in assets altogether. It owes \u20b920,000 to a supplier. What is her equity?", hint: "Start from total assets, then subtract what's owed.", options: ["\u20b920,000", "\u20b980,000", "The scooter's price alone", "Impossible to know"], answer: 1, explain: "Assets \u2212 Liabilities = Equity. \u20b91,00,000 in assets minus \u20b920,000 owed leaves \u20b980,000 \u2014 what's actually hers once the debt is settled." },
            { type: "mcq", prompt: "Which of these belongs on the \u201cassets\u201d side of a balance sheet?", hint: "Assets are things the business owns or controls.", options: ["A loan owed to the bank", "Unpaid supplier bills", "The delivery scooter the business owns", "Retained losses from a bad year"], answer: 2, explain: "Assets are things the business owns or controls that hold economic value \u2014 a scooter it can use or sell qualifies. Loans and unpaid bills sit on the opposite side of the ledger." },
            { type: "mcq", prompt: "Which of these belongs on the \u201cliabilities\u201d side?", hint: "Liabilities are what the business owes to someone else.", options: ["Cash in the till", "A supplier invoice not yet paid", "The kitchen equipment", "Owner's equity"], answer: 1, explain: "An unpaid invoice is money the business owes someone else \u2014 a liability, by definition." },
            { type: "mcq", prompt: "The fundamental balance sheet equation is:", hint: "This is this lesson's key phrase, rearranged.", options: ["Revenue \u2212 Expenses = Profit", "Assets = Liabilities + Equity", "Price = Earnings \u00d7 Multiple", "Cash + Debt = Value"], answer: 1, explain: "Every rupee of assets was funded either by what the business owes others (liabilities) or by the owner's own stake (equity) \u2014 the two sides always balance." },
            { type: "truefalse", prompt: "A business can own a large pile of assets and still be in real trouble, if its liabilities are even larger.", hint: "Size of assets alone doesn't tell you what's left over.", options: ["True", "False"], answer: 0, explain: "Size of assets alone tells you little. What matters is the gap left over after liabilities \u2014 that gap is equity, and it can be thin, or even negative." }
          ]
        },
        {
          id: "u1l5",
          title: "Three Ways to Value a Business",
          icon: "book",
          intro: [
            { heading: "Valuers lean on three lenses", body: "The Asset Approach asks what the business owns. The Market Approach asks what similar businesses sold for. The Income Approach asks what it's likely to earn in the future. Most real valuations blend more than one." },
            { heading: "EBITDA strips out the noise", body: "Removing interest, tax, depreciation, and amortization from earnings lets you compare operating profitability across companies, even when they're financed or depreciate their equipment very differently." },
            { heading: "Key phrase", body: "Book Value = Total Assets \u2212 Total Liabilities \u2014 a useful floor, but it mostly ignores goodwill, often a business's biggest hidden asset.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "Professional valuers generally lean on three broad approaches. Which trio is it?", hint: "Think: what it owns, what similar businesses sold for, what it's likely to earn.", options: ["Guesswork, gut feeling, and negotiation", "The Asset Approach, the Market Approach, and the Income Approach", "Stock charts, news headlines, and social media buzz", "Tax filings, payroll, and inventory counts"], answer: 1, explain: "These three \u2014 what it owns, what similar businesses sold for, and what it's likely to earn \u2014 are the pillars most valuation professionals build on." },
            { type: "mcq", prompt: "The Asset Approach values a business mainly by:", hint: "The name is a clue \u2014 it's about what's on the shelves, not the future.", options: ["Adding up the fair market value of what it owns and subtracting what it owes", "Comparing its share price to rival companies", "Forecasting ten years of future profit", "Counting its social media followers"], answer: 0, explain: "It's essentially: value everything the business holds at fair market value, then subtract liabilities \u2014 what's left is the net asset value." },
            { type: "mcq", prompt: "A young food-delivery startup has no profit yet but plenty of orders coming in. Which Market Approach ratio would still work for it?", hint: "Which of these two things does the startup actually have: profit, or revenue?", options: ["Price-to-earnings ratio (needs profit to exist)", "Price-to-revenue ratio \u2014 revenue exists even without profit", "Book value of its office chairs", "None \u2014 unprofitable companies can never be valued"], answer: 1, explain: "Price-to-revenue is popular for young or fast-growing companies precisely because revenue shows up long before profit does." },
            { type: "mcq", prompt: "The Income Approach is built around one core idea: a business is worth", hint: "This connects straight back to present value from the last lesson.", options: ["Whatever its founder believes it's worth", "The future cash it's expected to generate, converted into today's money", "The total salary of its employees", "The price of its most expensive machine"], answer: 1, explain: "This is present value in action \u2014 project the future benefit stream, then discount it back to what that stream is worth right now." },
            { type: "mcq", prompt: "EBITDA strips out interest, tax, depreciation, and amortization from earnings mainly so that:", hint: "It's about fair comparison, not about looking impressive.", options: ["The company pays less tax", "Analysts can compare operating profitability across companies without financing or accounting choices distorting the picture", "The numbers look bigger for investors", "It replaces the need for a balance sheet"], answer: 1, explain: "Two companies can run near-identical operations but look very different once you factor in how each is financed or depreciates its equipment \u2014 EBITDA strips that noise out." },
            { type: "mcq", prompt: "Book Value (Total Assets \u2212 Total Liabilities) is usually treated as a floor rather than a full answer. Why?", hint: "Think about what accounting numbers leave out \u2014 brand, relationships, reputation.", options: ["It's illegal to rely on it fully", "It leans on historic, depreciated figures and largely ignores goodwill \u2014 often a business's biggest intangible asset", "It always overstates a company's worth", "Only banks are allowed to calculate it"], answer: 1, explain: "Book value leans on historical accounting numbers and mostly ignores brand, customer relationships, and other goodwill \u2014 useful as a sanity-check floor, rarely the full story." }
          ]
        },
        {
          id: "u1l6",
          title: "Growth vs. Value",
          icon: "coin",
          intro: [
            { heading: "Two philosophies, one goal", body: "Value-minded investors hunt for businesses priced below what they're worth today. Growth-minded investors bet on how much bigger a business will become \u2014 and are willing to pay more now for a bigger future." },
            { heading: "Growth needs a bigger leap of faith", body: "The further out your assumptions reach, the more today's price depends on the future actually arriving on schedule." },
            { heading: "Key phrase", body: "A high price isn't automatically foolish, and a low price isn't automatically safe \u2014 the real question is always price against what's realistically ahead.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "Which statement best describes a \u201cgrowth\u201d approach to investing?", hint: "Think about what growth investors are betting will happen.", options: ["Paying a premium today because you expect much larger profits down the line", "Buying only companies that carry zero debt", "Avoiding every technology company on principle", "Refusing to ever sell a position"], answer: 0, explain: "Growth investing accepts a higher price today in exchange for a bet on faster future expansion." },
            { type: "mcq", prompt: "A retailer trades at 8\u00d7 profit; a software company trades at 45\u00d7 profit. This gap most likely reflects:", hint: "Multiples often price in expectations, not just today's numbers.", options: ["The software company is committing fraud", "The market expects the software company's profits to grow much faster", "Retailers are always mispriced", "Multiples are handed out randomly"], answer: 1, explain: "Higher multiples often reflect higher expected growth \u2014 investors are paying today for profits they expect years from now." },
            { type: "truefalse", prompt: "A \u201cvalue\u201d label on a stock guarantees it's a safe investment.", hint: "Could a stock look cheap for a very good reason?", options: ["True", "False"], answer: 1, explain: "Cheap on paper doesn't mean safe. A company can be statistically cheap because it's genuinely troubled \u2014 a classic \u2018value trap.\u2019" },
            { type: "mcq", prompt: "What is a \u201cvalue trap\u201d?", hint: "Think of a stock that looks like a bargain but isn't.", options: ["A legal clause used in mergers", "A stock that looks statistically cheap but is cheap because the underlying business is genuinely deteriorating", "A discount offered directly by a stockbroker", "A term with no real meaning"], answer: 1, explain: "A value trap is priced low for good reason \u2014 the business itself may be shrinking or struggling, so the apparent discount is a mirage." },
            { type: "mcq", prompt: "Why does a growth-oriented purchase typically demand more forecasting than a value-oriented one?", hint: "Where does most of the expected payoff sit \u2014 near-term, or years away?", options: ["Growth companies are required to file more paperwork", "More of the expected payoff sits further out in time, so more years must be predicted correctly", "Growth companies don't publish financial statements", "It doesn't \u2014 both require identical forecasting"], answer: 1, explain: "When most of a company's expected value comes from profits several years away, small changes in those far-off assumptions swing the valuation a lot." }
          ]
        },
        {
          id: "u1l7",
          title: "Risk and Return",
          icon: "scale",
          intro: [
            { heading: "No free lunch", body: "Higher potential return usually comes bundled with higher potential pain. Understanding that trade-off is the beginning of managing risk sensibly." },
            { heading: "Risk wears more than one face", body: "It can mean losing money permanently, being unable to sell an asset when you need to (liquidity risk), or having one bad surprise wipe out a bet that was never spread around." },
            { heading: "Key phrase", body: "Return is what you hope for. Risk is what you plan for.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "Why do riskier investments generally need to offer higher expected returns to attract buyers?", hint: "Why would anyone accept extra uncertainty for nothing extra in return?", options: ["Riskier investments are illegal without a return premium", "To compensate investors for the extra chance of losing money", "Government rules require it in every market", "They don't \u2014 risk and return are unrelated"], answer: 1, explain: "Investors demand extra expected reward for bearing extra uncertainty \u2014 otherwise there'd be no reason to take the risk at all." },
            { type: "mcq", prompt: "A fixed deposit paying 6% and a small startup offering a possible 40% return illustrate:", hint: "Why might that 40% not be a sure thing?", options: ["The startup is obviously the better choice", "A basic risk-return trade-off \u2014 the higher potential payout comes bundled with meaningfully higher odds of loss", "Fixed deposits are always a foolish choice", "The numbers must be fabricated"], answer: 1, explain: "The startup's higher potential payoff exists precisely because its odds of failure are much higher too." },
            { type: "truefalse", prompt: "Putting your entire savings into one stock is a low-risk strategy, as long as you believe strongly in the company.", hint: "Does belief change what happens if one piece of bad news hits?", options: ["True", "False"], answer: 1, explain: "Concentrating everything in one bet means a single piece of bad news can do outsized damage \u2014 conviction doesn't remove that exposure." },
            { type: "mcq", prompt: "\u201cLiquidity risk\u201d refers to:", hint: "Think about what happens when you actually try to exit an investment.", options: ["The risk that a company mismanages its cash reserves", "The risk that you can't sell an investment quickly without accepting a much lower price", "The risk of interest rates changing", "A risk that applies only to real estate"], answer: 1, explain: "Some investments are hard to exit quickly at a fair price \u2014 that inability to sell on your own timeline is liquidity risk." },
            { type: "mcq", prompt: "Which of these is a sensible response to risk, rather than an attempt to pretend it doesn't exist?", hint: "Think about what happens to a portfolio when bad news hits only one of many holdings.", options: ["Avoiding all investing, forever", "Spreading money across different bets that don't all fail for the same reason", "Borrowing heavily to concentrate on one stock", "Ignoring risk since it can't be perfectly measured"], answer: 1, explain: "Risk can rarely be eliminated, but diversifying across bets that don't all fail together can reduce how hard any single mistake hurts." }
          ]
        },
        {
          id: "u1l8",
          title: "What Makes Cash Flow \u201cFree\u201d?",
          icon: "clock",
          intro: [
            { heading: "Profit on paper isn't cash in hand", body: "A company can report a profit and still run low on cash, because profit includes non-cash items and ignores money tied up in day-to-day operations." },
            { heading: "\u2018Free\u2019 means left over after the essentials", body: "Free cash flow is the cash generated by operations, minus what's needed to maintain and grow the business's physical assets." },
            { heading: "Key phrase", body: "Free Cash Flow = Cash from Operations \u2212 Capital Expenditure.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "Free cash flow is best described as:", hint: "Think about what's actually free to be paid out or reinvested elsewhere.", options: ["Total revenue collected in a year", "The cash left over after a business covers its operating costs and needed spending on equipment or property", "The cash sitting in the founder's personal account", "A made-up figure with no real formula"], answer: 1, explain: "It's the cash actually free to be paid out, reinvested elsewhere, or saved \u2014 after the business has funded what it needs to keep running." },
            { type: "mcq", prompt: "A company reports \u20b910 crore net profit but spends \u20b912 crore replacing aging machinery that same year. Which number better reflects its real cash position?", hint: "One of these two numbers ignores that \u20b912 crore entirely.", options: ["Net profit alone", "Free cash flow, which accounts for that spending", "Neither number is informative", "The company's share price"], answer: 1, explain: "Net profit ignores the cash actually spent on new machinery; free cash flow captures it, which is why the two figures can tell very different stories." },
            { type: "truefalse", prompt: "A business can look profitable on its income statement and still run out of cash.", hint: "Does profit account for money tied up in unpaid customer invoices?", options: ["True", "False"], answer: 0, explain: "Profit includes non-cash accounting entries and ignores things like money tied up in unpaid invoices \u2014 cash can run short even while profit looks healthy." },
            { type: "mcq", prompt: "\u201cCapital expenditure\u201d (CapEx) refers to:", hint: "Think long-lived, not day-to-day.", options: ["Everyday office snacks and supplies", "Spending on long-lived assets like machinery, buildings, or equipment", "Employee salaries", "Marketing spend only"], answer: 1, explain: "CapEx covers money spent on assets expected to be useful for years, like machinery or property \u2014 a direct input into the free cash flow formula." },
            { type: "mcq", prompt: "Why do many valuation approaches focus on free cash flow rather than net profit?", hint: "Think about accounting noise versus actual spendable cash.", options: ["Free cash flow is easier to manipulate", "Free cash flow better reflects the cash actually available to owners after necessary reinvestment", "Net profit is not permitted in valuation work", "There's no meaningful difference between the two"], answer: 1, explain: "Free cash flow strips out accounting noise and shows what's truly left for owners after the business reinvests what it needs to keep going." }
          ]
        },
        {
          id: "u1l9",
          title: "The P/E Ratio",
          icon: "book",
          intro: [
            { heading: "The most common shortcut in investing", body: "The Price-to-Earnings ratio compares what you pay for a share to how much profit that share represents \u2014 a fast, rough gauge used everywhere." },
            { heading: "A starting question, not a final answer", body: "A low P/E can mean a bargain \u2014 or a business the market has good reason to doubt. The number alone never tells you which." },
            { heading: "Key phrase", body: "P/E = Share Price \u00f7 Earnings per Share.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "A company's share trades at \u20b9200, with earnings per share of \u20b910. What is its P/E ratio?", hint: "Divide price by earnings per share.", options: ["5", "10", "20", "200"], answer: 2, explain: "\u20b9200 \u00f7 \u20b910 = 20. You're effectively paying 20 times the company's current annual profit for one share." },
            { type: "mcq", prompt: "A very low P/E ratio, on its own, most likely means:", hint: "One number rarely settles the question by itself.", options: ["The company is definitely a great buy, no further checking needed", "It could be a genuine bargain, or a sign the market has real doubts about the business \u2014 it's a starting clue, not a conclusion", "P/E ratios below 10 are against exchange rules", "A low P/E always signals imminent bankruptcy"], answer: 1, explain: "A low P/E is a prompt to investigate further, not an automatic verdict \u2014 cheap for a good reason and cheap for a bad reason can look identical on this one number." },
            { type: "truefalse", prompt: "P/E ratios are equally meaningful when comparing companies from completely different industries.", hint: "Do all industries share similar growth rates and capital needs?", options: ["True", "False"], answer: 1, explain: "Different industries carry very different typical P/E levels because of different growth rates, capital needs, and risk profiles \u2014 comparing within the same industry is far more useful." },
            { type: "mcq", prompt: "If a company's earnings are expected to grow quickly, investors will often accept:", hint: "Think about what a higher multiple is really paying for.", options: ["A lower P/E than slower-growing peers", "A higher P/E than slower-growing peers, since they're partly paying for future growth too", "No P/E ratio at all", "A P/E fixed at exactly 15 by convention"], answer: 1, explain: "Faster expected growth usually justifies paying more per rupee of today's earnings, since tomorrow's earnings are expected to be bigger." },
            { type: "mcq", prompt: "Which kind of company would typically show a meaningful P/E ratio at all?", hint: "The formula needs a positive number on the bottom.", options: ["A company with zero or negative earnings", "A profitable company with positive earnings per share", "Any company, regardless of profit", "Only companies that pay dividends"], answer: 1, explain: "P/E requires positive earnings to make sense \u2014 companies with no profit show a meaningless or undefined P/E, which is one reason price-to-revenue exists as an alternative." }
          ]
        },
        {
          id: "u1l10",
          title: "Reading an Income Statement",
          icon: "book",
          intro: [
            { heading: "A scoreboard for a stretch of time", body: "Where the balance sheet is a snapshot at one moment, the income statement tracks what happened over a period \u2014 usually a quarter or a year." },
            { heading: "Follow the money down the page", body: "Revenue arrives first, then costs get subtracted step by step, until what's left at the very bottom is net profit." },
            { heading: "Key phrase", body: "Revenue \u2212 costs of every kind = profit, one line at a time.", key: true }
          ],
          questions: [
            { type: "mcq", prompt: "On an income statement, \u201cRevenue\u201d refers to:", hint: "It's the very first line, before anything is subtracted.", options: ["Profit remaining after all costs", "The total money earned from selling goods or services, before any costs are subtracted", "Cash currently sitting in the bank", "The value of unsold inventory"], answer: 1, explain: "Revenue is the top line \u2014 the full amount earned from sales, before a single cost has been deducted yet." },
            { type: "mcq", prompt: "\u201cCost of Goods Sold\u201d (COGS) typically includes:", hint: "Think about costs tied directly to making the product.", options: ["Office rent for company headquarters", "The direct costs of producing what was sold, like raw materials and factory labour", "Marketing campaigns", "Executive salaries"], answer: 1, explain: "COGS covers the direct costs tied to making or delivering the product itself \u2014 separate from overhead like marketing or admin." },
            { type: "mcq", prompt: "Revenue minus COGS gives you:", hint: "This is the first profit checkpoint on the statement.", options: ["Net profit", "Gross profit", "Operating profit", "EBITDA"], answer: 1, explain: "Revenue \u2212 COGS = Gross Profit, the first profit checkpoint, before operating expenses like marketing and admin are subtracted." },
            { type: "mcq", prompt: "Which of these typically comes last on an income statement?", hint: "Think about which checkpoint accounts for every single expense.", options: ["Revenue", "Gross profit", "Operating profit", "Net profit"], answer: 3, explain: "The statement builds downward from revenue through several profit checkpoints, ending at net profit \u2014 the true bottom line after every expense, interest, and tax." },
            { type: "truefalse", prompt: "\u201cOperating profit\u201d already accounts for interest paid on debt and taxes owed.", hint: "Those two items come later on the statement.", options: ["True", "False"], answer: 1, explain: "Operating profit reflects the business's core operations only, before interest and tax are subtracted \u2014 those come later, on the way to net profit." }
          ]
        }
      ]
    },
    { id: "u2", name: "Markets, Prices & Participants", desc: "Who trades, why prices move, and what a market actually is.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u3", name: "The Time Value of Money", desc: "Present value, future value, and why a rupee today beats a rupee later.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u4", name: "Reading a Balance Sheet", desc: "Assets, liabilities, and equity — a snapshot of what a company owns and owes.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u5", name: "Reading an Income Statement", desc: "Revenue down to net profit, one line at a time.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u6", name: "Reading a Cash Flow Statement", desc: "Why profit and cash aren't the same, and where the difference hides.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u7", name: "Linking the Three Statements", desc: "How the balance sheet, income statement, and cash flow statement connect.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u8", name: "Ratio Analysis I: Profitability & Efficiency", desc: "Margins, returns on capital, and turnover ratios.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u9", name: "Ratio Analysis II: Liquidity & Solvency", desc: "Current ratio, quick ratio, debt ratios, and interest cover.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u10", name: "Capstone: Diagnosing a Company From Its Filings", desc: "Put every statement-reading skill together on one real set of filings.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u11", name: "Statistics I: Describing Data", desc: "Mean, median, mode, and the shape of a distribution.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u12", name: "Statistics II: Spread & Variability", desc: "Range, variance, and standard deviation, demystified.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u13", name: "Probability Foundations", desc: "What probability really measures, and how odds are built from it.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u14", name: "Expected Value & Decision-Making", desc: "Weighing outcomes by their probability to compare choices.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u15", name: "Distributions & the Bell Curve", desc: "Normal distributions, skew, and what a bell curve tells an investor.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u16", name: "Correlation & Causation", desc: "When two things move together — and when that means nothing at all.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u17", name: "Regression Basics", desc: "Fitting a line through data to estimate a relationship.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u18", name: "Sampling & Estimation", desc: "Why a sample can stand in for a population, and where that breaks down.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u19", name: "Hypothesis Testing, Simply", desc: "Testing a claim against data without the jargon overload.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u20", name: "Capstone: Reading a Research Report's Statistics", desc: "Interpret the stats behind a real market or economic research note.", locked: true, guide: "Plutus", lessons: [] },
    { id: "u21", name: "What Is a Comparable Company?", desc: "Choosing peers that actually belong in the same conversation.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u22", name: "Enterprise Value vs. Equity Value", desc: "Two different prices for two different claims on a company.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u23", name: "Core Trading Multiples", desc: "P/E, EV/EBITDA, and EV/Sales, and when each one fits.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u24", name: "Choosing the Right Peer Group", desc: "Sector, size, growth, and geography — what makes a peer set fair.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u25", name: "Normalizing Earnings", desc: "Stripping out one-offs so multiples compare like with like.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u26", name: "Precedent Transactions Analysis", desc: "Valuing a company against what similar businesses actually sold for.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u27", name: "Control Premiums & Synergies", desc: "Why buyers pay more than the trading price — and how much more.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u28", name: "Building a Comps Table", desc: "Assembling peer data into a clean, defensible comparison.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u29", name: "Football Fields & Valuation Ranges", desc: "Presenting a range of valuation methods on a single chart.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u30", name: "Capstone: A Full Comps-Based Valuation", desc: "Value a real company using trading comps and precedents together.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u31", name: "Free Cash Flow, Defined", desc: "The cash a business actually generates, after keeping the lights on.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u32", name: "Forecasting Revenue", desc: "Building a growth story from drivers, not just a trend line.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u33", name: "Forecasting Margins & Costs", desc: "Projecting the cost side of the business with discipline.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u34", name: "Forecasting Capex & Working Capital", desc: "The two line items that quietly decide how much cash is left over.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u35", name: "The Cost of Equity", desc: "What shareholders require to hold the risk of owning the business.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u36", name: "WACC: Blending the Cost of Capital", desc: "Combining the cost of debt and equity into one discount rate.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u37", name: "Terminal Value", desc: "Valuing everything after the forecast period ends, in one number.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u38", name: "Building a Full DCF Model", desc: "Assembling forecasts, discount rate, and terminal value into a valuation.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u39", name: "Sensitivity & Scenario Analysis", desc: "Testing how much the valuation moves when assumptions change.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u40", name: "Capstone: DCF vs. Market Price", desc: "Compare your intrinsic value estimate against what the market says today.", locked: true, guide: "Kubera", lessons: [] },
    { id: "u41", name: "Capital Structure Basics", desc: "The mix of debt and equity a company chooses to fund itself.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u42", name: "The Cost of Debt & Credit Spreads", desc: "What lenders charge, and why it varies company to company.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u43", name: "Leverage & Financial Risk", desc: "How borrowing amplifies both returns and the chance of ruin.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u44", name: "Dividend Policy & Buybacks", desc: "How companies decide what to do with cash they don't reinvest.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u45", name: "Capital Budgeting: NPV & IRR", desc: "Deciding which projects are worth funding, with real numbers.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u46", name: "Working Capital Management", desc: "Managing the cash tied up in receivables, payables, and inventory.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u47", name: "Bonds & Credit Ratings, Explained", desc: "How debt gets priced, rated, and traded.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u48", name: "Convertible & Hybrid Securities", desc: "Instruments that blend features of debt and equity.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u49", name: "Raising Capital: Debt vs. Equity Markets", desc: "Where companies go to raise money, and why they pick one route over another.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u50", name: "Capstone: Choosing an Optimal Capital Structure", desc: "Recommend a funding mix for a real company scenario.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u51", name: "Why Companies Buy Other Companies", desc: "The strategic and financial logic behind an acquisition.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u52", name: "Strategic vs. Financial Buyers", desc: "Two very different reasons to buy the same company.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u53", name: "The M&A Process, Step by Step", desc: "From first approach to signed deal.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u54", name: "Deal Structuring: Cash, Stock, or Both", desc: "How the form of payment changes risk for both sides.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u55", name: "Accretion / Dilution Analysis", desc: "Whether a deal helps or hurts the buyer's earnings per share.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u56", name: "Synergies: Real and Imagined", desc: "Cost and revenue synergies, and why they're so often overestimated.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u57", name: "Due Diligence, Explained", desc: "What buyers actually check before signing.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u58", name: "Financing an Acquisition", desc: "Sources and uses — where the money for a deal comes from.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u59", name: "Earnouts, Escrows & Deal Terms", desc: "The fine print that allocates risk after the deal closes.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u60", name: "Capstone: Modeling an M&A Deal", desc: "Build a simple accretion/dilution model for a real-style deal.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u61", name: "What Is a Leveraged Buyout?", desc: "Buying a company mostly with borrowed money, and why that works.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u62", name: "What Makes a Good LBO Candidate", desc: "The traits private equity firms look for before they'll bid.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u63", name: "Sources & Uses in an LBO", desc: "Where the purchase price comes from, and where it goes.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u64", name: "Debt Structuring in LBOs", desc: "Senior debt, subordinated debt, and how leverage gets layered.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u65", name: "Building a Simple LBO Model", desc: "Projecting cash flows to pay down acquisition debt over time.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u66", name: "Returns Analysis: IRR & MOIC", desc: "How private equity firms measure whether a deal actually worked.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u67", name: "Exit Strategies for PE Firms", desc: "Sale, IPO, or recapitalization — how a fund gets its money back out.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u68", name: "Add-On Acquisitions & Roll-Ups", desc: "Growing a platform company through smaller follow-on deals.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u69", name: "Venture Capital vs. Private Equity", desc: "Two very different games played with very different companies.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u70", name: "Capstone: A Full LBO Model Walkthrough", desc: "Build and interpret a complete LBO model, start to exit.", locked: true, guide: "Hermes", lessons: [] },
    { id: "u71", name: "Why Companies Go Public", desc: "The trade-offs of leaving private ownership behind.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u72", name: "The IPO Process, Step by Step", desc: "From filing to first day of trading.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u73", name: "Underwriters, Roadshows & Book-Building", desc: "How an IPO actually gets priced and sold.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u74", name: "The IPO Pop, Explained", desc: "Why a stock often jumps on day one — and who that favors.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u75", name: "Lock-Ups & Life After the IPO", desc: "What happens to insiders' shares, and to the stock, after listing.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u76", name: "Direct Listings & SPACs", desc: "Alternative routes to going public, and how they differ from a classic IPO.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u77", name: "Follow-On & Secondary Offerings", desc: "How already-public companies raise more equity capital.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u78", name: "Debt Capital Markets", desc: "How companies issue bonds instead of selling shares.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u79", name: "Rating Agencies & the Credit Market", desc: "Who rates debt, and how that rating moves its price.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u80", name: "Capstone: Reading a Real Prospectus", desc: "Pull the key facts out of an actual IPO or bond prospectus.", locked: true, guide: "Ebisu", lessons: [] },
    { id: "u81", name: "Why Small Businesses Value Differently", desc: "No public price, thin data, and a very different buyer pool.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u82", name: "Seller's Discretionary Earnings", desc: "Adjusting a small business's profit to reflect its true earning power.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u83", name: "Industry Rules of Thumb", desc: "Quick valuation shortcuts used in specific trades — and their limits.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u84", name: "Valuing Real Estate", desc: "Cap rates, comparable sales, and income approaches to property value.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u85", name: "Valuing Banks & Financial Institutions", desc: "Why normal valuation tools break down for lenders.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u86", name: "Valuing Early-Stage & Pre-Revenue Companies", desc: "Estimating worth before there's much to measure yet.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u87", name: "Intangible Assets & Brand Value", desc: "Putting a number on things you can't touch.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u88", name: "Valuing for Disputes: Divorce & Estate Cases", desc: "Where valuation meets law, and why the standard of value changes.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u89", name: "Discounts for Marketability & Minority Stakes", desc: "Why a small, illiquid stake is worth less per share than control.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u90", name: "Capstone: A Practical Small-Business Valuation", desc: "Walk a real small business from raw numbers to a defensible value.", locked: true, guide: "Daikokuten", lessons: [] },
    { id: "u91", name: "How an Investment Bank Is Organized", desc: "Front office, middle office, back office — who does what.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u92", name: "Life as an Analyst", desc: "The day-to-day workflow behind the deals and the decks.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u93", name: "Financial Modeling Best Practices", desc: "Building models that don't break the moment someone else opens them.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u94", name: "Building a Pitch Book", desc: "What goes into the deck bankers actually bring to a client meeting.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u95", name: "Presenting a Valuation Like an Analyst", desc: "Turning a model into a clear, defensible story.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u96", name: "Ethics, Conflicts of Interest & Regulation", desc: "The rules and pressures that shape how deals get done.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u97", name: "Behavioral Biases in Investing", desc: "The mental shortcuts that quietly distort financial judgment.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u98", name: "ESG & Sustainable Investing Basics", desc: "How environmental and social factors enter investment decisions.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u99", name: "Macro Context: Rates, Cycles & Markets", desc: "How interest rates and the business cycle move every valuation you've built.", locked: true, guide: "Caishen", lessons: [] },
    { id: "u100", name: "Capstone: Your First Full Company Valuation", desc: "Every earlier lesson, brought together into one complete valuation.", locked: true, guide: "Caishen", lessons: [] }
  ]
};
