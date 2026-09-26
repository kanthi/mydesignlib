# Rebuild prompt — Caldera (`caldera`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/caldera/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dark-mode high-velocity tech architecture and deployment engine. Features deep obsidian surfaces, incandescent ember thermals, interactive 4-stage pipeline execution matrix, deployment telemetry console, and ROI calculator.

## Title
Caldera — Where Innovation Meets Execution

## Description meta
Once your enterprise solution is ready, Caldera ensures a seamless launch with rigorous automated testing, deployment governance, and real-time execution telemetry.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #080A0C;
  --surface-hero: #0D1013;
  --surface-card: #12161A;
  --surface-subtle: #181D23;
  --surface-elevated: #1E242C;
  --ink-primary: #FFFFFF;
  --ink-secondary: #9DA6B2;
  --ink-muted: #646E7C;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.14);
  --ember-glow: #FF531D;
  --ember-coral: #F05A28;
  --ember-deep: #B33400;
  --ember-tint: rgba(240, 90, 40, 0.15);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-hero: 32px;
  --radius-pill: 9999px;
  --transition-smooth: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .hero-outer
  - nav .hero-nav
    - a: CALDERA → ./
    - ul .pill-nav-menu
      - li: Features
      - li: Solutions
      - li: Process
      - li: Insights
      - li: FAQ
    - a: Get Started for Free → #contact
  - h1: Where Innovation Meets Execution
  - p: Once your solution is ready, we ensure a smooth launch with rigorous testing and deployment. Post-launch, we continuously analyze performance.
  - a: Get Started for Free → #contact
  - a: Let's Get Connected → #process
- section #features .pillars-section
  - h3: Financial Insights
  - p: Gain a comprehensive view of your distributed operations and treasury telemetry with automated ledger synchronization.
  - h3: Automated Execution
  - p: Trigger deterministic settlement contracts and low-latency API hooks with zero manual intervention or reconciling delays.
  - h3: Risk Governance
  - p: Enforce granular policy controls, multi-signature mandates, and real-time stress test validations before any release clears.
- section #solutions .showcase-section
  - h2: Empowering change through technology
  - p: Many enterprise platforms are complex and burdened with a steep learning curve. Caldera abstracts systemic friction into an elegant, high-throughput operating system designed for mission-critical teams.
- section #process .process-section
  - h2: Building success, one step at a time
  - p: Our battle-tested release methodology guarantees deterministic performance before production traffic ever encounters a new endpoint.
  - h3: Discovery & Integration Mapping
  - p: We analyze legacy dependencies, map schema contracts, and construct real-time integration bridges across your data stores.
  - h3: Engineering & Rigorous Stress Testing
  - p: Simulate peak throughput with synthetic fuzzing, race condition analysis, and cryptographic policy validation.
  - h3: Global Launch & Telemetry Guardrails
  - p: Deploy with progressive canary rollouts, sub-second rollback triggers, and comprehensive real-time observability.
- section #insights .insights-section
  - h2: Latest articles & industry insights
  - article .insight-card
    - h3: The role of SaaS in modern financial solutions
    - p: How distributed event streams and automated clearing algorithms are supplanting legacy batch settlement architectures.
  - article .insight-card
    - h3: Zero-downtime canary pipelines at enterprise scale
    - p: Deconstructing how high-frequency financial platforms migrate stateful clusters without dropping a single active session.
- section #faq .faq-section
  - h2: Frequently asked questions
  - p: Everything you need to know about Caldera deployment, compliance, and enterprise SLAs.
  - button: How does Caldera guarantee sub-4ms execution latency?
  - button: Can Caldera be deployed inside our own AWS/GCP VPC or private cloud?
  - button: What regulatory and data security frameworks does Caldera support?
- section #contact .final-cta-section
  - h2: Ready to bridge innovation and flawless execution?
  - p: Join leading technology and financial institutions deploying mission-critical systems on Caldera's execution engine.
  - form .cta-form-row
    - button: Get Started for Free →
- footer .site-footer
  - p: Enterprise execution infrastructure and continuous deployment telemetry for modern technology and financial organizations.
  - ul .footer-nav
    - li: Financial Insights
    - li: Risk Governance
    - li: Automated Execution
    - li: Telemetry Pipelines
    - li: Edge Orchestration
  - ul .footer-nav
    - li: About Us
    - li: Methodology
    - li: Insights & Blog
    - li: contact@caldera.example
    - li: Careers
  - ul .footer-nav
    - li: SOC 2 Type II
    - li: Security Overview
    - li: Privacy Policy
    - li: Terms of Service
    - li: System Status
  - a: desk@caldera.example → mailto:desk@caldera.example

## Images in the page
- `assets/team.jpg — Caldera executive team collaborating`
- `assets/wave1.jpg — Glowing ember fluid silk wave artwork`
- `assets/wave2.jpg — Incandescent chromatic light ribbon artwork`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='enterprise.email@company.example'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/team.jpg`
- `assets/wave1.jpg`
- `assets/wave2.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
