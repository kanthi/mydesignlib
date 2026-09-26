# Rebuild prompt — Aetheris (`aetheris`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/aetheris/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Atmospheric creative design studio crafting AI-native brands, spatial interfaces, and immersive digital worlds. Features full-bleed cinematic sci-fi metropolis video hero with floating mist particles, 8-point celestial starburst identity, 4-metric growth counter strip (.29B raised, 230+ launches), 3 flagship worldbuilding case studies (Nebula OS, Chronos Protocol, Vanguard Worlds), deep studio disciplines, manifesto philosophy, transparent tier pricing, and interactive booking modal.

## Title
Aetheris — Design studio crafting AI, brands & digital worlds

## Description meta
Helping visionary teams shape memorable brands, smarter products, and meaningful digital experiences.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #08090b;
  --surface-panel: #0d0f12;
  --surface-card: rgba(255, 255, 255, 0.03);
  --surface-card-hover: rgba(255, 255, 255, 0.06);
  --surface-glass: rgba(13, 15, 18, 0.72);
  --border-subtle: rgba(255, 255, 255, 0.09);
  --border-hover: rgba(255, 255, 255, 0.22);
  --text-primary: #ffffff;
  --text-secondary: #9ea4b0;
  --text-muted: #646a77;
  --action-primary: #ffffff;
  --action-primary-hover: #e6e9ee;
  --action-primary-text: #08090b;
  --action-secondary: rgba(255, 255, 255, 0.08);
  --action-secondary-hover: rgba(255, 255, 255, 0.16);
  --font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-pill: 9999px;
  --radius-card: 16px;
  --radius-inner: 10px;
  --transition-smooth: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteHeader .site-header
  - a: Aetheris → #
  - nav “Main Navigation”
    - ul .nav-links
      - li: About us
      - li: Work
      - li: Services
      - li: Pricing
      - li: Philosophy
  - button: Start a project
- section #hero .hero-section
  - h1: Design studio crafting AI, brands & digital worlds
  - p: Helping visionary teams shape memorable brands, smarter products, and meaningful digital experiences.
  - button: Book a meeting
- section #work .section-work
  - h2: World-scale digital artifacts & flagship products
  - p: From generative intelligence to spatial computing environments, we engineer category-defining brand artifacts.
  - article .work-card
    - h3: Nebula OS
    - p: Next-generation spatial AI operating system featuring generative fluid layouts and multimodal ambient cognition.
  - article .work-card
    - h3: Chronos Protocol
    - p: Institutional algorithmic liquidity matrix and cryptographic design system engineered for high-frequency precision.
  - article .work-card
    - h3: Vanguard Worlds
    - p: Procedural metaverse world architecture, interactive 3D geospatial navigators, and AAA cinematic brand lore.
- section #services .section-services
  - h2: Where synthetic intelligence meets sublime craft
  - p: We combine engineering rigor with high-art direction to build unforgettable digital systems.
  - h3: Synthetic Brand Systems
  - p: We craft living brand identities designed for the algorithmic era. Multi-modal design tokens, generative logotypes, and reactive design primitives that adapt in real time across digital ecosystems.
  - ul .service-features
    - li: Generative brand token engines
    - li: Autonomous cross-platform visual identity
    - li: Comprehensive multi-tier guidelines
  - h3: Spatial UI & Tactile Interfaces
  - p: Beyond the rectangular grid. We design canvas-first, depth-driven interfaces featuring micro-feel haptics, physics-based motion choreography, and frictionless user flows.
  - ul .service-features
    - li: Tactile micro-interaction engineering
    - li: WebGL / Shader canvas integration
    - li: Low-latency reactive feedback loops
  - h3: Digital Worlds & CGI Lore
  - p: Architectural-grade 3D environments, procedural world geometry, and cinematic storytelling. We turn brand websites into atmospheric experiential journeys that linger in memory.
  - ul .service-features
    - li: Cinematic real-time environmental 3D
    - li: Procedural world generation assets
    - li: Full-bleed interactive narrative experiences
  - h3: Autonomous Design Operations
  - p: Bespoke design-to-code pipelines that bridge Figma tokens directly to production Git repositories. Automated visual regression, accessibility linting, and continuous style ops.
  - ul .service-features
    - li: Headless token synchronization pipelines
    - li: Continuous automated visual QA systems
    - li: Enterprise component libraries
