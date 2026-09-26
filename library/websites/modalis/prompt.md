# Rebuild prompt — Modalis (`modalis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/modalis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cinematic state-driven world model experience with seamless video transitions. Features full-viewport architectural monolith staging, frosted optical glass controller with spectral rim illumination, pointer-inert caustics, dynamic capsule tracking, and frame-accurate state transitions across Scene, Lighting, Clothing, and Cast.

## Title
Modalis — The World Model

## Description meta
Modalis builds open world models that give you full control, from production-grade video to physical AI systems.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --retake-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --retake-slow-ease: cubic-bezier(0.65, 0, 0.35, 1);
  --glass-x: 24%; --glass-y: 8%;
  --bg-canvas: #040608; --bg-surface: #0a0e14; --bg-card: rgba(13, 19, 28, 0.55);
  --border-subtle: rgba(255, 255, 255, 0.08); --border-hover: rgba(255, 255, 255, 0.22);
  --accent-cyan: #00f0ff; --accent-sky: #38bdf8;
  --text-primary: #ffffff; --text-secondary: rgba(255, 255, 255, 0.72); --text-muted: rgba(255, 255, 255, 0.44);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #topNav .top-nav
  - ul .nav-links
    - li: Architecture
    - li: State Engine
    - li: Telemetry
    - li: Pipeline
    - li: Developer API
    - li: Pricing
    - li: FAQ
  - a: Launch Studio → #pricing
- section #hero .hero-stage
  - h1: The world model
  - p: Modalis builds open world models that give you full control, from production-grade video to systems that understand and operate in the physical world.
  - nav #controllerContainer .controller-container “Scene state selector”
    - button: Scene
    - button: Lighting
    - button: Clothing
    - button: Cast
    - button: Reset
  - a: Explore Architecture → #architecture
  - button: Retry
- section #architecture .section
  - h2: Deterministic physical priors meet generative freedom.
  - p: Conventional video diffusion hallucinates pixels frame-by-frame, causing temporal jitter and identity drift. Modalis enforces persistent 4D spatial representation, photometric energy conservation, and rigid architectural geometry across all state mutations.
  - h3: Persistent 4D Latent Geometry
  - p: Architectural walls, flooring planes, and character contact points are anchored in a continuous 3D world coordinate frame. Camera parallax and translation maintain zero spatial drift across cuts.
  - h3: Coupled Radiosity & Optics
  - p: Illumination changes synchronously calculate bounce radiosity across subjects, walls, and floor contact shadows. Time-of-day progression alters specular highlights without graphic gradient banding.
  - h3: Non-Destructive Branching
  - p: Execute forward and return cycles through paired keyframe paths. State transitions commit to verifiable terminal holds, allowing sequential re-branching without raster re-encoding degeneration.
- section #state-engine .section-full
  - h2: Four decoupled dimensions of physical state control.
  - p: Isolate and transform individual elements of a scene while holding all other continuous constraints locked. Examine the verified endpoints of each state branch below.
  - button: 01. Scene Environment
  - button: 02. Photometric Lighting
  - button: 03. Garment Colorway
  - button: 04. Cast & Identity
  - h3: Architectural Scene Expansion
  - p: Two rigid monolithic walls slide outward along the lateral axis, revealing an expansive sky horizon. The subject's ground contact, perspective horizon, and silhouette remain locked without geometry folding or synthetic canvas tearing.
  - ul .state-meta-list
    - li: ACTIONRigid bilateral translation (outward slide)
    - li: CAMERALocked 50mm cinematic prime, zero pan/drift
    - li: TIMING2.08s duration · 1.90s verified reverse hold
  - h3: Coupled Blue-Hour Shift
  - p: Full-spectrum photometric shift from daylight high-noon to cinematic blue-hour twilight. Warm key light grazes the subject's face and faux-fur texture, casting lengthened contact shadows across the floor without posterization.
  - ul .state-meta-list
    - li: SPECTRUM5800K daylight → 3200K tungsten & deep cyan
    - li: RADIOSITYFloor contact & wall bounce synchronously updated
    - li: TIMING2.08s forward · 2.04s reverse cycle
  - h3: Garment Pivot & Material Swap
  - p: The subject executes a smooth 180° rotation, transitioning from vibrant green polka-dot shearling to a sleek monochrome colorway. Fabric shear, micro-hair simulation, and zipper hardware maintain anatomical fidelity throughout the turn.
  - ul .state-meta-list
    - li: TRANSFORM180° axial character rotation & texture swap
    - li: PHYSICSHigh-dampening cloth shear & micro-fur dynamics
    - li: TIMING2.08s forward · 2.00s terminal hold
  - h3: Touchdown Match-Cut Identity
  - p: Vertical leap transition executing a seamless match-cut at exact foot contact (touchdown). Replaces the male streetwear model with a female high-fashion silhouette while preserving scene physics, lighting vector angle, and architectural depth.
  - ul .state-meta-list
    - li: CUT MECHANICFrame-exact touchdown match cut (zero air-jitter)
    - li: IDENTITYAnatomical replacement with preserved spatial vector
    - li: TIMING3.00s forward · 2.48s reverse hold
