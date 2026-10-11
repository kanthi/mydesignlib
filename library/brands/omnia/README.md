# Omnia identity: study recreation + extensions

Practice study of the Omnia visual identity by Andrija Filipovic (@andrijacrafts):
https://x.com/andrijacrafts/status/2108535865769431510. For practice only; not for commercial use.

- `index.html`: hub page
- `replica/`: board recreation (`index.html`, `styles.css`, `board.js`), hand-built SVG assets in `replica/assets/`, PNG exports + `exports/compare.png`
- `extended/`: guidelines, landing page (GSAP), social kit, merch/stationery, logo reveal (+ `exports/omnia-logo-reveal.webm`), `email-signature.html`
- `_build/`: generators (`gen.js` for symbol/wordmark via paper.js + opentype.js, `fit.py` for parameter fitting against the reference, `sprite.js`, export scripts)

To run it, use `python3 -m http.server 8091` in this folder and open http://localhost:8091/
Fonts: Inter and Geist Mono (OFL), served locally from `fonts/`.
