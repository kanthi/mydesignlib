# Rebuild prompt — Loren IT (`loren-it`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/loren-it/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modern high-reliability infrastructure and platform engineering firm website featuring cool paper palette, live server hardware cabling imagery, animated SRE telemetry strip, 6 interactive practice cards, 4-step delivery sequence, and quantified metric case entries with architecture photography.

## Title
Loren IT — Infrastructure & Platform Engineering

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #f6f8fa;
  --bg-surface: #ffffff;
  --bg-subtle: #edf1f5;
  --bg-dark: #0f1217;
  --text-primary: #14171d;
  --text-secondary: #495261;
  --text-muted: #788292;
  --accent-teal: #0c7275;
  --accent-teal-dark: #085456;
  --accent-teal-soft: rgba(12, 114, 117, 0.08);
  --accent-teal-glow: rgba(12, 114, 117, 0.22);
  --border-hairline: rgba(20, 23, 29, 0.10);
  --border-strong: rgba(20, 23, 29, 0.20);
  --border-focus: rgba(12, 114, 117, 0.40);
  --font-sans: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'IBM Plex Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --container-width: 1120px;
  --radius-sm: 4px;
  --radius-md: 8px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Loren IT / → #
  - label: Menu
  - nav .site-nav
    - a: What we do → #what-we-do
    - a: How we work → #how-we-work
    - a: Work → #work
    - a: Trust → #trust
    - a: Contact → #contact
- main
  - section #hero .section-block
    - h1: Platform & infrastructure engineering for mission-critical operations
    - p: We architect, migrate, and operate mission-critical cloud topologies, bare-metal compute arrays, and high-throughput low-latency networking for engineering organizations where downtime directly translates to revenue loss.
    - a: Speak with an architect → mailto:architecture@loren-it.example
    - a: Review delivery sequence → #how-we-work
  - section #what-we-do .section-block
    - h2: Specialized engineering practices
    - p: Engagements are staffed directly by senior systems engineers. Every environment is delivered as versioned, declarative infrastructure with automated verification gates.
    - h3: Cloud Architecture & Migration
    - p: Terraform and OpenTofu driven greenfield foundations and brownfield lift-and-shape migrations across AWS, GCP, and Azure without service disruption.
    - h3: Platform Engineering & DevOps
    - p: Internal developer platforms built on Kubernetes, ArgoCD GitOps, and automated ephemeral preview environments that cut deployment lead times from days to minutes.
    - h3: Data Center & Bare-Metal Compute
    - p: Colocation architecture, custom high-density racking, and PXE boot provisioning for latency-sensitive workloads that are economically prohibitive on hypervisors.
    - h3: Network & Zero-Trust Security
    - p: Segmented network fabrics, transit gateways, WireGuard mesh topologies, and mTLS service-to-service cryptographic verification protecting critical endpoints.
    - h3: Managed Operations (NOC / SRE)
    - p: 24/7/365 follow-the-sun operational coverage staffed directly by systems engineers with production debugging authority, backed by strict financial SLA terms.
    - h3: Performance & Cost Optimization
    - p: Deep-packet kernel profiling, memory leak isolation, and aggressive reserved instance / compute savings governance to systematically drive down total burn.
  - section #how-we-work .section-block
    - h2: Deterministic delivery sequence
    - p: Our engagements follow a structured progression engineered to uncover systemic architectural bottlenecks prior to committing production traffic.
    - h3: Infrastructure Audit & Threat Model
    - p: Two-week technical deep dive reviewing existing repository state, IAM trust policies, network ingress paths, and single points of failure. We produce an actionable remediation roadmap with concrete risk ratings.
    - h3: Target Architecture & Proof-of-Concept
    - p: Collaborative RFC phase specifying IaC modules, VPC topologies, and deployment gates. We validate the architecture on an isolated staging cluster under simulated production load.
    - h3: Canary Migration & Traffic Switch
    - p: Zero-downtime cutover utilizing DNS weighted routing, database CDC replication streams, and automated rollback triggers. Production cutovers take place during scheduled maintenance windows.
    - h3: Operational Handover or Ongoing SRE Retainer
    - p: Full runbook documentation, Chaos Engineering fire drills with your internal teams, and either complete sovereign handover or ongoing 24/7 SRE monitoring backed by financial SLA guarantees.
  - section #work .section-block
    - h2: Selected production engagements
    - p: Representative production outcomes delivered for regulated financial platforms, high-volume logistics, and healthcare SaaS.
    - article .case-card
      - h3: Cross-Border Clearing Platform: Cloud Migration & Latency Reduction
      - p: Migrated a monolithic legacy payments clearing stack to an AWS multi-region active-active topology with DynamoDB global tables and Envoy proxy routing. P99 transaction latency was reduced by 87% while maintaining strict FINRA data sovereignty requirements.
    - article .case-card
      - h3: Fleet Telemetry Provider: Kubernetes Migration & Deploy Cadence
      - p: Replaced manual VM deployments with an automated ArgoCD GitOps platform managing 1,200 microservices instances. Deployment frequency increased from bi-weekly maintenance windows to an average of 42 deploys daily with zero customer-impacting outages over 14 months.
    - article .case-card
      - h3: Diagnostic Imaging Network: Storage Architecture & Egress Costs
      - p: Engineered a hybrid storage tiering architecture for 4.2 petabytes of DICOM medical images. Shifted hot caches to colocation Ceph clusters while archiving cold images to encrypted immutable cloud tiers, reducing annual recurring infrastructure burn by 59%.
  - section #trust .section-block
    - h2: Compliance & operational governance
    - p: Our operational workflows are independently audited annually. We operate under signed non-disclosure agreements and standard enterprise vendor risk management frameworks.
    - ul .compliance-list
      - li: / SOC 2 Type II certified operational procedures across all SRE shift rosters
      - li: / ISO 27001 aligned information security management system (ISMS)
      - li: / HIPAA & HITECH compliant business associate agreements (BAA) available
      - li: / GDPR & CCPA sovereign data perimeter guarantees and zero-egress controls
      - li: / Zero-Trust IAM with mandatory hardware FIDO2 keys and ephemeral credentials
      - li: / 100% Onshore Engineering with cleared US/EU resident systems architects
  - section #contact .section-block
    - h2: Direct engineering contact
    - p: Inquiries are reviewed directly by a principal platform architect. We schedule an initial 30-minute technical scope review within one business day.
    - a: architecture@loren-it.example → mailto:architecture@loren-it.example
- footer .site-footer

## Images in the page
- `assets/hero-banner.jpg — Loren IT high-density colocation server rack and switch fabric`
- `assets/operations-center.jpg — Loren IT SRE Engineering Operations Team`
- `assets/cloud-network.jpg — Cross-Border Clearing Platform Topology`
- `assets/devops-screen.jpg — Fleet Telemetry Deployment Pipeline`
- `assets/server-hardware.jpg — Diagnostic Imaging Network Storage Architecture`

## Fields
Keep these controls, including ids and placeholders.
- input[checkbox] #navToggle

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/cloud-network.jpg`
- `assets/devops-screen.jpg`
- `assets/hero-banner.jpg`
- `assets/hero-datacenter.jpg`
- `assets/operations-center.jpg`
- `assets/server-hardware.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
