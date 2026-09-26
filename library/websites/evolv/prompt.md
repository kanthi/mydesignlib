# Rebuild prompt — Evolv (`evolv`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/evolv/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Single-viewport full-bleed video landing page for autonomous AI: retro dot-matrix headline, concentric trust badges, counting telemetry metrics.

## Title
Intelligence Designed To Evolve

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #000000;
  --text: #ffffff;
  --muted: #8e8e8e;
  --nav-text: #2e2e2e;
  --pill-dark: #28282a;
  --sign-in-text: #c8c8c8;
  --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  --trust-bg: #28282a;
  --trust-border: rgba(255, 255, 255, 0.4);
  --trust-text: #c4c2c3;
  --font-sans: "Inter", "Segoe UI", system-ui, sans-serif;
  --font-display: "BubbledotICG-FinePos", "Geist Pixel Circle", monospace;
  --trust-size: clamp(36px, 4.5vw, 42px);
  }

  :root {
  --trust-size: 34px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - nav .nav-pill “Main Navigation”
    - a: Home → #
    - a: Product → #
    - a: Case Studies → #
    - a: Contact → #
  - a: Sign in → #
- main .hero
  - h1: Intelligence Designed To Evolve
  - p: Build applications that reason, adapt and collaborate using a modular AI platform designed for production.
  - a: Get Started → #
- footer .stats
- a: Home → #
- a: Product → #
- a: Case Studies → #
- a: Contact → #
- a: Sign in → #

## Images in the page
- `assets/logo.webp`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/logo.webp`
- `fonts/GeistPixel-Circle.woff2`
- `index.html`
- `main.js`
- `preview.jpg`
- `styles.css`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
