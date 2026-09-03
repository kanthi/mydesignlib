# Vectrus — Design System & Architecture Specification

Design specification for **Vectrus** (`vectrus-agy`), a standalone cinematic scroll-tied video experience.

---

## 1. Brand Identity & Visual Positioning
* **Brand Name**: Vectrus / Halder | Nordvik (`vectrus-agy`)
* **Category**: Energy, Infrastructure & Natural Resources
* **Visual Essence**: Ultra-minimalist Nordic corporate energy aesthetic. Deep Navy (`#1D3045`) typography hovering over high-key ethereal mountain mists, transitioning seamlessly to stark optical white over shadowed geological peaks.

---

## 2. Color & Materiality
* **Dark Tone**: `#1D3045` (Deep Nordic Navy)
* **Light Tone**: `#ffffff` (Pure Optical White)
* **Video Backing**: Aerial cinematic fly-through (pale clouds, mist, mountains, then darker atmospheric landscape)
* **No color overlays / gradients on video**: Text sits directly on the video frames with zero color filtration.

---

## 3. Typography Hierarchy
* **Master Font**: `'Helvetica Neue ME', 'Helvetica Neue', Helvetica, Arial, sans-serif`
* **Headline 1**: `clamp(2rem, 5vw, 5rem)`, font-light, uppercase, leading 1.2
* **Headline 2**: `clamp(1.5rem, 4.5vw, 4.5rem)`, font-extralight, tracking-wide, leading 1.3
* **Section 3 Display**: `clamp(2rem, 4vw, 4rem)`, font-light, leading 1.2, uppercase
* **Nav Links & Badges**: `text-xs`, tracking `0.15em` - `0.3em`, uppercase, font-medium

---

## 4. Scroll Architecture & Scrubbing Engine
* **Scroll Distance**: `500vh` outer container
* **Sticky Viewport**: `h-screen`, full-bleed
* **Dual-Layer Rendering**:
  1. Underlying native `<video>` element (fallback and initial stream)
  2. Overlay `<canvas width="1920" height="1080">` rendered from an in-memory frame bank decoded via WebCodecs & MP4Box
* **Scrubbing Math**:
  - `LERP_TAU = 8`
  - `SNAP = 0.002`
  - Exponential lerp interpolation: `current += (target - current) * (1 - exp(-dt * 8))`
  - LRU ImageBitmap cache with 24-frame window
* **Sequential Fade Thresholds**:
  - Section 1: `p < 0.20 -> 1`, fades out by `p = 0.28`
  - Section 2: fades in `0.32 -> 0.40`, solid until `0.55`, fades out by `0.63`
  - Section 3: fades in `0.67 -> 0.75`, solid through `1.0`
