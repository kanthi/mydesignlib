# Rebuild prompt — Floran (`floran`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/floran/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Mindful living and biophilic interior identity system featuring deep botanical forest green and terracotta palettes, sacred geometry sprout mark, and tri-poster specimen layout.

## Title
Floran — Mindful Living & Biophilic Identity System

## Description meta
Floran is an organic biophilic brand identity system exploring mindful living, sacred geometry, and earth-born architectural harmony.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-forest: #1E3A2F;
  --color-forest-dark: #12241D;
  --color-terracotta: #A35342;
  --color-terracotta-dark: #823E30;
  --color-cream: #FAF7F2;
  --color-cream-card: #F2ECE1;
  --color-cream-border: #E5DEC0;
  --color-gold: #C89F56;
  --color-text-dark: #14221B;
  --color-text-muted: #626C66;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --transition: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .container
- main
  - section .posters-section.container
    - article .poster-card.poster-forest
      - h2: Where Nature Meets Home
      - p: At Floran, we believe spaces should feel like nature: effortless, alive, and at peace. Every piece we craft is born from stillness, shaped by balance, and finished with care.
    - article .poster-card.poster-garden
    - article .poster-card.poster-terracotta
      - h2: Made for Mindful Living
  - section .specimen-section.container
    - h3: Earth & Mineral Palette
    - p: A chromatic foundation calibrated from Japanese moss atriums, fired ceramic clays, and raw unbleached cotton.
- footer .container

## Images in the page
- `assets/living-space.jpg — Floran Biophilic Living Space`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/botanical-garden.jpg`
- `assets/living-space.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
