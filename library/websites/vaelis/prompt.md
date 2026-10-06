# Rebuild prompt — Vaelis (`vaelis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/vaelis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI-native command and control platform for sovereign defense: monumental Space Grotesk typography, aerial canyon reconnaissance hero with bottom docking curve, interactive Strata workspace terminal with real-time tactical SVG map, multi-source intelligence fusion tabs, and field validation impact metrics.

## Title
Vaelis — AI-Native Command & Control for Sovereign Defense

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Fragment+Mono:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Colors */
  --bg-canvas-dark: #0a0b0d;
  --bg-card-dark: #121418;
  --bg-card-dark-hover: #181b22;
  --border-dark: rgba(255, 255, 255, 0.12);
  --border-dark-subtle: rgba(255, 255, 255, 0.06);
  --bg-canvas-light: #fbfbfc;
  --bg-card-light: #ffffff;
  --bg-card-subtle: #f3f5f8;
  --border-light: #e4e7eb;
  --border-light-subtle: #eeeff2;
  --text-dark-primary: #ffffff;
  --text-dark-secondary: rgba(255, 255, 255, 0.72);
  --text-dark-muted: rgba(255, 255, 255, 0.44);
  --text-light-primary: #0f1115;
  --text-light-secondary: #4b525d;
  --text-light-muted: #848d9a;
  --accent-cobalt: #1e5bf0;
  --accent-cobalt-hover: #1447c8;
  --accent-cobalt-light: rgba(30, 91, 240, 0.08);
  --accent-emerald: #059669;
  --accent-amber: #d97706;
  /* Typography */
  --font-display: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Fragment Mono', monospace, ui-monospace;
  /* Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 9999px;
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-card: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
  --shadow-elevated: 0 16px 40px -10px rgba(0, 0, 0, 0.12);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #navbar .tactical-header
  - nav
    - ul .nav-links
      - li: Doctrine
      - li: Principles
      - li: Strata Core
      - li: Capabilities
      - li: Interoperability
      - li: Validation
      - li: Dispatches
  - button: Request Briefing
  - button: ☰
- section #hero .hero-section
  - h1: Building the next operational advantage for sovereign defense
  - p: AI-native command and control for joint forces, forward tactical headquarters, and allied multi-domain operations.
  - button: Request a Briefing
  - a: Explore Strata OS ↓ → #platform
  - h3: The Autonomous Headquarters: Accelerating the OODA Loop
- main .docking-container
  - section #vision .vision-section
    - h2: Today, joint staff officers reassemble the operational picture from scratch every rotation. Our platform is built on the inverse doctrine: context compounds.
    - p: The stronger your command post’s foundation, the better every plan, brief, and tactical decision on top of it — and the smarter the AI working alongside your commanders.
  - section #principles .principles-section
    - h2: Built for the Modern Battlefield
    - p: Engineered from doctrine upward for contested electronic environments, degraded communications, and high-tempo multi-domain combat.
    - h3: Command Remains Human
    - p: AI handles high-volume sensor analysis, multi-spectral correlation, and branch prediction — never command authority. Every output is transparent, source-traced, and contestable by human leadership.
    - h3: Works With Your Stack
    - p: Integrates natively across legacy C2 platforms, Battlefield Management Systems (BMS), Link 16 datalinks, and allied GIS environments without requiring rip-and-replace infrastructure.
    - h3: Smarter With Every Mission
    - p: Every operational order drafted, simulation branch wargamed, and tactical sensor packet integrated is preserved in an immutable, queryable semantic index. Your HQ compounds institutional intelligence with every deployment.
    - h3: Secure & Air-Gapped by Default
    - p: Defense-grade hardware compartmentalization, multi-level security (MLS) tag enforcement, and fully air-gapped tactical edge server deployment with zero external telemetry leakage.
  - section #platform .platform-section
    - h2: Plan, conduct, and learn with Strata
    - p: Strata is the sovereign operational workspace for modern headquarters. Underneath every interactive view is a deterministic data core. Tactical workflows run directly on it, drawing from unified situational memory.
    - ul .layer-item-list
      - li: Multi-Spectral Fused 248 pkts/s
      - li: Tactical ISR Feeds 12 Drones
      - li: SIGINT Emitters 47 Nodes
      - li: Phased-Array Radar 3 Batteries
      - li: Blue Force Tracking 854 Units
    - p: EW signature correlates with non-allied phased radar emitter at 14.8 km bearing 042°. Recommended counter-measure: Vector Recon Alpha.
  - section #solutions .solutions-section
    - h2: Operational Capabilities Designed for Velocity
    - button: 01 Understand the Battlefield
    - button: 02 Mission Planning & COA
    - button: 03 After Action Review (AAR)
    - button: 04 Force Tracking & Geolocation
    - h3: Turn Fragmented Intelligence Into Immediate Clarity
    - p: Fuse multi-source intelligence into a single coherent operational picture in real-time. Ingest ISR video, SIGINT intercepts, HUMINT cables, and satellite imagery without manual reconciliation.
    - ul #sol-bullets .solution-bullets
      - li: Automated multi-spectral telemetry correlation across sensor clouds
      - li: Zero manual map stitching or competing versions of tactical truth
      - li: Sub-second alerts on anomalous troop movements and emitter bursts
    - button: Schedule Capability Briefing
  - section #interop .interop-section
    - h2: Natively Interoperable. Cryptographically Audited.
    - p: Built for joint coalitions and NATO interoperability. Zero vendor lock-in, zero proprietary silos.
    - h3: Allied Protocol Native
    - p: Native compliance with NATO STANAG and open tactical messaging architectures. Ingests and publishes across disparate joint services seamlessly.
    - h3: Cryptographic Auditability
    - p: Every prompt, synthetic recommendation, and commander override is signed with hardware security modules (HSM) creating an immutable chain of custody.
    - h3: Forward Disconnected Edge
    - p: Deployable to low-SWaP ruggedized tactical edge servers inside command vehicles, patrol craft, or austere field bunkers with automatic mesh re-synchronization.
  - section #impact .impact-section
    - h2: Operational Velocity Under Pressure
    - p: Far beyond a conventional GIS overlay. What our staff previously spent 90 minutes assembling by hand, Vaelis correlates in under 4 minutes with complete verification trails.
  - section #news .news-section
    - h2: Newsroom & Technical Analysis
    - button: View Full Archive
    - article .news-card
      - h3: Vaelis raises €34M Series A to scale AI-native command platforms across allied NATO forces
      - p: Funding led by top European defense and deep-tech venture syndicates to accelerate air-gapped deployments across joint headquarters.
    - article .news-card
      - h3: AeroDefense Consortium and Vaelis announce joint integration for tactical decision superiority
      - p: Deep integration of Strata OS with airborne early-warning systems and unmanned drone swarms for sub-second sensor-to-shooter loops.
    - article .news-card
      - h3: Engineering battlefield-ready AI: Resilience in electronic-warfare contested environments
      - p: Architectural design patterns for deterministic local inference when satellite links are severed and GPS signals are actively jammed.
    - h2: Upgrade Your Headquarters' Decision Velocity
    - p: Experience Strata OS in an air-gapped simulation tailored to your division's operational environment and existing C2 architecture.
    - button: Request a Sovereign Briefing
- footer .tactical-footer
  - p: Next-generation command-and-control operating software for sovereign defense, intelligence agencies, and allied joint forces.
  - h4: Platform
  - ul .footer-link-list
    - li: Strata OS
    - li: Battlefield Fusion
    - li: Mission Planner
    - li: Telemetry AAR
    - li: Force Tracking
  - h4: Standards
  - ul .footer-link-list
    - li: STANAG 4586
    - li: Link 16 Integration
    - li: Multi-Level Security
    - li: Air-Gapped Node
    - li: Zero Trust Proof
  - h4: Company
  - ul .footer-link-list
    - li: Our Doctrine
    - li: Field Validation
    - li: Dispatches
    - li: Manifesto Film
    - li: Careers (Clearance Req)
  - h4: Security & Legal
  - ul .footer-link-list
    - li: Compliance Audit
    - li: Security Advisory
    - li: Privacy Policy
    - li: Terms of Service
- button: ✕
- h3: Request an Operational Briefing
- p: Schedule a classified or unclassified technical demonstration of Strata OS with our defense solutions team.
- form
  - label: Defense Ministry / Armed Force / Organization
  - label: Official Official Email Address
  - label: Clearance Level of Intended Briefing
  - option: Unclassified / Technical Architecture Overview
  - option: National Restricted / NATO Restricted
  - option: Confidential / Secret Clearance Track
  - label: Primary Operational Domain
  - option: Joint Multi-Domain Headquarters (All Services)
  - option: Land Force & Brigade Command Post
  - option: Air Operations & Air Defense Command
  - option: Naval Task Force / Maritime Tactical C2
  - button: Transmit Briefing Request
- button: ✕

## Images in the page
- `assets/hero-terrain.jpg — Aerial reconnaissance topography of mountain canyon terrain`
- `assets/pip-thumb.jpg — Field reconnaissance patrol advancing on perimeter`
- `assets/pip-thumb.jpg — Tactical field reconnaissance`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #org-input placeholder='e.g. Allied Joint Command / MoD'
- input[email] #email-input placeholder='officer@organization.mil'
- select #clearance-select
- select #domain-select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-terrain.jpg`
- `assets/pip-thumb.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
