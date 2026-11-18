/* Traffic & Targeting opt-in page widget, by Alvin Reyes.
   GHL snippet (never changes):
     <div id="tt-optin"></div>
     <script src="https://defconskylude.github.io/niche-wheel/optin.js" async></script>
   Everything you see is driven by CONFIG below: theme colors, fonts, copy, sections.
   Page-specific overrides (optional, put BEFORE the script tag in GHL):
     <script>window.TT_OPTIN_CONFIG = { hero: { eyebrow: "FOR MED SPAS SELLING $3K+ TREATMENTS" } };</script>
   Write [[words]] in any headline to give them the teal gradient. */
(function () {
  if (window.__ttOptin) return; window.__ttOptin = true;

  /* ======================= CONFIG ======================= */
  var CONFIG = {
    theme: {
      bg: "oklch(0.965 0.017 198)",          // light teal page background
      ink: "oklch(0.215 0.055 257)",         // navy text
      muted: "oklch(0.45 0.04 250)",
      navy: "oklch(0.2 0.045 257)",          // dark sections
      navyInk: "oklch(0.984 0.003 247.858)",
      card: "oklch(1 0 0)",
      border: "oklch(0.9 0.018 213)",
      teal: "oklch(0.64 0.112 196)",
      tealLight: "oklch(0.72 0.13 196)",
      tealDark: "oklch(0.45 0.1 196)",
      gold: "oklch(0.79 0.16 83)",
      goldGrad: "linear-gradient(135deg, oklch(0.83 0.15 86), oklch(0.76 0.17 75), oklch(0.88 0.12 90))",
      chipGrad: "linear-gradient(135deg, oklch(0.65 0.18 245), oklch(0.55 0.22 270) 50%, oklch(0.72 0.14 195) 100%)",
      font: "Montserrat",
      fontUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
      radius: "18px",
      maxWidth: "1120px"
    },
    form: {
      id: "Ai87WFHKNOkLHD90infS",
      name: "Niche wheel",
      height: 595,
      title: "Get a Traffic & Targeting Strategy Call",
      sub: "Tell me who your ideal buyer is. I'll show you where they are online and how I'd send them to your funnel."
    },
    cta: "Get a Traffic & Targeting Strategy Call",
    stickyBar: true,
    hero: {
      eyebrow: "FOR BUSINESSES & AGENCIES THAT NEED MORE QUALIFIED TRAFFIC",
      headline: "What If Your Next Customers Are In [[The 97% Your Meta & Google Ads Never Reach]]?",
      sub: "I find your ideal buyers across the open internet, on the top 500 publishers using 400+ data sources, and send them to your funnel as brand awareness, intent traffic and retargeting.",
      note: "I don't touch your Meta or Google ads. I make them smarter.",
      proof: ["15 years media buying", "27 years in marketing", "400+ data sources", "Top 500 publishers"]
    },
    // Section order. Remove a name to hide that section, or move names to reorder.
    order: ["hero", "placements", "services", "awareness", "networks", "publishers", "data", "geofence", "b2b", "landers", "who", "steps", "niches", "faq", "final"],
    imgBase: "https://defconskylude.github.io/niche-wheel/img/placements/",
    placements: {
      tag: "REAL PLACEMENTS",
      headline: "Here's What I've Been Doing [[For Clients Like You]]",
      sub: "Real placements, real targeting and real results. Scroll through, then decide if you want in.",
      banners: [
        { img: "banner-1.jpg", alt: "Mock-up of client banner ads in every standard size" },
        { img: "banner-2.jpg", alt: "Mock-up of event-sponsor banner ads in every standard size" }
      ],
      ads: [
        { img: "ads-1.jpg", caption: "This Could Be Your Brand, Front & Center.", alt: "Client ads running on a major sports news site" },
        { img: "ads-2.jpg", caption: "Your Competitors Wish They Thought Of This First.", alt: "Client ads placed alongside sports coverage" },
        { img: "ads-3.jpg", caption: "Real Placements. Real Eyeballs. Real Pipeline.", alt: "B2B ads running on a national news site" }
      ]
    },
    networks: {
      tag: "TRUSTED HIGH-TRAFFIC WEBSITES",
      headline: "Your Ads On [[Sites Your Buyers Already Trust]]",
      sub: "Your brand appears next to the news, finance and sports coverage your ideal customers read every day.",
      items: [
        { name: "Fox News", img: "net-fox.jpg" }, { name: "ESPN", img: "net-espn.jpg" },
        { name: "CNN", img: "net-cnn.jpg" }, { name: "USA Today", img: "net-usatoday.jpg" },
        { name: "Yahoo! Finance", img: "net-yahoo-finance.jpg" }, { name: "New York Times", img: "net-nyt.jpg" },
        { name: "Bloomberg", img: "net-bloomberg.jpg" }, { name: "Reuters", img: "net-reuters.jpg" },
        { name: "Forbes", img: "net-forbes.jpg" }, { name: "Yahoo! News", img: "net-yahoo-news.jpg" }
      ]
    },
    publishers: {
      tag: "TOP 500+ PUBLISHER WEBSITES",
      headline: "One Campaign, [[500+ Premium Publishers]]",
      sub: "Display, connected TV, apps and audio across the networks and channels your buyers watch, read and stream.",
      images: ["pub-01.jpg", "pub-02.jpg", "pub-03.jpg", "pub-04.jpg", "pub-05.jpg", "pub-06.jpg", "pub-07.jpg", "pub-08.jpg", "pub-09.jpg", "pub-10.jpg", "pub-11.jpg", "pub-12.jpg", "pub-13.jpg", "pub-14.jpg"],
      alt: "Publisher and channel network list"
    },
    geofence: {
      tag: "B2B GEOFENCE TARGETING",
      headline: "Are You Sponsoring An Event In 2026?",
      sub: "Target attendees before, during and after their events. Then retarget them so your brand stays top of mind long after the event ends.",
      img: "geofence-dome.jpg",
      alt: "Geofence dome over a convention center with location pins",
      phases: [
        { name: "Before", desc: "Reach registered attendees and exhibitors while they plan their trip." },
        { name: "During", desc: "Show up on their phones inside the venue while they walk the floor." },
        { name: "After", desc: "Retarget them for weeks so your follow-up lands with a warm audience." }
      ]
    },
    b2b: {
      tag: "EXCLUSIVE B2B TARGETING",
      headline: "Reach Decision Makers [[By Company, Revenue And Role]]",
      sub: "Filter by company revenue, size, industry and job function, then put your offer in front of the people who sign the checks.",
      images: ["b2b-1.jpg", "b2b-2.jpg", "b2b-3.jpg"],
      alt: "B2B targeting segment list",
      link: { label: "See sample B2B targeting", url: "https://docs.google.com/spreadsheets/d/16JY6Fzos2YU4YzZk0cZ5NrT8Niha-J8Sfer-hiwuceI/edit?gid=981158144#gid=981158144" }
    },
    landers: {
      tag: "OPTIMIZED LANDING PAGES",
      headline: "Traffic Lands On Pages [[Built To Convert]]",
      sub: "Better traffic deserves a better first click. Here are lead magnets and landing pages built for client campaigns.",
      items: [
        { title: "LandBX lead magnet", img: "lp-landbx-magnet.jpg", url: "https://landbx-magnet.lovable.app/" },
        { title: "LandBX landing page", img: "lp-landbx-lp.jpg", url: "https://landbx-lp.lovable.app/" },
        { title: "SunFrog lead magnet", img: "lp-sunfrog.jpg", url: "https://sunfrog-lead-magnet.lovable.app/" }
      ]
    },
    services: {
      tag: "WHAT I DELIVER",
      headline: "Three Kinds Of Traffic, One Precise Audience",
      sub: "Every campaign starts with your ideal customer profile, then reaches them at three moments before your competitors do.",
      items: [
        { tag: "BRAND AWARENESS", title: "Be the first name they see", body: "Your brand shows up on the sites your buyers already read, weeks before they search. First impression, first click, on your terms.", points: ["Premium news, finance, health and lifestyle sites", "Display and connected-TV placements", "Zip-code, local or national reach"] },
        { tag: "INTENT TRAFFIC", title: "Reach people researching your offer", body: "Target people actively reading about your category, filtered by what they can afford, then send them to your funnel.", points: ["Interest and research-intent signals", "Net worth, income and credit-tier filters", "Homeowner, property and company filters"] },
        { tag: "RETARGETING", title: "Follow up everywhere they browse", body: "Stay in front of visitors across the web after their first click, and feed your Meta and Google pixels better data for retargeting and lookalikes.", points: ["Site and funnel visitor retargeting", "Smarter pixels from pre-qualified visitors", "Frequency control, no ad fatigue"] }
      ]
    },
    awareness: {
      tag: "THE 97%",
      headline: "Most Advertisers Fight Over The [[3% Ready To Buy]]. I Go Find The Other 97%.",
      sub: "Only a small slice of your market is ready to buy today, and that's where every competitor is bidding. Everyone else is still learning, comparing or unaware they need you. That's top of funnel, and it's where I work.",
      stages: [
        { name: "Unaware", desc: "Doesn't know they're missing out yet" },
        { name: "Problem aware", desc: "Feels the pain, hasn't found a fix" },
        { name: "Solution aware", desc: "Researching options like yours" },
        { name: "Product aware", desc: "Knows you, not ready to commit" }
      ],
      ready: { name: "Most aware", desc: "Ready to buy now. Your funnel and sales team handle these." }
    },
    data: {
      tag: "DATA LAYERS",
      headline: "Targeting You Can't Get Inside Meta Or Google",
      sub: "I stack layers until the audience matches your ideal customer, then cherry-pick the segments that fit your offer.",
      layers: [
        { name: "Interest & intent", desc: "What they're researching right now, from treatments to roofing to software." },
        { name: "Demographics", desc: "Age, household, life events and location, down to the zip code." },
        { name: "Financial", desc: "Net worth, household income, liquid assets, credit tier and card holders." },
        { name: "Property", desc: "Homeowners, home value, home age and recent movers." },
        { name: "Business", desc: "Company size, revenue, industry and job function for B2B." }
      ],
      stats: [
        { value: "480", label: "GLP-1 and peptide audiences in one search" },
        { value: "3,200+", label: "net-worth audiences to choose from" },
        { value: "10,000+", label: "household-income audiences" },
        { value: "373M", label: "active IDs in a single GLP-1 interest segment" }
      ],
      statsNote: "Numbers from a live audience build on camera."
    },
    who: {
      tag: "WHO IT'S FOR",
      headline: "Built For Two Kinds Of Teams",
      items: [
        { title: "Business owners", body: "Clinics, home services, financial firms and B2B companies that need more qualified people entering the funnel.", points: ["Keep your current ads and agency", "Pay for ad spend plus a fair management fee", "More traffic, more retargeting fuel"] },
        { title: "Agencies & media buyers", body: "Add a traffic channel for your clients without handing over their ad accounts. I build it, you keep the client.", points: ["White-label friendly", "Fixes stalled Meta and Google results", "Works around strict health and finance ad rules"] }
      ]
    },
    steps: {
      tag: "HOW IT WORKS",
      headline: "From Strategy Call To Traffic In Three Steps",
      items: [
        { title: "Strategy call", body: "We map your ideal customer, offer, budget and where your funnel converts best." },
        { title: "Audience build & launch", body: "I build the data layers, pick placements and launch awareness, intent and retargeting traffic." },
        { title: "Your funnel converts", body: "Traffic lands on your page, your pixels learn, and your Meta and Google retargeting gets sharper." }
      ]
    },
    niches: {
      tag: "INDUSTRIES",
      headline: "Industries I Build Audiences For",
      items: ["GLP-1 & telehealth", "Med spas", "Regenerative & stem cell", "Functional medicine", "Dental implants", "Roofing & solar", "HVAC & remodeling", "Wealth management", "Insurance & annuities", "Mortgage & HELOC", "B2B SaaS", "Managed IT & cybersecurity"],
      link: { label: "Watch me build one live: spin the niche wheel", url: "https://financialtargetedads.com/wheel" }
    },
    faq: {
      tag: "QUESTIONS",
      headline: "Common Questions",
      items: [
        { q: "Do you run my Meta or Google ads?", a: "No. I send pre-qualified traffic to your funnel from outside Meta and Google. Your ads, accounts and agency stay exactly as they are." },
        { q: "Is this for people ready to buy today?", a: "It's top of funnel: brand awareness, first impressions and first clicks with people who fit your ideal customer but aren't ready yet. Your funnel and retargeting turn them into buyers." },
        { q: "What do I need to start?", a: "A landing page or funnel with your tracking pixels, an ad budget, and a clear picture of your best customers. We cover the rest on the strategy call." },
        { q: "Does this work with ad compliance rules?", a: "Every industry still has rules to follow, but you aren't tied to one platform's ad review, which helps health, finance and other restricted categories." },
        { q: "I'm an agency. Can I use this for my clients?", a: "Yes. I build and run the traffic, you keep the client relationship and their ad accounts." }
      ]
    },
    final: {
      headline: "Want To See Where [[Your Buyers]] Actually Are?",
      sub: "Book a strategy call. I'll show you the audiences I'd build for your offer, live.",
      bio: "Alvin Reyes is a media buyer with 15 years of paid media experience and 27 years in marketing. He finds the buyers businesses can't reach on Meta or Google and sends them to their funnel as pre-qualified traffic.",
      host: "Traffic & Targeting with Alvin Reyes"
    }
  };

  /* ======================= helpers ======================= */
  function merge(a, b) {
    if (!b || typeof b !== "object" || Array.isArray(b)) return b === undefined ? a : b;
    var o = Array.isArray(a) ? a.slice() : Object.assign({}, a);
    Object.keys(b).forEach(function (k) { o[k] = (a && typeof a[k] === "object" && !Array.isArray(a[k])) ? merge(a[k], b[k]) : b[k]; });
    return o;
  }
  var C = merge(CONFIG, window.TT_OPTIN_CONFIG || {});
  var T = C.theme;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hl(s) { return esc(s).replace(/\[\[(.+?)\]\]/g, '<span class="grad">$1</span>'); }
  function cta(label, src) { return '<button class="cta" type="button" data-src="' + esc(src) + '">' + esc(label || C.cta) + ' <span class="arr" aria-hidden="true">→</span></button>'; }
  function tag(t, dark) { return '<p class="tag' + (dark ? " on-dark" : "") + '">' + esc(t) + "</p>"; }
  function check() { return '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="currentColor" opacity=".16"/><path d="M5.5 10.4l3 3 6-6.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }

  /* ======================= styles ======================= */
  var css = "\n:host { display: block; }\n*, *::before, *::after { box-sizing: border-box; }\n" +
  ".tt { --bg:" + T.bg + "; --ink:" + T.ink + "; --muted:" + T.muted + "; --navy:" + T.navy + "; --navy-ink:" + T.navyInk + "; --card:" + T.card + "; --border:" + T.border + "; --teal:" + T.teal + "; --teal-l:" + T.tealLight + "; --teal-d:" + T.tealDark + "; --gold:" + T.gold + "; --gold-grad:" + T.goldGrad + "; --chip-grad:" + T.chipGrad + "; --r:" + T.radius + ";" +
  " font-family: '" + T.font + "', system-ui, -apple-system, 'Segoe UI', sans-serif; color: var(--ink); background: var(--bg); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; }\n" +
  ".wrap { max-width: " + T.maxWidth + "; margin: 0 auto; padding-left: max(20px, env(safe-area-inset-left, 0px)); padding-right: max(20px, env(safe-area-inset-right, 0px)); }\n" +
  "section { position: relative; padding-block: clamp(56px, 8vw, 96px); overflow: hidden; }\n" +
  "h1, h2, h3 { margin: 0; font-weight: 800; text-wrap: balance; letter-spacing: -0.02em; }\n" +
  "h1 { font-size: clamp(32px, 5.2vw, 56px); line-height: 1.05; }\n" +
  "h2 { font-size: clamp(26px, 3.6vw, 38px); line-height: 1.18; }\n" +
  "h3 { font-size: 20px; line-height: 1.3; }\n" +
  "p { margin: 0; }\n" +
  ".grad { background: radial-gradient(circle, var(--teal-l) 0%, var(--teal) 45%, var(--teal-d) 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }\n" +
  ".on-navy .grad { background: linear-gradient(90deg, var(--teal-l), oklch(0.85 0.12 190)); -webkit-background-clip: text; background-clip: text; }\n" +
  ".head { display: grid; gap: 14px; justify-items: center; text-align: center; max-width: 820px; margin: 0 auto 44px; }\n" +
  ".head .sub { color: var(--muted); font-size: 18px; max-width: 64ch; }\n" +
  ".on-navy .head .sub { color: oklch(0.82 0.02 250); }\n" +
  ".tag { display: inline-block; font-size: 12px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; padding: 6px 16px; border-radius: 999px; background: var(--navy); color: var(--gold); }\n" +
  ".tag.on-dark { background: oklch(1 0 0 / .08); border: 1px solid oklch(1 0 0 / .14); }\n" +
  ".cta { display: inline-flex; align-items: center; gap: 12px; border: 0; cursor: pointer; font-family: inherit; font-weight: 800; font-size: 16px; line-height: 1.2; letter-spacing: .1em; text-transform: uppercase; color: var(--navy); background: var(--gold-grad); padding: 18px 36px; border-radius: 999px; box-shadow: 0 10px 28px oklch(0.76 0.17 75 / .35), inset 0 1px 0 oklch(1 0 0 / .5); transition: transform .15s, box-shadow .15s; text-align: left; }\n" +
  ".cta:hover { transform: translateY(-2px); box-shadow: 0 16px 36px oklch(0.76 0.17 75 / .45), inset 0 1px 0 oklch(1 0 0 / .5); }\n" +
  ".cta:focus-visible { outline: 3px solid var(--teal); outline-offset: 4px; }\n" +
  ".cta .arr { display: inline-grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--navy); color: var(--gold); font-size: 15px; letter-spacing: 0; }\n" +
  ".cta-row { display: flex; justify-content: center; margin-top: 40px; }\n" +
  /* hero */
  ".hero { padding-block: clamp(40px, 7vw, 88px) clamp(56px, 8vw, 96px); background: radial-gradient(circle at 4% 26%, oklch(0.88 0.055 195 / .58), transparent 320px), radial-gradient(circle at 96% 12%, oklch(0.94 0.075 94 / .7), transparent 300px); }\n" +
  ".hero .inner { display: grid; gap: 22px; justify-items: center; text-align: center; max-width: 920px; margin: 0 auto; }\n" +
  ".eyebrow { display: inline-block; font-weight: 700; font-size: 14px; letter-spacing: .04em; padding: 8px 22px; border-radius: 999px; background: var(--gold); color: var(--navy); }\n" +
  ".hero .sub { font-size: clamp(17px, 2vw, 20px); color: var(--muted); max-width: 62ch; }\n" +
  ".hero .note { font-weight: 700; color: var(--teal-d); }\n" +
  ".proof { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 8px; }\n" +
  ".proof span { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; padding: 8px 14px; border-radius: 999px; background: var(--card); border: 1px solid var(--border); }\n" +
  ".proof svg { width: 18px; height: 18px; color: var(--teal); flex: none; }\n" +
  /* navy sections */
  ".on-navy { background: var(--navy); color: var(--navy-ink); }\n" +
  ".on-navy::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 12% -10%, oklch(0.45 0.1 196 / .35), transparent 420px), radial-gradient(circle at 88% 110%, oklch(0.6 0.15 80 / .18), transparent 420px); pointer-events: none; }\n" +
  ".on-navy > .wrap { position: relative; }\n" +
  /* service cards */
  ".grid3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }\n" +
  "@media (max-width: 900px) { .grid3 { grid-template-columns: minmax(0, 1fr); max-width: 560px; margin: 0 auto; } }\n" +
  ".svc { display: grid; gap: 14px; align-content: start; padding: 28px; border-radius: var(--r); background: oklch(0.13 0.04 257 / .55); border: 1px solid oklch(1 0 0 / .1); }\n" +
  ".chip { justify-self: start; font-size: 12px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: #fff; background: var(--chip-grad); padding: 7px 16px; border-radius: 999px; }\n" +
  ".svc p { color: oklch(0.84 0.02 250); }\n" +
  ".pts { list-style: none; margin: 4px 0 0; padding: 0; display: grid; gap: 10px; }\n" +
  ".pts li { display: grid; grid-template-columns: 20px minmax(0, 1fr); gap: 10px; align-items: start; font-size: 15px; line-height: 1.45; }\n" +
  ".pts svg { width: 20px; height: 20px; color: var(--teal-l); margin-top: 1px; }\n" +
  ".light .pts svg { color: var(--teal); }\n" +
  /* awareness bar */
  ".aware { display: grid; gap: 14px; max-width: 980px; margin: 0 auto; }\n" +
  ".bar { display: grid; grid-template-columns: 97fr 3fr; min-height: 76px; border-radius: 14px; overflow: hidden; border: 1px solid var(--border); background: var(--card); }\n" +
  ".bar .big { display: flex; align-items: center; gap: 14px; padding: 14px 20px; background: linear-gradient(90deg, oklch(0.64 0.112 196 / .18), oklch(0.64 0.112 196 / .32)); }\n" +
  ".bar .big b { font-size: clamp(28px, 4vw, 40px); color: var(--teal-d); line-height: 1; }\n" +
  ".bar .big span { font-weight: 700; }\n" +
  ".bar .small { background: var(--gold); }\n" +
  ".bar-legend { display: flex; justify-content: space-between; gap: 12px; font-size: 13px; font-weight: 600; color: var(--muted); }\n" +
  ".bar-legend .r { text-align: right; }\n" +
  ".stages { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; margin-top: 10px; }\n" +
  "@media (max-width: 900px) { .stages { grid-template-columns: repeat(2, minmax(0, 1fr)); } .stage.ready { grid-column: 1 / -1; } }\n" +
  "@media (max-width: 480px) { .stages { grid-template-columns: minmax(0, 1fr); } }\n" +
  ".stage { padding: 16px 18px; border-radius: 14px; background: var(--card); border: 1px solid var(--border); display: grid; gap: 4px; align-content: start; }\n" +
  ".stage .k { font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--teal); }\n" +
  ".stage b { font-size: 17px; }\n" +
  ".stage p { font-size: 14px; color: var(--muted); line-height: 1.45; }\n" +
  ".stage.ready { background: transparent; border-style: dashed; }\n" +
  ".stage.ready .k { color: oklch(0.6 0.15 75); }\n" +
  /* data layers */
  ".layers { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; }\n" +
  "@media (max-width: 1000px) { .layers { grid-template-columns: minmax(0, 1fr); max-width: 640px; margin: 0 auto; } }\n" +
  ".layer { position: relative; padding: 18px 18px 18px 22px; border-radius: 14px; background: oklch(0.13 0.04 257 / .55); border: 1px solid oklch(1 0 0 / .1); display: grid; gap: 6px; }\n" +
  ".layer::before { content: ''; position: absolute; left: 0; top: 16px; bottom: 16px; width: 4px; border-radius: 0 4px 4px 0; background: var(--gold-grad); }\n" +
  ".layer b { font-size: 17px; }\n" +
  ".layer p { font-size: 14px; color: oklch(0.82 0.02 250); line-height: 1.5; }\n" +
  ".stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 28px; }\n" +
  "@media (max-width: 800px) { .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }\n" +
  ".stat { padding: 18px 14px; border-radius: 10px; text-align: center; background: oklch(0.129 0.04 257 / .4); border: 1px solid oklch(1 0 0 / .1); }\n" +
  ".stat b { display: block; font-size: 30px; line-height: 1.1; color: var(--teal-l); font-variant-numeric: tabular-nums; }\n" +
  ".stat span { font-size: 13px; color: oklch(0.82 0.02 250); }\n" +
  ".stats-note { text-align: center; font-size: 12px; color: oklch(0.7 0.02 250); margin-top: 12px; }\n" +
  /* who */
  ".grid2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }\n" +
  "@media (max-width: 760px) { .grid2 { grid-template-columns: minmax(0, 1fr); } }\n" +
  ".who { padding: 30px; border-radius: var(--r); background: var(--card); border: 1px solid var(--border); display: grid; gap: 14px; align-content: start; box-shadow: 0 12px 30px oklch(0.215 0.055 257 / .06); }\n" +
  ".who p { color: var(--muted); }\n" +
  /* steps */
  ".steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }\n" +
  "@media (max-width: 900px) { .steps { grid-template-columns: minmax(0, 1fr); max-width: 560px; margin: 0 auto; } }\n" +
  ".step { padding: 26px; border-radius: var(--r); background: var(--card); border: 1px solid var(--border); display: grid; gap: 10px; align-content: start; }\n" +
  ".step .n { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; font-weight: 800; background: var(--navy); color: var(--gold); }\n" +
  ".step p { color: var(--muted); font-size: 15px; }\n" +
  /* niches */
  ".niches { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 900px; margin: 0 auto; }\n" +
  ".niches span { font-weight: 600; font-size: 15px; padding: 10px 18px; border-radius: 999px; background: var(--card); border: 1px solid var(--border); }\n" +
  ".nlink { display: flex; justify-content: center; margin-top: 26px; }\n" +
  ".nlink a { font-weight: 700; color: var(--teal-d); text-decoration: underline; text-underline-offset: 4px; }\n" +
  /* faq */
  ".faq { max-width: 820px; margin: 0 auto; display: grid; gap: 12px; }\n" +
  ".faq details { border-radius: 14px; background: var(--card); border: 1px solid var(--border); }\n" +
  ".faq summary { cursor: pointer; list-style: none; padding: 18px 22px; font-weight: 700; font-size: 17px; display: flex; justify-content: space-between; gap: 16px; }\n" +
  ".faq summary::-webkit-details-marker { display: none; }\n" +
  ".faq summary::after { content: '+'; font-size: 22px; line-height: 1; color: var(--teal); }\n" +
  ".faq details[open] summary::after { content: '–'; }\n" +
  ".faq details p { padding: 0 22px 20px; color: var(--muted); }\n" +
  ".faq summary:focus-visible { outline: 3px solid var(--teal); outline-offset: 2px; border-radius: 14px; }\n" +
  /* final */
  ".final .inner { display: grid; gap: 18px; justify-items: center; text-align: center; max-width: 820px; margin: 0 auto; }\n" +
  ".final .sub { font-size: 18px; color: oklch(0.84 0.02 250); }\n" +
  ".bio { margin-top: 26px; font-size: 14px; color: oklch(0.75 0.02 250); max-width: 62ch; }\n" +
  ".bio b { color: var(--navy-ink); }\n" +
  /* image cards, galleries, lightbox */
  ".zoom { position: relative; display: block; width: 100%; padding: 0; border: 0; background: none; cursor: zoom-in; border-radius: 14px; overflow: hidden; }\n" +
  ".zoom img { display: block; width: 100%; height: auto; max-width: 100%; }\n" +
  ".zoom::after { content: 'ZOOM IN'; position: absolute; right: 12px; bottom: 12px; font-size: 11px; font-weight: 800; letter-spacing: .06em; color: #fff; background: var(--chip-grad); padding: 6px 14px; border-radius: 999px; box-shadow: 0 6px 16px rgba(0,0,0,.25); }\n" +
  ".zoom:focus-visible { outline: 3px solid var(--teal); outline-offset: 3px; }\n" +
  ".shot { border-radius: 16px; overflow: hidden; background: var(--card); border: 1px solid var(--border); box-shadow: 0 14px 34px oklch(0.215 0.055 257 / .1); }\n" +
  ".on-navy .shot { border-color: oklch(1 0 0 / .12); background: oklch(0.13 0.04 257 / .6); }\n" +
  ".banners { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; margin-bottom: 28px; }\n" +
  ".ads { display: grid; gap: 28px; }\n" +
  ".ad { display: grid; gap: 12px; }\n" +
  ".ad .cap { font-size: clamp(20px, 2.4vw, 26px); font-weight: 800; text-align: center; }\n" +
  ".nets { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; }\n" +
  ".net { display: grid; gap: 10px; text-align: center; }\n" +
  ".net b { font-size: 14px; letter-spacing: .06em; text-transform: uppercase; }\n" +
  ".gal { position: relative; }\n" +
  ".track { display: grid; grid-auto-flow: column; grid-auto-columns: 100%; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; border-radius: 16px; }\n" +
  ".track::-webkit-scrollbar { display: none; }\n" +
  ".track > * { scroll-snap-align: center; }\n" +
  ".gal-nav { display: flex; justify-content: center; align-items: center; gap: 14px; margin-top: 14px; }\n" +
  ".gal-nav button { width: 44px; height: 44px; border-radius: 50%; border: 1px solid var(--border); background: var(--card); color: var(--ink); font-size: 18px; cursor: pointer; }\n" +
  ".on-navy .gal-nav button { background: oklch(1 0 0 / .08); border-color: oklch(1 0 0 / .18); color: var(--navy-ink); }\n" +
  ".gal-nav button:focus-visible { outline: 3px solid var(--teal); outline-offset: 2px; }\n" +
  ".gal-nav .count { font-size: 13px; font-weight: 700; min-width: 64px; text-align: center; font-variant-numeric: tabular-nums; }\n" +
  ".split { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr); gap: 40px; align-items: center; }\n" +
  ".split .copy { display: grid; gap: 16px; justify-items: start; }\n" +
  ".split .copy .sub { color: oklch(0.84 0.02 250); font-size: 18px; }\n" +
  ".phases { display: grid; gap: 10px; width: 100%; }\n" +
  ".phase { display: grid; grid-template-columns: 96px minmax(0, 1fr); gap: 14px; align-items: center; padding: 14px 16px; border-radius: 14px; background: oklch(0.13 0.04 257 / .55); border: 1px solid oklch(1 0 0 / .1); }\n" +
  ".phase b { justify-self: start; font-size: 12px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: #fff; background: var(--chip-grad); padding: 6px 14px; border-radius: 999px; }\n" +
  ".phase span { font-size: 15px; color: oklch(0.86 0.02 250); line-height: 1.45; }\n" +
  ".linkbtn { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; color: var(--teal-d); text-decoration: none; border: 2px solid var(--teal); padding: 12px 22px; border-radius: 999px; }\n" +
  ".linkbtn:hover { background: oklch(0.64 0.112 196 / .1); }\n" +
  ".center { display: flex; justify-content: center; margin-top: 22px; }\n" +
  ".landers { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }\n" +
  ".lander { display: grid; gap: 14px; align-content: start; }\n" +
  ".lander .t { font-weight: 800; font-size: 15px; letter-spacing: .06em; text-transform: uppercase; text-align: center; }\n" +
  ".lander .linkbtn { justify-self: center; }\n" +
  ".lb { position: fixed; inset: 0; z-index: 60; display: grid; grid-template-rows: auto minmax(0, 1fr) auto; background: oklch(0.12 0.03 257 / .94); padding: max(12px, env(safe-area-inset-top, 0px)) max(12px, env(safe-area-inset-right, 0px)) max(12px, env(safe-area-inset-bottom, 0px)) max(12px, env(safe-area-inset-left, 0px)); }\n" +
  ".lb[hidden] { display: none; }\n" +
  ".lb .bar-top { display: flex; justify-content: flex-end; }\n" +
  ".lb .stage-img { display: grid; place-items: center; min-height: 0; overflow: auto; }\n" +
  ".lb img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; }\n" +
  ".lb button { width: 46px; height: 46px; border-radius: 50%; border: 2px solid #fff; background: transparent; color: #fff; font-size: 18px; cursor: pointer; }\n" +
  ".lb button:focus-visible { outline: 3px solid var(--gold); outline-offset: 2px; }\n" +
  ".lb .nav { display: flex; justify-content: center; gap: 16px; padding-top: 10px; }\n" +
  "@media (max-width: 900px) { .nets { grid-template-columns: repeat(3, minmax(0, 1fr)); } .split { grid-template-columns: minmax(0, 1fr); } .landers { grid-template-columns: minmax(0, 1fr); max-width: 560px; margin: 0 auto; } }\n" +
  "@media (max-width: 560px) { .nets { grid-template-columns: repeat(2, minmax(0, 1fr)); } .banners { grid-template-columns: minmax(0, 1fr); } .phase { grid-template-columns: minmax(0, 1fr); } }\n" +
  /* sticky bar */
  ".sticky { position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; display: flex; justify-content: center; padding: 12px max(16px, env(safe-area-inset-right, 0px)) calc(12px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px)); background: oklch(0.2 0.045 257 / .92); backdrop-filter: blur(8px); transform: translateY(110%); transition: transform .25s ease; }\n" +
  ".sticky.show { transform: none; }\n" +
  ".sticky .cta { padding: 14px 24px; font-size: 14px; }\n" +
  "@media (max-width: 520px) { .cta { width: 100%; justify-content: center; padding: 16px 20px; font-size: 14px; } .bar { grid-template-columns: 92fr 8fr; } .svc, .who, .step { padding: 22px; } }\n" +
  "@media (prefers-reduced-motion: reduce) { .cta, .sticky { transition: none; } }\n";

  var modalCss = "#tt-modal, #tt-modal * { box-sizing: border-box; }\n" +
  "#tt-modal { position: fixed; inset: 0; z-index: 2147483000; display: grid; place-items: center; padding: max(16px, env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) max(16px, env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px)); background: oklch(0.2 0.045 257 / .78); backdrop-filter: blur(4px); font-family: '" + T.font + "', system-ui, sans-serif; }\n" +
  "#tt-modal[hidden] { display: none !important; }\n" +
  "#tt-modal .dlg { position: relative; width: min(560px, 100%); max-height: 100%; overflow: auto; background: #fff; color: " + T.ink + "; border-radius: 20px; box-shadow: 0 30px 80px rgba(0,0,0,.45); animation: ttRise .28s cubic-bezier(.2,1.2,.4,1); }\n" +
  "@keyframes ttRise { from { transform: translateY(24px) scale(.97); opacity: 0; } to { transform: none; opacity: 1; } }\n" +
  "#tt-modal header { background: " + T.navy + "; color: " + T.navyInk + "; padding: 24px 60px 20px 24px; border-bottom: 5px solid " + T.gold + "; }\n" +
  "#tt-modal header .k { font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: " + T.gold + "; }\n" +
  "#tt-modal header h2 { margin: 6px 0 6px; font-size: 22px; line-height: 1.2; font-weight: 800; }\n" +
  "#tt-modal header p { margin: 0; font-size: 14px; color: oklch(0.84 0.02 250); line-height: 1.5; }\n" +
  "#tt-modal .fw { padding: 8px 10px 4px; min-height: " + C.form.height + "px; }\n" +
  "#tt-modal iframe { display: block; width: 100%; height: " + C.form.height + "px; border: none; border-radius: 4px; }\n" +
  "#tt-modal .x { position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; border-radius: 50%; border: 2px solid " + T.navyInk + "; background: transparent; color: " + T.navyInk + "; font-size: 18px; line-height: 1; cursor: pointer; }\n" +
  "#tt-modal .x:hover, #tt-modal .x:focus-visible { background: " + T.gold + "; border-color: " + T.gold + "; color: " + T.navy + "; outline: none; }\n" +
  "@media (prefers-reduced-motion: reduce) { #tt-modal .dlg { animation: none; } }\n";

  /* ======================= markup ======================= */
  function img(file, alt, group) {
    return '<button class="zoom" type="button" data-zoom="' + esc(C.imgBase + file) + '"' + (group ? ' data-group="' + esc(group) + '"' : "") + ' aria-label="Zoom in: ' + esc(alt) + '"><img src="' + esc(C.imgBase + file) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async"></button>';
  }
  function head(x, dark) { return '<div class="head">' + tag(x.tag, dark) + "<h2>" + hl(x.headline) + "</h2>" + (x.sub ? '<p class="sub">' + esc(x.sub) + "</p>" : "") + "</div>"; }
  function gallery(files, alt, group) {
    return '<div class="gal" data-gal><div class="track">' + files.map(function (f, i) { return '<div class="shot">' + img(f, alt + " " + (i + 1), group) + "</div>"; }).join("") +
      '</div><div class="gal-nav"><button type="button" data-step="-1" aria-label="Previous image">←</button><span class="count">1 / ' + files.length + '</span><button type="button" data-step="1" aria-label="Next image">→</button></div></div>';
  }
  function list(items) { return '<ul class="pts">' + items.map(function (p) { return "<li>" + check() + "<span>" + esc(p) + "</span></li>"; }).join("") + "</ul>"; }
  var R = {
    hero: function (h) {
      return '<section class="hero"><div class="wrap"><div class="inner">' + (h.eyebrow ? '<p class="eyebrow">' + esc(h.eyebrow) + "</p>" : "") +
        "<h1>" + hl(h.headline) + '</h1><p class="sub">' + esc(h.sub) + "</p>" + (h.note ? '<p class="note">' + esc(h.note) + "</p>" : "") + cta(C.cta, "hero") +
        '<div class="proof">' + (h.proof || []).map(function (p) { return "<span>" + check() + esc(p) + "</span>"; }).join("") + "</div></div></div></section>";
    },
    placements: function (p) {
      return '<section class="light"><div class="wrap">' + head(p) + '<div class="banners">' + p.banners.map(function (b) { return '<div class="shot">' + img(b.img, b.alt, "placements") + "</div>"; }).join("") + "</div>" +
        '<div class="ads">' + p.ads.map(function (x) { return '<figure class="ad" style="margin:0"><figcaption class="cap">' + esc(x.caption) + '</figcaption><div class="shot">' + img(x.img, x.alt, "placements") + "</div></figure>"; }).join("") + "</div>" +
        '<div class="cta-row">' + cta(C.cta, "placements") + "</div></div></section>";
    },
    services: function (s) {
      return '<section class="on-navy"><div class="wrap">' + head(s, true) + '<div class="grid3">' +
        s.items.map(function (it) { return '<article class="svc"><span class="chip">' + esc(it.tag) + "</span><h3>" + esc(it.title) + "</h3><p>" + esc(it.body) + "</p>" + list(it.points) + "</article>"; }).join("") +
        '</div><div class="cta-row">' + cta(C.cta, "services") + "</div></div></section>";
    },
    awareness: function (a) {
      return '<section class="light"><div class="wrap">' + head(a) + '<div class="aware">' +
        '<div class="bar" role="img" aria-label="97% of the market is not ready to buy yet; 3% is ready now"><div class="big"><b>97%</b><span>Not ready to buy yet. This is where I find your buyers.</span></div><div class="small"></div></div>' +
        '<div class="bar-legend"><span>Top of funnel: awareness, first impression, first click</span><span class="r">3% ready now</span></div>' +
        '<div class="stages">' + a.stages.map(function (x, i) { return '<div class="stage"><span class="k">Stage ' + (i + 1) + "</span><b>" + esc(x.name) + "</b><p>" + esc(x.desc) + "</p></div>"; }).join("") +
        '<div class="stage ready"><span class="k">Stage 5 · the 3%</span><b>' + esc(a.ready.name) + "</b><p>" + esc(a.ready.desc) + "</p></div></div>" +
        '</div><div class="cta-row">' + cta(C.cta, "awareness") + "</div></div></section>";
    },
    networks: function (n) {
      return '<section class="light" style="padding-top:0"><div class="wrap">' + head(n) + '<div class="nets">' +
        n.items.map(function (x) { return '<div class="net"><div class="shot">' + img(x.img, x.name + " ad placement", "networks") + "</div><b>" + esc(x.name) + "</b></div>"; }).join("") + "</div></div></section>";
    },
    publishers: function (p) {
      return '<section class="on-navy"><div class="wrap">' + head(p, true) + gallery(p.images, p.alt, "publishers") + '<div class="cta-row">' + cta(C.cta, "publishers") + "</div></div></section>";
    },
    data: function (d) {
      return '<section class="on-navy" style="padding-top:0"><div class="wrap">' + head(d, true) + '<div class="layers">' +
        d.layers.map(function (l) { return '<div class="layer"><b>' + esc(l.name) + "</b><p>" + esc(l.desc) + "</p></div>"; }).join("") + "</div>" +
        (d.stats && d.stats.length ? '<div class="stats">' + d.stats.map(function (x) { return '<div class="stat"><b>' + esc(x.value) + "</b><span>" + esc(x.label) + "</span></div>"; }).join("") + "</div>" + (d.statsNote ? '<p class="stats-note">' + esc(d.statsNote) + "</p>" : "") : "") +
        '<div class="cta-row">' + cta(C.cta, "data") + "</div></div></section>";
    },
    geofence: function (g) {
      return '<section class="on-navy" style="padding-top:0"><div class="wrap"><div class="split"><div class="shot">' + img(g.img, g.alt, "geofence") + '</div><div class="copy">' + tag(g.tag, true) +
        "<h2>" + hl(g.headline) + '</h2><p class="sub">' + esc(g.sub) + '</p><div class="phases">' +
        g.phases.map(function (x) { return '<div class="phase"><b>' + esc(x.name) + "</b><span>" + esc(x.desc) + "</span></div>"; }).join("") + "</div>" + cta(C.cta, "geofence") + "</div></div></div></section>";
    },
    b2b: function (b) {
      return '<section class="light"><div class="wrap">' + head(b) + gallery(b.images, b.alt, "b2b") +
        (b.link ? '<div class="center"><a class="linkbtn" href="' + esc(b.link.url) + '" target="_blank" rel="noopener">' + esc(b.link.label) + " ↗</a></div>" : "") + "</div></section>";
    },
    landers: function (l) {
      return '<section class="light" style="padding-top:0"><div class="wrap">' + head(l) + '<div class="landers">' +
        l.items.map(function (x) { return '<div class="lander"><div class="shot">' + img(x.img, x.title + " screenshot", "landers") + '</div><p class="t">' + esc(x.title) + '</p><a class="linkbtn" href="' + esc(x.url) + '" target="_blank" rel="noopener">View landing page ↗</a></div>'; }).join("") +
        '</div><div class="cta-row">' + cta(C.cta, "landers") + "</div></div></section>";
    },
    who: function (w) {
      return '<section class="light" style="padding-top:0"><div class="wrap">' + head(w) + '<div class="grid2">' +
        w.items.map(function (it) { return '<article class="who"><h3>' + esc(it.title) + "</h3><p>" + esc(it.body) + "</p>" + list(it.points) + "</article>"; }).join("") + "</div></div></section>";
    },
    steps: function (st) {
      return '<section class="light" style="padding-top:0"><div class="wrap">' + head(st) + '<div class="steps">' +
        st.items.map(function (it, i) { return '<div class="step"><span class="n">' + (i + 1) + "</span><h3>" + esc(it.title) + "</h3><p>" + esc(it.body) + "</p></div>"; }).join("") +
        '</div><div class="cta-row">' + cta(C.cta, "steps") + "</div></div></section>";
    },
    niches: function (n) {
      return '<section class="light" style="padding-top:0"><div class="wrap">' + head(n) + '<div class="niches">' + n.items.map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("") + "</div>" +
        (n.link ? '<div class="nlink"><a href="' + esc(n.link.url) + '" target="_top">' + esc(n.link.label) + " →</a></div>" : "") + "</div></section>";
    },
    faq: function (f) {
      return '<section class="light" style="padding-top:0"><div class="wrap">' + head(f) + '<div class="faq">' +
        f.items.map(function (x) { return "<details><summary>" + esc(x.q) + "</summary><p>" + esc(x.a) + "</p></details>"; }).join("") + "</div></div></section>";
    },
    final: function (fi) {
      return '<section class="on-navy final"><div class="wrap"><div class="inner">' + tag(fi.host, true) + "<h2>" + hl(fi.headline) + '</h2><p class="sub">' + esc(fi.sub) + "</p>" + cta(C.cta, "final") +
        '<p class="bio"><b>About:</b> ' + esc(fi.bio) + "</p></div></div></section>";
    }
  };
  function html() {
    var out = (C.order || Object.keys(R)).filter(function (k) { return R[k] && C[k]; }).map(function (k) { return R[k](C[k]); }).join("");
    if (C.stickyBar) out += '<div class="sticky" aria-hidden="true">' + cta(C.cta, "sticky") + "</div>";
    out += '<div class="lb" hidden role="dialog" aria-modal="true" aria-label="Image viewer"><div class="bar-top"><button type="button" data-lb="close" aria-label="Close image">✕</button></div><div class="stage-img"><img alt=""></div><div class="nav"><button type="button" data-lb="-1" aria-label="Previous image">←</button><button type="button" data-lb="1" aria-label="Next image">→</button></div></div>';
    return out;
  }

  /* ======================= mount ======================= */
  function boot() {
    var HOST = document.getElementById("tt-optin");
    if (!HOST) { HOST = document.createElement("div"); HOST.id = "tt-optin"; document.body.appendChild(HOST); }
    if (T.fontUrl && !document.querySelector("link[data-tt-font]")) {
      var lf = document.createElement("link"); lf.rel = "stylesheet"; lf.href = T.fontUrl; lf.setAttribute("data-tt-font", ""); document.head.appendChild(lf);
    }
    var ms = document.createElement("style"); ms.textContent = modalCss; document.head.appendChild(ms);
    var ROOT = HOST.shadowRoot || HOST.attachShadow({ mode: "open" });
    ROOT.innerHTML = "<style>" + css + '</style><div class="tt">' + html() + "</div>";

    // pop-up form lives in the normal page so GHL's form_embed.js can find it and pass UTMs
    var modal = document.createElement("div");
    modal.id = "tt-modal"; modal.hidden = true; modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true"); modal.setAttribute("aria-labelledby", "tt-modal-title");
    modal.innerHTML = '<div class="dlg"><header><div class="k">' + esc(C.final.host) + '</div><h2 id="tt-modal-title">' + esc(C.form.title) + "</h2><p>" + esc(C.form.sub) + '</p></header><button class="x" type="button" aria-label="Close form">✕</button><div class="fw"></div></div>';
    document.body.appendChild(modal);
    var loaded = false, last = null;
    function loadForm() {
      if (loaded) return; loaded = true;
      var id = C.form.id;
      modal.querySelector(".fw").innerHTML = '<iframe src="https://api.leadconnectorhq.com/widget/form/' + id + '" id="inline-tt-' + id + '" data-layout="{\'id\':\'INLINE\'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="' + esc(C.form.name) + '" data-height="' + C.form.height + '" data-layout-iframe-id="inline-tt-' + id + '" data-form-id="' + id + '" title="' + esc(C.form.name) + '"></iframe>';
      var sc = document.createElement("script"); sc.src = "https://link.msgsndr.com/js/form_embed.js"; document.body.appendChild(sc);
    }
    function open(src) {
      last = document.activeElement; loadForm(); modal.hidden = false; document.body.style.overflow = "hidden";
      modal.querySelector(".x").focus();
      try { window.dataLayer && window.dataLayer.push({ event: "tt_optin_open", cta_location: src }); } catch (e) {}
    }
    function close() { modal.hidden = true; document.body.style.overflow = ""; if (last && last.focus) last.focus(); }
    ROOT.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest(".cta"); if (b) open(b.getAttribute("data-src") || "cta"); });
    // galleries
    ROOT.querySelectorAll("[data-gal]").forEach(function (g) {
      var track = g.querySelector(".track"), count = g.querySelector(".count"), n = track.children.length;
      function idx() { return Math.round(track.scrollLeft / Math.max(1, track.clientWidth)); }
      g.querySelectorAll("[data-step]").forEach(function (btn) { btn.addEventListener("click", function () {
        var i = (idx() + (+btn.getAttribute("data-step")) + n) % n; track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" }); }); });
      track.addEventListener("scroll", function () { count.textContent = (idx() + 1) + " / " + n; }, { passive: true });
    });
    // lightbox
    var lb = ROOT.querySelector(".lb"), lbImg = lb.querySelector("img"), lbList = [], lbI = 0, lbLast = null;
    function lbShow(i) { lbI = (i + lbList.length) % lbList.length; lbImg.src = lbList[lbI].src; lbImg.alt = lbList[lbI].alt; }
    function lbOpen(btn) {
      var group = btn.getAttribute("data-group");
      var all = Array.prototype.slice.call(ROOT.querySelectorAll(".zoom" + (group ? '[data-group="' + group + '"]' : "")));
      lbList = all.map(function (z) { return { src: z.getAttribute("data-zoom"), alt: (z.querySelector("img") || {}).alt || "" }; });
      lbLast = btn; lbShow(Math.max(0, all.indexOf(btn))); lb.hidden = false; document.body.style.overflow = "hidden"; lb.querySelector('[data-lb="close"]').focus();
      lb.querySelector(".nav").style.visibility = lbList.length > 1 ? "visible" : "hidden";
    }
    function lbClose() { lb.hidden = true; document.body.style.overflow = ""; if (lbLast) lbLast.focus(); }
    ROOT.addEventListener("click", function (e) {
      var z = e.target.closest && e.target.closest(".zoom"); if (z) { lbOpen(z); return; }
      var c = e.target.closest && e.target.closest("[data-lb]"); if (c) { var v = c.getAttribute("data-lb"); if (v === "close") lbClose(); else lbShow(lbI + (+v)); return; }
      if (e.target.classList && (e.target.classList.contains("stage-img") || e.target === lb)) lbClose();
    });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") lbClose(); else if (e.key === "ArrowRight") lbShow(lbI + 1); else if (e.key === "ArrowLeft") lbShow(lbI - 1);
    });
    modal.querySelector(".x").addEventListener("click", close);
    modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) close(); });
    window.TTOptin = { open: open, close: close, config: C };

    // sticky CTA appears after the hero scrolls away, hides at the final section
    var sticky = ROOT.querySelector(".sticky");
    if (sticky && "IntersectionObserver" in window) {
      var heroVis = true, finalVis = false;
      var upd = function () { var show = !heroVis && !finalVis; sticky.classList.toggle("show", show); sticky.setAttribute("aria-hidden", show ? "false" : "true"); };
      new IntersectionObserver(function (en) { heroVis = en[0].isIntersecting; upd(); }).observe(ROOT.querySelector(".hero"));
      new IntersectionObserver(function (en) { finalVis = en[0].isIntersecting; upd(); }).observe(ROOT.querySelector(".final"));
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