- section #telemetry .section
  - h2: Engineered for sub-second production latency.
  - p: Real-time telemetry across distributed H100 NVLink clusters. Modalis compiles diffusion latents directly into streamable video frames with hardware-accelerated decoded handoffs.
  - table .benchmarks-table
    - th: Architecture & Pipeline
    - th: Keyframe Seam Jitter
    - th: Camera Drift
    - th: Reverse Path Coherence
    - th: Inference Time / Sec
    - td: Modalis-2.5 (Open World Model)
    - td: < 0.02 px (Imperceptible)
    - td: 0.00% (Rigid lock)
    - td: 100% (Decoded Match)
    - td: 0.38s / sec
    - td: Standard Text-to-Video Diffusion
    - td: 4.20 px (High jitter)
    - td: 14.8% (Continuous roll)
    - td: Fail (Re-hallucinates)
    - td: 4.10s / sec
    - td: Frame-Interpolation Blend (EBS)
    - td: Ghosting artifacts
    - td: Variable drift
    - td: Non-deterministic
    - td: 1.65s / sec
- section #pipeline .section-full
  - h2: From prompt specification to master grade.
  - p: How professional studios orchestrate state-driven video production with Modalis.
  - h3: Spatial Staging
  - p: Establish a baseline frame. Define focal length, ground plane coordinates, character eyeline, and architectural boundaries in an approved 16:9 master keyframe.
  - h3: Target Conditioning
  - p: Specify isolated state modifications (e.g. lighting Kelvin shift, wardrobe colorway, environmental geometry) using bounded prompt directives without re-prompting the scene.
  - h3: Seam-Safe Packaging
  - p: Export forward/reverse clip pairs with calibrated terminal hold guards. Integrate into real-time web experiences, interactive installations, or virtual production stages.
- section #api .section
  - h2: Full programmatic control in three lines of code.
  - p: Deploy state-driven video pipelines across web applications, video editors, and game engines using our open Python SDK or REST endpoints.
  - button: Python SDK
  - button: TypeScript
  - button: cURL
  - button: Copy Code
- section #pricing .section
  - h2: Predictable pricing for creators, studios, and lab infrastructure.
  - p: Run locally on your cluster with open weights or stream millisecond inferences from our high-throughput global edge API.
  - h3: Researcher
  - p: For independent researchers, model evaluators, and visual prototypers exploring latent conditioning.
  - ul .tier-features
    - li: 500 state transition seconds / mo
    - li: Single 1080p spatial resolution
    - li: Standard queue latency (450ms)
    - li: Open Python & TypeScript SDK
    - li: Community Discord & forum support
  - a: Start Prototyping → #hero
  - h3: Production Studio
  - p: Designed for high-output VFX pipelines, creative agencies, and production design teams.
  - ul .tier-features
    - li: 3,500 state transition seconds / mo
    - li: Full 4K Spatial Upsampling
    - li: Priority H100 cluster routing (<120ms)
    - li: Automatic forward/reverse pairing
    - li: Dedicated Slack engineering channel
  - a: Deploy Studio Tier → #hero
  - h3: Enterprise Lab
  - p: Custom on-prem weights, air-gapped private clusters, and dedicated SLA for major studios.
  - ul .tier-features
    - li: Unlimited transition volume
    - li: On-prem weight export & air-gap weights
    - li: Custom LoRA fine-tuning on proprietary IP
    - li: Guaranteed 99.99% latency SLA
    - li: 24/7 dedicated research partner team
  - a: Contact Research Lab → #hero
- section #faq .section
  - h2: Frequently Asked Questions
  - p: Everything you need to know about Modalis latent architecture, bidirectional pairing, and production deployment.
  - button: How does Modalis differ from conventional text-to-video generators?
  - button: What ensures seamless visual reversibility without black-frame flash?
  - button: Can I self-host Modalis weights on our own private GPU clusters?
  - button: What export formats and container codecs are supported?
  - button: How does the system handle high-frequency textures like textiles and hair?
- section .final-cta
  - h2: Experience the physics of state-driven video.
  - p: Join leading VFX studios, game engines, and creative directors building real-time generative worlds with Modalis.
  - a: Test Live Interactive Model → #hero
  - a: Explore API Reference → #api
- footer .site-footer
  - p: Modalis is a continuous world-model foundation research lab advancing deterministic physics, temporal latent coherence, and state-reversible generative video.
  - ul .footer-links
    - li: Continuous Latents
    - li: Modality Engine
    - li: Comparative Benchmarks
    - li: Studio Pipeline
  - ul .footer-links
    - li: Python SDK
    - li: TypeScript Client
    - li: REST Endpoints
    - li: Cluster Health
  - ul .footer-links
    - li: Pricing & Quotas
    - li: Documentation
    - li: Research Papers
    - li: Model Checkpoints

## Images in the page
- `./assets/modalis-logo.svg — Modalis`
- `./assets/state-base.png`
- `./assets/state-environment.png — Scene Environment Endpoint`
- `./assets/keyframe-light-shift-v2.png — Lighting Shift Endpoint`
- `./assets/state-colorway.png — Garment Colorway Endpoint`
- `./assets/keyframe-full-look-v3.png — Cast Endpoint`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/keyframe-full-look-v3.png`
- `assets/keyframe-light-shift-v2.png`
- `assets/modalis-logo.svg`
- `assets/state-base.png`
- `assets/state-colorway.png`
- `assets/state-environment.png`
- `assets/video-1-reverse.mp4`
- `assets/video-1.mp4`
- `assets/video-2-reverse.mp4`
- `assets/video-2.mp4`
- `assets/video-3-reverse.mp4`
- `assets/video-3.mp4`
- `assets/video-4-reverse.mp4`
- `assets/video-4.mp4`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
