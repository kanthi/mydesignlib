# Rebuild prompt — PopZero (`popzero`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/popzero/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Minimalist zero-sugar sparkling soda flagship featuring a centered floating 3D beverage can, orbiting botanical fruit slices and carbonation bubbles with cursor repulsion physics, and an interactive 3-way flavor switcher that morphs the can wrap, lighting, and ambient glow.

## Title
PopZero — Unleash the Crisp Taste of Zero Sugar

## Description meta
Refreshment redefined in every bubble — all in one sleek design. Zero sugar, natural botanical extracts, premium sparkling soda.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-color: #0b120c;
  --theme-color: #22c55e;
  --theme-glow: rgba(34, 197, 94, 0.28);
  --text-white: #ffffff;
  --text-muted: #94a3b8;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'Space Grotesk', monospace;
  --radius-pill: 9999px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .interactive
  - a: @ PopZero → #
  - ul .nav-links
    - li: Ingredients
    - li: Taste
    - li: Eco
    - li: Reviews
  - a: Contact Us → #
- main .container
  - h1: Unleash the crisp taste of zero sugar.
  - p: Refreshment redefined in every bubble — all in one sleek design. 100% natural fruit essences with zero artificial aftertaste.
  - a: Shop Now → → #
- footer .footer-strip.interactive

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
