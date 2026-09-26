# Rebuild prompt — Focalis (`focalis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/focalis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Media-first digital design studio featuring inline media typography badges, tactile neon lime button interactions, organic topographic contours, dual opposing project marquees, and a live Framer-style component property customizer.

## Title
Focalis Studio — Media-First Design Studio for Websites, Software & Apps

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #f4f1ea;
  --bg-surface: #ece8dd;
  --bg-card: #ffffff;
  --text-primary: #121316;
  --text-secondary: #555962;
  --text-muted: #888d96;
  --border-ink: #121316;
  --border-subtle: rgba(18, 19, 22, 0.12);
  /* Primary Interactive Accent */
  --accent-lime: #d5fb34;
  --accent-lime-hover: #c4ec26;
  --accent-active: #d5fb34;
  /* Auxiliary Accents */
  --accent-tangerine: #ff5c35;
  --accent-violet: #8b5cf6;
  --accent-cyan: #06b6d4;
  --accent-blue: #2563eb;
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  --container-max: 1320px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: Focalis Media → #
  - nav “Primary Site Navigation”
    - ul .nav-links
      - li: Studio
      - li: Portfolio
      - li: Customizer
      - li: Services
      - li: Contact
  - button: Say Hello →
- section #hero .hero-section
  - h1: Design studio focused on crafting WEB v2.4 Synthetix websites, EVERY BITE IS A TRIPPP... BRAND software, and STEP INTO APP apps.
  - p: No decoration for decoration's sake. Just good digital work.
  - button: Say Hello →
  - button: Watch Showreel (2:34)
- section #work .marquee-section
  - h2: The brands we made
  - p: Selected work from the last three years — brand systems, product surfaces and the sites that carry them.
  - button: Explore more projects →
- section #customizer .customizer-section
  - h3: Focalis Hero Live Customizer
  - p: Tweak typography, accent colors, inline media tilt angles, and card geometry. Real-time preview updates instantly.
  - button: Copy Framer Code
  - button: Reset Defaults
  - button: Live Interactive Button →
- section #services .services-section
  - h2: Tailored design systems for ambitious companies.
  - h3: Brand Architecture & Creative Direction
  - p: Distinctive positioning, modular typography lockups, and uncompromising visual systems that command market authority.
  - ul .service-deliverables
    - li: Multi-Scale Monograms & Logomarks
    - li: Color Chemistry & Token Systems
    - li: Editorial Motion Guidelines
  - h3: High-Conversion Web Experiences
  - p: Editorial marketing sites and interactive flagships engineered for lightning-fast load times and high visitor engagement.
  - ul .service-deliverables
    - li: Focalis Hero Inline Visual Primitives
    - li: Fluid Kinetic Scroll Choreography
    - li: Static Vanilla HTML/CSS/JS Delivery
  - h3: Product Surfaces & Mobile Systems
  - p: High-fidelity iOS app prototypes, multi-platform SaaS command dashboards, and production-grade Figma design kits.
  - ul .service-deliverables
    - li: Figma High-Fidelity Components
    - li: Dark Mode Tactile Interfaces
    - li: Micro-Interactions & Haptic Polish
- button: ×
- h3: Craft in Motion (2024–2026)
- button: Close
- button: ×
- h3: Project Name
- p: Project description details here.
- button: Inquire Similar →
- button: ×
- h3: Say Hello to Focalis Studio
- form
  - label: Your Name • Company
  - label: Email Address
  - label: Project Scope
  - option: Digital Flagship & Web Experience
  - option: Mobile Application Design
  - option: Complete Brand Identity Architecture
  - option: Framer / Focalis Hero Custom Implementation
  - button: Send Project Inquiry →
- footer #contact .footer
  - a: hello@focalis.example → mailto:hello@focalis.example

## Fields
Keep these controls, including ids and placeholders.
- input[range]
- input[text] placeholder='Jane Doe, Founder at NextLabs'
- input[email] placeholder='jane@example.com'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/topography-contours.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
