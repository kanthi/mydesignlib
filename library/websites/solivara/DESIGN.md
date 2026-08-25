# DESIGN — Solivara

## Overview
- Audience: Global donors, community philanthropists, humanitarian partners, and grassroots volunteers.
- Single CTA: Donate to Urgent Campaigns (with secondary path to explore verified causes and field stories).
- Emotion: Radiant hope, undeniable transparency, communal warmth, and decisive modern action.
- Create this feeling through:
  - Warm parchment background (`#f8f7f4`) paired with crisp white rounded cards (`--radius-card: 28px` - `40px`).
  - Warm geometric typography (`Plus Jakarta Sans`) with optical hierarchy and crisp legibility.
  - Vibrant persimmon/coral brand accent (`#ff5e36`) and emerald verification indicators (`#22c55e`).
  - Authentic, human-centered volunteer and field photography without artificial over-dramatization.
  - Floating tactile glassmorphism badges, live interactive impact slider, and seamless one-click giving drawer.

## Source of truth
- This file + CSS `:root` in `library/websites/solivara/index.html`. Code tokens take precedence in case of divergence.

## Aesthetic commitment
- Name: Warm Modern Humanitarian / Impact Direct
- Signature element: Asymmetric hero with high-radius photographic card overlaid with floating interactive quote bubble, video reel trigger, and live field team metric badge.

## Colors (semantic)
- `--surface-page`: `#f8f7f4` (warm linen / canvas paper)
- `--surface-card`: `#ffffff` (crisp white card surface)
- `--surface-subtle`: `#f0eee8` (soft warm stone for pill backgrounds and inputs)
- `--surface-dark`: `#141615` (deep charcoal obsidian for high-contrast sections)
- `--text-primary`: `#181a19` (high-contrast deep ink)
- `--text-secondary`: `#585e5a` (neutral readable slate body)
- `--text-muted`: `#8a928d` (soft caption and tertiary label tone)
- `--text-on-dark`: `#fbfbfa` (pure light text on dark surfaces)
- `--border-subtle`: `rgba(24, 26, 25, 0.08)` (hairline structural division)
- `--border-focus`: `rgba(24, 26, 25, 0.24)` (interactive focus ring)
- `--brand-coral`: `#ff5e36` (radiant solar coral / primary brand energy)
- `--brand-coral-hover`: `#e64a22`
- `--brand-coral-soft`: `#fff0eb` (coral tint for notification badges)
- `--brand-green`: `#16a34a` (emerald green for verified impact and metrics)
- `--brand-green-soft`: `#eaf9f0` (green badge tint)
- `--action-primary`: `#181a19` (solid black pill CTA)
- `--action-primary-hover`: `#2f3330`

### Usage rules
1. Black pill buttons are reserved for primary conversions (`Donate Now`, `Confirm Donation`).
2. Coral accent (`#ff5e36`) is used for the brand mark, progress fills, interactive highlights, and active states.
3. Green accent (`#16a34a`) is strictly for verified metrics, efficiency badges, and live status counters.
4. No saturated purple or AI SaaS gradients. Backgrounds remain grounded in warm off-white tones.

## Typography
- Display: `Plus Jakarta Sans`, sans-serif (700, 800) — Title display, hero headlines, brand mark.
- Body: `Plus Jakarta Sans`, sans-serif (400, 500, 600) — Narrative body copy, UI controls, navigation.
- Mono/Numbers: `Plus Jakarta Sans` (font-variant-numeric: tabular-nums) for currency amounts and impact stats.
- Scale:
  - `--text-hero`: clamp(2.5rem, 5.2vw, 4.25rem)
  - `--text-3xl`: clamp(1.85rem, 3.2vw, 2.75rem)
  - `--text-2xl`: clamp(1.4rem, 2.2vw, 1.85rem)
  - `--text-xl`: 1.25rem
  - `--text-base`: 1rem
  - `--text-sm`: 0.875rem
  - `--text-xs`: 0.75rem
- Rules: Display headings use tight tracking (`letter-spacing: -0.03em`) and comfortable line height (`1.15 - 1.25`). Body copy maintains `1.6` line-height for readability.

## Space & Layout
- `--container-max`: 1280px
- `--container-padding`: clamp(1.25rem, 3.5vw, 2.5rem)
- `--section-y`: clamp(4.5rem, 8vw, 7.5rem)
- `--radius-sm`: 8px
- `--radius-md`: 16px
- `--radius-lg`: 24px
- `--radius-xl`: 36px
- `--radius-pill`: 9999px

## Layout & Responsiveness
### Compact (< 768px)
- Single column layout; hero image stacks beneath headline and actions.
- Sticky mobile bottom donation bar appears on scroll.
- Mobile drawer navigation accessible via animated hamburger toggle.
### Medium (768px - 1024px)
- 2-column hero with proportional scaling on right visual card.
- 2-column cause bento cards and metric grids.
### Expanded (≥ 1025px)
- Hero 2-column split with sticky left copy and interactive floating chips over right visual frame.
- 3-column causes and transparent financial breakdown layout.

## Components
### 1. Floating Pill Header
- Frosted glass capsule with subtle border and box-shadow.
- Brand logo: Warm coral 4-petal geometric glyph + bold "Solivara" wordmark.
- Pill links with hover indicator dot.
- Black pill CTA button with arrow hover transition.

### 2. Hero Interactive Stage
- Left column:
  - Stacked avatar pill: `1,400+ Active Global Donors`
  - Large headline: `Together for making a brighter future`
  - Clear supportive subtitle
  - Primary button `[ Donate Now (→) ]` with integrated circular arrow chip + secondary text link `Learn More`
  - Monochromatic trusted partner logo strip
- Right column:
  - Tall rounded photographic canvas (36px radius) featuring authentic volunteers.
  - Top-left speech bubble: Donor avatar + `"Because of this organization, I was given hope and a second chance."`
  - Centered video pill: `"Watch our story reel"` + play button triggering the live modal.
  - Bottom-left pill badge: `"Real lives changed by your support"`
  - Bottom-right floating card: `"Dedicated team"` with description and avatar badge stack.

### 3. Interactive Impact Calculator
- Slider control with real-time donation multiplier ($25 → 1 month clean water; $100 → school kit & tuition; $300 → medical clinic support).

### 4. Verified Causes Bento & Progress Tracker
- Cause cards with category badges, high-res photography, real-time progress bars, and direct donation buttons.

### 5. Financial Transparency & Direct Impact Ring
- Visual representation of 88% Direct Aid, 7% Logistics, 5% Governance with audited 990 form download actions.

### 6. Interactive Donation Drawer
- Slide-over drawer with one-time vs monthly tabs, preset donation amounts, impact description, and mocked checkout flow.

## Motion
- Duration: 240ms - 380ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
- Hover micro-interactions: Pill scale (`scale(1.02)`), arrow translation (`translateX(3px)`), image scale (`scale(1.03)`).
- Modal backdrop blur and scale-in reveal.
- Full respect for `@media (prefers-reduced-motion: reduce)`.

## Ban List
- No generic purple SaaS gradients.
- No cold robotic typography.
- No AI placeholder lorem ipsum.
- No reference trademarks ("Kindora", "Kantar", etc.).
- No non-functional buttons or broken modal hooks.
