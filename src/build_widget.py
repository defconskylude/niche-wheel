#!/usr/bin/env python3
"""Build dist/spin.js (self-mounting widget) from spin-the-niche-ghl.html.
Edit the HTML page, then run:  python3 build_widget.py
GHL keeps a fixed snippet that loads spin.js; only the hosted file changes.
"""
import json, os, re, time

SRC = "spin-the-niche-ghl.html"
OUT = "dist/spin.js"
s = open(SRC).read()

css = re.search(r"<style>(.*?)</style>", s, re.S).group(1)
body = re.search(r"<body>(.*?)<script>", s, re.S).group(1)
js = re.search(r"<script>(.*?)</script>", s, re.S).group(1)
fonts = re.search(r'<link rel="stylesheet" href="(https://fonts\.googleapis\.com[^"]+)"', s).group(1)

# ---- split the form pop-up out of the widget (it must live in the normal page for GHL's form script) ----
m = re.search(r'\s*<div class="modal" id="ctaModal".*?</div>\n    </div>\n  </div>\n', body, re.S)
modal_html = m.group(0).strip()
body = body.replace(m.group(0), "\n")

# pop-up CSS rules move to the page head, scoped under #stn-modal
modal_rules = []
def take(pattern):
    global css
    for mm in re.finditer(pattern, css, re.S):
        modal_rules.append(mm.group(0))
    css = re.sub(pattern, "", css, flags=re.S)
take(r"\.modal(\[hidden\])? \{[^}]*\}\n")
take(r"\.dialog[^{]*\{[^}]*\}\n")
take(r"@keyframes rise \{.*?\} \}\n")
take(r"\.closex[^{]*\{[^}]*\}\n")
take(r"body\.modal-open \{[^}]*\}\n")
mcss = "\n".join(modal_rules)
mcss = re.sub(r"body\.modal-open \{[^}]*\}", "", mcss)
mcss = re.sub(r"(^|\n)\.(modal|dialog|closex)", r"\1#stn-modal.\2" if False else r"\1#stn-modal .\2", mcss)
mcss = mcss.replace("#stn-modal .modal[hidden]", "#stn-modal[hidden]").replace("#stn-modal .modal {", "#stn-modal {")
mcss = mcss.replace("var(--brand)", "#FFE500").replace("var(--mono)", '"JetBrains Mono", ui-monospace, Menlo, monospace') \
           .replace("var(--display)", '"Archivo Black", "Arial Black", Impact, sans-serif')
mcss = "#stn-modal, #stn-modal * { box-sizing: border-box; }\n#stn-modal { font-family: Inter, system-ui, sans-serif; }\n" + mcss
mcss += "\n@media (prefers-reduced-motion: reduce) { #stn-modal .dialog { animation: none; } }\n"

# ---- widget CSS lives in a shadow root ----
css = css.replace("html, body { margin: 0; }\n", "").replace("html, body { height: auto; }\n", "")
css = css.replace(":root {", ":host {", 1)
css = css.replace("\nbody {", "\n.stn {", 1)
css = css.replace("body.clean", ".stn.clean")
css = ":host { display: block; }\n" + css

# ---- JS: query inside the shadow root first, then the page (pop-up) ----
js = js.replace('const $ = s => document.querySelector(s);',
                'const $ = s => ROOT.querySelector(s) || document.querySelector(s);')
js = js.replace('document.querySelectorAll(".tab")', 'ROOT.querySelectorAll(".tab")')
js = js.replace('document.documentElement.style.setProperty', 'HOST.style.setProperty')
js = js.replace('document.body.classList.toggle("clean")', '$(".stn").classList.toggle("clean")')
js = js.replace('document.body.classList.add("modal-open")', 'document.body.style.overflow = "hidden"')
js = js.replace('document.body.classList.remove("modal-open")', 'document.body.style.overflow = ""')
js = js.replace('document.documentElement.requestFullscreen()', 'HOST.requestFullscreen()')
# keyboard shortcuts only while the wheel is on screen (so Space still scrolls the rest of the GHL page)
js = js.replace('document.addEventListener("keydown", e => {\n',
                'document.addEventListener("keydown", e => {\n  if (!ON_SCREEN && !modalOpen()) return;\n  const tg = e.composedPath ? e.composedPath()[0] : e.target;\n  if (tg && tg.closest && tg !== HOST && tg.closest("input, textarea, select, [contenteditable]") && !ROOT.contains(tg)) return;\n')
for needle in ['$("#spinBtn")', 'ROOT.querySelectorAll(".tab")', 'HOST.style.setProperty', '$(".stn")', 'ON_SCREEN']:
    assert needle in js, needle

version = time.strftime("%Y-%m-%d %H:%M")
out = f"""/* Spin the Niche widget, Traffic & Targeting with Alvin Reyes. Built {version}.
   GHL snippet (never changes):
   <div id="spin-the-niche"></div>
   <script src="https://YOUR-HOST/spin.js" async></script>
*/
(function () {{
  if (window.__spinTheNiche) return; window.__spinTheNiche = true;
  var VERSION = {json.dumps(version)};
  function boot() {{
    var HOST = document.getElementById("spin-the-niche");
    if (!HOST) {{ HOST = document.createElement("div"); HOST.id = "spin-the-niche";
      var cs = document.currentScript; (cs && cs.parentNode ? cs.parentNode.insertBefore(HOST, cs) : document.body.appendChild(HOST)); }}
    if (!document.querySelector('link[data-stn-fonts]')) {{
      var lf = document.createElement("link"); lf.rel = "stylesheet"; lf.href = {json.dumps(fonts)}; lf.setAttribute("data-stn-fonts", "");
      document.head.appendChild(lf);
    }}
    var ms = document.createElement("style"); ms.textContent = {json.dumps(mcss)}; document.head.appendChild(ms);
    var holder = document.createElement("div"); holder.innerHTML = {json.dumps(modal_html)};
    var modal = holder.firstElementChild; modal.id = "stn-modal"; modal.setAttribute("data-id", "ctaModal");
    document.body.appendChild(modal);
    var ROOT = HOST.shadowRoot || HOST.attachShadow({{ mode: "open" }});
    ROOT.innerHTML = "<style>" + {json.dumps(css)} + "</style><div class=\\"stn\\">" + {json.dumps(body)} + "</div>";
    var ON_SCREEN = true;
    try {{ new IntersectionObserver(function (en) {{ ON_SCREEN = en[0].intersectionRatio > 0.35; }}, {{ threshold: [0, 0.35, 1] }}).observe(HOST); }} catch (e) {{}}
    (function (document) {{
{js}
    }})(document);
  }}
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
}})();
"""
# pop-up ids: the page-level modal was renamed to #stn-modal
out = out.replace('$("#ctaModal")', '$("#stn-modal")').replace('e.target.id === "ctaModal"', 'e.target.id === "stn-modal"')
os.makedirs("dist", exist_ok=True)
open(OUT, "w").write(out)
print(f"wrote {OUT} ({len(out)//1024} KB), version {version}")
