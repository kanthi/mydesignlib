# Rebuild prompt — Calanthe (`calanthe`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/calanthe/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Six-board brand identity guidelines presentation: six-petal radiating botanical emblem, EB Garamond logotype, stepped optical scale hierarchy (36px to 216px), EB Garamond typographic specimen, terracotta to rose mist palette tokens, and 4-quadrant contextual application rules.

## Title
Calanthe — Brand Guidelines & Identity System

## Description meta
Calanthe brand identity system: six-petal radiating botanical emblem, EB Garamond logotype, stepped optical scale hierarchy, terracotta to rose mist palette tokens, and contextual application guidelines.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
:root {
  --c-terracotta: #E5835C;
  --c-terracotta-dark: #CB6942;
  --c-terracotta-light: #F29E7A;
  --c-rose-mist: #EFAFA6;
  --c-rose-soft: #F5CAC4;
  --c-pale-sand: #F7ECE6;
  --c-linen-white: #FAF6F3;
  --c-white: #FFFFFF;
  --c-graphite-deep: #1A1A1B;
  --c-graphite-board: #232325;
  --c-graphite-card: #2C2C2F;
  --font-serif: 'EB Garamond', Georgia, serif;
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Files
Keep every file below at the same relative path. Do not rename assets.
- `DESIGN.md`
- `assets/calanthe-app-icon.svg`
- `assets/calanthe-favicon.svg`
- `assets/calanthe-horizontal-lockup.svg`
- `assets/calanthe-mark.svg`
- `assets/calanthe-primary-lockup.svg`
- `index.html`
- `preview.jpg`
- `prompt.md`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The 6 canonical presentation boards render cleanly in both Grid and Slide Deck modes.
- No competitor names or original brand handles appear.
