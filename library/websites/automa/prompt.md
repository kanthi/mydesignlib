# Rebuild prompt — Automa (`automa`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/automa/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dark-mode enterprise workflow automation template featuring a 3D isometric cybernetic node orchestration engine, real-time telemetry, visual DAG sandbox, and integration directory.

## Title
Automa — Automations Unleashed

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #040507;
  --surface: #0a0c10;
  --surface-card: #0f1218;
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.22);
  --text: #f0f2f7;
  --text-muted: #8b92a2;
  --accent: #ffffff;
  --accent-glow: rgba(255, 255, 255, 0.35);
  --cyan-glow: rgba(56, 189, 248, 0.25);
  --font-main: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: Automa → #
  - ul .nav-menu
    - li: Products
    - li: Features
    - li: Integrations
    - li: Pricing
  - a: Contact → #pricing
- section .hero
  - h1: Automations Unleashed
  - p: Automate tasks, synchronize distributed teams, and keep mission-critical pipelines on track — effortlessly.
  - a: Explore Integrations → #integrations
  - a: Contact → #pricing
- section #sandbox .section-wrap
  - h2: Architect Workflows Visually
  - p: Compose multi-step asynchronous DAG pipelines with zero boilerplate. Connect webhooks, transform payloads, and trigger distributed microservices with automated retries.
  - button: Run Pipeline Test
- section #integrations .section-wrap
  - h2: Connect Your Entire Stack
  - p: Native connectors with bi-directional syncing, cryptographically signed webhooks, and sub-millisecond execution.
- section #pricing .section-wrap
  - h2: Predictable Tiered Pricing
  - p: No opaque surge fees or hidden egress taxes. Scale seamlessly from your first webhook to hundreds of millions of monthly executions.
  - ul .pricing-features
    - li: 150,000 monthly executions
    - li: Up to 25 active DAG workflows
    - li: 7-day execution logs & telemetry
    - li: Community support & Discord
  - a: Start 14-Day Free Trial → #
  - ul .pricing-features
    - li: 2,500,000 monthly executions
    - li: Unlimited active DAG pipelines
    - li: 90-day telemetry retention
    - li: Dedicated webhook endpoints & TLS
    - li: 99.99% Guaranteed SLA Uptime
  - a: Deploy Scale Fleet → #
  - ul .pricing-features
    - li: Unlimited custom execution volume
    - li: Self-hosted VPC / GovCloud cluster
    - li: Custom SLA (99.999%) with penalties
    - li: Dedicated Solutions Architect & 24/7 pager
  - a: Contact Enterprise Team → #
- section .section-wrap
  - h2: Answers for Engineers
- h2: Automations Unleashed Today
- p: Join thousands of high-velocity teams running resilient, zero-overhead pipeline automation in minutes.
- a: Explore Integrations → #pricing
- footer

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
