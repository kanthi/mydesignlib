# Rebuild prompt — Plinth (`plinth`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/plinth/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Monolithic architectural brand identity & logo system: raking sunlight, raw concrete pedestal, cantilevered A-frame mark, vector blueprint grid, 4-tier responsive stack, and stress test suite.

## Title
Plinth — Monolithic Architectural Brand Identity & Logo System

## Description meta
Monolithic architectural brand identity and logo system. Raw concrete plinth, raking sunlight, vector construction grid, 4-tier responsive logo stack, and 3-step stress test suite.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-obsidian: #14171d;
  --color-slate: #242b35;
  --color-slate-light: #3e4653;
  --color-concrete: #9ea3a8;
  --color-limestone: #dcd7ce;
  --color-paper: #f4f0e8;
  --color-white: #ffffff;
  --color-brass: #b59560;
  --color-brass-light: #d6b782;
  --bg-page: var(--color-paper);
  --bg-card: #ece7de;
  --bg-card-contrast: var(--color-obsidian);
  --text-main: var(--color-obsidian);
  --text-muted: #555c66;
  --text-inverse: var(--color-paper);
  --border-subtle: rgba(20, 23, 29, 0.12);
  --border-strong: rgba(20, 23, 29, 0.28);
  --grid-line: rgba(36, 43, 53, 0.15);
  --font-heading: "Outfit", -apple-system, sans-serif;
  --font-body: "Outfit", -apple-system, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }

  :root {
  /* Plinth Brand Tokens */
  --plinth-obsidian: #14171d;
  --plinth-slate: #242b35;
  --plinth-concrete: #9ea3a8;
  --plinth-limestone: #dcd7ce;
  --plinth-paper: #f4f0e8;
  --plinth-brass: #b59560;
  --plinth-font-heading: 'Outfit', sans-serif;
  --plinth-font-mono: 'IBM Plex Mono', monospace;
  --plinth-tracking-monumental: 0.28em;
  --plinth-tracking-body: -0.015em;
  --plinth-clearspace: 1.5;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: PLINTH → #overview
  - nav .nav-links
    - a: Overview → #overview
    - a: Geometry → #geometry
    - a: Logo Stack → #responsive-stack
    - a: Materials → #chromatics
    - a: Spatial Spec → #stationery
    - a: Stress Tests → #stress-tests
    - a: Assets → #downloads
  - a: Get Kit → #downloads
- section #overview .hero-section
  - h1: Permanent form, load-bearing identity.
  - p: A brutalist brand identity and architectural logo system anchored in cast concrete plinths, raking morning shadows, and cantilevered geometry. Designed for structural ateliers and spatial creators.
  - button: Grid: On
  - button: Wireframe
  - button: Reset
- section #geometry .section
  - h2: Mathematical Blueprint & Vector Anatomy
  - p: Constructed along rigid 68° tectonic thrust lines with an asymmetrical 22° cantilever shear. Every vector terminal aligns with modular architectural grid divisions.
  - h4: 01 // Tectonic Thrust (68°)
  - p: The primary legs rise at an acute 68° angle, evoking the towering structural trusses of cathedral buttresses and monolithic cast-in-place retaining walls.
  - h4: 02 // The Cantilever Crossbeam (22°)
  - p: Instead of a static horizontal tie, the crossbeam shears at 22°, projecting outward like an architectural brise-soleil or cantilevered sky terrace.
  - h4: 03 // 1.5× Clear-Space Boundary
  - p: The exclusion zone around the mark is pegged to 1.5× the crossbeam thickness. No foreign typographic or graphical elements may invade this perimeter.
- section #responsive-stack .section
  - h2: 4-Tier Responsive Logo Stack
  - p: Engineered per modern identity standards to maintain absolute visual presence across spatial billboards, navigation bars, app icons, and micro 16px browser tabs.
- section #inversion .section
  - h2: Monochrome & Inversion Matrix
  - p: A resilient mark does not depend on color. It commands visual dominance across pure white paper, obsidian shadows, and tonal raw concrete.
- section #chromatics .section
  - h2: Tectonic Color & Mineral Palette
  - p: Click any swatch to copy its hexadecimal token. Rooted in natural building stones, aggregates, aged brass joints, and board-marked concrete.
- section #typography .section
  - h2: Monumental Tracking & Technical Sans
  - p: Wide tracking gives the wordmark monumental gravitas. Use the interactive slider below to calibrate tracking across physical signage and drawings.
  - h3: Outfit & IBM Plex Mono
  - p: Outfit supplies geometric clarity and architectural proportions for titles, while IBM Plex Mono handles construction coordinates and engineering notes.
- section #stationery .section
  - h2: Spatial Touchpoints & Material Collateral
  - p: Proof of concept across physical environments: heavy letterpress cotton cards, slate stone reference specimens, and ISO engineering title blocks.
  - table .title-block-table
    - td: PLINTH ATELIER
    - td: PROJECT: CIVIC MONUMENT NO. 048
    - td: DATE: 2026-09-24
    - td: STATUS: TENDER SPECIFICATION
    - td: SHEET: A-104 REV. 3
- section #stress-tests .section
  - h2: The 3-Step Logo Stress Test Suite
  - p: A logo must survive the Gaussian blur test, the 5-second cognitive recall test, and the 16-pixel micro-scale check to prove foundational superiority.
  - p: Can you recall the A-frame and 22° cantilever beam?
  - button: Start 5-Sec Test
- section #downloads .section
  - h2: Vector Asset Suite & Token Export
  - p: Direct vector SVG code and design tokens for engineering handoff and print fabrication.
  - button: Monogram Glyph SVG
  - button: Horizontal Lockup SVG
  - button: Master Stack SVG
  - button: CSS Design Tokens
  - button: Copy Code
  - button: Download .SVG
- footer .page-footer
  - a: Return to Design Library → ../../index.html

## Images in the page
- `sculpture.jpg — Monolithic geometric brand sculpture on cast concrete plinth`
- `stationery.jpg — Blind letterpress stationery and slate specimen on board-formed concrete`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #trackingSlider
- input[range] #blurSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`
- `sculpture.jpg`
- `stationery.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
