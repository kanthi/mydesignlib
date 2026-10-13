# Voidtrace — Design Specification

## Overview
Voidtrace is an autonomous zero-footprint security and privacy operating system. It provides kernel-level volatile memory wiping, ephemeral multi-hop routing, and forensic residue vaporization to erase all digital footprints.

The design channels a brutalist, high-craft editorial tech aesthetic:
- Monolithic condensed typography (`Anton`, `Barlow Condensed`).
- Warm technical sage/parchment ground (`#E2E8DE`, `#F1F5EF`) with deep carbon ink (`#111413`).
- Chromatic risograph / dither landscape textures with burning amber, cyan, and granular film grain.
- Monumental edge-to-edge footer branding with massive masked display letterforms and bold underlined navigation.

## Core Tokens (`:root`)
```css
:root {
  --bg-ground: #E2E8DE;
  --bg-surface: #EDF2EA;
  --bg-surface-elevated: #FFFFFF;
  --bg-card: #FFFFFF;
  
  --ink-900: #101413;
  --ink-800: #1D2321;
  --ink-700: #303835;
  --ink-500: #5C6763;
  --ink-400: #889590;
  --ink-200: #CBD5CD;
  --ink-100: #E6EDE4;

  --accent-amber: #D96A25;
  --accent-cyan: #265C4B;
  --accent-lime: #10B981;
  --accent-red: #EF4444;

  --border-light: rgba(16, 20, 19, 0.12);
  --border-dark: #101413;

  --font-display: "Anton", "Barlow Condensed", -apple-system, sans-serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Typography Hierarchy
- **Colossal Footer Wordmark**: `Anton`, `clamp(4.5rem, 14vw, 12rem)`, uppercase, tracking `-0.01em`, solid white on chromatic landscape.
- **Section & Hero Titles**: `Anton` / `Barlow Condensed`, uppercase, `clamp(2.5rem, 5.5vw, 4.5rem)`, letter-spacing `-0.02em`, line-height `1.02`.
- **Editorial Kicker**: `Barlow Condensed` / `Plus Jakarta Sans`, 700 weight, uppercase, tracking `0.08em`.
- **Body & UI**: `Plus Jakarta Sans`, 400–600 weight.
- **Terminal & Forensics**: `JetBrains Mono`.

## Signature Footer Specifications
- **Left Column**:
  - Upper statement: `VOIDTRACE: SECURITY SOFTWARE THAT ERASES YOUR DIGITAL FOOTPRINT, LEAVING ZERO TRACE.`
  - Direct contact coordinates: `CONTACT`, `recon@voidtrace.example`, `Node 04, Cyber Mesh Enclave, Zurich / Tokyo`.
- **Right Columns**:
  - `PRODUCT`: Features, Pricing, Security, Download.
  - `COMPANY`: About Us, Newsroom, Threat Intel, Careers, Blog, Help Center.
  - `CONNECT`: Twitter/X, LinkedIn, Github, Tor Onion Mirror.
  - All category links feature heavy underline decorations on hover.
- **Lower Canvas**:
  - Full-width chromatic risograph grain dunes (`landscape.jpg`).
  - Giant `VOIDTRACE` white display wordmark stamping across the base.
  - Top-right of wordmark: `© 2026` pill badge.
- **Interactive Switcher**:
  - Toggle between 3 distinct footer aesthetics:
    1. *Chromatic Grain* (Default risograph dunes)
    2. *Cosmic Monolith* (Deep obsidian void with stippled peaks)
    3. *Halftone Topo* (Green matrix contour dither)

## Page Sections
1. **Telemetry Status Header**: Realtime zero-retention ticker, brand mark, navigation, and terminal CTA.
2. **Hero Section**: Statement headline, mission copy, and interactive live Footprint Wiper CLI.
3. **The 4 Erasure Vectors (Bento)**: Volatile memory dissolution, ephemeral mesh routing, kernel residue neutralizer, and hardware attestation.
4. **Forensic Threat Matrix**: Direct comparison vs commercial VPNs and privacy browsers.
5. **Hardware & Enclave Architecture**: Apple Silicon, AMD SEV-SNP, Intel SGX integration.
6. **Operator Tiers & Licensing**: Personal, Syndicate, and Sovereign plans.
7. **Monumental Signature Footer**: Pixel-precise editorial realization of the reference.
