# DESIGN — Auctor

## Overview
- **Audience:** Digital native investors, creator economy builders, crypto/fintech operators who understand creator leverage and want direct financial participation over passive emotional fandom.
- **Single CTA:** Join Waitlist (Early Protocol Access)
- **Emotion:** Sovereign, institutional, electrified: trading creators not as social novelties, but as legitimate yield-bearing digital assets with algorithmic bonding liquidity.
- **Create this feeling through:**
  - Obsidian monolith surfaces (`#080808`, `#0E0E10`, `#141416`) with razor-sharp micro-borders (`rgba(255,255,255,0.08)`).
  - High-voltage kinetic flame accent (`#FF3815` → `#F75532` gradient) reserved strictly for primary conversions, active step tracks, and live ticker pips.
  - Floating perspective 3D badges with ambient depth dropshadows, tilting slightly as if physically suspended in vacuum.
  - Live interactive protocol mechanics: interactive 3-stage lifecycle switcher (Initial Royalty Offering → Automated Bonding Curve → Open Orderbook), dynamic creator orderbook ticker, and collapsible 6-part protocol FAQ accordion.
  - Dual-typeface tension: Figtree for geometric, assertive editorial display + Geist Mono / JetBrains Mono for exact financial numbers, on-chain contract addresses, and token valuations.

## Source of Truth
- This file + CSS `:root` in `index.html`. Prefer code tokens when runtime behavior diverges.

## Aesthetic Commitment
- **Name:** Obsidian Creator Synthetics
- **Signature Element:** Floating perspective badges in hero with glowing radial gradient mask, paired with the 3-step interactive lifecycle terminal and tilted feature slabs.

## Colors (Semantic Tokens)
- `surface-page`: `#f9efe3` — Warm ivory root canvas background
- `surface-card`: `#0F0F0F` — Deep obsidian dark monolith module container
- `surface-raised`: `#FFFFFF` — Elevated FAQ card surfaces sitting on ivory
- `surface-pill`: `#000000` — Floating pill navbar capsule with zinc-700 border
- `action-primary`: `linear-gradient(to right, #FF2F00, #f5775b)` — Primary waitlist button
- `text-primary`: `#0a0a0a` — Root typography on ivory canvas
- `text-card-primary`: `#FFFFFF` — Primary typography on dark module container
- `text-muted`: `#71717A` — Subheaders and metadata
- `accent-orange`: `#FF2F00` — Flame orange energy beacon, focus borders, active FAQ numbers
- `accent-highlight`: `#fed7aa` (orange-200) — Active How-It-Works tab background pill
- `accent-track`: `#fb923c` (orange-400/70) — Active 7-second linear progress bar track

### Boundaries:
- Never flood the full page background with flame orange. Orange is exclusively an energy beacon for interaction, focus rings, and ticker gains.
- The obsidian dark theme must remain deep and pure; avoid turning sections into light gray or stark white.

## Typography
- **Display & Headings:** `Figtree`, sans-serif (weights: 500, 600, 700, 800)
- **Body & Controls:** `Figtree`, sans-serif (weights: 400, 500)
- **Monospace / Numerical Data:** `Geist Mono`, `JetBrains Mono`, monospace (weights: 400, 500, 600)

### Scale:
- `display-hero`: `clamp(2.75rem, 7vw, 5.5rem)` / line-height: 1.05 / letter-spacing: -0.035em / font-weight: 700
- `display-h2`: `clamp(1.85rem, 4vw, 3.25rem)` / line-height: 1.15 / letter-spacing: -0.025em / font-weight: 600
- `display-h3`: `clamp(1.4rem, 2.8vw, 2.1rem)` / line-height: 1.25 / letter-spacing: -0.02em / font-weight: 600
- `body-lg`: `1.125rem` (18px) / line-height: 1.6 / font-weight: 400
- `body-base`: `1rem` (16px) / line-height: 1.6 / font-weight: 400
- `body-sm`: `0.875rem` (14px) / line-height: 1.5
- `mono-ticker`: `0.8125rem` (13px) / letter-spacing: -0.01em

## Elevation & Radii
- `radius-pill`: `9999px` — Navbar container, CTA buttons, tag badges, status chips
- `radius-3xl`: `28px` — Large section wrappers (Obsidian module container)
- `radius-2xl`: `20px` — Feature quadrant cards, step presentation deck
- `radius-xl`: `14px` — Social chip boxes, modal windows, dashboard cards
- `radius-md`: `10px` — Form inputs, accordion headers

## Components
### 1. Floating Pill Navigation
- Centered top bar fixed at `top: 1.5rem`, max-width `920px`, z-index 50.
- Pill styling: `background: rgba(10, 10, 12, 0.85); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 9999px;`
- Contains:
  - Brand Mark: Hexagonal synthetic node glyph + bold title "AUCTOR"
  - Nav anchors: Overview, Architecture, Mechanics, Protocol, FAQ
  - Right Action: "Join Waitlist" gradient pill button + GitHub link

### 2. Perspective Floating Badges (Hero)
- 4 tilted platform nodes orbiting the central headline:
  - Streamline (Live Video)
  - VibeCast (Audio Protocol)
  - Luminary (Visual/Story)
  - Kinesis (Interactive Live)
- Styled with multi-layered drop shadows (`drop-shadow(0 20px 35px rgba(0,0,0,0.7))`) and 3D transforms (`rotateX`, `rotateY`, `rotateZ`).

### 3. Interactive Dashboard Specimen
- Simulated live protocol terminal:
  - Top bar with creator ticker (`$MDEV`, `$ELNA`, `$KBEAT`, `$SORA`)
  - Real-time bonding curve visualization (SVG cubic bezier with gradient area fill)
  - Order book depth stream (Bid / Ask depth, spread, 24h volume)
  - Instant portfolio asset summary ($184,920 Total Value Locked)

### 4. 4-Quadrant Feature Monolith
- 2x2 grid inside a deep `#0F0F0F` vessel with 4px dark borders:
  1. Sustainable Creator Capital (Royalty-linked token issuance)
  2. Participation in Creator Growth (Direct equity-free sovereign upside)
  3. Initial Royalty Offering (IRO) (Predefined valuation & locked liquidity)
  4. Automated Bonding Curve to Orderbook (Smooth price discovery)

### 5. Interactive How-It-Works Terminal
- Left side: 3 sequential phase buttons with animated progress fill bar on active phase.
- Right side: High-contrast schematic graphic dynamically updating on tab click, with title, technical breakdown, and on-chain mechanics explanation.

### 6. Accordion FAQ
- 6 questions styled with orange numbered badges (`01`–`06`).
- Accordion header toggles with smooth height transition and `+` / `−` rotate animation.

### 7. Viewport-Anchored Footer Monolith
- Deep rounded container with curved top radius, backdrop blur, social link badges with playful 3D rotation on hover, navigation links, and newsletter subscribe field.
