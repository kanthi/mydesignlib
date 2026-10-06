# Rebuild prompt — Corvus (`corvus`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/corvus/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous cloud threat intelligence & incident suppression platform: sun-shafted rainforest canopy backdrop, cinematic avian sentinel flight entrance that freezes into its final frame, monumental serif watermark typography, chamfered Kraft file-tab metric cards (12ms detection & 99.98% coverage), interactive alert noise suppression simulator, 12ms kernel containment breakdown, and eBPF architecture bento grid.

## Title
Corvus — Loud where it counts. Autonomous Cloud Threat Sentinel.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-canopy: #141b13;
  --bg-canopy-dark: #0d120c;
  --bg-surface-elevated: #1a2218;
  --bg-surface-card: #202b1e;
  --bg-glass: rgba(20, 27, 19, 0.75);
  /* Signature Kraft / Warm Sand Cards */
  --bg-sand: #d5c4a1;
  --bg-sand-dark: #c4b08b;
  --bg-sand-light: #dfd1b3;
  --text-on-sand: #182016;
  --text-on-sand-muted: #5e6b5a;
  /* Accents */
  --accent-amber: #e2b35b;
  --accent-amber-bright: #f5c66e;
  --accent-amber-glow: rgba(226, 179, 91, 0.28);
  --accent-orange: #ea580c;
  --accent-sage: #a7b39e;
  /* Text Colors */
  --text-primary: #f6f8f4;
  --text-secondary: #b5c3b1;
  --text-muted: #798775;
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.09);
  --border-glass: rgba(255, 255, 255, 0.14);
  --border-amber: rgba(226, 179, 91, 0.35);
  /* Typography */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  --container-max: 1280px;
  --ease-fluid: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteNav .site-nav
  - a: Corvus → #hero
  - nav .nav-links-center “Platform Links”
    - a: Platform → #platform
    - a: Coverage → #coverage
    - a: Research → #simulator
    - a: Company → #pricing
  - a: Sign In → javascript:void(0)
  - button: Get Access
