# Rebuild prompt — Strata AI (`strata-ai`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/strata-ai/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous architectural intelligence agent operating natively inside CAD and BIM models, with real-time building code compliance auditing and generative parametric geometry.

## Title
Strata AI — Autonomous Architectural Intelligence Inside Your CAD & BIM

## Description meta
Strata AI inspects your architectural models in real-time, identifies building code violations, and automatically synthesizes parametric fixes inside Revit, Rhino, and Archicad.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #F4F3ED;
  --bg-card: #ECEAE1;
  --bg-white: #FFFFFF;
  --ink: #141413;
  --ink-muted: #6E6B61;
  --hairline: #D5D2C5;
  --hairline-dark: #2A2926;
  --cad-red: #FF3318;
  --cad-red-hover: #E02810;
  --cad-red-dim: rgba(255, 51, 24, 0.08);
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Strata AI → #
  - ul .nav-links
    - li: Product
    - li: Engine
    - li: IBC Compliance
    - li: Integrations
    - li: Studio
  - a: Request Access → → #demo
- section #product .hero-section
  - h1: An AI agent that works inside your design tools
  - p: Strata reviews your CAD model, identifies regulatory building code issues, and proposes parametric solutions. Upon approval, it applies edits natively without exporting files.
  - a: Explore the Architecture ↓ → #engine
- section #engine .section-editorial
  - h2: The repetitive parts of modelling shouldn't eat your day. Strata handles the fiddly, manual work so you can stay focused on the design, not the software.
  - p: Architectural production is bogged down by manual drafting checks, schedule alignment, wall fire-ratings, and IBC code lookups. Strata operates as a quiet ambient intelligence in the background of your CAD software, verifying geometric compliance with zero latency.
  - a: Learn How Strata Works → → #compliance
- section #integrations .section-pillars
  - h3: Sub-Millimeter Geometry Auditing
  - p: Continuous background analysis tracks polyline loops, wall joints, floor slab cantilevers, and staircase riser ratios against 4,800+ municipal building codes.
  - h3: Parametric Direct-Edits
  - p: No messy external code generation. When you approve an amendment, Strata drives your tool's native API to inject compliant NURBS, BIM families, or dimension tags.
  - h3: Native Viewport C++ Plugin
  - p: Runs natively inside Autodesk Revit, Rhino 8, McNeel Grasshopper, Graphisoft Archicad, and SketchUp Pro without cloud round-trip lag or proprietary lock-in.
- section #compliance .section-floorplan
  - h2: Run an agent natively in your model
  - button: Run Full Compliance Sweep
- section #demo .section-monument
  - h2: See what Strata can do in your model
  - p: Join architectural practices from London to Sydney using Strata to automate drawing audits and code synthesis.
  - form .cta-form-row
    - button: Request Demo
- section .giant-logo-section
- footer .site-footer
  - h4: STRATA AI LABS
  - p: Architectural computational intelligence for next-generation practice. Autonomous geometry reasoning, continuous building code compliance, and direct parametric synthesis.
  - p: COORD: 33°51'30"S 151°12'32"E SYDNEY • LONDON • ZURICH
  - h4: PLATFORMS
  - ul
    - li: Autodesk Revit 2024–2026
    - li: Robert McNeel Rhino 8 & GH
    - li: Graphisoft Archicad 27
    - li: Trimble SketchUp Studio
    - li: Vectorworks Architect
  - h4: REGULATORY COMPLIANCE
  - ul
    - li: International Building Code (IBC)
    - li: ADA Standards for Accessible Design
    - li: UK Approved Documents (Parts B, K, M)
    - li: National Construction Code (NCC AU)
    - li: LEED v4.1 Daylighting & Envelope
  - h4: LEGAL & PRIVACY
  - p: © 2026 STRATA AI TECHNOLOGIES INC. ALL RIGHTS RESERVED.
  - ul
    - li: Privacy Policy
    - li: Terms of License
    - li: BIM Data Sovereignty

## Images in the page
- `assets/hero_elevation.jpg — Modern Brutalist Elevation Blueprint`
- `assets/tower_redsun.jpg — Brutalist Tower with Red Sun`
- `assets/monument_stairs.jpg — Brutalist Cultural Pavilion`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='ENTER YOUR WORK EMAIL'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero_elevation.jpg`
- `assets/monument_stairs.jpg`
- `assets/tower_redsun.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
