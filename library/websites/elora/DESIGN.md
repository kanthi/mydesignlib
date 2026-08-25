# Elora Vance — Design System & Technical Specification

Design system specification for **Elora Vance**, a serene, editorial, high-craft somatic hypnotherapy and nervous system repatterning web template.

---

## 1. Product & Aesthetic Intent

- **Core Identity**: Somatic hypnotherapist and nervous system specialist helping high-performing individuals and creatives resolve deep-seated subconscious loops, anxiety, chronic tension, and sleep disruption where willpower alone has stalled.
- **Visual Emotion**: Grounded, organic luxury, profound clinical calm, editorial elegance, tactile warmth. High-contrast editorial typography paired with warm linen neutrals, deep botanical forest greens, and glowing honey amber accents.
- **Subject Vernacular**: Somatic nervous system regulation, vagus nerve soothing, subconscious loop repatterning, tactile stillness, singing bowls, polished river stones, linen drapery, warm studio sunlight.
- **Anti-Slop Directives**: No generic AI SaaS blue/purple gradients; no default Inter/Roboto headers; no equal 3-card white boxes with drop shadows; no cliché stock vectors. Every visual element reflects genuine somatic presence and therapeutic craft.

---

## 2. Color Palette & Semantic Tokens

```css
:root {
  /* Surfaces & Backgrounds */
  --canvas-light: #faf8f5;
  --canvas-subtle: #f3efe9;
  --canvas-card: #ffffff;
  --canvas-sage-tint: #edf3ee;
  --canvas-deep-forest: #182a1c;
  --canvas-forest-elevated: #223827;
  --canvas-forest-card: #1c3221;
  --canvas-forest-border: rgba(255, 255, 255, 0.12);

  /* Brand Accents */
  --accent-honey: #d98a2c;
  --accent-honey-hover: #c27820;
  --accent-honey-glow: rgba(217, 138, 44, 0.28);
  --accent-sage: #6e8a75;
  --accent-sage-soft: #d8e5da;
  --accent-gold-soft: #e8a74a;

  /* Typography & Ink */
  --ink-heading: #1c1f1d;
  --ink-body: #3c423e;
  --ink-muted: #6b736d;
  --ink-faint: #98a19a;
  --ink-on-dark: #f8faf8;
  --ink-on-dark-muted: #a8b8aa;
  --ink-on-dark-faint: #6f8071;

  /* Borders & Dividers */
  --border-light: rgba(28, 31, 29, 0.08);
  --border-standard: rgba(28, 31, 29, 0.14);
  --border-honey: rgba(217, 138, 44, 0.4);
  --border-dark-subtle: rgba(255, 255, 255, 0.1);

  /* Glass & Overlays */
  --glass-light: rgba(255, 255, 255, 0.82);
  --glass-light-blur: 16px;
  --glass-dark: rgba(24, 42, 28, 0.75);
  --glass-dark-blur: 20px;

  /* Typography Families */
  --font-serif: "Fraunces", "Playfair Display", "Cormorant Garamond", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography Scale */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-md: 1.125rem;    /* 18px */
  --text-lg: 1.25rem;     /* 20px */
  --text-xl: 1.5rem;      /* 24px */
  --text-2xl: 1.875rem;   /* 30px */
  --text-3xl: clamp(2rem, 3.5vw, 2.75rem);   /* 32px - 44px */
  --text-4xl: clamp(2.5rem, 5vw, 3.75rem);    /* 40px - 60px */
  --text-hero: clamp(2.75rem, 5.8vw, 4.5rem); /* 44px - 72px */

  /* Spacing Scale */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --space-4xl: 6rem;

  /* Border Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-xl: 36px;
  --radius-stadium: 9999px;
  --radius-frame: clamp(24px, 3.5vw, 44px);

  /* Shadows */
  --shadow-subtle: 0 4px 20px -2px rgba(24, 42, 28, 0.05);
  --shadow-elevated: 0 16px 40px -8px rgba(24, 42, 28, 0.12);
  --shadow-glow-honey: 0 10px 30px -4px rgba(217, 138, 44, 0.35);
  --shadow-dark-card: 0 20px 45px -10px rgba(0, 0, 0, 0.4);

  /* Layout */
  --container-max: 1240px;
  --container-narrow: 920px;
  --gutter: clamp(1.25rem, 4vw, 2.5rem);
}
```

---

## 3. Component Architecture & Micro-Interactions

### 3.1 Floating Pill Navigation
- Centered frosted glass bar (`backdrop-filter: blur(16px)`).
- Brand wordmark: Italic Fraunces with high-contrast serifs.
- Links: Plus Jakarta Sans 500 with soft hover underline and dot pill indicator.
- Action CTA: Honey amber pill with mini practitioner avatar chip and tactile scale-down on click (`transform: scale(0.98)`).

### 3.2 Hero Canvas & Floating Glass Card
- High-craft stadium-nested visual frame with subtle ambient lighting.
- Editorial headline with italic emphasis on key emotional pivot (*"haven't tried hard enough"*).
- Floating Frosted Glass Testimonial: 
  - Backdrop blur 20px, semi-transparent border, subtle top-left highlight.
  - Category pill badge with icon, authentic quote, client avatar chip, and dual action buttons.

### 3.3 The 3-Pattern Stadium Cards
- Three sequential cards illustrating the cycle: *Overthinking*, *Unkept Promises to Oneself*, and *Hyper-control*.
- Pill/stadium image masks framing therapy moments.
- Center card features a delicate glowing ambient sage halo to guide eye flow.

### 3.4 Somatic Marquee Ribbon
- Continuous, smooth CSS marquee on warm parchment background.
- Semantic botanical/sun glyph separators (`✺`).

### 3.5 Conscious vs Subconscious Matrix (Deep Forest Green)
- Immersive shift to `#182A1C` velvet green canvas.
- Interactive matrix toggle comparing conscious intentions vs automatic somatic reactions.
- Interactive "Neural Resonance Wave" visualizing vagal regulation.

### 3.6 Focus Areas Bento Grid
- 6 responsive bento cards with thematic visual assets, status badges, and expandable drawers.
- Interactive hover transitions with smooth elevation and subtle glow.

### 3.7 "Simply a Conversation" Onboarding Pathway
- Warm ambient sensory backdrop (singing bowls, salt crystals, herbal steam).
- 3 clear low-friction steps with interactive scheduling modal integration.

---

## 4. Accessibility & Motion Rules

- **Contrast**: All text meets WCAG AA standards (minimum 4.5:1 on light and dark surfaces).
- **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)` disabling non-essential parallax and marquee movement.
- **Keyboard Navigation**: Focus visible rings on all interactive elements (`outline: 2px solid var(--accent-honey)`).