- main
  - section #hero .hero-canopy-section
    - button: Replay Flight
    - h1: Loud where it counts
    - p: One unmistakable signal at the moment it matters, and silence for the rest of the day.
    - button: Start free
    - a: Watch the system ↗ → #simulator
  - section #simulator .simulator-section
    - h2: The Autonomous Noise Floor
    - p: Most SOC teams suffer from 14,000+ daily alert sirens. Slide the suppression slider below to see how Corvus filters telemetry down to 1 undeniable threat beacon.
  - section #coverage .timeline-section
    - h2: Contained Before a Human Is Paged
    - p: A step-by-step breakdown of how Corvus neutralizes a zero-day memory exploit inside Kubernetes clusters within 12 milliseconds.
    - h3: eBPF Telemetry Hook
    - p: An unauthorized memory modification in libc is intercepted at the kernel level without performance overhead.
    - h3: Behavioral Synthesis
    - p: Corvus neural classifier compares the instruction sequence against 12M global canary signatures in sub-4ms.
    - h3: Blast-Radius Quarantine
    - p: Pod network ingress is silently rerouted to an ephemeral sandbox. Outbound data egress is cut instantly.
    - h3: Autonomous Eviction
    - p: Container is killed, immutable forensics snapshot dumped to S3, and a zero-noise telemetry log stored. No engineer awakened.
  - section #platform .architecture-section
    - h2: Engineered for Sovereign Infrastructure
    - p: Designed for bare-metal Kubernetes, AWS EKS, GCP GKE, and air-gapped sovereign cloud regions.
    - h3: eBPF Deep Kernel Observation
    - p: Operates entirely in kernel-space with 0.1% CPU overhead. Monitors socket connections, syscall arguments, and executable loads before user-space awareness.
    - h3: Silent Global Canary Network
    - p: Thousands of honeypot traps distributed across 42 cloud regions map active botnet campaigns before they touch your enterprise fleet.
  - section #pricing .pricing-section
    - h2: Transparent Fleet Scaling
    - p: No bill shock. No volume telemetry ingestion penalties. Simple per-node pricing with unlimited signal ingestion.
    - h3: Developer Fleet
    - p: For high-growth startups securing staging and core production clusters.
    - ul .plan-bullets
      - li: ✓ Up to 50 Kubernetes nodes
      - li: ✓ 12ms autonomous containment
      - li: ✓ eBPF kernel security agent
      - li: ✓ Slack & PagerDuty webhook sync
    - button: Deploy Free Trial
    - h3: Fleet Defense
    - p: For cloud-native enterprises requiring automated SOC suppression and compliance.
    - ul .plan-bullets
      - li: ✓ Unlimited node scaling
      - li: ✓ Sub-10ms containment SLA
      - li: ✓ Multi-cloud AWS/GCP/Azure federation
      - li: ✓ SOC2 & ISO27001 automated proof
      - li: ✓ Dedicated security engineer support
    - button: Start 30-Day Fleet Trial
    - h3: Sovereign Cloud
    - p: For defense, financial institutions, and completely air-gapped workloads.
    - ul .plan-bullets
      - li: ✓ 100% On-premise air-gapped install
      - li: ✓ Custom eBPF filter rule compiler
      - li: ✓ 24/7 Red-Team response war room
      - li: ✓ Source-code escrow & security audit
    - button: Contact Defense Desk
  - section .cli-banner-section
    - h2: Install Across Your Cluster in 60 Seconds
    - p: Deploy Corvus as a non-privileged eBPF daemonset. No kernel recompilation or sidecars required.
    - button: Copy
  - section .faq-section
    - h2: Frequently Answered Questions
    - button: How does Corvus achieve 12ms autonomous containment without false positives? +
    - p: Unlike traditional heuristics that parse high-level syslog lines, Corvus attaches directly to Linux kernel tracepoints using extended BPF. We observe the execution flow before memory writes complete, verifying syscall behavior against an immutable cryptographic model of your binary.
    - button: Does Corvus require sending raw telemetry to an external SaaS? +
    - p: Never. Corvus evaluates all eBPF telemetry locally on each host node. Only aggregated cryptographic incident proofs (a few kilobytes) leave your virtual private cloud, guaranteeing compliance with HIPAA, GDPR, and FedRAMP.
    - button: What is the CPU and memory impact of the Corvus daemonset? +
    - p: Because the agent leverages in-kernel JIT compiled eBPF bytecode without user-space context switching, typical overhead is less than 0.2% CPU and under 40MB RAM per host node under high production load.
- footer .site-footer
  - a: Corvus → #hero
  - p: Autonomous cloud threat intelligence and incident suppression sentinel. Loud where it counts, and silence for the rest of the day.
  - h4: Platform
  - ul .footer-nav-list
    - li: eBPF Telemetry
    - li: 12ms Containment
    - li: Noise Suppression
    - li: Canary Mesh
  - h4: Coverage
  - ul .footer-nav-list
    - li: Kubernetes Fleets
    - li: AWS EKS & GCP GKE
    - li: Bare-Metal BareOS
    - li: Sovereign Air-Gap
  - h4: Company
  - ul .footer-nav-list
    - li: Research Papers
    - li: SOC2 Portal
    - li: Incident Advisory
    - li: Careers (Hiring)
- h3: Deploy Corvus Sentinel
- button: ×
- p: Single-command eBPF agent initialization. Instant node discovery and autonomous anomaly containment in <12ms with zero human intervention.
- button: Copy
- button: Download Air-Gap Tarball
- button: Dismiss
- h3: 12ms Autonomous Detection
- button: ×

## Images in the page
- `assets/detection-beak.jpg — Macro sensory radar detail`
- `assets/coverage-plumage.jpg — Macro plumage protection detail`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #noiseSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/canopy-bg.jpg`
- `assets/coverage-plumage.jpg`
- `assets/detection-beak.jpg`
- `assets/hero-sentinel.mp4`
- `assets/hero-sentinel.png`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
