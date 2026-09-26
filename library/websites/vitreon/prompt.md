# Rebuild prompt — Vitreon (`vitreon`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/vitreon/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Liquid-glass AI infrastructure and high-throughput compute substrate with frosted glass cards, modular bento metrics, Swiss modernist vector monogram logomark, live telemetry HUD, and interactive concurrency sandbox.

## Title
Vitreon — Liquid-Glass AI Infrastructure & Autonomous Compute Substrate

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #06070b;
  --bg-surface: #0a0d16;
  --bg-surface-elevated: #0f1422;
  /* Liquid Glass Tokens */
  --glass-card: rgba(14, 18, 30, 0.58);
  --glass-card-hover: rgba(19, 25, 42, 0.72);
  --glass-specular: rgba(255, 255, 255, 0.12);
  --glass-specular-bright: rgba(255, 255, 255, 0.28);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-border-hover: rgba(56, 189, 248, 0.35);
  /* Glow & Accents */
  --cyan: #38bdf8;
  --cyan-muted: #0284c7;
  --cyan-glow: rgba(56, 189, 248, 0.18);
  --violet: #818cf8;
  --purple: #a855f7;
  --emerald: #34d399;
  --emerald-glow: rgba(52, 211, 153, 0.15);
  /* Typography Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-dim: #334155;
  /* Fonts */
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  /* Layout */
  --container-max: 1280px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: VITREON v4.8 → #
  - nav “Primary Navigation”
    - ul .nav-menu
      - li: Cockpit
      - li: Monogram Specimen
      - li: Bento Metrics
      - li: Latency Sandbox
      - li: API Playground
      - li: Clusters
  - a: Deploy Cluster → #pricing
- section .hero-section
  - h1: Liquid Glass for Autonomous Intelligence.
  - p: A unified compute substrate designed for sub-millisecond tensor dispatch, distributed KV-cache pooling, and zero-copy memory routing across hyperscale GPU clusters.
  - a: Deploy Compute Cluster → #pricing
  - a: Swiss Vector Specimen → #monogram-studio
  - button: Real-Time Inference
  - button: Distributed Training
  - button: Batch Quantization
- section #monogram-studio .section
  - h2: Swiss Modernist Vector Monogram.
  - p: A minimalist 2D geometric logomark engineered for an AI infrastructure lab. Built on strict Cartesian axes with abstract interconnected nodes and negative space channels. Zero gradients, zero fake bevels, zero noise.
  - button: Monochrome Dark
  - button: Swiss Stark Light
  - button: Construction Grid
  - button: Copy Clean SVG Code
  - button: Export .SVG
  - p: Three corner tensor nodes converge at a calibrated 45-degree angle toward the apex. A central cross-interconnect stabilizes the mark while isolating a pristine negative space optical core.
  - p: Strictly non-gradient vector geometry designed for instant bezier tracing, laser cutting, embroidered fabric labels, and microchip silicon wafer etchings.
  - p: Tested across critical touchpoints down to browser favicon thresholds without stroke blur or optical collapse.
- section #bento-metrics .section
  - h2: Engineered for Sub-Millisecond Predictability.
  - p: Traditional cloud orchestrators suffer from unpredictable tail latency and noisy neighbour interference. Vitreon delivers hardware-level memory segregation and deterministic tensor schedules.
  - h3: Deterministic TTFT
  - p: P99 time-to-first-token guaranteed under sustained concurrency via pre-allocated liquid memory lanes.
  - h3: Zero-Copy Fabric
  - p: Substrate memory interconnection bypasses host operating system drivers via direct GPU-to-GPU RoCE v2 channels.
  - h3: Immersion Thermal Floor
  - p: Dielectric liquid immersion maintains peak Boost clock states indefinitely without thermal throttling or acoustic resonance.
  - h3: Shared KV-Cache Hit Rate
  - p: Global prompt prefix caching eliminates redundant multi-turn prefill overhead across millions of conversational sessions.
  - h3: Cryptographic Enclave
  - p: Hardware-grade confidential compute ensures memory encryption keys never leave physical processor silicon.
  - h3: Hardware SLA Guarantees
  - p: Autonomous sub-second node failover dynamically migrates active KV-cache tensors before bad die degradation occurs.
  - h3: Interactive Cluster Scaling & Concurrency Sandbox
  - p: Drag the slider to adjust simultaneous active agent tokens and inspect real-time substrate telemetry response.
