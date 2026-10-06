# Rebuild prompt — Runloop (`runloop`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/runloop/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Production AI agent runtime & observability control plane: technical gutter rail layout, interactive dual-typography display switcher (Clean Sans vs 8-Bit Pixelated), sub-millisecond agent routing mesh, live node telemetry inspector, multi-language SDK playground, and pricing matrix.

## Title
Runloop — Every Agent. One Control Plane.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Pixelify+Sans:wght@600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-canvas: #F8F8F5;
  --bg-panel: #FFFFFF;
  --color-black: #0E0F11;
  --color-orange: #FF4B00;
  --color-orange-hover: #E04200;
  --color-orange-light: rgba(255, 75, 0, 0.08);
  --color-muted: #646560;
  --color-gutter: #8E8F89;
  --border-grid: #E5E5DC;
  --border-subtle: #EDEDE4;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-pixel: 'Pixelify Sans', monospace;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .site-nav
  - a: Runloop → ../../../
  - ul .nav-links
    - li: Control Plane
    - li: Architecture
    - li: Developers
    - li: Pricing
  - button: Start free trial →
- main .content-flow
  - section .sec-01
  - section .sec-02
    - button: Hybrid (Left)
    - button: Full Pixel (Right)
    - button: Clean Sans
    - h1: Every agent. One control plane.
    - p: Deploy, route and monitor AI agents in production from one place. No glue code, no scattered scripts, no guessing what your agents did at 3 AM.
    - button: Start free trial →
    - a: Read the docs → #sdk
  - section #mesh .sec-03
    - p: Deterministic semantic model gateway. Evaluates prompt intent, context window budget, and directs payload to optimal frontier model.
  - section #features .sec-04
    - h2: Production Grade Agent Infrastructure
    - p: Built from first principles for distributed multi-agent systems operating under sub-second SLA requirements.
    - h3: Sub-Millisecond Gateway
    - p: Direct edge termination with zero cold-starts. Stream token chunks with zero buffering overhead across 35 edge regions globally.
    - h3: Deterministic Guardrails
    - p: Compile TypeScript zod or JSON schemas directly into the inference stream. Guarantee structured JSON outputs with zero hallucinated keys.
    - h3: Distributed Short & Long Memory
    - p: Unified transactional memory state. Shared vector recall across concurrent agents with automatic deduplication and TTL expiration.
  - section #sdk .sec-05
    - h2: Developer First Integration
    - p: Drop in 4 lines of code to enable automatic routing, tool firewalls, and observability.
    - button: TypeScript
    - button: Python
    - button: cURL
  - section #pricing .sec-06
    - h2: Predictable, Volume-Tiered Pricing
    - p: No opaque token markups. Run at raw provider cost plus flat routing fee.
    - h3: Developer
    - p: For prototypes and local testing
    - ul .pricing-features
      - li: ✓ Up to 50,000 runs / month
      - li: ✓ 5 concurrent agent sandboxes
      - li: ✓ 7-day trace retention
      - li: × Dedicated cluster IP
    - button: Deploy Free
    - h3: Production
    - p: For scale AI products and startups
    - ul .pricing-features
      - li: ✓ Up to 2,000,000 runs / month
      - li: ✓ Unlimited concurrent sandboxes
      - li: ✓ 90-day full trace telemetry
      - li: ✓ Custom fallback gateway rules
    - button: Start 14-Day Pro Trial
    - h3: Enterprise
    - p: For regulated high-volume clusters
    - ul .pricing-features
      - li: ✓ Unlimited runs & zero rate limits
      - li: ✓ VPC peering & on-prem deployment
      - li: ✓ SOC2 Type II compliance report
      - li: ✓ 24/7 dedicated engineering SLA
    - button: Contact Sales
  - footer .sec-footer
    - a: Design Library → ../../../
    - a: Telemetry → #mesh
    - a: Documentation → #sdk
    - a: Terms → #pricing

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/runloop-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
