# Rebuild prompt — Revana (`revana`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/revana/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Deep indigo and violet sales CRM landing page with an interactive sales activity deal matrix, closed-by-manager revenue pacing charts, multi-panel service modules, live 4-way support video call interface, 3-tier pricing toggle, and executive team profiles.

## Title
Revana — Modern CRM Platform for High-Velocity Sales Teams

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --primary: #341266;
  --primary-dark: #240C48;
  --primary-light: #5B21B6;
  --accent-purple: #7C3AED;
  --accent-magenta: #9333EA;
  --text-main: #111827;
  --text-muted: #6B7280;
  --bg-light: #F9FAFB;
  --card-border: #E5E7EB;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: Revana → #
  - ul .nav-links
    - li: Features
    - li: Solutions
    - li: Pricing
    - li: Experts
    - li: Contact
  - a: Get Started → #pricing
- main .hero-content
  - a: Version 2.0 is here Read more → → #features
  - h1: Manage Your Business with a Smarter CRM
  - p: Empower your team with tools to manage leads, track real-time progress, and close high-value deals—all in one unified sales velocity platform.
  - form .hero-form
    - button: Get Started
  - table .sales-table
    - th: Manager
    - th: Deals Won
    - th: Revenue (USD)
    - th: Status
    - td: Angela Byron
    - td: 32 +100%
    - td: $756,669.00
    - td: Leader
    - td: Rachel Green
    - td: 24 -12%
    - td: $169,560.00
    - td: Active
    - td: RG Ross Gelar
    - td: 28 +25%
    - td: $592,754.00
    - td: Pacing
- section .logos-strip
- section #features .section-wrap
  - h2: Smart CRM Services Built for Success
  - p: Our CRM services are designed to adapt to your sales motions, whether you are an agile startup, a high-growth scaleup, or an established enterprise.
  - h3: Custom CRM Integration
  - p: In-depth bidirectional synchronization to connect your existing toolstack, communication channels, and billing engines.
  - h3: Automated Data Migration
  - p: Effortlessly port hundreds of thousands of accounts with zero downtime, historical pipeline retention, and schema mapping.
  - h3: Ongoing Sales Enablement
  - p: Keep reps laser-focused on high-intent prospects with automated sequencing, task assignments, and objection guides.
  - h3: Scalable Revenue Operations
  - p: Deep visibility into multi-tiered conversion funnels, quota pacing, churn prediction, and bottom-up sales forecasting.
- section .support-section
  - h2: Support You Can Count On, Anytime
  - p: Our dedicated solutions engineering team is always ready to guide your team through custom integrations, workflow design, or high-volume data imports.
  - button: Connect with Support
- section .metrics-bar
- section #team .team-section
  - h2: Meet Our CRM Experts
  - p: Experienced enterprise operators and engineers building the future of revenue intelligence.
  - h3: Sophie Moore
  - p: CEO & Co-Founder
  - h3: John Carter
  - p: CTO & Co-Founder
  - h3: Mike Warren
  - p: VP of Product & AI
- section #pricing .pricing-section
  - h2: Choose Your Plan
  - p: 14 days unlimited free trial. No credit card or long-term contract required.
  - h3: Enterprise
  - p: For scaling teams needing custom automation & priority SLAs.
  - button: Create an Account
  - ul .plan-features
    - li: ✓ Unlimited sales pipelines
    - li: ✓ Advanced custom dashboards
    - li: ✓ 24/7 dedicated support engineer
    - li: ✓ 10,000 active contacts
    - li: ✓ Custom webhook triggers
  - h3: Forever Free
  - p: Essential pipeline tracking for solo founders and small studios.
  - button: Get Started Free
  - ul .plan-features
    - li: ✓ 1 active pipeline
    - li: ✓ Standard analytics table
    - li: ✓ Community chat support
    - li: ✓ 250 contacts
  - h3: Business Pack
  - p: Full feature access for established teams and agencies.
  - button: Start 14-Day Trial
  - ul .plan-features
    - li: ✓ Up to 10 team seats
    - li: ✓ Native HubSpot & Stripe sync
    - li: ✓ Priority email support
    - li: ✓ 2,500 active contacts
- section .cta-banner
  - h2: Start Your CRM Journey Today — Reach Out Now!
  - p: Join thousands of top revenue teams accelerating sales cycles with Revana.
  - button: Start Free 14-Day Trial
- footer .site-footer
  - p: Transform the way your organization manages sales pipelines with all-in-one real-time intelligence, automated sequences, and intuitive executive dashboards.
  - h4: About Us
  - ul
    - li: Our Story
    - li: Newsroom
    - li: Careers
    - li: Security
  - h4: Resources
  - ul
    - li: Solutions
    - li: How it Works
    - li: Integrations
    - li: Documentation
  - h4: Platform
  - ul
    - li: Help Center
    - li: API Status
    - li: Privacy Policy
    - li: Terms of Service

## Images in the page
- `assets/expert1.jpg — Revana user`
- `assets/expert2.jpg — Revana user`
- `assets/expert1.jpg — Manager`
- `assets/expert2.jpg — Manager`
- `assets/expert1.jpg — Video Participant`
- `assets/expert2.jpg — Video Participant`
- `assets/expert1.jpg — Sophie Moore`
- `assets/expert2.jpg — John Carter`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Your work email address'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `assets/expert1.jpg`
- `assets/expert2.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
