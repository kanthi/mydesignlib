# Rebuild prompt — Syntrix (`syntrix`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/syntrix/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Tactile AI workflow and automation SaaS featuring warm porcelain aesthetic, interactive 3D sculptural installation (travertine, fluted glass, marquina marble, brushed gold ingot), real-time efficiency HUD telemetry, interactive node execution canvas, and enterprise security architecture.

## Title
Syntrix — Build. Automate. Scale effortlessly.

## Description meta
Syntrix helps modern engineering and product teams build, automate, and scale their mission-critical workflows with intelligent autonomous systems.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #FAF9F6;
  --bg-surface: #FFFFFF;
  --bg-warm: #F4F2EC;
  --text-primary: #121110;
  --text-secondary: #58554E;
  --text-muted: #8F8A80;
  --accent-green: #10B981;
  --accent-green-bg: rgba(16, 185, 129, 0.12);
  --accent-gold: #D4A359;
  --accent-gold-dark: #A3732B;
  --border-subtle: rgba(18, 17, 16, 0.08);
  --border-card: rgba(18, 17, 16, 0.06);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --container-max: 1360px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --shadow-sm: 0 4px 12px rgba(18, 17, 16, 0.03);
  --shadow-md: 0 12px 36px rgba(18, 17, 16, 0.06);
  --shadow-lg: 0 24px 60px rgba(18, 17, 16, 0.08);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: SYNTRIX → #
  - ul .nav-links-list
    - li: Product
    - li: Solutions
    - li: Resources
    - li: Pricing
    - li: Company
  - a: Login → #pricing
  - a: Get Started → → #pricing
- main
  - section .hero-section
    - a: ✨ New AI-powered automation is here. › → #workflows
    - h1: Build. Automate. Scale effortlessly.
    - p: Syntrix helps modern teams build, automate, and scale their workflows with powerful tools and intelligent AI — all in one place.
    - a: Get Started Free → → #pricing
    - button: Watch Demo
  - section .trusted-section
  - section #workflows .workflow-builder-section
    - h2: Orchestrate complex logic without breaking flow
    - p: Connect APIs, schedule recurring jobs, and inject contextual AI agents into any product lifecycle with deterministic guarantees.
    - h3: Inbound Webhook
    - p: Customer event stream triggers instant webhook payload with schema verification.
    - h3: Semantic Classifier
    - p: LLM agent parses context, infers user urgency, and routes to appropriate branch.
    - h3: Parallel Dispatch
    - p: Simultaneously writes to PostgreSQL, updates Linear issues, and triggers email.
    - h3: Instant Resolution
    - p: Automated run completed in 142ms. Zero human intervention needed.
  - section #features .features-section
    - h2: Everything you need to automate production
    - p: Reliable building blocks crafted specifically for engineering teams that cannot afford downtime or unpredictable execution.
    - h3: Sub-Millisecond Engine
    - p: Engineered on a Rust-based distributed state machine ensuring workflows execute with near-zero cold starts and complete idempotency.
    - h3: Enterprise Security
    - p: SOC-2 Type II certified, GDPR compliant, with end-to-end credential encryption and dedicated private VPC connectivity options.
    - h3: Self-Healing Workflows
    - p: When upstream third-party APIs fail, Syntrix agents automatically inspect failure payloads, adapt request formatting, and retry seamlessly.
  - section #metrics .metrics-band
  - section #pricing .pricing-section
    - h2: Start free, scale seamlessly
    - p: Simple pricing designed to grow with your infrastructure.
    - h3: Starter
    - p: Ideal for small projects and individual developers experimenting with AI automation.
    - ul .pricing-features-list
      - li: Up to 10,000 monthly executions
      - li: Visual workflow builder
      - li: Community support
      - li: 7-day execution logs
    - a: Get Started Free → #
    - h3: Pro
    - p: For fast-moving engineering teams scaling mission-critical pipelines.
    - ul .pricing-features-list
      - li: 500,000 monthly executions
      - li: Unlimited autonomous AI agents
      - li: Sub-second parallel dispatch
      - li: Priority 24/7 Slack support
      - li: 30-day detailed telemetry logs
    - a: Start 14-Day Pro Trial → #
    - h3: Enterprise
    - p: Dedicated isolation, bespoke compliance, and custom integration SLAs.
    - ul .pricing-features-list
      - li: Unlimited executions & VPC deploy
      - li: 99.99% custom uptime SLA
      - li: Dedicated Solutions Architect
      - li: SSO, SAML, and custom audit logs
    - a: Contact Sales → #
  - section .final-cta-section
    - h2: Ready to automate your product workflows?
    - p: Join over 2,000 engineering teams building next-generation autonomous software today.
    - a: Get Started with Syntrix → → #pricing
- footer .site-footer
  - a: Product → #workflows
  - a: Security → #features
  - a: Pricing → #pricing
  - a: support@syntrix.example → mailto:support@syntrix.example

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
