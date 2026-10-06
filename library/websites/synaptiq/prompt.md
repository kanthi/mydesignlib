# Rebuild prompt — Synaptiq (`synaptiq`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/synaptiq/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous AI customer support orchestration template featuring panoramic misty alpine forest hero, multi-channel omni-hub, 48h deflection metrics, and telemetry radar benchmarks.

## Title
Synaptiq — Automate Customer Support with Intelligent AI Agents

## Description meta
Deliver instant, accurate, and scalable support experiences with AI-powered automation that learns your business.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #F9FAF7;
  --color-surface: #FFFFFF;
  --color-surface-subtle: #F0F4F1;
  --color-forest: #1E3D31;
  --color-forest-dark: #122820;
  --color-forest-light: #2C5645;
  --color-lime: #D2F23E;
  --color-lime-soft: rgba(210, 242, 62, 0.2);
  --color-border: #E4E8E3;
  --color-border-subtle: #EEF2ED;
  --color-text-main: #111A16;
  --color-text-muted: #56645E;
  --color-text-dim: #8E9B95;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --transition: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .container
  - nav .top-nav
    - a: Synaptiq → #
    - ul .nav-links
      - li: Home
      - li: Feature
      - li: Pricing
      - li: Blog
      - li: About
      - li: Contact
    - a: Get started → #start
- main
  - section #home .hero-section.container
    - h1: Automate customer support with intelligent AI agents
    - p: Deliver instant, accurate, and scalable support experiences with AI-powered automation that learns your business.
    - a: Get started free → → #start
    - a: Talk to our team → #team
  - section .marquee-strip.container
  - section .problem-section.container
    - h2: Support teams are overwhelmed
    - p: Slow responses, repetitive queries, and growing ticket volumes are holding your business back — and burning out your team.
  - section #features .solution-section
    - h2: Meet Synaptiq AI
    - p: Automate up to 80% of customer interactions with intelligent workflows and AI-driven responses that feel human.
  - section .capabilities-section.container
    - h3: Automation
    - p: Customer queries instantly resolved using fine-tuned models trained directly on your help docs, past tickets, and internal Notion/Confluence bases.
    - h3: Smart Ticket Routing
    - p: Automatically prioritize urgent inquiries and intelligently route edge cases to specialized team leads in seconds.
    - h3: Live Telemetry
    - p: Track deflection percentages, escalation triggers, CSAT trajectories, and bot accuracy in real time.
- footer .footer-section
  - a: Features → #features
  - a: Routing → #routing
  - a: Pricing → #pricing
  - a: Privacy → #privacy
  - a: Contact → #contact

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/misty-forest.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
