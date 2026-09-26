# Rebuild prompt — Stratis (`stratis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/stratis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Luminous sales command center and autonomous CRM deal intelligence landing page with floating 3D perspective pipeline telemetry, real-time win probability dials, annual pricing toggle, and interactive FAQ accordion.

## Title
Stratis — Intelligent Sales Command Center & AI Deal Intelligence

## Description meta
Accelerate your revenue engine with Stratis. Autonomous pipeline forecasting, deal risk scoring, and zero-touch CRM sync for modern enterprise sales teams.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #f8fafc;
  --bg-surface: #ffffff;
  --bg-subtle: #f1f5f9;
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.16);
  --border-indigo: rgba(79, 70, 229, 0.25);
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --accent-primary: #4f46e5;
  --accent-primary-hover: #4338ca;
  --accent-primary-soft: rgba(79, 70, 229, 0.08);
  --accent-emerald: #10b981;
  --accent-emerald-soft: rgba(16, 185, 129, 0.1);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --max-width: 1200px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 12px 32px -4px rgba(15, 23, 42, 0.08);
  --shadow-xl: 0 30px 70px -15px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05);
  --transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-bar
  - a: Stratis → #
  - ul .nav-menu
    - li: Product
    - li: Command Center
    - li: Pricing
    - li: FAQ
  - a: Sign in → #pricing
  - a: Start Free Trial → #pricing
- main
  - section .hero
    - h1: Your Complete Sales Command Center.
    - p: Let AI take your revenue velocity to the next level. Autonomous deal intelligence, real-time pipeline forecasting, and zero-touch CRM logging.
    - a: Start 14-Day Free Trial → #pricing
    - a: Explore Dashboard → #pipeline
    - ul .dash-menu
      - li: Command Center
      - li: Deal Intelligence
      - li: Velocity Signals
      - li: Sales Rep Coaching
    - h3: Q3 Live Pipeline Telemetry
    - table .pipeline-table
      - th: Account
      - th: ARR Value
      - th: Stage
      - th: AI Win Score
      - th: Next Action
      - td: Acme Enterprise
      - td: $180,000
      - td: Proposal Sent
      - td: ● 88% High
      - td: Exec sponsor check-in
      - td: Stripe Platform
      - td: $240,000
      - td: Contract In Review
      - td: ● 94% Verified
      - td: Redlines finalized
      - td: Vercel Systems
      - td: $95,000
      - td: Tech Validation
      - td: ● 68% Moderate
      - td: Security review call
  - section .logos-section
  - section #features .features-section
    - h2: Never lose a high-value opportunity to deal slippage.
    - p: Stratis monitors every email thread, video call sentiment, and CRM touchpoint in real-time — surfacing risks before they derail your quarterly forecast.
    - ul .feature-list
      - li: Zero-Touch CRM Sync Calls and emails are autonomously logged with verified action items and stage progression.
      - li: Predictive Win Rate Modeling Calibrated across 100,000+ B2B transactions to forecast deal close dates with 92% accuracy.
  - section #pricing .pricing-section
    - h2: Choose the Perfect Plan
    - p: Start your 14-day free trial. No credit card required to explore.
    - button: Monthly
    - button: Annual Save 20%
    - h3: Starter
    - p: For seed teams and early startups launching their first revenue engine.
    - ul .plan-features
      - li: Up to 5 Sales Reps
      - li: Automated CRM Sync
      - li: Real-time Deal Alerts
    - a: Start Free Trial → #
    - h3: Growth
    - p: For scaling sales teams demanding predictive forecast modeling and coaching.
    - ul .plan-features
      - li: Unlimited Sales Seats
      - li: AI Predictive Win Scoring
      - li: Executive Pipeline Reports
      - li: Custom Slack & Teams Bot
    - a: Start Free Trial → #
    - h3: Enterprise
    - p: For global enterprise revenue organizations with complex compliance needs.
    - ul .plan-features
      - li: Dedicated RevOps Strategist
      - li: Custom AI Model Fine-Tuning
      - li: SOC 2 Type II & HIPAA Certified
      - li: Custom SLA & SSO Enforced
    - a: Contact Sales → #
  - section #faq .faq-section
    - h2: Got Questions? We’ve Got Answers.
  - section .cta-banner
    - h2: Ready to scale your pipeline?
    - p: Join over 450+ high-growth sales teams closing larger deals faster with Stratis.
    - form .cta-form
      - button: Get Started
- footer
  - p: Intelligent sales command center & AI pipeline forecasting for high-velocity revenue organizations.
  - h5: Product
  - ul
    - li: Deal Intelligence
    - li: Command Center
    - li: Pricing Plans
    - li: Security & Trust
  - h5: Integrations
  - ul
    - li: Salesforce CRM
    - li: HubSpot
    - li: Slack Bot
    - li: Google Workspace
  - h5: Legal
  - ul
    - li: Privacy Policy
    - li: Terms of Service
    - li: Security Overview
    - li: Cookie Settings

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter your work email...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/dashboard-preview.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
