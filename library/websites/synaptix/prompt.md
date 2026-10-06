# Rebuild prompt — Synaptix (`synaptix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/synaptix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Precision biometric asset intelligence & wealth management platform featuring interactive 3D ergonomic key token, circuit board schematics, real-time expense donuts, and high-impact manifesto editorial typography.

## Title
Synaptix — Smarter Financial Management

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-cream: #EDE8DE;
  --bg-cream-light: #F4F1EA;
  --circuit-line: #DFD7C7;
  --circuit-node: #C5BCAB;
  --text-dark: #1A1715;
  --text-muted: #6B645B;
  --maroon-dark: #241113;
  --maroon-card: #30171A;
  --maroon-btn: #5C252B;
  --maroon-btn-hover: #481B20;
  --amber-glow: #FBBF24;
  --font-display: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: ✻ synaptix. → #
  - a: Log in → #login
  - a: Sign up → #signup
- main .hero-section
  - h1: Smarter Financial Management
  - p: Gain complete and confident control over each of your valuable assets with ease.
  - a: Get started → #get-started
  - a: Request demo → #request-demo
  - p: Synaptix helps finance managers automate manual work, gain real-time visibility into financial performance, and make faster, data-driven decisions with intelligent AI-powered automation.
- section .section-about
  - h2: Synaptix ✻ ✦ helps finance managers eliminate manual work, gain real-time visibility into financial performance, and make faster, data-driven decisions through intelligent AI automation.
- footer .site-footer
  - p: © 2026 Synaptix Technologies Inc. All rights reserved. Precision asset intelligence hardware.

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
