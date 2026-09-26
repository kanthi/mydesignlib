# Rebuild prompt — Stryx (`stryx`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · SaaS
- Folder: `library/brands/stryx/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Sovereign Legal AI brand system: geometric sentinel owl-shield mark, pine forest and pale iris color architecture, construction grid, stationery suite, spatial signage, and enterprise legal interface.

## Title
Stryx — Sovereign Legal AI Brand Guidelines

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Outfit", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: "DM Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  /* Primary Brand Colors */
  --pine-green: #132B20;
  --pine-green-dark: #0D1E16;
  --pine-green-light: #1E3F30;
  --pale-iris: #D6DCF2;
  --pale-iris-tint: #ECEFFB;
  --sage-green: #4D7555;
  --sage-light: #8BA892;
  /* Neutrals */
  --canvas: #F5F6F3;
  --canvas-surface: #FFFFFF;
  --canvas-subtle: #E9ECE6;
  --ink-primary: #0C1410;
  --ink-secondary: #4D5751;
  --ink-faint: #838F87;
  --border-default: rgba(12, 20, 16, 0.1);
  --border-subtle: rgba(12, 20, 16, 0.05);
  --wrap: 1240px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --dur: 280ms;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .brand-nav
  - nav .nav-links
    - a: 01 Logo Design → #logo-design
    - a: 02 Color System → #color-system
    - a: 03 Typography → #typography
    - a: 04 Applications → #applications
    - a: 05 Digital Product → #digital-ui
  - a: ← Library → ../../
  - button: Download Assets
- section .brand-hero
  - h1: Stryx Sovereign Legal AI
  - p: The comprehensive visual identity system for Stryx: Europe's sovereign legal intelligence core. A symbiosis of heraldic institutional authority, vigilant optical geometry, and mathematical precision.
- main .container
  - section #logo-design .chapter-section
    - h2: Logo Design & Construction
    - p: Constructed on a strict modular grid. The mark balances Athenian nocturnal vigilance with heraldic shield protection.
    - article .guideline-card
      - button: Toggle Guides
      - p: Formed from 60-degree angled tangents intersecting concentric golden-ratio ocular arcs.
    - article .guideline-card
      - p: The standard signature for enterprise communications, web headers, and formal legal filings.
    - article .guideline-card
      - p: No typographic or illustrative element may encroach within the 1.5X perimeter margin.
    - article .guideline-card
      - p: Approved execution on deep pine institutional darks and pale iris modern light surfaces.
  - section #color-system .chapter-section
    - h2: Color System & Tokens
    - p: A chromatic architecture rooted in northern European pine, legal parchment ivory, and iris illumination. Click any swatch to copy value.
  - section #typography .chapter-section
    - h2: Typography Architecture
    - p: Engineered for dual contexts: bold high-level executive statements and dense, high-accuracy contract analysis.
    - p: ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789 (!@#$%^&*?)
  - section #applications .chapter-section
    - h2: Collateral & Spatial Applications
    - p: Translating the identity across print collateral, architectural installations, corporate apparel, and transit totems.
    - article .app-card
      - h3: Executive Legal Dossier
      - p: 360gsm cotton board with blind debossed crest and forest green foil spine.
    - article .app-card
      - h3: HQ Dimensional Signage
      - p: Brushed titanium letters on acoustic pine-green felt wall panels.
    - article .app-card
      - h3: Staff Heavyweight Hoodie
      - p: Organic combed pine cotton with high-density silicone chest relief.
    - article .app-card
      - h3: Airport Terminal Totems
      - p: Ultra-high-definition 8K monolithic digital display campaigns.
    - article .app-card
      - h3: iOS & macOS Sovereign App
      - p: Retina glyph icon designed for instant optical recognition at 16px and 1024px.
    - article .app-card
      - h3: Partner Enamel Pins
      - p: Silver-plated cast zinc with hard dark green enamel fill.
  - section #digital-ui .chapter-section
    - h2: Sovereign Product Interface
    - p: Live simulated preview of the Stryx enterprise console: secure reasoning streams, clause decomposition, and zero-leakage enclave verification.
    - p: "The vendor shall irrevocably indemnify the purchaser against any third-party claims arising from regulatory deviations occurring prior to the closing date..."
- footer .brand-footer
  - p: © 2026 Stryx Legal AI. Fictional brand specimen for mydesignlib.
  - a: Logo → #logo-design
  - a: Colors → #color-system
  - a: Typography → #typography
  - a: Applications → #applications

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
