# Spin the Niche

Embeddable niche wheel for Traffic & Targeting with Alvin Reyes.

GHL snippet:
```html
<div id="spin-the-niche"></div>
<script src="https://defconskylude.github.io/niche-wheel/spin.js" async></script>
```

## Opt-in page
```html
<div id="tt-optin"></div>
<script src="https://defconskylude.github.io/niche-wheel/optin.js" async></script>
```
Edit the CONFIG block at the top of optin.js (colors, copy, sections), then run deploy.sh.

## Audience explorer (opt-in pages)
Section `audiences` in optin.js renders a searchable table of 5,326 Trade Desk segments from `audiences.json` (loaded only when the visitor scrolls near it).
To refresh the data: export every tab of the audience Google Sheet, run `src/build_audiences.py`, replace `audiences.json`, push.
Copy and labels live in `CONFIG.audiences`; the agency page override is in `CONFIG.pages["/agency-partners"]`.
