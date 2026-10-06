# Rebuild prompt — Lumora AI (`lumora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/lumora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Agentic creativity & generative content platform (SparkAI rebrand): radiant lavender-indigo ambient ground, floating midnight cards with chamfered circuit conduit lines, glassmorphism macOS prompt console with live model selector and interactive output drawer, responsive 3-phone mobile showcase switcher, dual feature pods (Idea Generator chips & Voice-to-Text audio waveform visualizer), and dark value pillars.

## Title
Lumora AI — Ignite Your Ideas with Agentic Intelligence

## Description meta
From concept to execution, your AI agent generates content, suggestions, and solutions instantly. Built for modern creators, marketers, and product teams.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-ambient: radial-gradient(circle at 50% 25%, #766edb 0%, #4b44a8 45%, #2a2468 85%, #18143d 100%);
  --bg-dark-card: #0c0b24;
  --bg-dark-surface: #141336;
  --bg-dark-card-inner: rgba(22, 21, 52, 0.7);
  --bg-white-card: #ffffff;
  --bg-light-surface: #f8f9fe;
  --bg-light-card-inner: #f1f3f9;
  --text-dark: #0f172a;
  --text-dark-muted: #64748b;
  --text-dark-dim: #94a3b8;
  --text-light: #ffffff;
  --text-light-muted: #cbd5e1;
  --text-light-dim: #818cf8;
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-gradient: linear-gradient(135deg, #6366f1 0%, #4338ca 100%);
  --accent-cyan: #38bdf8;
  --accent-violet: #8b5cf6;
  --border-glass: rgba(255, 255, 255, 0.14);
  --border-glass-subtle: rgba(255, 255, 255, 0.07);
  --border-light: rgba(15, 23, 42, 0.08);
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- section .hero-card
  - nav .site-nav
    - a: About → #about
    - a: Products → #features
    - a: How It Works → #how
    - a: Pricing → #pricing
    - a: Resources → #resources
    - button: Start Free Trial
  - h1: Ignite Your Ideas with Lumora
  - p: From concept to execution, your AI agent generates content, suggestions, and solutions instantly.
  - button: Try Lumora Free
  - button: ▶ Watch Demo
  - button: ✦ Generate
  - p: Instagram Hook: "Meet Edition 01: Grown above the cloud line, roasted for the obsessed. Notes of elderflower, wild berry, and caramelized cacao."
  - p: Ad Copy: "Zero compromises. 100% fair-harvested micro-lot beans roasted with surgical thermal precision. Reserve your first batch today."
- button: Desktop View
- button: 3-Phone Mobile Showcase
- section #phoneShowcase .phone-showcase-container
  - h3: Powerful Features to Boost Creativity
  - p: From idea generation to polished copy, Lumora provides seamless tools.
  - h3: Ignite Your Ideas with Lumora
  - p: Your autonomous agent generates solutions instantly.
  - button: Try Lumora
  - h3: AI That Turns Ideas Into Reality
- section #features .features-card
  - h2: Powerful Features to Boost Your Creativity
  - p: From idea generation to polished content, Lumora provides the tools you need to create, optimize, and publish effortlessly.
  - p: Instantly spark fresh, creative, and relevant content ideas tailored to your brand, goals, and audience.
  - p: Instantly convert spoken thoughts into structured, editable copy ready for team review, formatting, or publishing.
- section #about .why-card
  - h2: Why Teams Choose Lumora
  - p: Lumora is combining speed, intelligence, and adaptability into one seamless AI experience.
  - p: Delivers deeply contextual outputs based on your audience, tone, and brand persona without generic templates.
  - p: Generates publication-ready marketing copy, design briefs, and strategy drafts in sub-second response times.
  - p: Integrates directly into your content calendar, design tools, and CMS with one-click export pipelines.
- footer .site-footer
  - a: Privacy Policy → #about
  - a: Terms of Service → #about
  - a: Security → #about

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
