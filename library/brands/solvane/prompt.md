# Rebuild prompt — Solvane (`solvane`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/solvane/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Botanical dermatological skincare & architectural wellness identity system: 8-petal scalloped octagram mark with central astroid brilliance star, linen & fluted travertine stationery flatlay, luxury cosmetic packaging on cast concrete pedestal, tactile app icon squircles, 360gsm crew apparel tee, modern architectural blade signage, duplex business cards, and complete geometric construction blueprint.

## Title
Solvane Atelier — Brand Identity System & Design Specimen

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-steel-blue: #467489;
  --color-champagne: #e1dad1;
  --color-warm-grey: #c7c3b8;
  --color-charcoal: #333333;
  --color-paper: #f9f7f4;
  --color-pure-white: #ffffff;
  --color-silver-foil: #e2edf2;
  /* Active theme variables (Default: Steel Blue) */
  --bg-primary: #467489;
  --bg-surface: #3a6275;
  --bg-surface-elevated: #325567;
  --text-primary: #e1dad1;
  --text-secondary: #c7c3b8;
  --text-muted: rgba(225, 218, 209, 0.7);
  --border-subtle: rgba(225, 218, 209, 0.2);
  --border-strong: rgba(225, 218, 209, 0.4);
  --mark-color: #e1dad1;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-xl: 36px;
  --transition-base: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  :root {
  --color-steel-blue: #467489;
  --color-champagne: #E1DAD1;
  --color-warm-grey: #C7C3B8;
  --color-charcoal: #333333;
  --color-paper: #F9F7F4;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .brand-nav
  - a: Solvane → #hero
  - ul .nav-links
    - li: Identity Bento
    - li: Stationery Suite
    - li: Product Packaging
    - li: Geometric Blueprint
    - li: Tokens & Vectors
- section #hero .hero-specimen
  - h1: Solvane Atelier
  - p: Botanical dermatological skincare & architectural wellness rooted in luminous radial balance, mineral slate materiality, and uncompromising aesthetic clarity.
- section #showcase .container
  - h3: Steel Blue
  - p: HEX : #467489 RGB : 70, 116, 137 CMYK : 49 15 00 46
  - h4: Warm Grey
  - p: HEX : #C7C3B8 RGB : 199, 195, 184 CMYK : 00 02 08 22
  - h4: Charcoal
  - p: HEX : #333333 RGB : 51, 51, 51 CMYK : 69 63 62 58
  - h4: Champagne
  - p: HEX : #E1DAD1 RGB : 225, 218, 209 CMYK : 00 03 07 12
- section #blueprint .blueprint-section
  - h2: The Scalloped Octagram Blueprint
  - p: Engineered on a 200×200 Cartesian coordinate matrix. Eight symmetrical flared petals formed by intersecting four uniform 17.2mm cutting bands, a 42mm inner aperture, and 66mm external circular arcs.
  - h5: 01 // 8-Fold Radial Symmetry
  - p: Petals are mathematically arranged at exactly 22.5° + k·45° rotational intervals around the origin.
  - h5: 02 // Uniform Channel Relief
  - p: Parallel cutting bands maintain an exact 17.2mm orthogonal spacing for physical debossing and stamping integrity.
  - h5: 03 // The Central Astroid
  - p: A floating 4-pointed spark cusped with 32.5mm concave arcs symbolizing clinical brilliance and natural radiance.
  - h4: Export Design Tokens & Vector Assets
  - p: Instantly copy production CSS custom properties or embed the pure mathematical SVG mark.
  - button: Copy CSS Tokens
  - button: Copy SVG Code
- footer .brand-footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/solvane-lockup.svg`
- `assets/solvane-mark.svg`
- `assets/solvane-wireframe.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
