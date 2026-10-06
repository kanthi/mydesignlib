# Rebuild prompt — Sendoa (`sendoa`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/sendoa/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Editorial AI sales CRM and outreach engine featuring warm sand architectural framing, dark obsidian islands, diagrammatic connector tree with live telemetry pods, 4-tab capability suite, mineral marble analytics, and massive editorial proof metrics.

## Title
Sendoa — All-in-One CRM for Performance-Driven Sales Teams

## Description meta
Sendoa is an intelligent sales CRM and outreach automation platform centralizing customer data, performance analytics, and predictive deal closing.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas-sand: #EDE8DF;
  --color-canvas-sand-light: #F6F2EC;
  --color-canvas-sand-card: #E4DED3;
  --color-canvas-sand-border: #D8D1C4;
  --color-obsidian: #121316;
  --color-obsidian-card: #18191F;
  --color-obsidian-card-elevated: #20222A;
  --color-obsidian-border: rgba(255, 255, 255, 0.09);
  --color-obsidian-border-subtle: rgba(255, 255, 255, 0.05);
  --color-orange: #FF5520;
  --color-orange-hover: #E74714;
  --color-orange-subtle: rgba(255, 85, 32, 0.12);
  --color-emerald: #10B981;
  --color-emerald-subtle: rgba(16, 185, 129, 0.12);
  --color-emerald-deep: #062318;
  --color-text-dark: #141518;
  --color-text-dark-muted: #6C6F79;
  --color-text-light: #F8F9FA;
  --color-text-light-muted: #9598A2;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-island: 32px;
  --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.04);
  --shadow-card: 0 16px 36px rgba(0, 0, 0, 0.22);
  --shadow-elevated: 0 24px 60px rgba(0, 0, 0, 0.35);
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .hero-island
  - nav .hero-nav “Main Navigation”
    - a: Sendoa → #
    - ul .nav-links
      - li: Platform
      - li: Capabilities
      - li: Solutions
      - li: Automation
    - a: Sign In → #signin
    - a: Contact Sales → #contact
  - h1: All-in-One CRM for Sales Teams
  - p: Centralize your customer data, analyze sales performance, and automate decision-making with AI-powered insights.
  - a: Start Outreach → #outreach
  - article .telemetry-card
  - article .telemetry-card.card-elevated
  - article .telemetry-card
- section .marquee-section “Trusted Partners”
- section #capabilities .capabilities-section.container
  - h2: Intelligent Tools for Performance Driven Sales Teams
  - button: Outreach
  - button: Automation
  - button: Analytics
  - button: Integrations
  - h3: Enhance your team productivity
  - p: Eliminate repetitive outreach friction. Our algorithmic cadence triggers hyper-personalized email & multi-channel touchpoints precisely when lead engagement surges.
- section #platform .marble-section.container
  - h2: Turn Data Into Actionable Insights That Drive Growth
  - p: Centralize your customer data, analyze sales performance, and automate decision-making with AI-powered predictive velocity models.
  - a: Start Outreach → #outreach
  - button: Export Data
- section #automation .process-section.container
  - h2: Our Sales Automation Process
  - p: Empower your team with tools designed to increase productivity, improve follow-ups, and close deals faster without adding headcount.
  - article .step-card
    - h3: Connect & Integrate
    - p: Seamlessly connect your CRM with email, WhatsApp, Slack, and existing sales tools with our zero-code 1-click sync connectors.
  - article .step-card
    - h3: Automate Outreach
    - p: Send personalized multi-touch sequences at scale using dynamic AI variables that adapt tone according to recipient response behavior.
  - article .step-card
    - h3: Smart Lead Routing
    - p: Route warm accounts instantly to top-performing account executives based on industry vertical, timezone, and deal tier.
- section .manifesto-section.container
  - blockquote: Our platform empowers sales teams with advanced tools that streamline workflows, enhance collaboration, and drive results. It supports your team's success in closing deals and managing client relationships.
  - p: “Switching to this CRM reduced our manual work by 40% and allowed our team to focus entirely on closing deals.”
- footer #contact .footer-island.container
  - a: Sendoa → #
  - p: A modern CRM platform built to streamline outreach, automate workflows, and accelerate sales growth across global teams.
  - h3: Subscribe newsletter
  - p: Sign up and get 15% discount on your first purchase
  - form .newsletter-form
    - button: Submit >
  - a: Instagram ↗ → https://instagram.com
  - a: Facebook ↗ → https://facebook.com
  - a: X ↗ → https://x.com
  - a: TikTok ↗ → https://tiktok.com
  - a: LinkedIn ↗ → https://linkedin.com
  - a: YouTube ↗ → https://youtube.com
  - ul .footer-nav-list
    - li: Features
    - li: Integrations
    - li: Pricing
    - li: Updates
  - ul .footer-nav-list
    - li: About
    - li: Careers
    - li: Blog
  - ul .footer-nav-list
    - li: Help Center
    - li: Contact
    - li: API Docs
  - a: Terms and Condition → #terms
  - a: Privacy Policy → #privacy

## Images in the page
- `assets/avatar-1.jpg — Sales Leader`
- `assets/avatar-2.jpg — Sales Leader`
- `assets/avatar-3.jpg — Sales Leader`
- `assets/avatar-4.jpg — Sales Leader`
- `assets/team-productivity.jpg — Sales Strategist reviewing live pipeline`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='youremail@gmail.com'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/avatar-1.jpg`
- `assets/avatar-2.jpg`
- `assets/avatar-3.jpg`
- `assets/avatar-4.jpg`
- `assets/team-productivity.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
