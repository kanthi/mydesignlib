# DESIGN — Evolv

## Overview
- **Audience:** Enterprise software architects, AI engineers, and founders seeking modular, autonomous reasoning infrastructure for production workloads.
- **Single CTA:** Get Started
- **Emotion:** Transcendent computational precision — an intelligent substrate that evolves dynamically in real time.
- **Create this feeling through:**
  - Full-viewport ambient cinematic background video looping seamlessly beneath minimal high-contrast UI chrome.
  - Dot-matrix typography (`BubbledotICG-FinePos` / `Geist Pixel Circle`) delivering retro-futuristic digital terminal authority.
  - Three concentric trust avatar rings (`#28282a` with white inner core) leading seamlessly into the `Trusted by 2000+ Enterprises` pill.
  - Pure white glowing call-to-action pill suspended above 4 telemetry benchmark metrics with live count-up physics.

## Source of Truth
- This file + CSS `:root` in `styles.css`.

## Colors (Semantic Tokens)
- `bg`: `#000000` — Pure void black root background
- `text`: `#ffffff` — Primary display headline, stat numerals, CTA label
- `muted`: `#8e8e8e` — Benchmark metric labels
- `nav-text`: `#2e2e2e` — Dark desktop pill navigation links
- `pill-dark`: `#28282a` — Sign in button and mobile sheet CTA
- `sign-in-text`: `#c8c8c8` — Sign in button typography
- `trust-bg`: `#28282a` — Enterprise trust badge backing
- `trust-border`: `rgba(255, 255, 255, 0.4)` — Trust ring boundary
- `trust-text`: `#c4c2c3` — Trust row text
- `nav-shadow`: `0 4px 14px rgba(0, 0, 0, 0.16)` — Soft elevation for header navigation elements

## Typography
- **Primary Display:** `BubbledotICG-FinePos` (OnlineWebFonts CDN)
- **Display Fallback:** `Geist Pixel Circle`, monospace (local WOFF2)
- **UI / Body / Numerals:** `Inter`, `Segoe UI`, system-ui, sans-serif

### Scale & Rules:
- `display-headline`: `clamp(28px, 6.2vw, 80px)` / letter-spacing `-0.04em` (desktop) & `-0.08em` (mobile) / line-height `1.12` / solid white.
- `subhead`: `clamp(calc(13.5px + 2pt), calc(1.55vw + 2pt), calc(16.5px + 2pt))` / color `#d0d0d0` / opacity `0.8` / line-height `1.55`.
- `stat-symbols`: `clamp(22px, 3vw, 33px)` / display dot-matrix font.
- `stat-values`: `clamp(18px, 2.2vw, 26px)` / Inter 600 / tabular-nums / letter-spacing `-0.025em`.

## Layout & Viewport Composition
- Strict single-viewport architecture (`height: 100vh / 100dvh`, `overflow: hidden`).
- 3 vertical regions:
  1. Header (fixed row, max-width `720px`)
  2. Hero (centered column, max-width `900px`)
  3. Stats footer (4 columns desktop, 2x2 mobile, max-width `920px`)

## Motion & Transitions
- `slideDown`: Header entrance from `translateY(-18px)` over `0.7s cubic-bezier(0.22, 1, 0.36, 1)`.
- `headlineFade`: Staggered line reveal (`line-1: 0.12s`, `line-2: 0.3s`) from `translateY(14px)` over `0.85s`.
- `reveal`: Staggered reveal for subhead and stats via inline `--d` delay.
- `revealPulse`: CTA button entrance with soft glow.
- `countUp`: `easeOutCubic` metric interpolation triggered via IntersectionObserver.
