# Rebuild prompt — Prismica AI (`prismica`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/prismica/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Spectral AI studio landing page — dark pitch-black theme with rainbow chromatic aberration glass prism visual, interactive light refraction canvas, partner trust wall, bento features, telemetry & pricing.

## Title
Prismica AI — Spectral Intelligence Platform

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Color Tokens */
  --bg-dark: #06070a;
  --bg-surface: rgba(255, 255, 255, 0.025);
  --bg-surface-raised: rgba(255, 255, 255, 0.045);
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.28);
  --border-accent: rgba(0, 191, 255, 0.4);
  --text-main: #f2f4f8;
  --text-secondary: #a1a9be;
  --text-muted: #636c84;
  --accent-prism: linear-gradient(135deg, #ff3366 0%, #ff9900 25%, #ffd700 45%, #00ff88 65%, #00bfff 85%, #8a2be2 100%);
  --accent-blue: #00bfff;
  --accent-green: #00ff88;
  --accent-magenta: #ff3366;
  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  /* Baseline Rhythm & Spacing Tokens (8px Grid) */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --space-4xl: 128px;
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav .nav-inner
    - a: Prismica AI // V4.2 → #
    - a: Capabilities → #capabilities
    - a: Spectral Engine → #simulator
    - a: Benchmarks → #benchmarks
    - a: Pricing → #pricing
    - button: Book Demo ↗
- main
  - section .hero-section
    - h1: Intelligence that refracts complexity into speed.
    - p: Prismica AI enables high-velocity engineering teams to deploy, orchestrate, and scale spectral neural models with sub-10ms edge latency and mathematical precision.
    - button: Start Deployment
    - a: Try Live Sandbox → #simulator
  - section .trust-section
  - section #capabilities .section-block
    - h2: Engineered for Spectral Velocity
    - p: Four foundational pillars powering low-latency multi-agent orchestration and precision token telemetry.
    - h3: Autonomous Spectral Routing Engine
    - p: Dynamically route inference calls across specialized mixture-of-experts clusters based on prompt entropy, token frequency, and latency constraints with automatic sub-millisecond fallbacks.
    - h3: Sub-10ms Inference
    - p: Direct NVLink memory bus bypass and kernel-level caching for instantaneous token streaming.
    - h3: Cryptographic Guardrails
    - p: Real-time token boundary inspection, automated prompt jailbreak mitigation, and zero-data-retention compliance.
    - h3: Real-Time Spectral Tracing
    - p: Live telemetry visibility across global compute clusters, token throughput rates, and model reasoning graphs.
  - section #simulator .section-block
    - h2: Spectral Refraction Simulator
    - p: Manipulate incident angle, beam wavelength, and dispersion coefficients in real time.
    - label: Wavelength [λ]: 540 nm
    - label: Refractive Index [η]: 1.52
  - section #benchmarks .section-block
    - h2: Spectral Intelligence vs Legacy LLM Gateways
    - p: Quantifiable performance benchmarks measured across 100M token stress runs.
    - table .benchmark-table
      - th: Metric / Architecture
      - th: Standard Model Gateway
      - th: Traditional Proxy Router
      - th: Prismica Spectral Engine
      - td: P99 Latency (TTFT)
      - td: 145 ms
      - td: 82 ms
      - td: 8.4 ms (10x Faster)
      - td: Token Compression Ratio
      - td: 1.0x (Raw)
      - td: 1.4x
      - td: 4.8x Tensor Lossless
      - td: Fallback Failover Time
      - td: 1,200 ms
      - td: 450 ms
      - td: < 0.8 ms Zero-Drop
      - td: Deterministic Output Locking
      - td: Partial (Regex)
      - td: Schema Based
      - td: 100% Mathematical Proof
  - section #pricing .section-block
    - h2: Transparent Pricing for Visionary Teams
    - p: Start free in local sandbox, scale smoothly to enterprise global clusters.
    - p: For independent AI engineers and prototypes.
    - ul .tier-features
      - li: 10M Included Spectral Tokens
      - li: 3 Multi-Agent Routing Pipelines
      - li: Sub-25ms Latency SLA
      - li: Community Discord & Docs
    - button: Deploy Developer Tier
    - p: For fast-shipping product and agent teams.
    - ul .tier-features
      - li: 100M Included Spectral Tokens
      - li: Unlimited Multi-Agent Pipelines
      - li: Sub-10ms Global Latency SLA
      - li: Real-time Telemetry Tracing
      - li: Dedicated Private Slack Channel
    - button: Start 14-Day Free Trial ↗
    - p: For mission-critical global scale and compliance.
    - ul .tier-features
      - li: Unlimited Custom Token Quota
      - li: Dedicated Single-Tenant On-Prem / VPC
      - li: 99.995% Uptime Contract Guarantee
      - li: Custom Kernel Tensor Optimizations
      - li: Dedicated Solutions Architect
    - button: Contact Solutions Team
- footer
  - a: Prismica AI → #
  - p: The spectral intelligence architecture for ultra-high-velocity product teams.
  - h4: Architecture
  - a: Spectral Routing → #capabilities
  - a: Dispersion Engine → #simulator
  - a: Benchmarks → #benchmarks
  - a: Edge Clusters → #
  - h4: Resources
  - a: Documentation → #
  - a: API Reference → #
  - a: Python SDK → #
  - a: TypeScript SDK → #
  - h4: Company
  - a: About Prismica → #
  - a: Security & SOC2 → #
  - a: Status Page → #
  - a: Privacy Policy → #
- button: ×
- h3: Experience Spectral Intelligence
- p: Schedule a technical session with our systems architecture team.
- form
  - label: Full Name
  - label: Work Email
  - label: Estimated Monthly Token Volume
  - option: 10M - 50M Tokens / mo
  - option: 50M - 250M Tokens / mo
  - option: 250M+ Tokens / mo (Enterprise)
  - button: Confirm Booking ↗

## Images in the page
- `./assets/hero.jpg — Prismica AI Spectral Light Architecture`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #sliderLambda
- input[range] #sliderIndex
- input[text] placeholder='Alex Rivers'
- input[email] placeholder='alex@company.com'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero.jpg`
- `css/styles.css`
- `index.html`
- `js/main.js`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
