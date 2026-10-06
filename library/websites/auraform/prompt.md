# Rebuild prompt — Auraform (`auraform`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/auraform/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Creative direction and generative brand agency featuring saffron halftone editorial poster canvas, massive typographic background, interactive cursor-driven flashlight torch revealing the portrait in full color, and floating metric bento cards.

## Title
Auraform — Creative Direction & Generative Brand Lab

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-amber: #f59e0b;
  --bg-amber-dark: #d97706;
  --bg-dark: #090a0f;
  --bg-surface: #12141d;
  --border-dark: rgba(0, 0, 0, 0.12);
  --border-light: rgba(255, 255, 255, 0.1);
  --text-dark: #18181b;
  --text-main: #f8fafc;
  --text-muted: #71717a;
  --spotlight-size: 140px;
  --spotlight-glow: rgba(255, 255, 255, 0.35);
  --font-display: 'Syne', -apple-system, sans-serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- section #heroStage .hero-canvas
  - nav .nav-links
    - a: Work → #work
    - a: Services → #services
    - a: About → #about
    - a: Contact → #contact
  - a: ← Library → ../../
  - button: Let's Connect
  - p: Picture this: With a few clicks, you can build visionary brand campaigns, relying on our generative art direction and custom insight algorithms.
- button: Warm Amber
- button: Electric Cyan
- button: Acid Lime
- button: Auto Scan ↺
- section #work .section-pad
  - h2: Crafting the Next Generation of Brands
  - button: View All Archives →
  - h3: Syntropy Health Ecosystem
  - p: A dynamic visual identity adapting in real time to biometric clinical telemetry.
  - h3: Kinetiq Spatial OS
  - p: Futuristic industrial robotics interface and tactile design language.
  - h3: Vespera Sound Systems
  - p: High-fidelity acoustic brand identity for next-generation spatial audio monitors.
  - h3: Monolith Quant Fund
  - p: Restrained, Swiss-rationalist print and digital publications for autonomous quantitative trading.
- section #services .section-pad
  - h2: Where Vision Meets Execution
  - h3: Generative Identity Systems
  - p: We craft responsive typographic marks, color spaces, and programmatic brand guidelines that evolve dynamically across all touchpoints.
  - h3: Interactive Digital Stages
  - p: Custom WebGL shaders, Three.js 3D environments, and scroll-driven choreography that captivate modern audiences without latency.
  - h3: High-Conversion Storytelling
  - p: We turn technical capabilities into undeniable market proof, accelerating enterprise adoption and series-stage valuation.
- button: ×
- h3: Let's Build Together
- p: Tell us about your next visionary product or brand transformation.
- form
  - label: Your Name
  - label: Work Email
  - label: Project Scope
  - option: Complete Brand Overhaul
  - option: Interactive Web Experience & 3D
  - option: Product Narrative & Launch Campaign
  - button: Send Inquiry →
- footer
  - p: Avant-garde creative direction, generative branding, and interactive digital stages for breakthrough companies.
  - h4: Exploration
  - ul
    - li: Featured Work
    - li: Services
    - li: Interactive Torch
    - li: Design Library
  - h4: Studio
  - ul
    - li: Initiate Project
    - li: Manifesto
    - li: Press Kit

## Images in the page
- `assets/subject-shadow-clean.webp — Creative Director Silhouette`
- `assets/subject-color-clean.webp — Creative Director Illuminated`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='e.g. Maya Lin'
- input[email] placeholder='maya@company.com'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/face-illuminated.webp`
- `assets/face-shadow.webp`
- `assets/halftone-bg.webp`
- `assets/subject-color-clean.webp`
- `assets/subject-color.webp`
- `assets/subject-shadow-clean.webp`
- `assets/subject-shadow.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
