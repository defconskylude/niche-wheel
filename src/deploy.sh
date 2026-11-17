#!/bin/zsh
# Rebuild spin.js from spin-the-niche-ghl.html and publish it to GitHub Pages.
set -e
cd "$(dirname "$0")"
python3 -I build_widget.py
cp dist/spin.js site/spin.js
cp optin/optin.js site/optin.js
cp spin-the-niche-ghl.html build_widget.py deploy.sh site/src/
mkdir -p site/src/optin && cp optin/optin.js site/src/optin/
cd site
git add -A
git commit -qm "Update wheel $(date '+%Y-%m-%d %H:%M')" || { echo "No changes to publish."; exit 0; }
git push -q
echo "Published. Live within ~10 minutes."
