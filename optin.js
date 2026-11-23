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
    // Per-page settings by URL path (no GHL code change needed). hero.form: true puts the form in the hero instead of the button.
    pages: {
      "/agency-partners": {
        hero: { form: true },
        audiences: {
          headline: "Build Your Client's Perfect Customer From [[5,300+ Audiences]]",
          sub: "Real segments I pulled from The Trade Desk. Pick a client, then stack layers from different categories into their ideal customer profile. Bring the list to our partner call and I'll build it under your agency's name.",
          trayCta: "Build This For A Client",
          tableSub: "Every audience tab I pulled from The Trade Desk. Pick a category and a tab to see what you could offer each client."
        }
      },
      // Thank-you page for lawyers who just filled out the Meta lead form. hero.video = YouTube video id.
      // In GHL, use ONLY the 2-line snippet (no window.TT_OPTIN_CONFIG block) so this config is what shows.
      "/lawyers": {
        hero: {
          eyebrow: "THANKS! YOUR REQUEST IS IN",
          headline: "Before We Talk, [[Watch This 7-Minute Video]]",
          video: "vs1sDiCHsSw",
          videoTitle: "How I put your law firm in front of people who searched for an injury lawyer",
          sub: "See how I put your firm in front of people who just searched for a car accident or injury lawyer, on trusted sites like Fox News, CNN and USA Today. Not Meta. Not Google.",
          note: "I'll text you shortly to set up a quick chat.",
          cta: false,
          proof: []
        },
        final: { bio: "" }
      }
    },
    order: ["hero", "placements", "services", "awareness", "networks", "publishers", "data", "audiences", "b2b", "who", "steps", "niches", "faq", "final"],
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
    // Audience explorer: searchable table of real Trade Desk segments (data lives in audiences.json, loaded on scroll)
    audiences: {
      tag: "THE AUDIENCE VAULT",
      headline: "Build Your Perfect Customer From [[5,300+ Audiences]] Meta And Google Don't Have",
      sub: "These are real segments I pulled from The Trade Desk. Pick a category, search anything, and stack layers from different categories into your ideal customer profile. I'll build it with you on our call.",
      // view: "tabs" = simple tab + table view (default). "explorer" = Option A: dropdowns, search and ICP builder.
      view: "tabs",
      tableSub: "Every audience tab I pulled from The Trade Desk. Pick a category, then a tab, to see the segments and their reach.",
      dataUrl: "https://defconskylude.github.io/niche-wheel/audiences.json",
      pageSize: 25,
      examples: ["annuity", "net worth", "CFO", "GLP-1", "trade show", "homeowner", "Medicare", "roofing"],
      trayTitle: "Your ICP",
      trayCta: "Build My ICP On A Call",
      note: "Audience sizes come from The Trade Desk data marketplace at the time of pull and change daily. Interest and intent segments reflect browsing and modeled behavior, not a confirmed diagnosis, belief or financial status. Health, political, financial, credit and housing offers have extra legal and platform rules; we'll confirm what's allowed for your offer on the call."
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
  var PATH = (location.pathname || "/").replace(/\/+$/, "").toLowerCase() || "/";
  var C = merge(merge(CONFIG, (CONFIG.pages || {})[PATH] || {}), window.TT_OPTIN_CONFIG || {});
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
  ".hero .inner.has-form { grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); max-width: 1120px; text-align: left; justify-items: stretch; align-items: center; gap: clamp(28px, 4vw, 48px); }\n" +
  ".has-form .copy { display: grid; gap: 20px; justify-items: start; }\n" +
  ".has-form .proof { justify-content: flex-start; }\n" +
  ".hero-form { background: var(--card); border-radius: 18px; overflow: hidden; border: 1px solid var(--border); box-shadow: 0 24px 60px oklch(0.215 0.055 257 / .16); }\n" +
  ".hf-head { background: var(--navy); color: var(--navy-ink); padding: 18px 22px 16px; border-bottom: 4px solid var(--gold); display: grid; gap: 4px; }\n" +
  ".hf-head b { font-size: 20px; line-height: 1.25; }\n" +
  ".hf-head p { font-size: 14px; line-height: 1.45; opacity: .85; margin: 0; }\n" +
  ".hf-body { padding: 6px 8px 4px; min-height: " + C.form.height + "px; }\n" +
  "@media (max-width: 900px) { .hero .inner.has-form { grid-template-columns: minmax(0, 1fr); text-align: center; max-width: 620px; } .has-form .copy { justify-items: center; } .has-form .proof { justify-content: center; } }\n" +
  ".hero-video { width: 100%; max-width: 880px; margin: 6px auto 4px; border-radius: 16px; overflow: hidden; background: var(--navy); box-shadow: 0 24px 60px oklch(0.215 0.055 257 / .22); aspect-ratio: 16 / 9; }\n" +
  ".hero-video .yt, .hero-video iframe { display: block; width: 100%; height: 100%; border: 0; padding: 0; margin: 0; background: #000; cursor: pointer; position: relative; }\n" +
  ".hero-video .yt img { width: 100%; height: 100%; object-fit: cover; display: block; }\n" +
  ".hero-video .play { position: absolute; inset: 0; display: grid; place-items: center; }\n" +
  ".hero-video .play svg { width: 76px; height: 54px; filter: drop-shadow(0 4px 14px rgb(0 0 0 / .45)); transition: transform .15s; }\n" +
  ".hero-video .yt:hover .play svg, .hero-video .yt:focus-visible .play svg { transform: scale(1.08); }\n" +
  ".hero-video .yt:focus-visible { outline: 3px solid var(--teal); outline-offset: -3px; }\n" +
  "@media (max-width: 640px) { .hero.has-video { padding-block: 22px 44px; } .hero.has-video .inner { gap: 14px; } .hero.has-video .eyebrow { font-size: 12px; padding: 6px 14px; } .hero.has-video h1 { font-size: clamp(26px, 7.4vw, 34px); } .hero.has-video .sub { font-size: 16px; } .hero-video { border-radius: 12px; margin-inline: -4px; width: calc(100% + 8px); } .hero-video .play svg { width: 64px; height: 46px; } }\n" +
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
  ".funnel { display: grid; justify-items: center; gap: 6px; margin-top: 18px; }\n" +
  ".fn { width: var(--w); min-height: 74px; display: grid; align-content: center; justify-items: center; text-align: center; gap: 2px; padding: 12px 9%; color: var(--navy); clip-path: polygon(0 0, 100% 0, 96% 100%, 4% 100%); }\n" +
  ".fn .k { font-size: 11px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; opacity: .75; }\n" +
  ".fn b { font-size: clamp(16px, 2vw, 20px); line-height: 1.2; }\n" +
  ".fn p { font-size: 14px; line-height: 1.35; margin: 0; }\n" +
  ".fn.s1 { --w: 100%; background: oklch(0.88 0.06 196); }\n" +
  ".fn.s2 { --w: 88%; background: oklch(0.82 0.08 196); }\n" +
  ".fn.s3 { --w: 76%; background: oklch(0.76 0.10 196); }\n" +
  ".fn.s4 { --w: 64%; background: oklch(0.70 0.11 196); }\n" +
  ".fn.ready { --w: 52%; background: var(--gold-grad); clip-path: polygon(0 0, 100% 0, 88% 100%, 12% 100%); padding-left: 14%; padding-right: 14%; }\n" +
  ".fn-split { width: 70%; display: flex; align-items: center; gap: 10px; margin: 6px 0; font-size: 12px; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; color: var(--teal-d); }\n" +
  ".fn-split::before, .fn-split::after { content: ''; flex: 1; border-top: 2px dashed var(--border); }\n" +
  ".fn-split span { white-space: nowrap; text-align: center; }\n" +
  ".fn-split .r { color: oklch(0.55 0.13 75); }\n" +
  "@media (max-width: 640px) { .fn.s2 { --w: 94%; } .fn.s3 { --w: 88%; } .fn.s4 { --w: 82%; } .fn.ready { --w: 76%; } .fn { padding-left: 8%; padding-right: 8%; } .fn-split { width: 100%; font-size: 11px; flex-direction: column; gap: 2px; } .fn-split::before, .fn-split::after { display: none; } }\n" +
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
  ".nets { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; max-width: 960px; margin: 0 auto; }\n" +
  ".net { display: grid; gap: 10px; text-align: center; }\n" +
  ".net b { font-size: 14px; letter-spacing: .06em; text-transform: uppercase; }\n" +
  ".pubs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto; }\n" +
  "@media (max-width: 560px) { .pubs { gap: 10px; } }\n" +
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
  "@media (max-width: 900px) { .split { grid-template-columns: minmax(0, 1fr); } .landers { grid-template-columns: minmax(0, 1fr); max-width: 560px; margin: 0 auto; } }\n" +
  "@media (max-width: 560px) { .nets { gap: 12px; } .banners { grid-template-columns: minmax(0, 1fr); } .phase { grid-template-columns: minmax(0, 1fr); } }\n" +
  /* sticky bar */
  ".sticky { position: fixed; left: 0; right: 0; bottom: 0; z-index: 50; display: flex; justify-content: center; padding: 12px max(16px, env(safe-area-inset-right, 0px)) calc(12px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px)); background: oklch(0.2 0.045 257 / .92); backdrop-filter: blur(8px); transform: translateY(110%); transition: transform .25s ease; }\n" +
  ".sticky.show { transform: none; }\n" +
  ".sticky .cta { padding: 14px 24px; font-size: 14px; }\n" +
  "@media (max-width: 520px) { .cta { width: 100%; justify-content: center; padding: 16px 20px; font-size: 14px; } .bar { grid-template-columns: 92fr 8fr; } .svc, .who, .step { padding: 22px; } }\n" +
  "@media (prefers-reduced-motion: reduce) { .cta, .sticky { transition: none; } }\n";

  css += 
  ".aud { background: var(--bg); }\n" +
  ".ax { display: grid; gap: 14px; }\n" +
  ".ax-ctl { display: grid; grid-template-columns: 150px minmax(0, 1.3fr) minmax(0, 1.6fr) 170px; gap: 10px; align-items: end; }\n" +
  ".ax-ctl label { display: grid; gap: 6px; min-width: 0; font-size: 12px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); }\n" +
  ".ax-ctl select, .ax-ctl input { width: 100%; min-width: 0; font: inherit; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; color: var(--ink); background: var(--card); border: 1.5px solid var(--border); border-radius: 12px; padding: 12px 14px; height: 48px; }\n" +
  ".ax-ctl select:focus-visible, .ax-ctl input:focus-visible, .ax button:focus-visible { outline: 3px solid var(--teal); outline-offset: 2px; }\n" +
  ".ax-ex { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; font-size: 13px; color: var(--muted); }\n" +
  ".ax-ex button { font: inherit; font-size: 13px; font-weight: 600; color: var(--teal-d); background: var(--card); border: 1px solid var(--border); border-radius: 999px; padding: 5px 12px; cursor: pointer; }\n" +
  ".ax-ex button:hover { border-color: var(--teal); }\n" +
  ".ax-meta { font-size: 14px; color: var(--muted); min-height: 1.4em; }\n" +
  ".ax-meta b { color: var(--ink); }\n" +
  ".ax-box { background: var(--card); border: 1px solid var(--border); border-radius: var(--r); overflow: hidden; }\n" +
  ".ax-head, .ax-row { display: grid; grid-template-columns: minmax(0, 1fr) 104px 104px 88px 112px; gap: 12px; align-items: center; padding: 14px 18px; }\n" +
  ".ax-head { font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); background: oklch(0.975 0.01 198); border-bottom: 1px solid var(--border); }\n" +
  ".ax-head span:not(:first-child) { text-align: right; }\n" +
  ".ax-list { list-style: none; margin: 0; padding: 0; }\n" +
  ".ax-row { border-bottom: 1px solid var(--border); }\n" +
  ".ax-row:last-child { border-bottom: 0; }\n" +
  ".ax-row.on { background: oklch(0.97 0.035 196); }\n" +
  ".ax-seg { min-width: 0; display: grid; gap: 3px; }\n" +
  ".ax-seg b { font-size: 15px; line-height: 1.35; overflow-wrap: anywhere; }\n" +
  ".ax-path { font-size: 12px; color: var(--muted); overflow-wrap: anywhere; }\n" +
  ".ax-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 3px; }\n" +
  ".ax-chips span { font-size: 11px; font-weight: 700; padding: 2px 9px; border-radius: 999px; background: oklch(0.95 0.03 198); color: var(--teal-d); }\n" +
  ".ax-chips span.pv { background: oklch(0.95 0.01 250); color: var(--muted); font-weight: 600; }\n" +
  ".ax-n { text-align: right; font-variant-numeric: tabular-nums; font-weight: 700; font-size: 15px; }\n" +
  ".ax-n.dim { color: var(--muted); font-weight: 500; }\n" +
  ".ax-act { display: flex; flex-direction: column; gap: 6px; align-items: flex-end; }\n" +
  ".ax-add { font: inherit; font-size: 13px; font-weight: 800; cursor: pointer; border-radius: 999px; padding: 8px 14px; border: 1.5px solid var(--navy); background: transparent; color: var(--navy); white-space: nowrap; }\n" +
  ".ax-add[aria-pressed=\"true\"] { background: var(--navy); color: var(--gold); }\n" +
  ".ax-info { font: inherit; font-size: 12px; font-weight: 600; color: var(--teal-d); background: none; border: 0; padding: 2px 0; cursor: pointer; text-decoration: underline; text-underline-offset: 2px; }\n" +
  ".ax-desc { grid-column: 1 / -1; margin: 0; font-size: 14px; color: var(--muted); background: oklch(0.975 0.01 198); border-radius: 10px; padding: 10px 14px; }\n" +
  ".ax-empty { padding: 28px 18px; text-align: center; color: var(--muted); }\n" +
  ".ax-empty b { color: var(--ink); }\n" +
  ".ax-more { justify-self: center; font: inherit; font-weight: 800; font-size: 14px; letter-spacing: .04em; cursor: pointer; border-radius: 999px; padding: 12px 26px; border: 1.5px solid var(--border); background: var(--card); color: var(--ink); }\n" +
  ".ax-more:hover { border-color: var(--teal); }\n" +
  ".ax-tray { position: sticky; bottom: calc(14px + env(safe-area-inset-bottom, 0px)); z-index: 5; background: var(--navy); color: var(--navy-ink); border-radius: var(--r); padding: 16px 18px; display: grid; gap: 12px; box-shadow: 0 20px 50px oklch(0.2 0.045 257 / .35); }\n" +
  ".ax-tray-h { display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between; }\n" +
  ".ax-tray-h b { font-size: 17px; }\n" +
  ".ax-tray-h b span { color: var(--gold); }\n" +
  ".ax-tray-h .tools { display: flex; gap: 8px; }\n" +
  ".ax-tray-h .tools button { font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; border-radius: 999px; padding: 7px 14px; border: 1px solid oklch(1 0 0 / .25); background: transparent; color: var(--navy-ink); }\n" +
  ".ax-tray ol { margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: 8px; max-height: 132px; overflow: auto; }\n" +
  ".ax-tray li { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; background: oklch(1 0 0 / .08); border: 1px solid oklch(1 0 0 / .14); border-radius: 999px; padding: 5px 6px 5px 12px; max-width: 100%; }\n" +
  ".ax-tray li span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n" +
  ".ax-tray li em { font-style: normal; color: var(--gold); font-size: 11px; font-weight: 700; }\n" +
  ".ax-tray li button { flex: none; width: 24px; height: 24px; border-radius: 50%; border: 0; cursor: pointer; background: oklch(1 0 0 / .14); color: var(--navy-ink); font-size: 13px; line-height: 1; }\n" +
  ".ax-tray .cta { justify-self: start; }\n" +
  ".ax-tray .hint { font-size: 12px; color: oklch(0.8 0.02 250); }\n" +
  ".ax-note { font-size: 12px; color: var(--muted); max-width: 90ch; }\n" +
  "@media (max-width: 860px) {\n" +
  "  .ax-ctl { grid-template-columns: 1fr 1fr; }\n" +
  "  .ax-ctl .q { grid-column: 1 / -1; order: -1; }\n" +
  "  .ax-head { display: none; }\n" +
  "  .ax-row { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; padding: 16px; }\n" +
  "  .ax-seg { grid-column: 1 / -1; }\n" +
  "  .ax-n { text-align: left; font-size: 14px; }\n" +
  "  .ax-n::before { content: attr(data-l); display: block; font-size: 10px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); }\n" +
  "  .ax-act { grid-column: 1 / -1; flex-direction: row; justify-content: space-between; align-items: center; }\n" +
  "  .ax-tray { bottom: calc(84px + env(safe-area-inset-bottom, 0px)); }\n" +
  "  .ax-tray .cta { justify-self: stretch; justify-content: center; }\n" +
  "}\n" +
  ".axt { display: grid; gap: 14px; }\n" +
  ".axt-strip { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; -webkit-overflow-scrolling: touch; }\n" +
  ".axt-strip button { flex: none; font: inherit; font-size: 14px; font-weight: 700; cursor: pointer; white-space: nowrap; border-radius: 999px; padding: 9px 16px; border: 1.5px solid var(--border); background: var(--card); color: var(--ink); }\n" +
  ".axt-strip button:hover { border-color: var(--teal); }\n" +
  ".axt-strip button[aria-selected=\"true\"] { background: var(--navy); border-color: var(--navy); color: var(--gold); }\n" +
  ".axt-strip button:focus-visible, .axt th button:focus-visible { outline: 3px solid var(--teal); outline-offset: 2px; }\n" +
  ".axt-strip.sub button { font-size: 13px; font-weight: 600; padding: 7px 14px; }\n" +
  ".axt-strip.sub button[aria-selected=\"true\"] { background: var(--teal-d); border-color: var(--teal-d); color: #fff; }\n" +
  ".axt-strip button small { font-weight: 600; opacity: .7; margin-left: 4px; }\n" +
  ".axt-meta { font-size: 14px; color: var(--muted); min-height: 1.4em; }\n" +
  ".axt-meta b { color: var(--ink); }\n" +
  ".axt-wrap { background: var(--card); border: 1px solid var(--border); border-radius: var(--r); overflow: auto; max-height: 640px; }\n" +
  ".axt table { width: 100%; min-width: 760px; border-collapse: collapse; font-size: 14px; }\n" +
  ".axt th, .axt td { text-align: left; padding: 11px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }\n" +
  ".axt th { position: sticky; top: 0; z-index: 2; background: oklch(0.975 0.01 198); font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); white-space: nowrap; }\n" +
  ".axt th button { all: unset; cursor: pointer; }\n" +
  ".axt th button::after { content: \" ↕\"; opacity: .4; }\n" +
  ".axt th[aria-sort=\"descending\"] button::after { content: \" ↓\"; opacity: 1; }\n" +
  ".axt th[aria-sort=\"ascending\"] button::after { content: \" ↑\"; opacity: 1; }\n" +
  ".axt th.num, .axt td.num { text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }\n" +
  ".axt td.num { font-weight: 700; }\n" +
  ".axt td.num.dim { color: var(--muted); font-weight: 500; }\n" +
  ".axt td.seg b { display: block; font-size: 14px; }\n" +
  ".axt td.seg span { display: block; font-size: 12px; color: var(--muted); }\n" +
  ".axt td.pv { font-size: 13px; color: var(--muted); white-space: nowrap; }\n" +
  ".axt tbody tr:hover td { background: oklch(0.985 0.012 196); }\n" +
  ".axt tbody tr:last-child td { border-bottom: 0; }\n" +
  ".axt-empty { padding: 28px; text-align: center; color: var(--muted); }\n" +
  ".axt td.seg, .axt th:first-child { position: sticky; left: 0; z-index: 1; background: var(--card); box-shadow: 1px 0 0 var(--border); }\n" +
  ".axt th:first-child { z-index: 3; background: oklch(0.975 0.01 198); }\n" +
  ".axt .cta-row { margin-top: 10px; }\n" +
  "@media (max-width: 640px) { .axt-wrap { max-height: 70vh; } .axt th, .axt td { padding: 10px 12px; } .axt table { min-width: 640px; } .axt td.seg, .axt th:first-child { width: 160px; min-width: 160px; max-width: 160px; } .axt td.seg b { font-size: 13px; } .axt td.seg span { display: none; } }\n" +
  "";

  var modalCss = "#tt-modal, #tt-modal * { box-sizing: border-box; }\n" +
  "#tt-optin > [slot=heroform] iframe { display: block; width: 100%; height: " + C.form.height + "px; border: none; border-radius: 4px; }\n" +
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
      if (h.form) {
        return '<section class="hero"><div class="wrap"><div class="inner has-form"><div class="copy">' + (h.eyebrow ? '<p class="eyebrow">' + esc(h.eyebrow) + "</p>" : "") +
          "<h1>" + hl(h.headline) + '</h1><p class="sub">' + esc(h.sub) + "</p>" + (h.note ? '<p class="note">' + esc(h.note) + "</p>" : "") +
          '<div class="proof">' + (h.proof || []).map(function (p) { return "<span>" + check() + esc(p) + "</span>"; }).join("") + "</div></div>" +
          '<div class="hero-form" id="form"><div class="hf-head"><b>' + esc(C.form.title) + "</b><p>" + esc(C.form.sub) + '</p></div><div class="hf-body"><slot name="heroform"></slot></div></div></div></div></section>';
      }
      // hero.video: YouTube id. Shows a light thumbnail first; the player loads on tap (fast on phones).
      var vid = h.video ? '<div class="hero-video"><button class="yt" type="button" data-yt="' + esc(h.video) + '" aria-label="Play video: ' + esc(h.videoTitle || h.headline.replace(/\[\[|\]\]/g, "")) + '">' +
        '<img src="https://i.ytimg.com/vi/' + esc(h.video) + '/maxresdefault.jpg" alt="" loading="eager" fetchpriority="high" onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + esc(h.video) + '/hqdefault.jpg\'">' +
        '<span class="play" aria-hidden="true"><svg viewBox="0 0 68 48"><path d="M66.5 7.7a8.5 8.5 0 0 0-6-6C55.3.3 34 .3 34 .3s-21.3 0-26.5 1.4a8.5 8.5 0 0 0-6 6C.1 13 .1 24 .1 24s0 11 1.4 16.3a8.5 8.5 0 0 0 6 6C12.7 47.7 34 47.7 34 47.7s21.3 0 26.5-1.4a8.5 8.5 0 0 0 6-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z" fill="#f00"/><path d="M27 34.3 44.8 24 27 13.7z" fill="#fff"/></svg></span></button></div>' : "";
      var proof = (h.proof || []).length ? '<div class="proof">' + h.proof.map(function (p) { return "<span>" + check() + esc(p) + "</span>"; }).join("") + "</div>" : "";
      return '<section class="hero' + (h.video ? " has-video" : "") + '"><div class="wrap"><div class="inner">' + (h.eyebrow ? '<p class="eyebrow">' + esc(h.eyebrow) + "</p>" : "") +
        "<h1>" + hl(h.headline) + "</h1>" + vid + '<p class="sub">' + esc(h.sub) + "</p>" + (h.note ? '<p class="note">' + esc(h.note) + "</p>" : "") + (h.cta === false ? "" : cta(C.cta, "hero")) +
        proof + "</div></div></section>";
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
        '<div class="funnel" role="list" aria-label="The buyer funnel, from unaware to ready to buy">' +
        a.stages.map(function (x, i) { return '<div class="fn s' + (i + 1) + '" role="listitem"><span class="k">Stage ' + (i + 1) + "</span><b>" + esc(x.name) + "</b><p>" + esc(x.desc) + "</p></div>"; }).join("") +
        '<div class="fn-split" aria-hidden="true"><span>&#9650; 97% &middot; where I find your buyers</span><span class="r">3% ready now &#9660;</span></div>' +
        '<div class="fn ready" role="listitem"><span class="k">Stage ' + (a.stages.length + 1) + ' &middot; the 3%</span><b>' + esc(a.ready.name) + "</b><p>" + esc(a.ready.desc) + "</p></div></div>" +
        '</div><div class="cta-row">' + cta(C.cta, "awareness") + "</div></div></section>";
    },
    networks: function (n) {
      return '<section class="light" style="padding-top:0"><div class="wrap">' + head(n) + '<div class="nets">' +
        n.items.map(function (x) { return '<div class="net"><div class="shot">' + img(x.img, x.name + " ad placement", "networks") + "</div><b>" + esc(x.name) + "</b></div>"; }).join("") + "</div></div></section>";
    },
    publishers: function (p) {
      return '<section class="on-navy"><div class="wrap">' + head(p, true) + '<div class="pubs">' + p.images.map(function (f, i) { return '<div class="shot">' + img(f, p.alt + " " + (i + 1), "publishers") + "</div>"; }).join("") + '</div><div class="cta-row">' + cta(C.cta, "publishers") + "</div></div></section>";
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
    audiences: function (a) {
      if (a.view !== "explorer") {
        return '<section class="aud" id="audiences"><div class="wrap">' + head({ tag: a.tag, headline: a.headline, sub: a.tableSub || a.sub }) +
          '<div class="axt" data-axt><div class="axt-strip" role="tablist" aria-label="Audience categories" data-cats></div>' +
          '<div class="axt-strip sub" role="tablist" aria-label="Audience tabs" data-tabs></div>' +
          '<p class="axt-meta" aria-live="polite">Loading 5,300+ audiences…</p>' +
          '<div class="axt-wrap" role="tabpanel"><table><thead><tr>' +
            '<th scope="col" data-k="name"><button type="button">Audience segment</button></th><th scope="col" data-k="prov"><button type="button">Data provider</button></th>' +
            '<th scope="col" class="num" data-k="ids" aria-sort="descending"><button type="button">Reach (IDs)</button></th><th scope="col" class="num" data-k="per"><button type="button">Persons</button></th>' +
            '<th scope="col" class="num" data-k="hh"><button type="button">Households</button></th><th scope="col" class="num" data-k="ctv"><button type="button">CTV</button></th>' +
          '</tr></thead><tbody></tbody></table></div>' +
          '<div class="cta-row">' + cta(C.cta, "audiences-table") + "</div>" +
          (a.note ? '<p class="ax-note">' + esc(a.note) + "</p>" : "") +
          "</div></div></section>";
      }
      return '<section class="aud" id="audiences"><div class="wrap">' + head(a) +
        '<div class="ax" data-ax><div class="ax-ctl">' +
          '<label><span>Type</span><select data-f="type" aria-label="Business or consumer audiences"><option value="">B2B + B2C</option><option value="B2B">B2B only</option><option value="B2C">B2C only</option></select></label>' +
          '<label><span>Audience category</span><select data-f="tab" aria-label="Audience category"><option value="">All categories</option></select></label>' +
          '<label class="q"><span>Search</span><input type="search" data-f="q" placeholder="Search any audience, title or interest" autocomplete="off" aria-label="Search audiences"></label>' +
          '<label><span>Sort by</span><select data-f="sort" aria-label="Sort audiences"><option value="featured">Featured mix</option><option value="ids">Largest reach</option><option value="hh">Most households</option><option value="ctv">Most CTV reach</option><option value="az">A to Z</option></select></label>' +
        '</div>' +
        (a.examples && a.examples.length ? '<div class="ax-ex"><span>Try:</span>' + a.examples.map(function (x) { return '<button type="button" data-ex="' + esc(x) + '">' + esc(x) + "</button>"; }).join("") + "</div>" : "") +
        '<p class="ax-meta" aria-live="polite">Loading 5,300+ audiences…</p>' +
        '<div class="ax-box"><div class="ax-head" aria-hidden="true"><span>Audience segment</span><span>Reach (IDs)</span><span>Households</span><span>CTV</span><span></span></div><ul class="ax-list"></ul></div>' +
        '<button type="button" class="ax-more" hidden>Show more</button>' +
        '<aside class="ax-tray" hidden aria-label="' + esc(a.trayTitle || "Your ICP") + '"><div class="ax-tray-h"><b>' + esc(a.trayTitle || "Your ICP") + ': <span data-n>0</span> layers</b><div class="tools"><button type="button" data-copy>Copy list</button><button type="button" data-clear>Clear</button></div></div><ol></ol>' +
          cta(a.trayCta || C.cta, "audiences-icp") + '<p class="hint">Your list shows up in the booking form so we can build it together.</p></aside>' +
        (a.note ? '<p class="ax-note">' + esc(a.note) + "</p>" : "") +
        "</div></div></section>";
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
        (fi.bio ? '<p class="bio"><b>About:</b> ' + esc(fi.bio) + "</p>" : "") + "</div></div></section>";
    }
  };
  function html() {
    var out = (C.order || Object.keys(R)).filter(function (k) { return R[k] && C[k]; }).map(function (k) { return R[k](C[k]); }).join("");
    if (C.stickyBar) out += '<div class="sticky" aria-hidden="true">' + cta(C.cta, "sticky") + "</div>";
    out += '<div class="lb" hidden role="dialog" aria-modal="true" aria-label="Image viewer"><div class="bar-top"><button type="button" data-lb="close" aria-label="Close image">✕</button></div><div class="stage-img"><img alt=""></div><div class="nav"><button type="button" data-lb="-1" aria-label="Previous image">←</button><button type="button" data-lb="1" aria-label="Next image">→</button></div></div>';
    return out;
  }

  /* ======================= audience explorer ======================= */
  function fmt(n) {
    if (!n) return "—";
    if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    return String(n);
  }
  function initAudienceTabs(ROOT) {
    var box = ROOT.querySelector("[data-axt]");
    if (!box || !C.audiences) return;
    var D = null, cat = 0, tab = -1, key = "ids", dir = -1;
    var catsEl = box.querySelector("[data-cats]"), tabsEl = box.querySelector("[data-tabs]"), meta = box.querySelector(".axt-meta"), tb = box.querySelector("tbody"), wrap = box.querySelector(".axt-wrap");
    function load() {
      if (D) return; D = {};
      fetch(C.audiences.dataUrl).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (j) {
        D = j;
        D.byTab = j.tabs.map(function () { return []; });
        j.rows.forEach(function (r) { var parts = r[2].split(">").map(function (x) { return x.trim(); }); D.byTab[r[0]].push({ name: parts[parts.length - 1], path: parts.slice(0, -1).join(" › "), prov: r[1], ids: r[3], per: r[4], hh: r[5], ctv: r[6] }); });
        catsEl.innerHTML = j.cats.map(function (c, i) { var n = 0; j.tabs.forEach(function (t, ti) { if (t[1] === i) n += t[3]; }); return '<button type="button" role="tab" data-cat="' + i + '" aria-selected="' + (i === 0) + '">' + esc(c[0] + " · " + c[1]) + "<small>" + n.toLocaleString() + "</small></button>"; }).join("");
        pickCat(0);
      }).catch(function () { D = null; meta.innerHTML = "Couldn't load the audience list. <b>Refresh the page</b> or ask me for it on the call."; });
    }
    function pickCat(i) {
      cat = i;
      catsEl.querySelectorAll("[data-cat]").forEach(function (b) { b.setAttribute("aria-selected", String(+b.getAttribute("data-cat") === i)); });
      var first = -1;
      tabsEl.innerHTML = D.tabs.map(function (t, ti) { if (t[1] !== i) return ""; if (first < 0) first = ti; return '<button type="button" role="tab" data-tab="' + ti + '" aria-selected="false">' + esc(t[0]) + "<small>" + t[3] + "</small></button>"; }).join("");
      pickTab(first);
    }
    function pickTab(ti) {
      tab = ti;
      tabsEl.querySelectorAll("[data-tab]").forEach(function (b) { b.setAttribute("aria-selected", String(+b.getAttribute("data-tab") === ti)); });
      draw(); wrap.scrollTop = 0;
    }
    function draw() {
      var rows = (D.byTab[tab] || []).slice();
      rows.sort(function (a, b) { var x = a[key], y = b[key]; return (typeof x === "string" ? x.localeCompare(y) : x - y) * dir; });
      box.querySelectorAll("th[data-k]").forEach(function (th) { var k = th.getAttribute("data-k"); if (k === key) th.setAttribute("aria-sort", dir < 0 ? "descending" : "ascending"); else th.removeAttribute("aria-sort"); });
      tb.innerHTML = rows.length ? rows.map(function (r) {
        return '<tr><td class="seg"><b>' + esc(r.name) + "</b><span>" + esc(r.path) + '</span></td><td class="pv">' + esc(r.prov) + '</td><td class="num">' + fmt(r.ids) + '</td><td class="num' + (r.per ? "" : " dim") + '">' + fmt(r.per) + '</td><td class="num' + (r.hh ? "" : " dim") + '">' + fmt(r.hh) + '</td><td class="num' + (r.ctv ? "" : " dim") + '">' + fmt(r.ctv) + "</td></tr>";
      }).join("") : '<tr><td colspan="6" class="axt-empty">No segments in this tab.</td></tr>';
      var t = D.tabs[tab];
      meta.innerHTML = "<b>" + esc(t[0]) + "</b>: " + rows.length + " segment" + (rows.length === 1 ? "" : "s") + " · " + D.rows.length.toLocaleString() + " audiences across " + D.tabs.length + " tabs";
    }
    box.addEventListener("click", function (e) {
      var c = e.target.closest("[data-cat]"), t = e.target.closest("[data-tab]"), th = e.target.closest("th[data-k]");
      if (c && D && D.tabs) pickCat(+c.getAttribute("data-cat"));
      else if (t && D && D.tabs) pickTab(+t.getAttribute("data-tab"));
      else if (th && D && D.tabs) { var k = th.getAttribute("data-k"); if (k === key) dir = -dir; else { key = k; dir = (k === "name" || k === "prov") ? 1 : -1; } draw(); }
    });
    box.addEventListener("keydown", function (e) {
      var b = e.target.closest('[role="tab"]'); if (!b || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
      var sib = e.key === "ArrowRight" ? b.nextElementSibling : b.previousElementSibling; if (sib) { sib.focus(); sib.click(); e.preventDefault(); }
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: "800px 0px" });
      io.observe(box);
    } else load();
  }
  function initAudiences(ROOT, modal) {
    var box = ROOT.querySelector("[data-ax]");
    if (!box || !C.audiences) return;
    var A = C.audiences, D = null, rows = [], hay = [], shown = 0, list = [], picked = [], timer = 0;
    var el = function (s) { return box.querySelector(s); };
    var fType = el('[data-f="type"]'), fTab = el('[data-f="tab"]'), fQ = el('[data-f="q"]'), fSort = el('[data-f="sort"]');
    var meta = el(".ax-meta"), ul = el(".ax-list"), more = el(".ax-more"), tray = el(".ax-tray");
    var KEY = "tt-icp-v1";
    try { picked = JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { picked = []; }

    function load() {
      if (D) return; D = {};
      fetch(A.dataUrl).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (j) {
        D = j;
        rows = j.rows.map(function (r, i) {
          var parts = r[2].split(">").map(function (x) { return x.trim(); });
          var t = j.tabs[r[0]];
          return { i: i, tab: r[0], tname: t[0], ttype: t[2], prov: r[1], name: parts[parts.length - 1], path: parts.slice(0, -1).join(" › "), ids: r[3], per: r[4], hh: r[5], ctv: r[6], d: r[7], key: t[0] + "|" + r[2] };
        });
        var rk = {}; rows.slice().sort(function (a, b) { return (b.hh || b.ids / 1e3) - (a.hh || a.ids / 1e3); }).forEach(function (r) { rk[r.tab] = (rk[r.tab] || 0) + 1; r.rank = rk[r.tab]; });
        hay = rows.map(function (r) { return (r.name + " " + r.path + " " + r.tname + " " + r.prov + " " + (r.d >= 0 ? j.descs[r.d] : "")).toLowerCase(); });
        fillTabs(); run(); drawTray();
      }).catch(function () {
        D = null; meta.innerHTML = "Couldn't load the audience list. <b>Refresh the page</b> or ask me for it on the call.";
      });
    }
    function fillTabs() {
      var type = fType.value, cur = fTab.value, h = '<option value="">All categories (' + countFor(type, "") + ")</option>";
      D.cats.forEach(function (c, ci) {
        if (type && c[0] !== type) return;
        var opts = D.tabs.map(function (t, ti) { return [t, ti]; }).filter(function (x) { return x[0][1] === ci; });
        h += '<optgroup label="' + esc(c[0] + " · " + c[1]) + '">' + opts.map(function (x) { return '<option value="' + x[1] + '">' + esc(x[0][0]) + " (" + x[0][3] + ")</option>"; }).join("") + "</optgroup>";
      });
      fTab.innerHTML = h;
      if (cur && fTab.querySelector('option[value="' + cur + '"]')) fTab.value = cur;
    }
    function countFor(type) { return rows.filter(function (r) { return !type || r.ttype === type || r.ttype === "B2B+B2C"; }).length.toLocaleString(); }
    function run() {
      if (!D || !D.rows) return;
      var type = fType.value, tab = fTab.value === "" ? -1 : +fTab.value, words = fQ.value.toLowerCase().trim().split(/\s+/).filter(Boolean), sort = fSort.value;
      list = rows.filter(function (r) {
        if (type && r.ttype !== type && r.ttype !== "B2B+B2C") return false;
        if (tab >= 0 && r.tab !== tab) return false;
        for (var w = 0; w < words.length; w++) if (hay[r.i].indexOf(words[w]) < 0) return false;
        return true;
      });
      var k = { ids: "ids", hh: "hh", ctv: "ctv" }[sort];
      list.sort(sort === "featured" ? function (a, b) { return a.rank - b.rank || a.tab - b.tab; } : k ? function (a, b) { return b[k] - a[k]; } : function (a, b) { return a.name.localeCompare(b.name); });
      shown = 0; ul.innerHTML = ""; page();
      var tabs = {}; list.forEach(function (r) { tabs[r.tab] = 1; });
      meta.innerHTML = list.length ? "<b>" + list.length.toLocaleString() + "</b> audience" + (list.length === 1 ? "" : "s") + " in <b>" + Object.keys(tabs).length + "</b> categor" + (Object.keys(tabs).length === 1 ? "y" : "ies") + (words.length ? " matching “" + esc(fQ.value.trim()) + "”" : "") : "";
      if (!list.length) ul.innerHTML = '<li class="ax-empty"><b>No audiences match “' + esc(fQ.value.trim()) + '” here.</b><br>Try a broader word or another category. I can also search 400+ data sources live on our call.</li>';
    }
    function isOn(r) { return picked.some(function (p) { return p.k === r.key; }); }
    function rowHtml(r) {
      var on = isOn(r);
      return '<li class="ax-row' + (on ? " on" : "") + '" data-i="' + r.i + '"><div class="ax-seg"><b>' + esc(r.name) + '</b><span class="ax-path">' + esc(r.path) + '</span><span class="ax-chips"><span>' + esc(r.tname) + '</span><span class="pv">' + esc(r.prov) + "</span></span></div>" +
        '<div class="ax-n" data-l="Reach">' + fmt(r.ids) + '</div><div class="ax-n' + (r.hh ? "" : " dim") + '" data-l="Households">' + fmt(r.hh) + '</div><div class="ax-n' + (r.ctv ? "" : " dim") + '" data-l="CTV">' + fmt(r.ctv) + "</div>" +
        '<div class="ax-act"><button type="button" class="ax-add" aria-pressed="' + on + '" aria-label="' + (on ? "Remove " : "Add ") + esc(r.name) + ' to your ICP">' + (on ? "✓ Added" : "+ Add") + "</button>" +
        (r.d >= 0 ? '<button type="button" class="ax-info" aria-expanded="false">Details</button>' : "") + "</div></li>";
    }
    function page() {
      var n = A.pageSize || 25, next = list.slice(shown, shown + n);
      ul.insertAdjacentHTML("beforeend", next.map(rowHtml).join(""));
      shown += next.length;
      more.hidden = shown >= list.length;
      more.textContent = "Show " + Math.min(n, list.length - shown) + " more (" + (list.length - shown).toLocaleString() + " left)";
    }
    function refresh() { ul.querySelectorAll(".ax-row").forEach(function (li) { var r = rows[+li.getAttribute("data-i")], d = li.querySelector(".ax-desc"); li.outerHTML = rowHtml(r); if (d) showDesc(ul.querySelector('[data-i="' + r.i + '"]'), r); }); }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(picked)); } catch (e) {} }
    function drawTray() {
      tray.hidden = !picked.length;
      el("[data-n]").textContent = picked.length;
      tray.querySelector("ol").innerHTML = picked.map(function (p, i) { return '<li><span title="' + esc(p.n + " (" + p.t + ")") + '">' + esc(p.n) + '</span><em>' + esc(p.t) + '</em><button type="button" data-rm="' + i + '" aria-label="Remove ' + esc(p.n) + '">✕</button></li>'; }).join("");
    }
    function summary() { return picked.map(function (p) { return p.n + " (" + p.t + ", " + p.pv + ", " + fmt(p.ids) + " IDs)"; }).join("\n"); }
    function toggle(r) {
      var at = -1; picked.forEach(function (p, i) { if (p.k === r.key) at = i; });
      if (at >= 0) picked.splice(at, 1); else picked.push({ k: r.key, n: r.name, t: r.tname, pv: r.prov, ids: r.ids });
      save(); drawTray();
      var li = ul.querySelector('[data-i="' + r.i + '"]');
      if (li) { var info = li.querySelector(".ax-desc"); li.outerHTML = rowHtml(r); if (info) { var nli = ul.querySelector('[data-i="' + r.i + '"]'); showDesc(nli, r); } }
      try { window.dataLayer && window.dataLayer.push({ event: at >= 0 ? "tt_icp_remove" : "tt_icp_add", audience: r.name, category: r.tname, icp_size: picked.length }); } catch (e) {}
    }
    function showDesc(li, r) {
      var b = li.querySelector(".ax-info"); if (!b) return;
      var d = li.querySelector(".ax-desc");
      if (d) { d.remove(); b.setAttribute("aria-expanded", "false"); b.textContent = "Details"; return; }
      li.insertAdjacentHTML("beforeend", '<p class="ax-desc">' + esc(D.descs[r.d]) + "</p>");
      b.setAttribute("aria-expanded", "true"); b.textContent = "Hide";
    }
    box.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target : null; if (!t) return;
      var add = t.closest(".ax-add"), info = t.closest(".ax-info"), ex = t.closest("[data-ex]"), rm = t.closest("[data-rm]");
      if (add || info) { var li = t.closest(".ax-row"), r = rows[+li.getAttribute("data-i")]; if (add) toggle(r); else showDesc(li, r); }
      else if (ex) { fQ.value = ex.getAttribute("data-ex"); fTab.value = ""; load(); run(); }
      else if (rm) { picked.splice(+rm.getAttribute("data-rm"), 1); save(); drawTray(); refresh(); }
      else if (t.closest(".ax-more")) page();
      else if (t.closest("[data-clear]")) { picked = []; save(); drawTray(); refresh(); }
      else if (t.closest("[data-copy]")) {
        var txt = "My ICP layers:\n" + summary(), btn = t.closest("[data-copy]");
        var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy list"; }, 1500); };
        if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, function () { window.prompt("Copy your ICP list:", txt); }); else window.prompt("Copy your ICP list:", txt);
      }
      else if (t.closest(".cta")) {
        var p = modal.querySelector("header p");
        if (p && picked.length) p.innerHTML = "<b>Your ICP (" + picked.length + " layers):</b> " + picked.map(function (x) { return esc(x.n); }).join(" · ") + "<br>Add these to the notes field, or just tell me on the call.";
        try { window.dataLayer && window.dataLayer.push({ event: "tt_icp_book", icp_size: picked.length, icp_layers: picked.map(function (x) { return x.n; }).join(" | ") }); } catch (e) {}
        window.TTOptin.icp = picked.slice();
      }
    });
    fType.addEventListener("change", function () { if (D && D.rows) fillTabs(); run(); });
    fTab.addEventListener("change", run);
    fSort.addEventListener("change", run);
    fQ.addEventListener("input", function () { load(); clearTimeout(timer); timer = setTimeout(run, 120); });
    box.addEventListener("focusin", load);
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: "800px 0px" });
      io.observe(box);
    } else load();
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
    function embedJs() {
      if (window.__ttEmbed) return; window.__ttEmbed = true;
      var sc = document.createElement("script"); sc.src = "https://link.msgsndr.com/js/form_embed.js"; document.body.appendChild(sc);
    }
    function formFrame(prefix) {
      var id = C.form.id, fid = prefix + id;
      return '<iframe src="https://api.leadconnectorhq.com/widget/form/' + id + '" id="' + fid + '" data-layout="{\'id\':\'INLINE\'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="' + esc(C.form.name) + '" data-height="' + C.form.height + '" data-layout-iframe-id="' + fid + '" data-form-id="' + id + '" title="' + esc(C.form.name) + '"></iframe>';
    }
    if (C.hero && C.hero.form && ROOT.querySelector(".hero-form")) {
      var hf = document.createElement("div"); hf.setAttribute("slot", "heroform"); hf.innerHTML = formFrame("inline-hero-");
      HOST.appendChild(hf); embedJs();
    }
    function loadForm() {
      if (loaded) return; loaded = true;
      modal.querySelector(".fw").innerHTML = formFrame("inline-tt-"); embedJs();
    }
    function open(src) {
      last = document.activeElement; loadForm(); modal.hidden = false; document.body.style.overflow = "hidden";
      modal.querySelector(".x").focus();
      try { window.dataLayer && window.dataLayer.push({ event: "tt_optin_open", cta_location: src }); } catch (e) {}
    }
    function close() { modal.hidden = true; document.body.style.overflow = ""; if (last && last.focus) last.focus(); }
    ROOT.addEventListener("click", function (e) { var b = e.target.closest && e.target.closest(".cta"); if (b) open(b.getAttribute("data-src") || "cta"); });
    // hero video: swap the thumbnail for the YouTube player on tap
    ROOT.addEventListener("click", function (e) {
      var y = e.target.closest && e.target.closest(".yt"); if (!y) return;
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(y.getAttribute("data-yt")) + "?autoplay=1&playsinline=1&rel=0&modestbranding=1";
      f.title = y.getAttribute("aria-label").replace(/^Play video: /, "");
      f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      f.allowFullscreen = true; f.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      y.replaceWith(f);
      try { window.dataLayer && window.dataLayer.push({ event: "tt_video_play", video_id: y.getAttribute("data-yt") }); } catch (err) {}
    });
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
    if (C.audiences && C.audiences.view !== "explorer") initAudienceTabs(ROOT); else initAudiences(ROOT, modal);

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
