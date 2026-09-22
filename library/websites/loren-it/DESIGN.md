# DESIGN — Loren IT (Engineering-Led Infrastructure & Platform Architecture)

## Overview
- **Brand**: Loren IT
- **Positioning**: Platform and infrastructure engineering firm. Practices: cloud architecture & migration, platform engineering/DevOps, data center & bare-metal compute, low-latency network & zero-trust security, managed operations (NOC/SRE). Explicitly non-SAP, non-BPO, non-staffing.
- **Audience**: Technical evaluators (Principal Architects, Platform Leads, VP Infrastructure, CTOs, compliance auditors).
- **Core Value Proposition**: Deterministic engineering, zero marketing fluff, concrete SLAs, reproducible infrastructure-as-code, and audit-ready compliance.
- **Primary CTA**: Direct mailto link (`mailto:architecture@loren-it.example`), zero decorative intake forms.

## Visual Design System & Constraints
- **Palette**:
  - `bg-base`: `#f4f6f8` (Cool Paper / Technical Sheet)
  - `bg-surface`: `#ffffff` (Pure White Content Panels)
  - `bg-surface-subtle`: `#eceff2`
  - `text-primary`: `#181b20` (Near-Black Graphite)
  - `text-secondary`: `#4e5664` (Engineered Slate)
  - `text-muted`: `#7c8594` (Terminal Gray)
  - `accent-teal`: `#0b6b6e` (Deep Technical Teal — used functionally for live status indicators, code anchors, and active links)
  - `accent-teal-soft`: `rgba(11, 107, 110, 0.08)`
  - `border-rule`: `rgba(24, 27, 32, 0.12)` (Precise hairline rules, 1px)
  - `border-active`: `rgba(11, 107, 110, 0.35)`
- **Typography**:
  - `font-sans`: `IBM Plex Sans`, -apple-system, sans-serif (Display and body)
  - `font-mono`: `IBM Plex Mono`, monospace (Strictly used for numeric/metric content, telemetry timestamps, IP ranges, uptime, latency, deploy durations — zero decorative usage)
- **Layout Principles**:
  - Single-column, left-aligned structural discipline.
  - Hairline border rules instead of shadows, blurred glows, or floating cards.
  - No ALL-CAPS eyebrows.
  - No arrow-suffixed CTAs (`->`, `rarr`, etc. forbidden).
  - No numbering except the 4-step delivery sequence.
  - No stock photography, illustrations, or gradient blobs.
  - Live-status telemetry strip as real functional proof.
- **Technical Constraints**:
  - Single self-contained HTML page.
  - Zero external JS scripts.
  - Mobile navigation via pure CSS toggle (`checkbox:checked` technique).
  - Google Analytics snippet (`G-Z97ZD3EVSF`) and `noindex, nofollow` metadata in `<head>`.
