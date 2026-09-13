# Altamira — Design System & Technical Specification

> **A 3D Scrollytelling Luxury Villa Experience**  
> Fictional Rebrand derived from [@himanshubuildss](https://x.com/himanshubuildss/status/2095843544355484132)  
> Location: Soufrière, Saint Lucia • 13°51'42.8"N 61°03'21.4"W

---

## 1. Technical Deconstruction: How 3D Scrollytelling Works

### The Core Architecture
1. **Asset Generation**:
   - The continuous 3D camera flight was synthesized using cinematic generative camera prompts (Runway Gen-3 / Luma Dream Machine) with explicit camera motion vectors: forward dollies, altitude descend, interior pass-through, and terrace reveal.
2. **Video Encoding for Zero-Latency Scrubbing**:
   - Standard H.264 video employs long Group of Pictures (GOP = 120–300 frames) with P/B predicted frames. Scrubbing backwards or rapidly across predicted frames introduces 150–400ms decoder latency and dropped frames.
   - **The Solution**: Re-encoding to **All-Intra (GOP = 1)** (`ffmpeg -g 1 -keyint_min 1`). Every single frame is an independent keyframe (I-frame). Seeks execute in hardware in ~2–5ms without decompressing previous frames.
3. **Scroll-Progress Binding Math**:
   - The outer track is given a tall scroll distance (`height: 450vh;`).
   - The stage stays pinned in viewport (`position: sticky; top: 0; height: 100vh; width: 100vw;`).
   - Normalized progress $P \in [0, 1]$ is computed as:
     $$P = \frac{\text{clamp}(\text{scrollY} - \text{trackTop}, 0, \text{trackHeight} - \text{viewportHeight})}{\text{trackHeight} - \text{viewportHeight}}$$
4. **Exponential Lerp Smoothing (Frame Decoupling)**:
   - Direct binding to mousewheel creates stepping artifacts. An independent `requestAnimationFrame` render loop continuously eases the target time towards current time:
     $$T_{\text{target}} = P \times \text{Duration}$$
     $$T_{\text{current}} = T_{\text{current}} + (T_{\text{target}} - T_{\text{current}}) \times (1 - e^{-\Delta t \times \lambda})$$
     Where $\lambda \approx 10$ provides instantaneous yet creamy deceleration without lagging behind user intent.
5. **Keyframed Choreography Milestones**:
   - **Milestone 1 ($P \in [0.00, 0.28]$)**: Hero Arrival (`ST. LUCIA, PRIVATE CLIFFSIDE VILLA`, title, subhead, scroll cue). Fades out with subtle scale and upward translation as camera descends.
   - **Milestone 2 ($P \in [0.42, 0.65]$)**: The Great Room Interior (`STEP INSIDE` glass badge, double-height cedar architecture, hearth specifications).
   - **Milestone 3 ($P \in [0.75, 1.00]$)**: Cantilevered Infinity Terrace (`THE HORIZON POOL`, 14,000 sq ft metrics, direct Piton sightlines, and CTA).

---

## 2. Brand Identity & Visual System

- **Brand Name**: Altamira (Villa Altamira)
- **Concept**: Secluded architectural sanctuary perched on volcanic Saint Lucia cliffs
- **Palette**:
  - `Surface Void`: `#0A0E13` (Deep Caribbean oceanic obsidian)
  - `Surface Glass`: `rgba(14, 20, 28, 0.62)` (Frosted sea glass)
  - `Border Frost`: `rgba(255, 255, 255, 0.10)` / `rgba(255, 255, 255, 0.18)` on hover
  - `Text Primary`: `#F7F9FB` (Pure alabaster)
  - `Text Muted`: `#94A3B8` (Ocean mist slate)
  - `Accent Warm Sand`: `#EFE6D8` (Honed travertine stone / linen)
  - `Accent Volcanic Emerald`: `#2D7A65` (Lush Piton rainforest hue)
- **Typography**:
  - Display: `Plus Jakarta Sans`, 700 / 600 weight, `-0.03em` tracking
  - Body / Subheaders: `Inter`, 400 / 500 weight, `0.01em` tracking
  - Accents / Monospace / Badges: `Space Grotesk`, 500 weight, uppercase with `0.15em` letter-spacing
