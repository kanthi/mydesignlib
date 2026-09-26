# Rebuild prompt — Symbion (`symbion`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Product
- Folder: `library/brands/symbion/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Bio-synthetic neural AI brand identity system — 3D interactive wayfinding cube, hardcover editorial guide, polycarbonate smart badge, canvas tote, smartwatch watchface, and design tokens.

## Title
Symbion — Bio-Synthetic AI Brand Identity & Design System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --symbion-emerald: #00d26a;
  --symbion-emerald-hover: #00ba5e;
  --symbion-emerald-dark: #054e3b;
  --symbion-pine: #072a1e;
  --symbion-carbon: #0a0e0c;
  --symbion-sage: #e8f5ec;
  --symbion-white: #ffffff;
  --bg-page: #f4f7f5;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #ffffff;
  --bg-dark-card: #081a13;
  --border-subtle: rgba(10, 14, 12, 0.08);
  --border-standard: rgba(10, 14, 12, 0.13);
  --border-emerald: rgba(0, 210, 106, 0.4);
  --text-heading: #0a0e0c;
  --text-primary: #1e2621;
  --text-secondary: #4a5c52;
  --text-muted: #71857a;
  --text-emerald: #059669;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Space Grotesk', var(--font-sans);
  --font-mono: 'JetBrains Mono', monospace;
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
  --shadow-card: 0 10px 30px -5px rgba(7, 28, 20, 0.06), 0 4px 12px -2px rgba(7, 28, 20, 0.03);
  --shadow-elevated: 0 25px 50px -12px rgba(7, 28, 20, 0.12), 0 8px 20px -4px rgba(7, 28, 20, 0.04);
  --shadow-glow: 0 0 30px rgba(0, 210, 106, 0.35);
  --container-max: 1240px;
  }

  :root {\n  --symbion-emerald: #00D26A;\n  --symbion-pine: #072A1E;\n  --symbion-carbon: #0A0E0C;\n  --symbion-sage: #E8F5EC;\n  --symbion-white: #FFFFFF;\n}
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: Symbion → #
  - ul .nav-links
    - li: Emblem & Geometry
    - li: Color Tokens
    - li: Brand Touchpoints
    - li: Typography
  - button: Copy Design Tokens
- main
  - section .hero-specimen
    - h1: Where Biological Intelligence Meets Neural Cognition
    - p: Symbion is a next-generation neural computing identity uniting clean organic bio-luminescence with rigorous computational authority.
    - a: Explore Specimen Board ▾ → #touchpoints
    - a: Geometry Spec → #emblem
  - section #touchpoints .section-wrap
    - h2: Physical & Digital Touchpoints
    - p: Cohesive identity applications spanning architectural wayfinding, editorial monographs, smart badges, and digital telemetry.
    - h3: Hardcover Brand Guide
    - p: Deep charcoal linen binding with foil-stamped bio-spark emblem and duo-tone emerald edge block.
    - h3: Polycarbonate ID Badge
    - p: Translucent matte polycarbonate access pass with magnetic woven emerald neck lanyard.
    - h3: OLED Smartwatch Dial
    - p: Minimalist biometric complication displaying real-time cognitive sync state.
    - h3: Heavyweight Canvas Tote
    - p: Oversized magnified bio-spark screenprint in vibrant pigment on heavyweight black cotton.
    - h3: Illuminated Lightbox Poster
    - p: Monolithic black architectural corridor poster with high-luminance radiant gradient spark.
    - h3: Embroidered Cotton Cap
    - p: Low-profile 6-panel technical cap with clean white micro-embroidered emblem on the temporal panel.
  - section #palette .section-wrap
    - h2: Harmonized Palette Tokens
    - p: Click any swatch to copy the exact HEX code.
  - section #typography .section-wrap
    - h2: Typography & Proportions
    - p: Space Grotesk for authoritative headlines, Plus Jakarta Sans for UI, and JetBrains Mono for telemetry.
    - h4: DISPLAY / TITLES
    - p: Biological cognition mapped across deep neural layers.
    - h4: TELEMETRY & CODE
- footer .footer

## Fields
Keep these controls, including ids and placeholders.
- input[text] #typeInput

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
