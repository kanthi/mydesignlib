# Rebuild prompt — Kinetiq (`kinetiq`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/kinetiq/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Creative developer portfolio inspired by Run Rob Run — warm light concrete base, electric orange core audio-reactive 3D goo, 300vh scroll-driven cube morph, 8x8 pixel gallery cards, tools reel, and real-time Web Audio synth.

## Title
Kinetiq | Creative Technologist & Generative Frontend Engineer

## Description meta
Portfolio of Kaizen Thalor (Kinetiq), a creative developer shaping thoughtful digital experiences through motion, typography, and front-end craft.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --scene-base: #dbdbda;
  --off-white: #dbdbda;
  --orange: #ff641c;
  --black: #202020;
  --white: #dbdbda;
  --dark-gray: #161616;
  --border-color: rgba(32, 32, 32, 0.15);
  --font-display: 'Syne', -apple-system, sans-serif;
  --font-body: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --container: 1440px;
  --gutter: 24px;
  --site-loader-cols: 10;
  --site-loader-rows: 8;
  --section-transition-cols: 6;
  --page-entry-panel-cols: 6;
  --topbar-menu-cols: 6;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- p: LOADING
- header .topbar
  - a: KINETIQ → #
  - nav .topbar-nav “Primary”
    - a: About → #about
    - a: Tools → #tools
    - a: Work → #work
    - a: Let's create → mailto:hello@kinetiq.design
- section .hero-stage
  - h1: Creative
  - p: About
  - p: Location: London
  - p: Building expressive digital experiences with thoughtful motion, strong typography, and modern front-end craft for brands, campaigns, and digital products across web and interactive spaces.
  - h1: Developer
  - button: PRESS PLAY
  - button: 01. Darling - Tulipa Moves - So Did We
  - button: 02. The Wamdue Kids - In My Soul (3c Deep Mix)
  - button: 03. SP101 - Dreamstate
- section .page-entry-track
  - h2: Thoughtful ideas shaped with meaning
  - h2: Bold systems built to hold attention
- section #about .page-entry-pixel-section
  - figure .page-entry-gallery-card
  - figure .page-entry-gallery-card
  - figure .page-entry-gallery-card
  - h3: Visual systems
  - p: Building clear art direction, strong composition, and digital identities that feel distinctive and intentional.
  - h3: Front-end craft
  - p: Developing responsive interfaces with thoughtful detail, smooth performance, and precise implementation.
  - h3: Motion language
  - p: Using animation and interaction to guide attention, add atmosphere, and make the work feel alive.
  - h3: Brand presence
  - p: Translating ideas into polished launches, campaigns, and product surfaces that feel cohesive across touchpoints.
  - h3: Concept to form
  - p: Shaping early ideas into clear visual systems that stay flexible, purposeful, and ready to evolve.
- section #tools .tools-strip
  - button: 000 Runman
  - button: 001 Chroma Warp
  - button: 002 Split Mask
  - button: 003 Text Maze
  - button: 004 Whale Wave
  - p: A lightweight looping motion mark used as a lead-in for the tool reel.
- section #work .page-entry-work-progress
  - h2: Work
  - article .project-card
    - h3: Dash
    - p: A custom template shaped for a modern creative studio. Built with a sharp CMS structure, reusable sections, and script-led motion details.
  - article .project-card
    - h3: Racepoint
    - p: An editorial visual system, custom page templates, and a flexible component setup. Modern interactions bring movement without losing clean brand feel.
  - article .project-card
    - h3: Commuter
    - p: A cinematic portfolio built around immersive project presentation. Custom templates and modern script enhancements give the site a bold rhythm.
  - article .project-card
    - h3: Roger W Smith
    - p: A refined build for a luxury watchmaker, designed around atmosphere, detail, and controlled pacing with subtle modern scripts.
- footer #contact .site-footer
  - h2: "Alarm bells are ringing, Willie"
  - h3: Let me Run your next project!
  - p: It's the one you didn't expect. Not in the spotlight, but out there on the edge.
  - button: hello@kinetiq.design

## Images in the page
- `media/dash.webp — Dash studio build`
- `media/racepoint.webp — Racepoint editorial system`
- `media/commuter.webp — Commuter film portfolio`
- `media/roger.webp — Roger luxury archive`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `media/aura-os.webp`
- `media/commuter.webp`
- `media/dash.webp`
- `media/hyperline.webp`
- `media/me-2.webp`
- `media/monolith.webp`
- `media/portrait-1.webp`
- `media/portrait-2.webp`
- `media/racepoint.webp`
- `media/roger.webp`
- `media/side-1.webp`
- `media/side-2.webp`
- `media/synapse-ai.webp`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
