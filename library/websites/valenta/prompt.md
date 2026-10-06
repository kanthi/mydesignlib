# Rebuild prompt — Valenta (`valenta`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/valenta/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI-powered autonomous fintech SaaS landing page: warm fiery sunset gradient showcase canvas with floating receipt analysis, policy approval checklist, live category matching meters, real-time agent telemetry ticker, interactive visual logic rule builder, and global multi-currency telemetry globe.

## Title
Valenta — AI-Powered Autonomous Fintech & Corporate Spend Platform

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #FAFAFA;
  --color-card-surface: #FFFFFF;
  --color-obsidian: #0F172A;
  --color-slate-900: #0F172A;
  --color-slate-700: #334155;
  --color-slate-600: #475569;
  --color-slate-500: #64748B;
  --color-slate-400: #94A3B8;
  --color-slate-200: #E2E8F0;
  --color-slate-100: #F1F5F9;
  --color-slate-50: #F8FAFC;
  --color-sunset-red: #FF4B32;
  --color-sunset-orange: #FF6B00;
  --color-sunset-amber: #FFAA00;
  --color-sunset-pink: #FF3D71;
  --color-emerald: #10B981;
  --color-emerald-bg: rgba(16, 185, 129, 0.1);
  --color-border: rgba(0, 0, 0, 0.08);
  --gradient-sunset: linear-gradient(135deg, #FF4B32 0%, #FF6B00 45%, #FFAA00 100%);
  --gradient-sunset-mesh: radial-gradient(circle at 10% 20%, #FF3D71 0%, transparent 60%),
  radial-gradient(circle at 80% 80%, #FFAA00 0%, transparent 60%),
  linear-gradient(135deg, #FF4B32 0%, #FF6B00 50%, #FFAA00 100%);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Instrument Serif', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --shadow-widget: 0 20px 40px -15px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.04);
  --shadow-card: 0 10px 30px -5px rgba(0, 0, 0, 0.04);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-header
  - a: Valenta → #
  - ul .nav-menu
    - li: Products ▾
    - li: Partners ▾
    - li: Customers
    - li: Pricing
  - button: Sign In
  - a: Get Started → #claim
- main
  - section .hero-container
    - h1: Save Time Maximize Your Business Efficiency.
    - p: Manage expenses, automate payments, and gain complete control over your business finances—all from one powerful platform.
    - form #claim .cta-input-bar
      - button: Claim your 50
  - section #features .feature-section
    - h2: See recommendations for your business
    - p: Start with your company domain, then ask any question about your spend, vendor terms, or cash flow optimization.
    - button: ↑
  - section #workflows .feature-section
    - h2: Scale the team Shrink the paperwork
    - p: Automate repetitive financial tasks, eliminate manual expense reports, and empower teams to move at high velocity.
    - h3: Visual Financial Logic Builder
    - p: Define multi-conditional routing rules with zero code. Automatically route purchase orders by department, currency, or threshold.
    - h3: Autonomous Global Telemetry
    - p: Provision virtual and physical cards across 140+ countries. Limits, permissions, and tax compliance adapt automatically.
  - section #claim-bottom .feature-section
    - h2: Time is money. Save both.
    - p: Automate financial tasks, reduce administrative work, and give your team more time to focus on business growth.
    - form .cta-input-white
      - button: Claim your 50
- footer .site-footer
  - ul .footer-links
    - li: Privacy Policy
    - li: Terms of Service
    - li: SOC2 Type II
    - li: Security

## Images in the page
- `assets/valenta-logo.svg — Valenta`
- `assets/globe-telemetry.svg — Global Telemetry Globe`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder="What's your work email?"
- textarea placeholder='We build software for enterprise teams and need to optimize cross-border spend and vendor contracts...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/ambient-glow.jpg`
- `assets/globe-telemetry.svg`
- `assets/hero-gradient.jpg`
- `assets/valenta-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
