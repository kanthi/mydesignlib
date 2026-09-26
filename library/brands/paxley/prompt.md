# Rebuild prompt — Paxley (`paxley`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/paxley/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Creative studio & companion lifestyle brand identity — deep eucalyptus & unbleached linen palette, continuous-line canine silhouette mark, 3D interactive architectural wayfinding cube, dual app icon squircles, botanical packaging flat-lay, apparel screenprint, and vector geometry specifications.

## Title
Paxley — Brand Identity System & Guidelines

## Description meta
Official brand identity system and technical guidelines for Paxley creative studio and companion lifestyle brand.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Brand Color Swatches */
  --paxley-eucalyptus: #2b3f36;
  --paxley-eucalyptus-dark: #1b2923;
  --paxley-eucalyptus-light: #3a5448;
  --paxley-eucalyptus-glow: rgba(43, 63, 54, 0.25);
  --paxley-linen: #f4efe6;
  --paxley-linen-soft: #faf6f0;
  --paxley-linen-dark: #e8e1d5;
  --paxley-terracotta: #c86d51;
  --paxley-terracotta-soft: #fbf0ec;
  --paxley-ink: #18221c;
  --paxley-muted: #5e6b64;
  --paxley-faint: #98a59e;
  --paxley-white: #ffffff;
  /* UI Surfaces */
  --bg-page: var(--paxley-linen);
  --bg-card: var(--paxley-white);
  --bg-dark: var(--paxley-eucalyptus);
  --border-subtle: rgba(24, 34, 28, 0.08);
  --border-medium: rgba(24, 34, 28, 0.14);
  --border-dark-subtle: rgba(255, 255, 255, 0.12);
  /* Typography */
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;
  --radius-2xl: 44px;
  --radius-pill: 9999px;
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(30, 44, 37, 0.04);
  --shadow-md: 0 12px 30px -4px rgba(30, 44, 37, 0.08);
  --shadow-lg: 0 24px 50px -8px rgba(30, 44, 37, 0.15);
  --shadow-cube: 0 25px 45px -10px rgba(0, 0, 0, 0.4);
  /* Layout */
  --container-max: 1320px;
  --gutter: clamp(1.25rem, 3.5vw, 2.5rem);
  --dur: 280ms;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .brand-header
  - button: Download SVG Mark
- main .specimen-stage
- section .specs-section
  - h2: Color System & Tokens
  - p: Tactile, earthy, and architectural. Click any swatch to instantly copy the hexadecimal token to your clipboard.
  - h2: Vector Geometry
  - p: Constructed with a continuous organic stroke, maintaining equal visual weight across all digital and print scales.
  - ul .geometry-rules
    - li: Clearspace: Minimum 1.2x mark height surrounding all sides.
    - li: Minimum Digital Reproduction: 18px height (favicon / notification).
    - li: Stroke Weight: Uniform 7px on 100x80 master viewBox.
- footer .brand-footer

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
