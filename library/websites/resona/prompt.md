# Rebuild prompt — Resona (`resona`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/resona/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Customer review synthesis and voice-of-customer AI intelligence platform with ambient dark-mode aesthetics, high-fidelity interactive dashboard cards, and real-time sentiment testing.

## Title
Resona — AI Turns Reviews Into Clear Decisions

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #07080E;
  --bg-surface: #0E101B;
  --bg-card: #141727;
  --bg-card-hover: #1A1E33;
  --color-primary: #6366F1;
  --color-primary-glow: rgba(99, 102, 241, 0.35);
  --color-blue: #3B82F6;
  --color-violet: #8B5CF6;
  --color-text: #F8FAFC;
  --color-muted: #94A3B8;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-glow: rgba(99, 102, 241, 0.3);
  --font-main: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'Space Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Resona → #
  - ul .nav-menu
    - li: Product
    - li: Features
    - li: Pricing
    - li: Docs
    - li: Blog
  - a: Contact sales → #contact
  - a: Book demo → #demo
- main
  - section .hero-section
    - h1: AI turns reviews into clear decisions
    - p: Resona gathers customer feedback from every review site, app store, and support stream, highlights what matters most, and recommends the best product action.
    - a: Get started free → #demo
    - a: Explore features → #sandbox
    - ul .dash-nav-list
      - li: 📊 Overview
      - li: 💬 Recent Feedback
      - li: ⚠️ Top Issues
      - li: 🤖 AI Summary
      - li: 📈 Insights & Trends
      - li: 🔌 Integrations
      - li: ⚙️ Settings
    - h2: Welcome back, Sarah
    - p: Here is what is happening with your customer feedback today.
    - p: Sentiment Pulse: Users appreciate the intuitive UI and real-time alerts. Customer satisfaction score climbed to 4.7/5.
    - p: Action Directive: Prioritize optimizing dashboard query speed to resolve the primary cluster of 1,248 latency reports.
  - section .marquee-section
  - section #sandbox .sandbox-section
    - h2: Test Real-Time AI Review Ingestion
    - p: Pick a sample review or type customer feedback below to watch Resona synthesize insight.
    - button: Positive Feedback
    - button: Critical Latency Bug
    - button: Feature Request
    - h4: Classified Sentiment
    - h4: Extracted Topics
    - h4: Prescribed Action
- footer .site-footer

## Fields
Keep these controls, including ids and placeholders.
- textarea #reviewInput

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
