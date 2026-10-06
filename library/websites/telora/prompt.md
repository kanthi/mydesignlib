# Rebuild prompt — Telora Systems (`telora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/telora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Business-centric observability and digital transaction journey intelligence platform: live SVG transaction journey pipeline visualizer, 3-pointer precision observability tabs (Unified Experience, Multi-Touchpoint Journeys, Accelerated MTTR), 5-metric dark scale section (40TB+ ingest, 90K+ nodes, $1.5Tr protected value), 4-module interactive product suite (teloraInfra, teloraApp, teloraTxn, teloraLog), executive testimonials, and technical gridline framing.

## Title
Telora Systems | Business Centric Observability

## Description meta
Our full-stack AI/ML and big data analytics platform monitors mission-critical digital transaction journeys at scale for unified business observability.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas-light: #F8F9FC;
  --color-surface-white: #FFFFFF;
  --color-navy-deep: #1A173B;
  --color-navy-card: #24204E;
  --color-navy-card-border: rgba(255, 255, 255, 0.1);
  --color-coral: #FB532C;
  --color-coral-hover: #E44520;
  --color-coral-subtle: rgba(251, 83, 44, 0.1);
  --color-gridline: #D0D4DF;
  --color-border-subtle: #E2E6EF;
  --color-text-main: #111322;
  --color-text-muted: #585E73;
  --color-text-dim: #8E94A8;
  --color-text-light: #FFFFFF;
  --color-text-light-muted: #9DA1B6;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --transition: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .nav-inner “Main Navigation”
  - a: Telora → #
  - ul .nav-menu
    - li: Platform
    - li: Product Suite
    - li: Solutions
    - li: Scale
    - li: Testimonials
    - li: Pricing
  - a: Get A Demo → #demo
- main
  - section .hero-section.container-wide.grid-lines-frame
    - h1: Business Observability That Connects Every Dot
    - p: Telora's business observability platform eliminates operational blind spots. Get complete visibility into your critical business processes with AI-powered insights that prevent problems before they impact customers.
    - a: Get A Demo → #demo
  - section .marquee-section
  - section .ecosystem-section.container-wide.grid-lines-frame
    - h2: Observability That Connects IT To Business Impact
    - p: Telora connects technical telemetry with direct business impact by correlating metrics, events, logs, and distributed traces into unified transaction flows.
    - h3: Complete Business Journey Visibility
    - p: Track every transaction from initiation to final ledger entry. See exactly where latency spikes occur and calculate immediate revenue loss or customer friction.
    - h3: AI-Powered Early Warning System
    - p: Detect subtle operational patterns and infrastructure degradations before end-users notice. Automatically isolate root causes across microservices in seconds.
    - h3: Smart Alerts & Integrations
    - p: Eliminate alert fatigue with context-enriched incident signals that cut through the noise. Sync bi-directionally with Slack, Jira, PagerDuty, and enterprise ITSMs.
  - section #scale .stats-section
    - h2: Delivering, not just monitoring.
  - section #suite .suite-section.container-wide.grid-lines-frame
    - h2: Real-Time Insights Connecting Infrastructure, Applications, and Customer Journeys
    - h3: Complete Multi-Vendor Infrastructure Monitoring
    - p: Unify telemetry across 300+ hardware, cloud, and container devices while machine learning algorithms forecast hardware failures before service levels drop.
    - ul .suite-checklist
      - li: ✓ Automated discovery of on-prem & multi-cloud assets
      - li: ✓ Predictive threshold alerts based on historical seasonality
      - li: ✓ Automated diagnostic runbooks and remediation workflows
    - a: Explore Module → #demo
  - section #testimonials .testimonials-section.container-wide.grid-lines-frame
    - h2: Proven by Mission-Critical Financial Leaders
    - article .testimonial-box
      - p: Telora's platform has achieved a 75% optimization in time to identify incidents. Telora is a key enabler in our journey towards cutting application downtime in half across our entire retail banking stack.
    - article .testimonial-box
      - p: During our cloud migration, we needed deep observability and transaction traceability. Telora stood out with rapid zero-instrumentation deployment and historical transaction auditing that empowered our leadership.
    - article .testimonial-box
      - p: A command center view with a unified cockpit giving us past, present, and predictive trends. The turnaround time for identifying and resolving complex cross-service issues was cut by more than 3x.
- footer .footer-section
  - p: Unified business transaction observability for modern banking, payments, and global digital enterprises.
  - a: Schedule Technical Briefing → #demo
  - ul .footer-nav-list
    - li: Business Journey
    - li: Full Stack Observability
    - li: Digital Experience
    - li: Enterprise Data Lake
  - ul .footer-nav-list
    - li: teloraInfra
    - li: teloraApp
    - li: teloraTxn
    - li: teloraLog
  - ul .footer-nav-list
    - li: Instant Payments
    - li: Core Banking
    - li: Lending Operations
    - li: Trading Systems
  - ul .footer-nav-list
    - li: About Telora
    - li: Careers
    - li: Security & DPDP
    - li: Contact Support

## Images in the page
- `assets/leader-1.jpg — Executive Portrait`
- `assets/leader-2.jpg — Executive Portrait`
- `assets/leader-3.jpg — Executive Portrait`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/leader-1.jpg`
- `assets/leader-2.jpg`
- `assets/leader-3.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
