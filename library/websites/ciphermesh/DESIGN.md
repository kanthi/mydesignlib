# DESIGN — CipherMesh

## Overview
- **Product**: AI-Powered Zero-Trust Cybersecurity & Enterprise Data Perimeter Platform
- **Audience**: CISOs, VP of Security, Infrastructure Engineers, DevSecOps Leaders
- **Single CTA**: `GET STARTED →` / `START FREE TRIAL`
- **Emotion**: High-assurance cryptographic precision, architectural lightness, and technical transparency.
- **Create this feeling through**:
  - Crisp blueprint framing: fine ruled border tick marks, section crosshairs (`+`), technical coordinate badges.
  - Electric cobalt halftone/dither topography (`#2563EB`) and isometric security schematics rather than generic gradient globs.
  - Hybrid typography: clean, punchy grotesque headlines (`Plus Jakarta Sans`) contrasted with pixelated/dithered keyword styling (`[access]`, `[anytime]`, `[cybersecurity]`) and monospace telemetry (`JetBrains Mono`).
  - Tactile interactive feedback: interactive tabs for security modules, active radar scans, responsive step accordions, live telemetry indicators.

## Source of Truth
- This file + CSS `:root` variables in `index.html`.

## Aesthetic Commitment
- **Name**: Technical Blueprint Security (High-Assurance Halftone)
- **Signature Element**: Electric cobalt dithered halftone topography and isometric isometric wireframe illustrations framed with millimeter-tick margin gutters and technical crosshairs.

## Colors (Semantic)
- `--surface-page`: `#FFFFFF` — clean architectural white canvas.
- `--surface-subtle`: `#F8FAFC` — muted secondary card fill.
- `--surface-card`: `#FFFFFF` — elevated component surface.
- `--surface-dark`: `#0B0F17` — high-contrast dark step panels and executive quotes.
- `--text-primary`: `#0A0F1D` — dense, high-contrast ink for headlines.
- `--text-secondary`: `#475569` — balanced neutral slate for explanatory paragraphs.
- `--text-muted`: `#94A3B8` — subtle technical guides, inactive tabs, and timestamps.
- `--border-default`: `#E2E8F0` — hairline technical panel and grid dividers.
- `--border-focus`: `#2563EB` — active interactive boundary.
- `--action-primary`: `#2563EB` — electric cobalt blue for primary CTA buttons and active nodes.
- `--action-hover`: `#1D4ED8` — deep cobalt on hover/focus.
- `--accent-dither`: `#3B82F6` — midtone blue for halftone dot matrices.
- `--accent-light`: `#EFF6FF` — soft ice-blue badge and highlight tint.

### Rules & Boundaries
- Primary blue (`#2563EB`) is strictly reserved for actionable triggers, active telemetry, and halftone illustrations. Never use it as a full-bleed saturated background across standard content sections.
- Borders are crisp 1px lines (`#E2E8F0`), never thick or blurry.
- Crosshair coordinates (`+`) mark architectural layout bounds.

## Typography
- **Headlines / Display**: `Plus Jakarta Sans`, 700 / 800 weight. Tracking: `-0.03em`. Tight line-height `1.05` to `1.15`.
- **Pixel / Bitmap Accent**: `Silkscreen` / `VT323` or custom pixelated dither font styling (`font-family: 'Silkscreen', monospace`) for highlighted words like `access`, `anytime`, `cybersecurity`.
- **Body**: `Inter`, 400 / 500 weight. Line-height `1.6`.
- **Technical & Data**: `JetBrains Mono`, 400 / 500 / 700 weight. Uppercase with `0.08em` tracking for metrics, tags, badges, and code snippets.

### Scale
- `--text-display`: `clamp(2.5rem, 5.2vw, 4.4rem)`
- `--text-h2`: `clamp(1.8rem, 3.2vw, 2.75rem)`
- `--text-h3`: `clamp(1.25rem, 2vw, 1.65rem)`
- `--text-base`: `1rem`
- `--text-sm`: `0.875rem`
- `--text-xs`: `0.75rem`
- `--text-mono`: `0.72rem`

