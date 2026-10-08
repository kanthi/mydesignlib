# Rebuild prompt — Prismata (`prismata`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/prismata/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Tactile physical stationery and creative studio identity specimen: 4-fold 8-petal symmetrical rosette mark, vibrant fuchsia-amber grain-mesh gradient front cards with watermark motifs, matte obsidian back cards with chromatic halftone dot-matrix graphics, interactive 3D card flip workbench, and complete print specifications.

## Title
Prismata — Creative Studio Identity & Stationery System

## Description meta
Prismata is a distinctive creative studio identity system and tactile physical stationery specimen: 4-fold 8-petal symmetrical rosette mark, vibrant fuchsia-amber grain-mesh gradient front cards with watermark motifs, matte obsidian back cards with chromatic halftone dot-matrix graphics, and complete typographic standards.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
:root {
  --c-fuchsia: #D93282;
  --c-amber: #E96924;
  --c-coral: #F28D77;
  --c-obsidian: #1D1D1F;
  --c-plinth: #ECECEF;
  --c-white: #FFFFFF;
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Files
Keep every file below at the same relative path. Do not rename assets.
- `DESIGN.md`
- `assets/prismata-app-icon.svg`
- `assets/prismata-favicon.svg`
- `assets/prismata-halftone-mark.svg`
- `assets/prismata-mark.svg`
- `assets/prismata-primary-lockup.svg`
- `index.html`
- `preview.jpg`
- `prompt.md`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The 2x2 flatlay grid faithfully renders the fuchsia-amber mesh front faces and matte obsidian halftone back faces.
- Interactive 3D flip card allows live inspection.
- No competitor names or original brand handles appear.
