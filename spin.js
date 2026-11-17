/* Spin the Niche widget, Traffic & Targeting with Alvin Reyes. Built 2026-11-17 15:43.
   GHL snippet (never changes):
   <div id="spin-the-niche"></div>
   <script src="https://YOUR-HOST/spin.js" async></script>
*/
(function () {
  if (window.__spinTheNiche) return; window.__spinTheNiche = true;
  var VERSION = "2026-11-17 15:43";
  function boot() {
    var HOST = document.getElementById("spin-the-niche");
    if (!HOST) { HOST = document.createElement("div"); HOST.id = "spin-the-niche";
      var cs = document.currentScript; (cs && cs.parentNode ? cs.parentNode.insertBefore(HOST, cs) : document.body.appendChild(HOST)); }
    if (!document.querySelector('link[data-stn-fonts]')) {
      var lf = document.createElement("link"); lf.rel = "stylesheet"; lf.href = "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap"; lf.setAttribute("data-stn-fonts", "");
      document.head.appendChild(lf);
    }
    var ms = document.createElement("style"); ms.textContent = "#stn-modal, #stn-modal * { box-sizing: border-box; }\n#stn-modal { font-family: Inter, system-ui, sans-serif; }\n#stn-modal { position: fixed; inset: 0; z-index: 1000; display: grid; place-items: center; padding: max(16px, env(safe-area-inset-top, 0px)) max(16px, env(safe-area-inset-right, 0px)) max(16px, env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px)); background: rgba(4,7,16,.78); backdrop-filter: blur(4px); }\n\n#stn-modal[hidden] { display: none !important; }\n\n#stn-modal .dialog { position: relative; width: min(560px, 100%); max-height: 100%; overflow: auto; background: #FFFFFF; color: #101828; border-radius: 18px; box-shadow: 0 30px 80px rgba(0,0,0,.6); animation: rise .28s cubic-bezier(.2,1.2,.4,1); }\n\n#stn-modal .dialog header { background: #0A0F1E; color: #F3F5FB; padding: 22px 56px 18px 22px; border-bottom: 5px solid #FFE500; }\n\n#stn-modal .dialog header .k { font-family: \"JetBrains Mono\", ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: #FFE500; }\n\n#stn-modal .dialog header h2 { margin: 6px 0 4px; font-family: \"Archivo Black\", \"Arial Black\", Impact, sans-serif; font-size: 24px; line-height: 1.1; text-transform: uppercase; }\n\n#stn-modal .dialog header p { margin: 0; font-size: 14px; color: #C9CFE3; }\n\n#stn-modal .dialog .formwrap { padding: 8px 10px 4px; min-height: 595px; }\n\n#stn-modal .dialog iframe { display: block; width: 100%; height: 595px; border: none; border-radius: 4px; }\n\n@keyframes rise { from { transform: translateY(24px) scale(.97); opacity: 0; } to { transform: none; opacity: 1; } }\n\n#stn-modal .closex { position: absolute; top: 14px; right: 14px; width: 36px; height: 36px; border-radius: 50%; border: 2px solid #F3F5FB; background: transparent; color: #F3F5FB; font-size: 20px; line-height: 1; cursor: pointer; }\n\n#stn-modal .closex:hover { background: #FFE500; color: #000; border-color: #FFE500; }\n\n#stn-modal .closex:focus-visible { outline: 3px solid #FFE500; outline-offset: 2px; }\n\n\n\n@media (prefers-reduced-motion: reduce) { #stn-modal .dialog { animation: none; } }\n"; document.head.appendChild(ms);
    var holder = document.createElement("div"); holder.innerHTML = "<div class=\"modal\" id=\"ctaModal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"ctaTitle\" hidden>\n    <div class=\"dialog\">\n      <header>\n        <div class=\"k\" id=\"ctaKicker\">Traffic &amp; Targeting with Alvin Reyes</div>\n        <h2 id=\"ctaTitle\">Get a traffic &amp; targeting strategy call</h2>\n        <p id=\"ctaSub\">Tell me your niche and your ideal buyer. I'll show you how I'd find them off Meta and Google.</p>\n      </header>\n      <button class=\"closex\" id=\"ctaClose\" type=\"button\" aria-label=\"Close form\">\u2715</button>\n      <div class=\"formwrap\" id=\"formWrap\"></div>\n    </div>\n  </div>";
    var modal = holder.firstElementChild; modal.id = "stn-modal"; modal.setAttribute("data-id", "ctaModal");
    document.body.appendChild(modal);
    var ROOT = HOST.shadowRoot || HOST.attachShadow({ mode: "open" });
    ROOT.innerHTML = "<style>" + ":host { display: block; }\n\n*, *::before, *::after { box-sizing: border-box; }\n[hidden] { display: none !important; }\n/* Layout: on-air stage. Brand bar on top, wheel tabs, then wheel (left) + build brief (right); stacks on phones.\n   Deliberately single-theme (dark studio set) because it is filmed for YouTube. */\n:host {\n  color-scheme: dark;\n  --stage: #0A0F1E;\n  --stage-2: #10172D;\n  --panel: #151D38;\n  --line: #26305A;\n  --ink: #F3F5FB;\n  --muted: #A3ABC8;\n  --brand: #FFE500;\n  --brand-ink: #14110A;\n  --hue: #19C6A7;      /* current wheel color, set by JS */\n  --hue-deep: #0E7F6C;\n  --display: \"Archivo Black\", \"Arial Black\", Impact, sans-serif;\n  --body: \"Inter\", system-ui, -apple-system, \"Segoe UI\", sans-serif;\n  --mono: \"JetBrains Mono\", ui-monospace, Menlo, monospace;\n}\n.stn {\n  background: var(--stage); /* flat #0A0F1E to match the GHL section */\n  color: var(--ink);\n  font-family: var(--body);\n  font-size: 15px;\n  line-height: 1.5;\n  padding-left: max(16px, env(safe-area-inset-left, 0px));\n  padding-right: max(16px, env(safe-area-inset-right, 0px));\n  padding-block: 20px 40px;\n}\n.wrap { max-width: 1240px; margin: 0 auto; display: grid; gap: 20px; }\n\n/* brand bar */\n.brandbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }\n.logo { display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap; }\n.logo .show { font-family: var(--display); font-size: clamp(28px, 4.4vw, 46px); line-height: 1; letter-spacing: .01em; text-transform: uppercase; }\n.logo .show em { font-style: normal; color: var(--brand); }\n.logo .host { font-family: var(--mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }\n.logo .host b { color: var(--ink); }\n.tools { display: flex; gap: 8px; flex-wrap: wrap; }\n.chipbtn {\n  font: 600 13px/1 var(--body); color: var(--ink); background: transparent;\n  border: 1px solid var(--line); border-radius: 999px; padding: 9px 14px; cursor: pointer;\n}\n.vol { display: flex; align-items: center; gap: 8px; font: 600 13px/1 var(--body); color: var(--muted); }\n.vol input { width: 96px; accent-color: var(--brand); }\n/* call-to-action: bright orange with white bold text; dark edge + glow so it pops on navy */\n.ctarow { display: flex; justify-content: center; }\n.cta {\n  display: inline-flex; align-items: center; justify-content: center; gap: 12px; cursor: pointer;\n  font-family: var(--display); font-size: 19px; letter-spacing: .03em; text-transform: uppercase;\n  color: #FFFFFF; background: #FF5A00; border: 0; border-radius: 14px; padding: 17px 30px;\n  text-shadow: 0 1px 0 rgba(0,0,0,.25);\n  box-shadow: 0 6px 0 #B33F00, 0 0 0 0 rgba(255,90,0,.6);\n  animation: halo 2.4s ease-in-out infinite; transition: transform .08s, background .15s;\n}\n.cta .arrow { display: inline-grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: #FFFFFF; color: #FF5A00; font-size: 17px; text-shadow: none; }\n.cta:hover { background: #FF6F1F; }\n.cta:active { transform: translateY(4px); box-shadow: 0 2px 0 #B33F00; }\n.cta:focus-visible { outline: 3px solid #FFFFFF; outline-offset: 4px; }\n.cta.big { width: 100%; font-size: 18px; padding: 16px 20px; }\n@keyframes halo { 0%,100% { box-shadow: 0 6px 0 #B33F00, 0 0 0 0 rgba(255,90,0,.55); } 50% { box-shadow: 0 6px 0 #B33F00, 0 0 0 12px rgba(255,90,0,0); } }\n@media (max-width: 420px) { .cta { font-size: 16px; padding: 15px 18px; width: 100%; } }\n.ctabox { display: grid; gap: 10px; padding: 18px; border-radius: 14px; background: var(--stage); border: 1px dashed var(--line); }\n.ctabox p { margin: 0; color: var(--muted); font-size: 14px; }\n.ctabox p b { color: var(--ink); }\n/* pop-up form */\n@media (prefers-reduced-motion: reduce) { .cta, .dialog { animation: none; } }\n.chipbtn:hover { border-color: var(--muted); }\n.chipbtn[aria-pressed=\"true\"] { background: var(--ink); color: var(--stage); border-color: var(--ink); }\n.chipbtn:focus-visible, .tab:focus-visible, .spin:focus-visible, .act:focus-visible { outline: 3px solid var(--brand); outline-offset: 3px; }\n\n/* wheel tabs */\n.tabs { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }\n.tab {\n  display: grid; gap: 2px; text-align: left; cursor: pointer; padding: 12px 14px; border-radius: 12px;\n  background: var(--panel); border: 2px solid transparent; color: var(--ink);\n}\n.tab .t-name { font-family: var(--display); font-size: 16px; text-transform: uppercase; letter-spacing: .02em; }\n.tab .t-meta { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: .06em; }\n.tab .t-key { font-family: var(--mono); font-size: 11px; color: var(--muted); float: right; }\n.tab[aria-selected=\"true\"] { border-color: var(--tab-hue); box-shadow: inset 0 -4px 0 var(--tab-hue); }\n.tab .dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: var(--tab-hue); margin-right: 8px; vertical-align: 1px; }\n\n/* main stage */\n.stage { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 28px; align-items: start; }\n.wheelbox { display: grid; justify-items: center; gap: 18px; }\n.wheelwrap { position: relative; width: min(600px, 100%); aspect-ratio: 1; max-width: 100%; }\ncanvas#wheel { width: 100%; height: 100%; display: block; }\n.pointer {\n  position: absolute; left: 50%; top: -6px; width: 44px; height: 56px; transform: translateX(-50%); transform-origin: 50% 12px;\n  filter: drop-shadow(0 4px 6px rgba(0,0,0,.5)); z-index: 2; transition: transform .08s ease-out;\n}\n.pointer svg { width: 100%; height: 100%; display: block; }\n.hub {\n  position: absolute; inset: 0; margin: auto; width: 22%; aspect-ratio: 1; border-radius: 50%;\n  background: var(--stage); border: 5px solid var(--brand); display: grid; place-items: center; text-align: center;\n  font-family: var(--display); font-size: clamp(10px, 1.6vw, 15px); line-height: 1.05; text-transform: uppercase; color: var(--ink);\n  box-shadow: 0 0 0 6px rgba(0,0,0,.35);\n}\n.hub span { color: var(--brand); display: block; }\n.controls { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: center; }\n.spin {\n  font-family: var(--display); font-size: 26px; letter-spacing: .06em; text-transform: uppercase;\n  background: var(--brand); color: var(--brand-ink); border: 0; border-radius: 14px; padding: 16px 44px; cursor: pointer;\n  box-shadow: 0 6px 0 #B9A400, 0 14px 30px rgba(255,229,0,.18); transition: transform .08s, box-shadow .08s;\n}\n.spin:active { transform: translateY(4px); box-shadow: 0 2px 0 #B9A400; }\n.spin:disabled { opacity: .55; cursor: default; }\n.hint { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: .08em; text-transform: uppercase; }\n\n/* brief panel */\n.brief { background: var(--panel); border: 1px solid var(--line); border-radius: 18px; padding: 24px; display: grid; gap: 18px; min-width: 0; }\n.eyebrow { font-family: var(--mono); font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--hue); }\n.niche { font-family: var(--display); font-size: clamp(30px, 4vw, 48px); line-height: 1.02; text-transform: uppercase; text-wrap: balance; margin: 0; }\n.brief.reveal .niche { animation: pop .5s cubic-bezier(.2,1.4,.4,1); }\n@keyframes pop { from { transform: scale(.85); opacity: 0; } to { transform: none; opacity: 1; } }\n.row { display: flex; gap: 8px; flex-wrap: wrap; }\n.pill { font-family: var(--mono); font-size: 12px; padding: 6px 10px; border-radius: 8px; background: var(--stage); border: 1px solid var(--line); color: var(--ink); }\n.pill b { color: var(--brand); font-weight: 700; }\n.sec h3 { margin: 0 0 8px; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); font-weight: 600; }\n.buyer { margin: 0; font-size: 17px; line-height: 1.5; max-width: 62ch; }\n.layers { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }\n.layers li { display: grid; grid-template-columns: 112px minmax(0, 1fr); gap: 12px; align-items: baseline; padding: 10px 12px; background: var(--stage); border-radius: 10px; }\n.layers .k { font-family: var(--mono); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: var(--hue); }\n.offmeta { margin: 0; padding: 14px 16px; border-radius: 12px; background: color-mix(in srgb, var(--brand) 10%, var(--stage)); border: 1px solid color-mix(in srgb, var(--brand) 40%, transparent); }\n.offmeta b { color: var(--brand); }\n.actions { display: flex; gap: 10px; flex-wrap: wrap; }\n.act { font: 600 14px/1 var(--body); padding: 11px 16px; border-radius: 10px; cursor: pointer; border: 1px solid var(--line); background: var(--stage); color: var(--ink); }\n.act.primary { background: var(--hue); border-color: var(--hue); color: #071019; }\n.act:hover { filter: brightness(1.1); }\n.toast { font-family: var(--mono); font-size: 12px; color: var(--brand); min-height: 1em; }\n.lineup { display: flex; flex-wrap: wrap; gap: 6px; }\n.lineup span { font-size: 13px; padding: 5px 10px; border-radius: 999px; background: var(--stage); border: 1px solid var(--line); }\n.lineup span.done { color: var(--muted); text-decoration: line-through; }\n\n/* clean mode for recording: hides everything except wheel + brief */\n.stn.clean .tools .hide-clean, .stn.clean .hint, .stn.clean .footnote { display: none; }\n.footnote { font-size: 12px; color: var(--muted); max-width: 90ch; }\n\n@media (max-width: 900px) {\n  .stage { grid-template-columns: minmax(0, 1fr); }\n  .tabs { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n@media (max-width: 420px) {\n  .layers li { grid-template-columns: minmax(0, 1fr); gap: 2px; }\n  .spin { padding: 14px 32px; font-size: 22px; }\n}\n@media (prefers-reduced-motion: reduce) {\n  .brief.reveal .niche { animation: none; }\n}\n" + "</style><div class=\"stn\">" + "\n\n<div class=\"wrap\">\n  <header class=\"brandbar\">\n    <div class=\"logo\">\n      <div class=\"show\">Spin the <em>Niche</em></div>\n      <div class=\"host\">Traffic &amp; Targeting with <b>Alvin Reyes</b> \u00b7 off-Meta buyer targeting</div>\n    </div>\n    <div class=\"tools\">\n      <button class=\"chipbtn\" id=\"soundBtn\" aria-pressed=\"true\" type=\"button\">Sound on</button>\n      <label class=\"vol hide-clean\" for=\"vol\">Volume <input id=\"vol\" type=\"range\" min=\"0\" max=\"1\" step=\"0.05\"></label>\n      <button class=\"chipbtn\" id=\"skipBtn\" aria-pressed=\"true\" type=\"button\">Skip covered</button>\n      <button class=\"chipbtn hide-clean\" id=\"cleanBtn\" aria-pressed=\"false\" type=\"button\">Recording mode</button>\n      <button class=\"chipbtn hide-clean\" id=\"fsBtn\" type=\"button\">Fullscreen</button>\n    </div>\n  </header>\n\n  <div class=\"ctarow\"><button class=\"cta\" id=\"ctaTop\" type=\"button\">Get a traffic &amp; targeting strategy call <span class=\"arrow\" aria-hidden=\"true\">\u2192</span></button></div>\n\n  <nav class=\"tabs\" role=\"tablist\" id=\"tabs\"></nav>\n\n  <main class=\"stage\">\n    <section class=\"wheelbox\">\n      <div class=\"wheelwrap\">\n        <div class=\"pointer\" id=\"pointer\" aria-hidden=\"true\">\n          <svg viewBox=\"0 0 44 56\"><path d=\"M22 54 L4 14 A20 20 0 1 1 40 14 Z\" fill=\"#FFE500\" stroke=\"#14110A\" stroke-width=\"3\"/><circle cx=\"22\" cy=\"16\" r=\"6\" fill=\"#14110A\"/></svg>\n        </div>\n        <canvas id=\"wheel\" aria-label=\"Niche wheel\" role=\"img\"></canvas>\n        <div class=\"hub\" id=\"hub\">Spin<span>the niche</span></div>\n      </div>\n      <div class=\"controls\">\n        <button class=\"spin\" id=\"spinBtn\" type=\"button\">Spin</button>\n      </div>\n      <div class=\"hint\">Space = spin \u00b7 1\u20134 = switch wheel \u00b7 C = mark covered</div>\n    </section>\n\n    <section class=\"brief\" id=\"brief\" aria-live=\"polite\"></section>\n  </main>\n\n  <p class=\"footnote\">Ticket sizes are rough planning estimates, and Meta policy notes summarize Meta's targeting limits as of 2025. Check the current rules before quoting them to a client. Covered niches are saved in this browser only. Click Spin once to enable sound.</p>\n</div>\n\n" + "</div>";
    var ON_SCREEN = true;
    try { new IntersectionObserver(function (en) { ON_SCREEN = en[0].intersectionRatio > 0.35; }, { threshold: [0, 0.35, 1] }).observe(HOST); } catch (e) {}
    (function (document) {

const WHEELS = [
  {
    id: "health", name: "Health & Wellness", hue: "#19C6A7", deep: "#0B6B5C", layer3: "Financial",
    offMeta: "Meta removed detailed targeting tied to health conditions in 2022, and since 2025 health and wellness advertisers can't optimize for lower-funnel conversion events. Open-web targeting still reaches health-interest and intent segments from licensed data partners, across top publishers.",
    niches: [
      { n: "GLP-1 Telehealth", s: "GLP-1 Telehealth", t: "$300–$1,500/mo", buyer: "Adults 30–65 researching semaglutide, tirzepatide or compounded GLP-1s who will pay cash for a telehealth program.", l: ["GLP-1, Ozempic, peptide and weight-loss procedure segments", "Ages 30–65, ZIPs inside licensed states", "Household income $100K+, FICO 680+ for financing"] },
      { n: "Med Spa", s: "Med Spa", t: "$500–$5,000", buyer: "Women 28–60 interested in injectables, laser and body contouring, within 20 miles of the spa.", l: ["Botox, filler, CoolSculpting and skincare intent", "Women 28–60, 10–20 mile radius", "Net worth $250K+ or income $125K+"] },
      { n: "TRT / Men's Health", s: "TRT / Men's Health", t: "$150–$400/mo", buyer: "Men 35–65 researching low testosterone, energy and performance, who prefer discreet clinic or telehealth care.", l: ["Low-T, testosterone and men's vitality segments", "Men 35–65, licensed states", "Income $90K+, homeowners"] },
      { n: "Menopause & HRT", s: "Menopause & HRT", t: "$150–$350/mo", buyer: "Women 40–60 in perimenopause or menopause looking for bioidentical hormones and symptom relief.", l: ["Perimenopause, menopause and HRT interest", "Women 40–60", "Income $100K+, credit card holders"] },
      { n: "Peptide Therapy", s: "Peptide Therapy", t: "$200–$800/mo", buyer: "Biohackers and active adults 30–60 researching BPC-157, recovery and longevity peptides.", l: ["Peptide, biohacking and longevity intent", "Adults 30–60, fitness affinity", "Liquid assets $100K+"] },
      { n: "Regenerative / Stem Cell", s: "Stem Cell / Regen", t: "$3,000–$15,000", buyer: "Adults 45–75 with joint or back pain who want to avoid surgery and can pay cash.", l: ["Stem cell, PRP and regenerative medicine segments", "Ages 45–75, within 50 miles", "Net worth $500K+ or liquid assets $250K+"] },
      { n: "IV Therapy & NAD+", s: "IV Therapy & NAD+", t: "$150–$1,000", buyer: "Wellness-focused professionals 28–55 interested in NAD+, hydration and recovery drips.", l: ["NAD+, IV therapy and wellness intent", "Ages 28–55, metro ZIPs", "Income $100K+"] },
      { n: "Functional Medicine", s: "Functional Medicine", t: "$2,000–$8,000/yr", buyer: "Adults 35–65 tired of conventional care who research root-cause, gut and hormone health.", l: ["Functional, integrative and holistic medicine interest", "Ages 35–65", "Net worth $500K+, homeowners"] },
      { n: "Gut Health", s: "Gut Health", t: "$60–$300/mo", buyer: "Adults 30–65 researching gut health, probiotics, SIBO and digestive wellness.", l: ["Gut health, probiotic and digestive wellness segments", "Ages 30–65, national", "Income $75K+, online health purchasers"] },
      { n: "Dental Implants", s: "Dental Implants", t: "$4,000–$30,000", buyer: "Adults 50–80 with missing teeth or failing dentures who are weighing All-on-4 implants.", l: ["Dental implant, dentures and All-on-4 intent", "Ages 50–80, within 30 miles", "FICO 650+ for CareCredit, Cherry or Affirm"] },
      { n: "Plastic Surgery", s: "Plastic Surgery", t: "$6,000–$20,000", buyer: "Adults 28–60 researching body contouring, breast or facial procedures.", l: ["Cosmetic surgery and body-contouring intent", "Ages 28–60, within 60 miles", "Income $150K+, FICO 700+"] },
      { n: "Hair Restoration", s: "Hair Restoration", t: "$4,000–$15,000", buyer: "Men 30–60 researching hair transplants, FUE and PRP for hair loss.", l: ["Hair loss, FUE and hair transplant segments", "Men 30–60", "Income $100K+, financing-eligible"] },
      { n: "Bariatric Surgery", s: "Bariatric Surgery", t: "$15,000–$25,000", buyer: "Adults 30–65 with significant weight to lose who are researching sleeve or bypass surgery.", l: ["Weight-loss surgery and procedure segments", "Ages 30–65, within 75 miles", "Insurance holders or FICO 650+"] },
      { n: "Addiction Treatment", s: "Addiction Treatment", t: "$10,000–$60,000", buyer: "Family members 40–65 researching rehab and recovery programs for a loved one.", l: ["Recovery and treatment-research segments (LegitScript required)", "Parents and spouses 40–65", "PPO insurance holders, income $100K+"] },
      { n: "Chiropractic & Pain", s: "Chiro & Pain", t: "$1,500–$5,000", buyer: "Adults 35–70 with back, neck or joint pain looking for non-surgical relief.", l: ["Back pain, sciatica and chiropractic intent", "Ages 35–70, within 15 miles", "Homeowners, income $75K+"] },
      { n: "Longevity Clinics", s: "Longevity Clinics", t: "$5,000–$50,000/yr", buyer: "High-net-worth adults 40–70 interested in executive physicals, longevity testing and concierge care.", l: ["Longevity, anti-aging and concierge medicine interest", "Ages 40–70, affluent ZIPs", "Net worth $1M+, liquid assets $500K+"] }
    ]
  },
  {
    id: "home", name: "Home Services", hue: "#FF8A3D", deep: "#9A4614", layer3: "Property",
    offMeta: "Meta dropped most third-party homeowner, home-value and home-age data years ago. Open-web targeting layers property data (owner, home value, year built, move date) on top of in-market intent, down to the ZIP code.",
    niches: [
      { n: "Roofing", s: "Roofing", t: "$8,000–$25,000", buyer: "Homeowners whose roof is 15+ years old, or in ZIPs hit by recent storms.", l: ["Roof replacement and storm-damage intent", "Homeowners 35–75, storm ZIPs", "Home built before 2010, value $300K+"] },
      { n: "Solar", s: "Solar", t: "$15,000–$40,000", buyer: "Homeowners with high electric bills, good credit and sun-facing roofs.", l: ["Solar, energy-saving and EV-owner segments", "Homeowners 30–70", "FICO 680+, home value $350K+"] },
      { n: "HVAC", s: "HVAC", t: "$6,000–$15,000", buyer: "Homeowners whose systems are 10+ years old, timed to heat waves and cold snaps.", l: ["HVAC replacement and heat-pump intent", "Homeowners, service-area ZIPs", "Home 12+ years old, income $75K+"] },
      { n: "Kitchen Remodel", s: "Kitchen Remodel", t: "$30,000–$100,000", buyer: "Established homeowners 35–65 with equity, researching cabinets, countertops and layouts.", l: ["Kitchen remodel and home-improvement intent", "Homeowners 35–65, 5+ years in home", "Home value $500K+, high equity"] },
      { n: "Bathroom Remodel", s: "Bath Remodel", t: "$12,000–$40,000", buyer: "Homeowners 45–75, including aging-in-place walk-in shower and tub buyers.", l: ["Bath remodel and walk-in shower intent", "Homeowners 45–75", "Home value $350K+, FICO 660+"] },
      { n: "Pool Builders", s: "Pool Builders", t: "$60,000–$150,000", buyer: "Affluent families with backyard space, researching inground pools.", l: ["Pool, backyard and outdoor-living intent", "Homeowners with kids, lot 0.25+ acres", "Income $200K+, home value $700K+"] },
      { n: "Windows & Doors", s: "Windows & Doors", t: "$10,000–$30,000", buyer: "Homeowners in older homes who care about energy bills and curb appeal.", l: ["Window replacement and energy-efficiency intent", "Homeowners 35–75", "Built before 2000, value $300K+"] },
      { n: "Home Security", s: "Home Security", t: "$1,000–$3,000 + monthly", buyer: "New movers and families looking for smart-home security.", l: ["Home security and smart-home segments", "New movers (last 90 days)", "Homeowners, income $75K+"] },
      { n: "Foundation Repair", s: "Foundation Repair", t: "$5,000–$30,000", buyer: "Owners of older homes in clay-soil or flood-prone ZIPs who see cracks or settling.", l: ["Foundation, basement and waterproofing intent", "Homeowners, high-risk soil ZIPs", "Built before 1990"] },
      { n: "Water Treatment", s: "Water Treatment", t: "$3,000–$8,000", buyer: "Homeowners with hard water or well water who care about family health.", l: ["Water softener, filtration and well-water intent", "Homeowners with kids", "Home value $250K+"] },
      { n: "Landscaping & Hardscape", s: "Hardscape", t: "$15,000–$80,000", buyer: "Affluent homeowners investing in patios, outdoor kitchens and curb appeal.", l: ["Outdoor living, patio and landscape design intent", "Homeowners 35–70", "Home value $600K+, income $175K+"] },
      { n: "Garage Doors", s: "Garage Doors", t: "$1,500–$6,000", buyer: "Homeowners with older garage doors, or who are prepping to sell.", l: ["Garage door and curb-appeal intent", "Homeowners, likely-to-sell signals", "Built before 2005"] },
      { n: "Pest Control", s: "Pest Control", t: "$400–$1,200/yr", buyer: "Homeowners in high-pest ZIPs, timed seasonally (termites, mosquitoes, rodents).", l: ["Pest, termite and mosquito intent", "Homeowners, seasonal geo-fences", "Home value $200K+"] },
      { n: "Backup Generators", s: "Generators", t: "$10,000–$20,000", buyer: "Homeowners in outage-prone areas, especially remote workers and medical-device users.", l: ["Standby generator and power-outage intent", "Homeowners, outage-history ZIPs", "Income $125K+, home value $450K+"] },
      { n: "Siding & Gutters", s: "Siding & Gutters", t: "$8,000–$30,000", buyer: "Owners of homes 20+ years old with weathered exteriors.", l: ["Siding, gutter and exterior-remodel intent", "Homeowners 35–75", "Built before 2005, value $300K+"] },
      { n: "Custom Home Builders", s: "Custom Homes", t: "$600,000+", buyer: "High-net-worth buyers who own land or are relocating, and want a build, not a resale.", l: ["Custom home, land purchase and architect intent", "Ages 35–65, relocation signals", "Net worth $2M+, liquid assets $500K+"] }
    ]
  },
  {
    id: "finance", name: "Financial", hue: "#4ADE80", deep: "#1C7A42", layer3: "Wealth",
    offMeta: "Credit, insurance and investment ads fall under Meta's Financial Products and Services special ad category. There you can't target by age, gender or ZIP code, and lookalikes are restricted. Open-web targeting can layer net worth, liquid assets and credit-tier data, within each vertical's own compliance rules.",
    niches: [
      { n: "Wealth Management", s: "Wealth Mgmt", t: "$5,000–$25,000/yr AUM fees", buyer: "Pre-retirees and business owners with $500K+ investable assets looking for an advisor.", l: ["Financial planning and advisor-search intent", "Ages 45–70, affluent ZIPs", "Liquid assets $500K+, net worth $1M+"] },
      { n: "Retirement Planning", s: "Retirement Plans", t: "$3,000–$15,000/yr", buyer: "Adults 55–68 within 10 years of retirement, worried about income and taxes.", l: ["Retirement, 401(k) rollover and Social Security intent", "Ages 55–68", "Investable assets $250K+"] },
      { n: "Life Insurance", s: "Life Insurance", t: "$1,000–$10,000/yr", buyer: "Parents 30–55, new homeowners, and business owners who need coverage.", l: ["Life insurance and estate-protection intent", "New parents, new mortgages", "Income $100K+"] },
      { n: "Medicare Plans", s: "Medicare Plans", t: "$300–$600 commission", buyer: "People turning 65 in the next 6 months, plus annual enrollment shoppers.", l: ["Medicare Advantage and supplement intent", "Turning-65 data, AEP timing", "Fixed-income and retiree segments"] },
      { n: "Annuities", s: "Annuities", t: "$100,000+ premium", buyer: "Conservative retirees 60–80 who want guaranteed income and principal protection.", l: ["Annuity and fixed-income research", "Ages 60–80", "Liquid assets $250K+, CD holders"] },
      { n: "Debt Relief", s: "Debt Relief", t: "15–25% of enrolled debt", buyer: "Consumers carrying $15K+ in unsecured debt and looking for a way out.", l: ["Debt consolidation and relief intent", "Ages 30–65", "Revolving debt $15K+, multiple cards"] },
      { n: "Mortgage Refinance", s: "Refinance", t: "$3,000–$8,000/loan", buyer: "Homeowners with rates above today's market and solid equity.", l: ["Refinance and rate-shopping intent", "Homeowners, loan 2–7 years old", "Equity 25%+, FICO 680+"] },
      { n: "Reverse Mortgage", s: "Reverse Mortgage", t: "$5,000–$15,000/loan", buyer: "Homeowners 62+ with high equity who want retirement cash flow.", l: ["Reverse mortgage and home-equity intent", "Homeowners 62+", "Equity 50%+, home value $400K+"] },
      { n: "HELOC & Home Equity", s: "HELOC", t: "$2,000–$6,000/loan", buyer: "Equity-rich homeowners funding renovations or consolidating debt.", l: ["HELOC and cash-out intent", "Homeowners 35–65", "Equity $150K+, FICO 700+"] },
      { n: "Tax Resolution", s: "Tax Resolution", t: "$3,000–$10,000", buyer: "Individuals and small business owners who owe the IRS $10K+.", l: ["IRS debt and tax-relief intent", "Self-employed and business owners", "Tax-lien and back-tax signals"] },
      { n: "Estate Planning", s: "Estate Planning", t: "$2,000–$8,000", buyer: "Parents and retirees 45–75 who need wills, trusts and asset protection.", l: ["Wills, trusts and estate-planning intent", "Ages 45–75, grandparents", "Net worth $750K+, homeowners"] },
      { n: "Business Loans", s: "Business Loans", t: "$2,000–$20,000/deal", buyer: "Small businesses with $250K+ in revenue that need working capital or equipment money.", l: ["Business financing and SBA loan intent", "Owners and founders", "Business revenue $250K+, 2+ years in business"] },
      { n: "Gold & Silver IRA", s: "Gold & Silver IRA", t: "$50,000+ rollover", buyer: "Investors 55+ worried about inflation who want precious metals in their retirement account.", l: ["Precious metals and inflation-hedge interest", "Ages 55–80", "Retirement assets $100K+"] },
      { n: "Credit Repair", s: "Credit Repair", t: "$100–$150/mo", buyer: "Consumers with fair credit who are trying to qualify for a home or auto loan.", l: ["Credit improvement and mortgage-readiness intent", "Ages 25–55, renters planning to buy", "FICO 550–660"] },
      { n: "Auto Refinance", s: "Auto Refinance", t: "$300–$800/loan", buyer: "Drivers with high-APR auto loans whose credit has improved.", l: ["Auto loan refinance intent", "Car owners, loan 6+ months old", "FICO 640+, open auto loan"] },
      { n: "1031 & RE Investing", s: "1031 / RE Investing", t: "$1M+ exchanges", buyer: "Real estate investors selling property who need 1031 replacement assets or DSTs.", l: ["1031, DST and real-estate-investing intent", "Ages 50–75, multi-property owners", "Net worth $2M+, accredited"] }
    ]
  },
  {
    id: "b2b", name: "B2B", hue: "#5B8CFF", deep: "#2A4BA8", layer3: "Firmographic",
    offMeta: "Meta's job and company targeting is self-reported and thin. Open-web targeting uses firmographic and B2B intent data (company size, revenue, industry, tech stack, job function, active research topics) to reach decision makers at work, on the business publishers they actually read.",
    niches: [
      { n: "B2B SaaS", s: "B2B SaaS", t: "$10,000–$100,000 ACV", buyer: "Department heads at mid-market companies actively researching your software category.", l: ["Category intent surges (topic research)", "Directors and VPs in target function", "Companies with 50–1,000 employees, tech-stack match"] },
      { n: "Managed IT Services", s: "Managed IT", t: "$2,000–$15,000/mo", buyer: "Owners and office managers at 20–200 person firms without in-house IT.", l: ["Managed IT, help desk and network intent", "Owners, ops and office managers", "20–200 employees, local metro"] },
      { n: "Cybersecurity", s: "Cybersecurity", t: "$25,000–$250,000/yr", buyer: "CISOs and IT leaders in regulated industries researching security tools.", l: ["Ransomware, SOC and compliance intent", "CISO, CIO and IT directors", "Healthcare, finance and legal; 100+ employees"] },
      { n: "Commercial Cleaning", s: "Commercial Cleaning", t: "$2,000–$20,000/mo", buyer: "Facility and office managers at offices, medical buildings and schools.", l: ["Janitorial and facility services intent", "Facility and property managers", "Offices 10,000+ sq ft, metro ZIPs"] },
      { n: "Payroll & HR / PEO", s: "Payroll & PEO", t: "$100–$200/employee/yr", buyer: "Founders and HR leads at growing companies with 10–250 employees.", l: ["Payroll, PEO and benefits intent", "Owners, CFOs and HR managers", "10–250 employees, hiring signals"] },
      { n: "Commercial Insurance", s: "Commercial Insurance", t: "$5,000–$100,000/yr", buyer: "Owners of contractors, fleets and restaurants coming up on renewal.", l: ["Business insurance and workers' comp intent", "Owners and CFOs", "Industry by NAICS, renewal windows"] },
      { n: "Logistics / 3PL", s: "Logistics / 3PL", t: "$5,000–$100,000/mo", buyer: "E-commerce and CPG brands outgrowing their warehouse or carrier.", l: ["Fulfillment, 3PL and freight intent", "Ops and supply-chain leads", "E-commerce revenue $5M+"] },
      { n: "Manufacturing Suppliers", s: "Manufacturing", t: "$50,000+ contracts", buyer: "Procurement and engineering teams at OEMs sourcing parts and contract manufacturing.", l: ["Sourcing, RFQ and component intent", "Procurement and engineering titles", "Manufacturers by NAICS, 100+ employees"] },
      { n: "Commercial Real Estate", s: "Commercial RE", t: "$50,000+ commissions", buyer: "Companies with leases expiring, expanding into new markets or looking to buy buildings.", l: ["Office, industrial and lease-search intent", "CEOs, COOs and facility heads", "Lease-expiry and expansion signals"] },
      { n: "Marketing Agencies", s: "Agencies", t: "$3,000–$30,000/mo", buyer: "Business owners and CMOs at companies with revenue and growth goals.", l: ["Lead generation and agency-search intent", "Owners, CMOs and marketing directors", "Revenue $2M–$100M"] },
      { n: "CPA & Accounting Firms", s: "CPA Firms", t: "$5,000–$50,000/yr", buyer: "Business owners who need tax strategy, fractional CFO or audit support.", l: ["Tax planning and fractional CFO intent", "Owners and finance leads", "Revenue $1M–$50M, entity type"] },
      { n: "Business Law Firms", s: "Business Law", t: "$5,000–$100,000", buyer: "Founders and executives facing contracts, disputes, M&A or IP matters.", l: ["Contract, litigation and M&A intent", "CEOs, founders and general counsel", "Funding, M&A and growth events"] },
      { n: "Equipment Financing", s: "Equipment Finance", t: "$2,000–$15,000/deal", buyer: "Contractors, medical practices and manufacturers buying expensive equipment.", l: ["Equipment purchase and leasing intent", "Owners and CFOs", "Construction, medical, manufacturing; 2+ years"] },
      { n: "Office Build-Outs", s: "Office Build-Outs", t: "$100,000+ projects", buyer: "Companies moving, expanding or redesigning their workspace.", l: ["Office design, furniture and build-out intent", "Facility, ops and HR heads", "New leases and headcount growth"] },
      { n: "Staffing Agencies", s: "Staffing", t: "15–25% of placements", buyer: "Hiring managers at companies with open roles that are hard to fill.", l: ["Recruiting and staffing intent", "HR, talent and department heads", "Active job postings, 50+ employees"] },
      { n: "Fleet Management", s: "Fleet Management", t: "$30–$50/vehicle/mo", buyer: "Operations leads at companies running 10+ vehicles.", l: ["GPS tracking, fleet and telematics intent", "Fleet, ops and safety managers", "Fleet size 10+, service and logistics industries"] }
    ]
  }
];

/* ---------- state ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
let wi = 0;
let rot = 0;
let spinning = false;
let landed = null;
let covered = store.get("stn-covered", {});
let sound = store.get("stn-sound", true);
let skip = store.get("stn-skip", true);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = s => ROOT.querySelector(s) || document.querySelector(s);
const canvas = $("#wheel"), ctx = canvas.getContext("2d");
const W = () => WHEELS[wi];
const seg = () => (Math.PI * 2) / W().niches.length;
const isCovered = (w, n) => !!(covered[w.id] || []).includes(n.n);

/* ---------- tabs ---------- */
function renderTabs() {
  $("#tabs").innerHTML = WHEELS.map((w, i) => {
    const done = (covered[w.id] || []).length;
    return `<button class="tab" role="tab" type="button" aria-selected="${i === wi}" data-i="${i}" style="--tab-hue:${w.hue}">
      <span class="t-name"><span class="dot"></span>${w.name}<span class="t-key">${i + 1}</span></span>
      <span class="t-meta">${w.niches.length} niches · ${done} covered</span></button>`;
  }).join("");
  ROOT.querySelectorAll(".tab").forEach(b => b.onclick = () => selectWheel(+b.dataset.i));
}
function selectWheel(i) {
  if (spinning) return;
  if (i !== wi) SFX.swap();
  wi = i; landed = null; rot = 0;
  HOST.style.setProperty("--hue", W().hue);
  HOST.style.setProperty("--hue-deep", W().deep);
  renderTabs(); draw(); renderBrief();
}

/* ---------- wheel drawing ---------- */
let lightsPhase = 0;
function sizeCanvas() {
  const r = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(r.width * dpr); canvas.height = Math.round(r.height * dpr);
  draw();
}
function draw() {
  const w = W(), N = w.niches.length, S = seg();
  const size = canvas.width, c = size / 2, R = c * 0.94;
  ctx.clearRect(0, 0, size, size);
  // outer rim
  ctx.beginPath(); ctx.arc(c, c, c * 0.995, 0, Math.PI * 2); ctx.fillStyle = "#14110A"; ctx.fill();
  ctx.beginPath(); ctx.arc(c, c, c * 0.985, 0, Math.PI * 2); ctx.fillStyle = "#1B2340"; ctx.fill();
  ctx.save(); ctx.translate(c, c); ctx.rotate(rot);
  for (let i = 0; i < N; i++) {
    const n = w.niches[i], a0 = i * S, a1 = a0 + S, done = isCovered(w, n);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R, a0, a1); ctx.closePath();
    let fill = i % 2 ? w.deep : w.hue;
    if (landed === i && !spinning) fill = "#FFE500";
    ctx.fillStyle = fill; ctx.globalAlpha = done && landed !== i ? 0.35 : 1; ctx.fill(); ctx.globalAlpha = 1;
    ctx.strokeStyle = "rgba(10,15,30,.55)"; ctx.lineWidth = size * 0.004; ctx.stroke();
    // label
    ctx.save(); ctx.rotate(a0 + S / 2);
    const label = (done ? "✓ " : "") + n.s.toUpperCase();
    let fs = size * 0.03; ctx.font = `${fs}px "Archivo Black", "Arial Black", sans-serif`;
    const maxW = R * 0.66;
    while (ctx.measureText(label).width > maxW && fs > size * 0.017) { fs -= 1; ctx.font = `${fs}px "Archivo Black", "Arial Black", sans-serif`; }
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    const onYellow = landed === i && !spinning;
    ctx.fillStyle = onYellow ? "#14110A" : (i % 2 ? "#F3F5FB" : "#071019");
    ctx.fillText(label, R * 0.92, 0);
    ctx.restore();
  }
  ctx.restore();
  // marquee bulbs
  const B = 32;
  for (let b = 0; b < B; b++) {
    const a = (b / B) * Math.PI * 2, x = c + Math.cos(a) * c * 0.965, y = c + Math.sin(a) * c * 0.965;
    const on = (b + lightsPhase) % 2 === 0;
    ctx.beginPath(); ctx.arc(x, y, size * 0.009, 0, Math.PI * 2);
    ctx.fillStyle = on ? "#FFE500" : "#5C5420"; ctx.fill();
  }
}

/* ---------- sound effects (Web Audio, no files needed) ---------- */
let audio, master, noiseBuf;
let volume = store.get("stn-vol", 0.8);
function ac() {
  if (!audio) {
    audio = new (window.AudioContext || window.webkitAudioContext)();
    master = audio.createGain(); master.gain.value = volume; master.connect(audio.destination);
    noiseBuf = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
    const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (audio.state === "suspended") audio.resume();
  return audio;
}
function tone(freq, start, dur, type = "sine", vol = 0.2, bend = 0) {
  const a = ac(), o = a.createOscillator(), g = a.createGain(), t = a.currentTime + start;
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (bend) o.frequency.exponentialRampToValueAtTime(freq * bend, t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.05);
}
function noise(start, dur, vol, f0, f1, q = 1) {
  const a = ac(), s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain(), t = a.currentTime + start;
  s.buffer = noiseBuf; f.type = "bandpass"; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + dur * 0.3);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f).connect(g).connect(master); s.start(t); s.stop(t + dur + 0.05);
}
const SFX = {
  // wooden peg click as the pointer passes each slice
  tick() { if (!sound) return; try { noise(0, 0.035, 0.5, 3200, 1800, 4); tone(900 + Math.random() * 120, 0, 0.04, "triangle", 0.12); } catch {} },
  // whoosh + rising swell when the wheel launches
  launch() { if (!sound) return; try { noise(0, 0.7, 0.35, 300, 2600, 0.8); tone(180, 0, 0.6, "sawtooth", 0.05, 2.2); } catch {} },
  // drumroll while the wheel slows
  roll(dur) { if (!sound) return; try { for (let t = 0; t < dur; t += 0.045) noise(t, 0.05, 0.08 + 0.12 * (t / dur), 180, 140, 1.5); } catch {} },
  // bell ding + brass-style fanfare + crowd cheer on landing
  win() {
    if (!sound) return;
    try {
      [1, 2.76, 5.4].forEach((m, k) => tone(1046 * m, 0, 1.6 - k * 0.4, "sine", 0.18 / (k + 1)));
      [[523, 0.15], [659, 0.27], [784, 0.39], [1047, 0.55]].forEach(([f, s]) => {
        tone(f, s, s === 0.55 ? 0.9 : 0.16, "sawtooth", 0.07); tone(f * 1.005, s, s === 0.55 ? 0.9 : 0.16, "square", 0.04);
      });
      noise(0.5, 1.8, 0.18, 1400, 900, 0.5);
    } catch {}
  },
  // soft UI click
  click() { if (!sound) return; try { tone(660, 0, 0.06, "triangle", 0.08); } catch {} },
  // two-note chime when a niche is marked covered
  chime() { if (!sound) return; try { tone(880, 0, 0.35, "sine", 0.14); tone(1318, 0.1, 0.5, "sine", 0.12); } catch {} },
  // descending blip when switching wheels
  swap() { if (!sound) return; try { tone(740, 0, 0.09, "square", 0.05, 0.7); tone(990, 0.07, 0.1, "square", 0.05); } catch {} }
};
function setVolume(v) { volume = v; store.set("stn-vol", v); if (master) master.gain.value = v; }

/* ---------- spin ---------- */
const idxAtPointer = r => {
  const S = seg(), N = W().niches.length;
  let a = (-Math.PI / 2 - r) % (Math.PI * 2); if (a < 0) a += Math.PI * 2;
  return Math.floor(a / S) % N;
};
function spin() {
  if (spinning) return;
  const w = W(), N = w.niches.length, S = seg();
  let pool = [...Array(N).keys()];
  if (skip) { const open = pool.filter(i => !isCovered(w, w.niches[i])); if (open.length) pool = open; }
  const t = pool[Math.floor(Math.random() * pool.length)];
  const jitter = (Math.random() - 0.5) * S * 0.7;
  let target = -Math.PI / 2 - (t + 0.5) * S + jitter;
  const turns = reduce ? 1 : 6 + Math.floor(Math.random() * 3);
  while (target < rot + turns * Math.PI * 2) target += Math.PI * 2;
  const start = rot, dist = target - start, dur = reduce ? 1200 : 5600 + Math.random() * 1200;
  const t0 = performance.now();
  let lastIdx = idxAtPointer(rot), lastLight = 0;
  spinning = true; landed = null; $("#spinBtn").disabled = true; $("#hub").innerHTML = "Spin<span>the niche</span>";
  renderBrief(true);
  const ease = x => 1 - Math.pow(1 - x, 4);
  function frame(now) {
    const p = Math.min(1, (now - t0) / dur);
    rot = start + dist * ease(p);
    const idx = idxAtPointer(rot);
    if (idx !== lastIdx) { lastIdx = idx; SFX.tick(); kick(); }
    if (now - lastLight > 120) { lightsPhase ^= 1; lastLight = now; }
    draw();
    if (p < 1) requestAnimationFrame(frame);
    else land(idxAtPointer(rot));
  }
  SFX.launch(); if (!reduce) setTimeout(() => SFX.roll(1.4), Math.max(0, dur - 1500));
  requestAnimationFrame(frame);
}
function kick() {
  const p = $("#pointer"); p.style.transform = "translateX(-50%) rotate(-14deg)";
  setTimeout(() => p.style.transform = "translateX(-50%)", 70);
}
function land(i) {
  spinning = false; landed = i; $("#spinBtn").disabled = false;
  SFX.win(); draw(); renderBrief(false, true);
  $("#hub").innerHTML = `Ep.<span>${String(totalCovered() + 1).padStart(2, "0")}</span>`;
  let k = 0; const flash = setInterval(() => { lightsPhase ^= 1; draw(); if (++k > 12) clearInterval(flash); }, 140);
}
const totalCovered = () => Object.values(covered).reduce((s, a) => s + a.length, 0);

/* ---------- brief panel ---------- */
function renderBrief(isSpinning = false, reveal = false) {
  const w = W(), el = $("#brief");
  el.classList.toggle("reveal", reveal);
  if (landed === null || isSpinning) {
    el.innerHTML = `
      <div class="eyebrow">${w.name} wheel</div>
      <h2 class="niche">${isSpinning ? "Spinning…" : "Where will it land?"}</h2>
      <p class="buyer">${isSpinning ? "Wherever it stops, I build the audience live: interest and intent, demographics, then " + w.layer3.toLowerCase() + " filters. All off social media." : "Hit Spin. Wherever it lands, I build that niche's buyer audience live using 400+ data sources across the open internet, outside of Meta."}</p>
      <div class="sec"><h3>On this wheel</h3><div class="lineup">${w.niches.map(n => `<span class="${isCovered(w, n) ? "done" : ""}">${n.n}</span>`).join("")}</div></div>
      <p class="offmeta"><b>Why off Meta:</b> ${w.offMeta}</p>`;
    return;
  }
  const n = w.niches[landed], done = isCovered(w, n);
  const keys = ["Intent", "Demographic", w.layer3];
  el.innerHTML = `
    <div class="eyebrow">${w.name} · landed on</div>
    <h2 class="niche">${n.n}</h2>
    <div class="row"><span class="pill">Est. ticket <b>${n.t}</b></span><span class="pill">Channel <b>Open web</b></span><span class="pill">Off-Meta</span></div>
    <div class="sec"><h3>Ideal buyer</h3><p class="buyer">${n.buyer}</p></div>
    <div class="sec"><h3>Audience layers to build</h3>
      <ul class="layers">${n.l.map((x, k) => `<li><span class="k">${keys[k]}</span><span>${x}</span></li>`).join("")}</ul></div>
    <p class="offmeta"><b>Why off Meta:</b> ${w.offMeta}</p>
    <div class="actions">
      <button class="act primary" id="coverBtn" type="button">${done ? "Covered ✓ (undo)" : "Mark as covered"}</button>
      <button class="act" id="copyBtn" type="button">Copy episode title</button>
      <button class="act" id="againBtn" type="button">Spin again</button>
    </div>
    <div class="toast" id="toast"></div>
    <div class="ctabox">
      <p><b>Sell to ${n.n.toLowerCase()} buyers?</b> I'll build this audience for your offer.</p>
      <button class="cta big" id="ctaBrief" type="button">Get a traffic &amp; targeting strategy call <span class="arrow" aria-hidden="true">→</span></button>
    </div>`;
  $("#coverBtn").onclick = toggleCovered;
  $("#againBtn").onclick = spin;
  $("#copyBtn").onclick = () => copyTitle(n);
  $("#ctaBrief").onclick = () => openForm(n.n);
}
function toggleCovered() {
  if (landed === null) return;
  const w = W(), n = w.niches[landed], list = covered[w.id] || [];
  covered[w.id] = list.includes(n.n) ? list.filter(x => x !== n.n) : [...list, n.n];
  store.set("stn-covered", covered); covered[w.id].includes(n.n) ? SFX.chime() : SFX.click(); renderTabs(); draw(); renderBrief();
}
function copyTitle(n) {
  const title = `Spin the Niche: Finding ${n.n} Buyers Off Meta (Live Build)`;
  const done = msg => { const t = $("#toast"); if (t) t.textContent = msg; };
  try {
    navigator.clipboard.writeText(title).then(() => done("Copied: " + title), () => done(title));
  } catch { done(title); }
}

/* ---------- discovery-call form pop-up (GHL form, inline layout) ---------- */
const FORM_ID = "Ai87WFHKNOkLHD90infS";
let formLoaded = false, lastFocus = null;
function loadForm() {
  if (formLoaded) return;
  formLoaded = true;
  $("#formWrap").innerHTML =
    `<iframe src="https://api.leadconnectorhq.com/widget/form/${FORM_ID}" id="inline-${FORM_ID}"
      data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value=""
      data-activation-type="alwaysActivated" data-activation-value=""
      data-deactivation-type="neverDeactivate" data-deactivation-value=""
      data-form-name="Niche wheel" data-height="595" data-layout-iframe-id="inline-${FORM_ID}"
      data-form-id="${FORM_ID}" title="Niche wheel"></iframe>`;
  const sc = document.createElement("script");
  sc.src = "https://link.msgsndr.com/js/form_embed.js";
  document.body.appendChild(sc);
}
function openForm(niche) {
  lastFocus = document.activeElement;
  $("#ctaKicker").textContent = niche ? `Traffic & Targeting with Alvin Reyes · ${niche}` : "Traffic & Targeting with Alvin Reyes";
  $("#ctaSub").textContent = niche
    ? `Want ${niche.toLowerCase()} buyers like these? Book a call and I'll map the audience for your offer.`
    : "Tell me your niche and your ideal buyer. I'll show you how I'd find them off Meta and Google.";
  loadForm();
  $("#stn-modal").hidden = false; document.body.style.overflow = "hidden";
  SFX.chime(); $("#ctaClose").focus();
}
function closeForm() {
  $("#stn-modal").hidden = true; document.body.style.overflow = "";
  SFX.click(); if (lastFocus) lastFocus.focus();
}
const modalOpen = () => !$("#stn-modal").hidden;
$("#ctaTop").onclick = () => openForm(landed !== null ? W().niches[landed].n : "");
$("#ctaClose").onclick = closeForm;
$("#stn-modal").addEventListener("click", e => { if (e.target.id === "stn-modal") closeForm(); });

/* ---------- controls ---------- */
function syncToggles() {
  $("#soundBtn").setAttribute("aria-pressed", sound); $("#soundBtn").textContent = sound ? "Sound on" : "Sound off";
  $("#skipBtn").setAttribute("aria-pressed", skip);
}
$("#spinBtn").onclick = spin;
$("#soundBtn").onclick = () => { sound = !sound; store.set("stn-sound", sound); syncToggles(); SFX.click(); };
$("#vol").value = volume;
$("#vol").oninput = e => setVolume(+e.target.value);
$("#vol").onchange = () => SFX.tick();
$("#skipBtn").onclick = () => { SFX.click(); skip = !skip; store.set("stn-skip", skip); syncToggles(); };
$("#cleanBtn").onclick = e => { const on = $(".stn").classList.toggle("clean"); e.currentTarget.setAttribute("aria-pressed", on); };
$("#fsBtn").onclick = () => { try { document.fullscreenElement ? document.exitFullscreen() : HOST.requestFullscreen().catch(() => {}); } catch {} };
document.addEventListener("keydown", e => {
  if (!ON_SCREEN && !modalOpen()) return;
  const tg = e.composedPath ? e.composedPath()[0] : e.target;
  if (tg && tg.closest && tg !== HOST && tg.closest("input, textarea, select, [contenteditable]") && !ROOT.contains(tg)) return;
  if (modalOpen()) { if (e.key === "Escape") closeForm(); return; }
  if (e.target.closest("input, textarea")) return;
  if (e.code === "Space") { e.preventDefault(); spin(); }
  else if (["1", "2", "3", "4"].includes(e.key)) selectWheel(+e.key - 1);
  else if (e.key.toLowerCase() === "c") toggleCovered();
});
new ResizeObserver(sizeCanvas).observe(canvas);
document.fonts && document.fonts.ready.then(draw);
syncToggles(); selectWheel(0);

    })(document);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
