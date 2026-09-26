# Rebuild prompt — Vireo (`vireo`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/vireo/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous working capital & invoice liquidity platform — deep evergreen palette with vibrant lime chartreuse accents, interactive multi-step payment routing pipeline, live AI financial telemetry cockpit, and alternating capital suite bento.

## Title
Vireo — Get Paid Faster. Every Single Time.

## Description meta
Experience faster payouts and seamless transactions with an autonomous liquidity engine designed to keep your business moving.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #fcfdfc;
  --surface-card: #ffffff;
  --surface-subtle: #f3f6f3;
  --surface-forest: #082115;
  --surface-forest-card: #0d2e1f;
  --brand-forest: #082115;
  --brand-lime: #c8f237;
  --brand-lime-hover: #b6df24;
  --brand-emerald: #10b981;
  --text-primary: #0d1712;
  --text-secondary: #4a5951;
  --text-muted: #798a80;
  --text-on-dark: #ffffff;
  --text-on-dark-muted: #a3b8ad;
  --border-subtle: rgba(14, 24, 18, 0.08);
  --border-card: rgba(14, 24, 18, 0.10);
  --border-dark: rgba(255, 255, 255, 0.12);
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 9999px;
  --container-max: 1240px;
  --container-pad: clamp(1.25rem, 4vw, 2.5rem);
  --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Learn more → → #capital-suite
- header .site-header
  - a: Vireo → #
  - nav
    - ul .nav-links
      - li: Features
      - li: How It Works
      - li: AI Support
      - li: Capital Suite
  - button: Sign In
  - a: Book a Demo → #hero
- main
  - section #hero .hero-section
    - h1: Get Paid Faster. Every Single Time.
    - p: Experience faster payouts and seamless transactions with a secure payment system designed to keep your business moving.
    - a: Try Demo for free → #cockpit
    - button: ✦ Meet Our AI Agents
  - section .proof-section
    - p: Trusted by leading companies worldwide
  - section #cockpit .cockpit-section
    - h2: Support your business with Ai
    - p: Get cash in the bank immediately whenever customers are paying slower than you'd like and pay us back when the customer is ready.
    - button: Dashboard Overview
    - button: Invoice Insights
    - button: Finance Activity
    - button: Wallet & Cards
    - button: Financial Records
    - button: Notifications
    - ul
      - li: Overview
      - li: Insights
      - li: Activity
      - li: Debit Wallet
      - li: Credit Wallet
      - li: Financing
      - li: My Cards
      - li: Records
    - h3: Overview
    - p: Track, manage, and improve your money flow effortlessly
    - table .activity-table
      - th: Counterparty
      - th: Invoice #
      - th: Gross Value
      - th: Status
      - td: Prism Cloud Systems
      - td: INV-9842
      - td: $14,500.00
      - td: ✓ Settled Instant
      - td: Veloce Digital Labs
      - td: INV-9840
      - td: $8,240.00
      - td: ✓ Settled Instant
    - h3: Ai support agent
    - p: Get cash in the bank immediately whenever customers are paying slower than you'd like and pay us back.
    - a: Learn more → → #capital-suite
    - h3: Real-time analytics
    - p: Monitor your business performance with live data dashboards that update second-by-second.
    - a: Explore features → → #capital-suite
    - h3: Customizable workflows
    - p: Tailor processes to fit your team's unique needs, automating repetitive tasks effortlessly.
    - a: See how it works → → #capital-suite
  - section #capital-suite .bento-section
    - h2: Say goodbye to working capital fire drills.
    - p: Our capital products are built right into our platform so you can ensure that every payment is made on time and no transaction needs to be held up by money.
    - button: ● Sell an invoice
    - button: Outsource net terms
    - button: Draw working capital
    - h3: You're one click away from selling slow paying invoices.
    - p: Convert overdue invoices into instant working capital with a smooth and reliable financing experience.
    - a: Get Started Now → #hero
    - button: Paynow Over Time →
    - h3: Offer payment terms to your customers
    - p: Give customers a longer payment option while still getting paid up front. Your client pays us over time.
    - a: Get Started Now → #hero
    - button: Select Terms →
    - h3: Flexible working capital to support smooth day to day operations.
    - p: Get cash in the bank immediately whenever customers are paying slower than you'd like and pay us back when the customer is ready.
    - a: Get Started Now → #hero
    - button: Draw $8,000 to Primary Bank →
  - section .cta-banner-section
    - h2: Real-time view of receivables, risk, and cash flow in one place.
    - p: Join 4,200+ companies accelerating non-dilutive liquidity with Vireo.
    - a: Book a demo → #hero
- footer .site-footer
  - p: Autonomous liquidity engine for fast-growing businesses. Factoring, net terms, and flexible working capital built for velocity.
  - h4: Products
  - ul .footer-links
    - li: Instant Invoice Factoring
    - li: Vendor Net Terms
    - li: Revolving Working Capital
    - li: AI Underwriting Engine
  - h4: Company
  - ul .footer-links
    - li: About Vireo
    - li: Security & Compliance
    - li: Privacy Architecture
    - li: Careers
  - h4: Resources
  - ul .footer-links
    - li: API Documentation
    - li: Cash Flow Calculator
    - li: Case Studies
    - li: System Status

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Search...'

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
