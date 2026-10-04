# Thalora — Design System Specification

## Brand Identity & Aesthetic Thesis
- **Brand Name**: Thalora (Mindfulness, Breathwork & Somatic Wellness Platform)
- **Tagline**: Transform Your Body. Calm Your Mind. Elevate Your Life.
- **Tone & Mood**: Quiet luxury, serene botanical tranquility, grounded organic calm, restorative somatic medicine.
- **Reference**: Derived from the mindfulness landing page architecture on Jiro Build (`mindfulness-landing-page-design-solra`).
- **Fictional Isolation**: Rebranded 100% as Thalora; no proprietary assets or trademarked names.

---

## Color Tokens

| Token | Value | Semantic Role |
| :--- | :--- | :--- |
| `--bg-canvas` | `#141812` | Deep forest pine baseline canvas |
| `--bg-surface-elevated` | `#1A2218` | Elevated card & section background |
| `--bg-surface-card` | `#222C1F` | Interactive card surface & containers |
| `--bg-surface-hover` | `#2A3626` | Card hover state background |
| `--accent-mint` | `#76E09A` | Primary brand accent: luminous spring mint / lime |
| `--accent-mint-glow` | `rgba(118, 224, 154, 0.24)` | Luminous aura and breath pacer expansion glow |
| `--accent-mint-soft` | `rgba(118, 224, 154, 0.12)` | Badge, pill, and highlight tint |
| `--accent-sage` | `#A7B39E` | Secondary botanical sage accent for secondary icons & kickers |
| `--text-primary` | `#F8FAF6` | Pure crisp linen white for display headlines & titles |
| `--text-secondary` | `#C4CEBE` | Soft herbal silver-green for body copy & subtitles |
| `--text-muted` | `#82907A` | Muted olive gray for footnotes, metadata & timestamps |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Hairline container borders & card outlines |
| `--border-accent` | `rgba(118, 224, 154, 0.35)` | Active selection & focus borders |
| `--glass-bg` | `rgba(26, 34, 24, 0.72)` | Frosted glassmorphism background (`backdrop-filter: blur(16px)`) |

---

## Typography

- **Display & Section Headings**: *Playfair Display* / *Cormorant Garamond* (Editorial Serif, 400, 500, 600 weight)
  - `hero-title`: `clamp(2.75rem, 6vw, 4.5rem)` / line-height `1.1` / letter-spacing `-0.02em`
  - `section-title`: `clamp(2rem, 4vw, 3rem)` / line-height `1.2` / letter-spacing `-0.015em`
  - `card-title`: `1.35rem` – `1.5rem` / line-height `1.3`
- **Body & Microcopy**: *Plus Jakarta Sans* / *Inter* (Geometric Humanist Sans, 400, 500, 600 weight)
  - `body-lg`: `1.125rem` / line-height `1.65`
  - `body-md`: `1.0rem` / line-height `1.6`
  - `label-sm`: `0.85rem` / line-height `1.4` / letter-spacing `0.04em` / uppercase

---

## Layout & Spatial System

- **Container Max-Width**: `1240px` with responsive gutter padding (`1.25rem` on mobile, `2.5rem` on desktop).
- **Section Spacing**: `clamp(4.5rem, 9vw, 7.5rem)` top and bottom padding.
- **Card Radii**:
  - Pills / Buttons: `9999px` (perfect capsules)
  - Small Cards & Badges: `12px`
  - Large Feature Cards & Bento Panels: `20px` to `24px`

---

## Core Components

1. **Global Header**:
   - Translucent sticky header with blur backdrop.
   - Organic lotus/seed SVG glyph + wordmark.
   - Floating pill nav with active indicator.
   - White pill action button: `Book Consultation`.
2. **Hero Sanctuary**:
   - Left: Animated soundwave breath frequency bars, `★★★★★ Trusted by 30k+ members` badge, serif display headline, dual action CTAs.
   - Right: Meditative photography portrait with ambient glow, floating frosted video badge with play trigger.
3. **Interactive Breath Pacer**:
   - Live box breathing / 4-7-8 pacer with smooth expanding/contracting SVG concentric ring, breathing prompts ("Inhale", "Hold", "Exhale", "Rest"), and Web Audio API harmonic sound chime toggle.
4. **Frictions vs. Flow Comparison**:
   - Modern Chronic Overwhelm vs. The Thalora Grounding Sequence.
5. **Sanctuary Pillars (Bento Grid)**:
   - Somatic Breathwork, Restorative Vinyasa, Binaural Soundbaths, 1-on-1 Guidance.
6. **Master Faculty**:
   - Guide cards with bio excerpts and specialized somatic certifications.
7. **Transparent Membership Pricing**:
   - Monthly / Annual toggle (25% savings), 3 tiers with feature comparisons.
8. **Interactive FAQ**:
   - Smooth CSS/JS accordion with rotate toggles.
9. **Twilight Retreat Banner & Editorial Footer**:
   - Atmospheric twilight sanctuary card with reservation form and deep footer navigation.