## Space & Grid
- Outer container max-width: `1240px` centered within blueprint gutters.
- Technical blueprint gutters: Left and right vertical margins with subtle horizontal millimeter tick marks and corner crosshairs (`+`).
- Section padding: `clamp(4rem, 8vw, 6.5rem)` vertical.
- Grid gaps: `1.5rem` to `2.5rem`.

## Components & Anatomy
### Technical Header & Nav
- Sticky or fixed top navbar with hairline bottom border.
- Left: Brand mark (isometric geometric mesh shield + "CipherMesh").
- Center: Nav links (`Platform`, `Solutions`, `Architecture`, `Docs`).
- Right: Primary CTA button (`Get Started →`).

### Hero Section
- Category badge: `Data Security` with rotating cryptographic atom icon.
- Headline with pixel-dithered accented keywords.
- Supporting narrative + dual CTAs: Primary cobalt button + secondary technical docs button with icon.
- Full-width isometric halftone topography mountain ridge.

### Social Proof Bar
- "Trusted By Leading Security & Infrastructure Teams".
- High-contrast, clean monochrome logos for fictional enterprise leaders (`SYNAPSE`, `OCTACORE`, `VAULTIX`, `KRONOS`, `PRISMLOGIC`, `AETHER LABS`).

### Feature Highlights (3-Column + Summary Banner)
- Three technical capability cards:
  - `Zero-Trust Access`: Continuous identity verification.
  - `Real-Time Monitoring`: Microsecond anomaly detection.
  - `Data Protection`: End-to-end 256-bit automated encryption.
- Bottom horizontal highlight panel with dual telemetry callouts (`AI-Powered Threat Detection` and `256-bit Data Encryption`).

### Deep Interactive Modules
- **Module 1: Interactive Security Tabs**:
  - Left: Numbered interactive selection list (`01 Zero-Trust Security`, `02 Real-Time Monitoring`, `03 Threat Detection`, `04 Data Encryption`).
  - Right: Technical blueprint card with crosshair bounds, active user avatar stack, and isometric halftone shield + magnifying loupe.
- **Module 2: Advanced Access Control & Radar**:
  - Left: Threat category switcher (`Suspicious IP Activity`, `Unknown Device`, `Failed Authentication`) with contextual mitigation copy.
  - Right: Isometric halftone 360° radar sweep scanner with active threat node detection and real-time telemetry readout.
- **Module 3: Threat Mitigation Metric & Firewall Barrier**:
  - Left: Massive `99.9%` threat detection accuracy readout with uptime guarantee.
  - Right: Isometric halftone firewall barrier deflecting malicious vector streams + filter pills (`AI Monitoring`, `Threat Analysis`, `Risk Prevention`).
- **Module 4: 4-Step Security Pipeline**:
  - Left: Isometric infinite feedback loop schematic with code snippet and encryption lock.
  - Right: 4 interactive dark accordion cards (`01 Monitor Activity`, `02 Detect Threats`, `03 Secure Operations`, `04 Respond & Isolate`).

### Testimonials & Halftone Portraits
- Enterprise case studies featuring authentic blue halftone dot-matrix engineer portraits.
- Executive review card from fictional CTO of Nexora Systems.

### Bottom CTA & Footer
- Headline: "Secure your business with intelligent [cybersecurity] solutions".
- Primary & secondary conversion CTAs over the panoramic halftone topography.
- Multi-column technical sitemap footer with gigantic faint watermark logo ("CipherMesh") and real-time network status indicator.

## Motion & Micro-Interactions
- Duration: `180ms` to `260ms`, easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Subtle radar beam rotation (`animation: sweep 4s linear infinite`).
- Interactive tab switching with smooth content crossfade.
- Accordion row expansion with crisp CSS transitions.
- Respect `prefers-reduced-motion: reduce` by pausing sweeps and instant state toggles.

## Brand Rules & Banned Patterns
- ZERO occurrence of original reference brand names, designer social handles, or real corporate trademarks.
- No purple or generic dark-mode rainbow gradients.
- No blurry drop-shadows or ungrounded floating cards.
