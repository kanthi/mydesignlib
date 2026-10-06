# Rebuild prompt — Spectra 404 (`spectra-404`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/spectra-404/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Interactive spatial 404 error page & navigation experience: Three.js WebGL chromatic glass numerals with real-time inertial pointer drag, dynamic caustic floor reflection pools, floating orbital trajectory wireframe, and multi-spectrum atmospheric theme presets.

## Title
Spectra — 404 Lost In Possibility

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-sky: #0c2060;
  --bg-horizon: #f0502a;
  --bg-glow: #bd1a5e;
  --color-cream: #FFF8EE;
  --color-cream-hover: #ffffff;
  --color-dark: #12131C;
  --color-white: #FFFFFF;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: Spectra → ../../../
  - nav
    - ul .nav-menu
      - li: Product
      - li: Examples
      - li: About
- main .center-stage
  - h1: Lost in possibility?
  - p: This direction doesn't exist yet.
  - a: Back to home → ../../../
- footer .bottom-bar

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
