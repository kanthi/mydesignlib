# DESIGN — Trestle AGY

## Overview
- **Brand:** Trestle AGY (Advanced Systems & Software Engineering Collective)
- **Audience:** CTOs, VPs of Engineering, and operational leaders at mid-to-large enterprises who require an uncompromising software development and mission-critical systems engineering partner.
- **Single CTA:** Request an engineering consultation
- **Emotion:** Absolute institutional competence, surgical software craftsmanship, and long-term architectural stability.
- **Signature Elements:**
  - Multi-page structural architecture (`index.html`, `software.html`, `services.html`, `solutions.html`, `work.html`, `process.html`, `about.html`, `careers.html`, `contact.html`, `privacy.html`, `terms.html`)
  - Cool architectural limestone field (`#E7E9ED`) with crisp drafting paper plates (`#F6F7F8`) and deep graphite code terminals (`#121519`)
  - IBM Plex Serif for display titles; IBM Plex Sans for body prose; IBM Plex Mono for telemetry, metrics, and architecture schematics
  - Deep Forest Pine (`#184D42`) and Emerald Pine (`#2C7A67`) semantic action states
  - Live Telemetry & Dispatch status HUD, interactive project scope estimator, and SDLC pipeline visualizer

## Source of truth
- This file + `site.css` `:root`.

## Aesthetic commitment
- **Name:** Institutional software engineering & technical services firm
- **Signature Mark:** The Trestle Beam & AGY Vertex (two vertical piers, lintel beam, and precision apex mark)

## Design Tokens

```css
:root {
  --font-display: "IBM Plex Serif", "Iowan Old Style", Georgia, serif;
  --font-body: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "IBM Plex Mono", "SF Mono", Menlo, Consolas, monospace;
  
  --surface-page: #e7e9ed;
  --surface-paper: #f6f7f8;
  --surface-card: #ffffff;
  --surface-subtle: #dfe2e8;
  --surface-ink: #121519;
  --surface-ink-elevated: #1a1e24;
  
  --text-primary: #121519;
  --text-secondary: #525862;
  --text-faint: #848c96;
  --text-on-ink: #eaecef;
  --text-on-ink-muted: #9aa1ab;
  
  --border-default: #c4cad2;
  --border-subtle: #dce0e6;
  --border-ink: #262c36;
  
  --action-primary: #184d42;
  --action-primary-hover: #123c33;
  --action-ink: #f6f7f8;
  --action-accent: #2c7a67;
  
  --signal-live: #22866b;
  --signal-amber: #d48822;
  --status-danger: #b44030;
  
  --text-display: clamp(2.3rem, 5vw, 3.6rem);
  --text-3xl: clamp(1.7rem, 3vw, 2.3rem);
  --text-2xl: clamp(1.35rem, 2.2vw, 1.75rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.8125rem;
  --text-xs: 0.7rem;
  
  --section-y: clamp(4rem, 8vw, 6.5rem);
  --page-hero-y: clamp(3rem, 6vw, 4.5rem);
  --wrap: min(1180px, 100% - 2.5rem);
  --radius-sm: 2px;
  --radius-card: 4px;
  --dur: 200ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --shadow-sm: 0 2px 6px rgba(18, 21, 25, 0.04);
  --shadow-proof: 0 16px 40px rgba(18, 21, 25, 0.08);
}
```

## Content & Practice Strategy
1. **Custom Software Development:** Enterprise web applications, distributed backend services, mobile/edge clients, internal ops tooling, high-throughput APIs, custom design systems.
2. **Cloud & Infrastructure:** Kubernetes cluster orchestration, multi-region failover, terraform/IaC, zero-downtime cutovers, cost governance.
3. **AI Systems & Data Engineering:** Custom LLM agent runtimes, enterprise RAG, streaming event backbones (Kafka), real-time analytics engines, secure data warehouses.
4. **Cybersecurity & Compliance:** DevSecOps, zero-trust network architectures, SOC 2 Type II / HIPAA / ISO 27001 readiness, threat modeling, red-team hardening.
5. **Technical Consulting & Architecture:** Legacy modernization, system decoupling, technical due diligence, architectural roadmaps.
6. **24/7 Managed Operations & SRE:** 99.999% SLA uptime desks, automated telemetry, incident response runbooks, continuous patch maintenance.

## Ban List
- No generic gradient meshes or floating 3D glass orbs
- No lorem ipsum or vague marketing buzzwords ("revolutionize", "seamless synergy")
- No unverified vendor trademarks (AWS/Azure/Google presented as proprietary dependencies)
- No single-page stubs — every navigation link connects to a full, rich, functional page
