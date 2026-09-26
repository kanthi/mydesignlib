# Rebuild prompt — Radial (`radial`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/radial/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Spatial context and continuous intelligence platform for modern engineering organizations. Features warm ecru linen paper aesthetic, floating gravitational field disc with interactive 3D perspective tilt, live orbital telemetry radar with pulsing satellite nodes, draggable spring-physics alignment mesh, split topology comparator, and autonomous field notes generator.

## Title
Radial — Intelligence for the Whole Field

## Description meta
Radial connects the signals around your work, so your team can move with context instead of catching up. Spatial context and continuous intelligence.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #F0EFEA;
  --color-canvas-subtle: #E8E6DC;
  --color-canvas-inset: #DFDCD1;
  --color-surface-white: #FFFFFF;
  --color-surface-dark: #11231D;
  --color-surface-dark-elevated: #183329;
  --color-surface-dark-active: #204135;
  --color-text-primary: #11221C;
  --color-text-secondary: #42534B;
  --color-text-muted: #78877F;
  --color-text-inverse: #F0EFEA;
  --color-accent-persimmon: #EB5A36;
  --color-accent-persimmon-hover: #D74A27;
  --color-accent-persimmon-subtle: rgba(235, 90, 54, 0.12);
  --color-accent-radar-lime: #9EC255;
  --color-accent-radar-lime-glow: rgba(158, 194, 85, 0.28);
  --color-field-ring: rgba(17, 35, 29, 0.13);
  --color-field-ring-active: rgba(17, 35, 29, 0.28);
  --color-border-subtle: rgba(17, 35, 29, 0.09);
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --shadow-sm: 0 2px 8px rgba(17, 35, 29, 0.05);
  --shadow-md: 0 8px 24px rgba(17, 35, 29, 0.08);
  --shadow-lg: 0 16px 40px rgba(17, 35, 29, 0.12);
  --shadow-disc: 0 24px 60px rgba(17, 35, 29, 0.25), 0 6px 16px rgba(17, 35, 29, 0.15);
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: all 0.25s var(--ease-snappy);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteHeader .site-header
  - nav .nav-inner “Main Navigation”
    - a: radial → #hero
    - ul .nav-links
      - li: Why Radial
      - li: How it works
      - li: Field nodes
      - li: Field notes
    - button: Request access ↗