- section #philosophy .section-manifesto
  - blockquote: "The modern interface is no longer a flat static page. It is an atmospheric living universe where craft and intelligence converge."
  - h4: Depth Over Noise
  - p: True elegance speaks through space, subtle luminosity, and calm atmospheric gravity.
  - h4: Kinetic Poise
  - p: Every motion has intention, friction, and natural momentum — never arbitrary distraction.
  - h4: Synthetic Soul
  - p: AI without human taste is noise; human taste amplified by AI is transcendent worldbuilding.
  - h4: Perpetual Polish
  - p: Sub-pixel borders, tactile contrast, and timeless geometry that withstands platform shifts.
- section #pricing .section-pricing
  - h2: Transparent studio investment
  - p: Direct partnership with senior world designers and systems architects. No junior bloat.
  - h3: Design Sprint
  - p: Rapid 2-week deep dive to conceptualize and build your flagship interactive demo.
  - ul .tier-perks
    - li: Core brand aesthetic & key visuals
    - li: Full responsive web prototype
    - li: Investor pitch interactive demo
    - li: 10-day guaranteed turnaround
  - button: Inquire Sprint
  - h3: Studio Retainer
  - p: Dedicated senior design pod embedded directly into your core product organization.
  - ul .tier-perks
    - li: Full-time Lead Architect & 3D Designer
    - li: Weekly shipped releases & token updates
    - li: Continuous design-to-code pipelines
    - li: Direct Slack & async Loom integration
  - button: Start Studio Retainer
  - h3: World Venture
  - p: End-to-end bespoke digital worldbuilding, multi-platform ecosystem, and flagship launch.
  - ul .tier-perks
    - li: Complete procedural CGI worldbuilding
    - li: Proprietary synthetic AI interface system
    - li: Global keynotes & immersive launch media
    - li: Full IP transfer and bespoke training
  - button: Request Consultation
- section #about .section-final-cta
  - h2: Ready to shape your digital world?
  - p: We partner with a curated roster of 6 forward-thinking teams per quarter. Schedule a private consultation to discuss your vision.
  - button: Book a meeting
- footer .site-footer
  - a: Aetheris → #
  - p: Studio crafting AI-native brands, spatial interfaces, and immersive digital worlds for category-defining leaders.
  - ul .footer-links
    - li: About Studio
    - li: Selected Work
    - li: Disciplines
    - li: Investment
    - li: Philosophy
  - ul .footer-links
    - li: San Francisco — Mission
    - li: Tokyo — Roppongi
    - li: Zurich — Seefeld
    - li: London — Shoreditch
  - ul .footer-links
    - li: hello@aetheris.studio
    - li: press@aetheris.studio
    - li: PGP Encrypted Dispatch
  - a: Privacy Manifesto → #
  - a: Terms of Service → #
  - a: System Status → #
- button: ×
- h3: Book a Strategy Session
- p: Select your engagement interest and preferred consultation window.
- form
  - label: Consultation Focus
  - option: General Discovery (30 min)
  - option: Design Sprint ($18,500)
  - option: Studio Retainer ($32,000/mo)
  - option: Bespoke World Venture
  - label: Your Name
  - label: Corporate Email
  - label: Preferred Date & Window
  - label: Project Scope / Links
  - button: Confirm Discovery Booking
- h3: Discovery Session Reserved
- p: A confirmation invitation with private video uplink details has been dispatched to your email.
- button: Done

## Images in the page
- `assets/project-nebula.jpg — Nebula OS Spatial Interface`
- `assets/project-chronos.jpg — Chronos Protocol Liquidity System`
- `assets/project-vanguard.jpg — Vanguard Worlds Procedural City`

## Fields
Keep these controls, including ids and placeholders.
- select #bookingFocus
- input[text] placeholder='Elena Vance'
- input[email] placeholder='elena@company.com'
- input[date] #bookingDate
- textarea placeholder='Briefly describe what your team is building...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/aetheris-logo.svg`
- `assets/hero-bg.jpg`
- `assets/hero-bg.mp4`
- `assets/hero-poster.jpg`
- `assets/project-chronos.jpg`
- `assets/project-nebula.jpg`
- `assets/project-vanguard.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
