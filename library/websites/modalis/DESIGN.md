# MODALIS — Design System & Craft Specification

Cinematic state-driven world model web experience featuring seamless video branching, high-precision frosted glass materials, and responsive multi-state eye choreography.

## 1. Overview & Aesthetic Commitment

- **Aesthetic:** Minimalist Brutalist-Architectural Fashion Cinema with Precision Optical Glass Materials.
- **Concept:** *Modalis* — frontier open world foundation models providing granular state transformation across architectural scenes, directional lighting, couture garments, and human cast.
- **Core Narrative:** "The world model. Full physical and generative control."
- **Visual Tenets:**
  - Full-viewport architectural staging: pale sky blue monoliths with centered couture subject.
  - Zero-slop interface: pure cinematic canvas, zero unearned cards, zero decorative cursor fluff, zero synthetic parallax or fake FPS hacks.
  - Seam-safe physical transitions: pre-baked video clip pairs (Scene, Lighting, Clothing, Cast) with decoded-frame atomic layer handoffs and guard-timed terminal holds.
  - Two-tier frosted glass controller: darker saturated blue rear track with frosted floating capsule and 225° spectral edge illumination.

## 2. Color Palette & Glass Material Tokens

- **Fallback Canvas:** `#000000`
- **Text Primary:** `#FFFFFF`
- **Text Subtle Muted:** `rgba(255, 255, 255, 0.70)`
- **Text Micro / Dividers:** `rgba(255, 255, 255, 0.12)`
- **Rear Glass Track:**
  - Background: `rgb(24 55 82 / 0.31)`
  - Border: `1px solid rgb(255 255 255 / 0.20)`
  - Backdrop Filter: `blur(9px) saturate(126%) contrast(108%) brightness(103%)`
  - Shadow: `0 14px 38px rgb(4 24 43 / 0.16), 0 2px 7px rgb(4 24 43 / 0.1), inset 1px 1px 0 rgb(255 255 255 / 0.48), inset -1px -1px 0 rgb(21 49 73 / 0.14), inset 0 0 0 0.5px rgb(255 255 255 / 0.16)`
- **Foreground Glass Capsule:**
  - Background: `rgb(246 251 255 / 0.24)` (settles to `0.14` when selected)
  - Border: `1px solid rgb(255 255 255 / 0.28)`
  - Backdrop Filter: `blur(13px) saturate(128%) contrast(107%) brightness(105%)`
  - Shadow: `0 11px 28px rgb(4 24 43 / 0.17), 0 2px 6px rgb(4 24 43 / 0.1), inset 1px 1px 0 rgb(255 255 255 / 0.62), inset -1px -1px 0 rgb(20 49 73 / 0.18), inset 0 0 12px rgb(255 255 255 / 0.055)`

## 3. Typography & Rhythmic Hierarchy

- **Font Family:** `Manrope`, system-ui, sans-serif
- **Hero Display:** `clamp(62px, 6.8vw, 100px)`, weight 500, line-height 0.8, tracking -0.04em.
- **Hero Body:** `clamp(14px, 1.25vw, 18px)`, weight 400, line-height 1.2, tracking -0.04em.
- **Header Metadata & Button:** 18px, weight 400/500, tracking -0.04em.
- **Controller Labels:** 23px, weight 400, tracking -0.04em.
- **Mobile Controller Labels:** 17px, weight 500, tracking -0.02em.

## 4. Motion Curves & Choreography

- **Fast / Standard Ease:** `--retake-ease: cubic-bezier(0.22, 1, 0.36, 1)` (620ms capsule glide)
- **Slow Collapse / Expand Ease:** `--retake-slow-ease: cubic-bezier(0.65, 0, 0.35, 1)` (980ms bar morph)
- **Title Stagger:** Staggered word fade at 12% forward playback (0ms / 90ms / 180ms delay, 900ms duration).
- **Reset Reveal:** 520ms opacity/blur reveal with 3px underline offset.

## 5. State Machine & Seam Safety

- States: `base` ↔ `branch (clothing | scene | lighting | cast)`
- Playback: `ready` → `starting` → `playing` → `selected` → `returning` → `ready`
- Guard Holds:
  - Default: `duration - 0.08s`
  - Scene Reverse: `duration - 0.18s` (avoids tail black frame)
- Decoder Sync: `requestVideoFrameCallback` checks frame timestamps before switching visible video layer; atomic display switch prevents black flashes or base-frame blinks.
