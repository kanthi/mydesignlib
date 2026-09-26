# Rebuild prompt — Talus (`talus`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/talus/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cinematic product design studio landing page: full-bleed looping video background of cybernetic helmet with pulsing LED visor, split hero typography, selected case studies, and four core disciplines.

## Title
Talus — Product Studio Turning Ideas into Meaningful Products

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #07080a;
  --bg-surface: #0e1014;
  --bg-card: #13161c;
  --accent: #ff441f;
  --accent-glow: rgba(255, 68, 31, 0.45);
  --accent-amber: #ff8833;
  --text: #ffffff;
  --text-muted: #8a929e;
  --text-dim: #515763;
  --border: rgba(255, 255, 255, 0.14);
  --border-strong: rgba(255, 255, 255, 0.28);
  --font-ui: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Outfit', var(--font-ui);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #header .header
  - a: Talus → #
  - nav “Primary Navigation”
    - ul .nav-list
      - li: What We Do
      - li: Work
      - li: Approach
      - li: Insights
      - li: Contact
  - a: Contact us → #contact
- a: What We Do → #what-we-do
- a: Work → #work
- a: Approach → #approach
- a: Insights → #insights
- a: Contact → #contact
- section .hero
  - h1: Product studio turning ideas into meaningful products
  - p: Partnering with forward-thinking brands to craft stronger stories, create smarter identities, and design for maximum impact. Our work transforms attention into action.
  - a: Work with Us → #contact
  - a: Explore Our Work → #work
- section #work .section
  - h2: Forming new categories through strategic craft.
  - a: Spatial UI • Wearables Kinetix Spatial OS Next-generation micro-gesture OS interface and spatial tokens for augmented computing. → #project-kinetix
  - a: Acoustics • Identity Aura Acoustic Platform Audio telemetry visualization and global eCommerce architecture for precision acoustic hardware. → #project-aura
  - a: Autonomous Systems Vesper Agent Mesh High-density operational dashboard and real-time observability for multi-agent LLM infrastructure. → #project-vesper
  - a: Automotive HMI Chronos Cockpit HMI Deterministic HUD interface and ergonomic tactile design for autonomous long-haul transport. → #project-chronos
- section #what-we-do .section
  - h2: Engineered precision from strategic narrative to runtime code.
  - h3: Product Discovery
  - p: Deconstructing ambiguous problem spaces into validated product architectures, user mental models, and rapid functional prototypes.
  - h3: Brand Architecture
  - p: Crafting cohesive visual identity frameworks, typographic voice, and design systems designed to scale seamlessly across hardware and software.
  - h3: Spatial & WebGL
  - p: Pushing the boundaries of browser performance with custom shaders, real-time 3D environments, and sensory micro-interactions.
  - h3: Design Engineering
  - p: Bridging visual nuance with production-grade engineering: fluid transitions, accessibility standards, and zero-latency front-end code.
- footer #contact .footer
  - h2: Have an ambitious idea? Let's give it form.
  - a: Start a Project → mailto:partnerships@talus.example

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