- section #api-terminal .section
  - h2: Zero-Configuration SDK & Instant Dispatch.
  - p: Drop-in replacement for standard OpenAI/vLLM endpoints. Integrate with three lines of Python or dispatch raw low-latency streaming RPCs.
  - button: Python SDK
  - button: cURL
  - button: TypeScript
  - button: Rust
  - button: Copy
  - button: Execute Query
- section #pricing .section
  - h2: Transparent, On-Demand Hardware Pricing.
  - p: No hidden egress surcharges, no stranded GPU idle charges. Provision by the hour or reserve guaranteed annual capacity.
  - h3: Dedicated Node
  - p: Ideal for model fine-tuning, latency profiling, and team R&D evaluation.
  - ul .pricing-feature-list
    - li: ✔ 1× NVIDIA H100 SXM5 80GB
    - li: ✔ 3.2 Tbps InfiniBand Interconnect
    - li: ✔ Shared Global KV-Cache Pool
    - li: ✔ 99.9% Uptime Guarantee
  - a: Provision Node → #cockpit
  - h3: Hyperscale Mesh
  - p: Turnkey multi-node cluster optimized for high-concurrency production models.
  - ul .pricing-feature-list
    - li: ✔ 8× NVIDIA H100 SXM5 (640GB HBM3e)
    - li: ✔ Dedicated Liquid-Glass Fabric Rail
    - li: ✔ Deterministic Sub-2ms P99 TTFT
    - li: ✔ Real-Time Autonomous Node Migration
    - li: ✔ 99.999% High-Availability SLA
  - a: Deploy Pod Mesh → #cockpit
  - h3: Dedicated Lab Enclave
  - p: Custom multi-datacenter topology with air-gapped cryptographic guarantees.
  - ul .pricing-feature-list
    - li: ✔ 64 to 4,096+ Interconnected Nodes
    - li: ✔ Air-Gapped Physical Hardware Enclaves
    - li: ✔ Custom FlashAttention & CUDA Kernels
    - li: ✔ 24/7 Dedicated Infrastructure Architects
  - a: Contact Architecture Team → mailto:contact@vitreon.example
- section .section
  - h2: Technical Deep Dive & Architecture.
  - p: Clear answers on memory pooling, zero-copy interconnects, and platform compatibility.
  - button: How does Vitreon achieve sub-millisecond TTFT under heavy concurrency?
  - button: Can I migrate from existing vLLM or HuggingFace setups without rewriting code?
  - button: What hardware accelerators are supported?
  - button: How is tenant data security and privacy enforced?
- section .section
  - h2: Deploy Your First Substrate Pod in 4 Minutes.
  - p: Experience liquid-glass performance on your most demanding foundation models. Instant API key provisioning with $250 complimentary compute credits.
  - a: Launch Interactive Console → #pricing
  - a: Explore System Identity → #monogram-studio
- footer .footer
  - p: Vitreon AI Infrastructure Lab. Liquid-glass compute substrate engineered for sub-millisecond foundation model inference, tensor routing, and memory pooling.
  - a: team@vitreon.example → mailto:team@vitreon.example
  - h4: Architecture
  - ul .footer-links
    - li: Liquid-Glass Cockpit
    - li: Bento Modular Metrics
    - li: Concurrency Sandbox
    - li: Kernel Dispatch Stream
    - li: Cluster Provisioning
  - h4: Identity & Specimen
  - ul .footer-links
    - li: Swiss Vector Monogram
    - li: Construction Grid
    - li: Scale Stress Testing
    - li: SVG Vector Export
  - h4: Security & Lab
  - ul .footer-links
    - li: SOC2 Type II Attestation
    - li: Confidential Enclaves
    - li: Immersion Cooling Specs
    - li: Responsible AI Charter
  - a: Privacy Directive → #
  - a: Terms of Substrate → #
  - a: Security Whitepaper → #

## Fields
Keep these controls, including ids and placeholders.
- input[range] #concurrencySlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/vitreon-monogram.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