- main
  - section #hero .hero-section
    - h1: See the whole field.
    - p: Radial connects the signals around your work, so your team can move with context instead of catching up.
    - button: Request access ↗
    - button: ▶ Watch the field note
    - a: → Scroll to enter the field → #why-radial
  - section .ticker-strip “System Pillars”
  - section #why-radial .section-spacing
    - h2: Teams don't drown in lack of data. They drown in severed context.
    - p: When teams scale, every tool creates a high-walled silo. Product lives in Linear, design in Figma, code in GitHub, and reality in incident logs. Radial continuously re-establishes the shared gravitational field.
    - h3: Spatial Topology Comparator
    - p: Toggle between conventional tool fragmentation and Radial continuous field.
    - button: Radial Field (Unified)
    - button: Fragmented Silos
    - ul .tool-drift-list
      - li: Slack thread archaeology Disconnected
      - li: PR reviewed without architectural context High Risk
      - li: Figma spec drifted from React implementation Silent Drift
    - p: Decisions happen in the gaps between tools. High synchronization friction.
    - ul .tool-drift-list
      - li: Continuous automated context synthesis Real-time
      - li: Pre-merge dependency blast radius map Zero Surprises
      - li: Autonomous cross-functional briefings Synthesized
    - p: One coherent center of gravity. Every engineer and product leader moves with full context.
  - section #how-it-works .section-spacing
    - h2: Three phases of continuous situational awareness.
    - p: Radial is not another dashboard your team has to remember to check. It passively ingests the perimeter, models systemic gravity, and projects clarity into your existing daily workflows.
    - h3: Ingest the Perimeter
    - p: Connect your code repositories, issue trackers, production telemetry, and design files with zero configuration. Passive webhooks ingest telemetry without developer overhead.
    - h3: Synthesize the Topology
    - p: The Radial graph engine models the invisible relationships between system components. It maps who is touching what, detects upstream dependencies, and calculates divergence velocity.
    - h3: Project Contextual Clarity
    - p: Real-time field intelligence is projected directly into pull requests, developer terminals, and morning executive dispatches before costly drift solidifies into code.
  - section #spatial-telemetry .section-spacing
    - h2: Precision instrumentation for high-velocity engineering systems.
    - p: Every feature in Radial is designed to replace guesswork with empirical geometric clarity. Explore the four core telemetry surfaces below.
    - h3: Gravitational Alignment Engine
    - p: Visualize the real-time magnetic pull between engineering modules, design specs, and active pull requests. Drag the nodes to experience self-stabilizing context balance.
    - h3: Drift Velocity Radar
    - p: Detect divergence in system contracts before merge. Sweeps across all microservice boundaries every 4 seconds.
    - h3: Causal Replay
    - p: Scrub through historical decisions like a DVR for system architecture. Pinpoint the exact moment a dependency became entangled.
    - button: Technical Lens
    - button: Executive Horizon
    - h3: Autonomous Field Notes Generator
    - p: Continuous natural-language intelligence dispatches synthesized from code changes, design revisions, and metric fluctuations. Zero manual status meetings required.
    - p: "Core platform migration reached stage 3 equilibrium. Downstream dependencies in Auth v2 and Billing Service are fully aligned with 0 breaking changes detected. Next critical gate: PostgreSQL schema rotation at 14:00 UTC."
  - section .section-spacing
    - h2: Calibrate your team’s context horizon.
    - p: Adjust signal parameters to observe how the Radial gravitational field absorbs organizational entropy and maintains structural coherence.
  - section #field-notes .section-spacing
    - h2: Dispatches on systems, gravity, and organizational momentum.
    - p: Curated research notes exploring the hidden physics of software organizations, communication topology, and context preservation.
    - article .note-card
      - h3: Why linear roadmaps fail in non-linear software systems
      - p: A quantitative investigation into why Gantt charts and waterfall epics break down when engineering meshes scale past 30 active contributors.
    - article .note-card
      - h3: The 300ms context horizon: eliminating synchronization lag
      - p: How sub-second context delivery directly inside the code editor halts the compounding blast radius of architectural assumptions.
    - article .note-card
      - h3: Signal entropy: the hidden physics of broken dependencies
      - p: Analyzing the mathematical probability of uncoordinated breaking changes in distributed service mesh architectures.
  - section .section-spacing
    - h2: Verified across the industry’s most demanding engineering fields.
    - p: Reduction in manual status meetings, Slack tag archaeology, and duplicate tickets.
    - p: Instant causal graph tracking identifies root cause divergence in seconds.
    - p: Cross-service schema mutations intercepted before reaching staging environments.
    - p: Sub-second event ingestion and topology projection across all active developer seats.
    - p: “Radial replaced six fragmented status rituals with one indisputable picture of reality. Our leads spend zero time asking what’s happening, because the field is always visible.”
    - p: “For the first time in ten years, every engineer sees the whole field before writing a single line of code. It feels like turning on the radar in a storm.”
  - section #request-access .section-spacing
    - h2: See the whole field today.
    - p: Private deployment clusters are available now for forward-thinking engineering and product organizations. Claim your field access.
    - form #accessForm .access-form
      - button: Request Access ↗
- footer .site-footer
  - a: radial → #hero
  - p: Spatial context and continuous intelligence for modern engineering and product teams.
  - h4: Architecture
  - ul .footer-links
    - li: Perimeter Ingestion
    - li: Topology Graph
    - li: Gravitational Engine
    - li: Drift Radar
  - h4: Dispatches
  - ul .footer-links
    - li: Linear Roadmaps
    - li: Context Horizon
    - li: Signal Entropy
    - li: Guild Papers
  - h4: Company & Legal
  - ul .footer-links
    - li: Manifesto
    - li: inquiries@radial.example
    - li: Privacy Protocol
    - li: Security Specification
- button: ×
- h3: Field Note 01: The Gravitational Architecture
- p: This walkthrough demonstrates how continuous spatial context eliminates cross-functional misalignment before breaking changes propagate to production.
- button: Claim Access to Live Sandbox ↗
- button: ×
- h3: Request Dedicated Field Access
- p: Deploy Radial into your engineering organization. Zero-friction integration with existing telemetry.
- form
  - label: WORK EMAIL
  - label: TEAM SIZE
  - option: 10 - 50 Engineers
  - option: 50 - 200 Engineers
  - option: 200+ Enterprise Cluster
  - label: PRIMARY ARCHITECTURE
  - option: Distributed Microservices / Kubernetes
  - option: Monolith + Edge Workers
  - option: Multi-Region Hybrid Cloud
  - button: Submit Request
- button: ×
- h3: Article Title

## Fields
Keep these controls, including ids and placeholders.
- input[range] #replayScrubber
- input[range] #sliderDensity
- input[range] #sliderNoise
- input[range] #sliderCoupling
- input[email] #accessEmail placeholder='Enter work email (e.g. name@company.com)'
- input[email] placeholder='alex@company.com'
- select

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
