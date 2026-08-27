# DESIGN — Klaro

## Overview
- **Audience:** Residential homeowners, luxury apartment residents, property managers, commercial office leads, and relocation agencies looking for white-glove, reliable sanitization and cleaning services.
- **Single Job / Primary CTA:** `GET APPOINTMENT ↗` (with secondary action: `GET A QUOTE ↗` / `Direct Call`).
- **Emotion:** Absolute hygiene certainty, radiant warmth, punctual reliability, and European-grade craftsmanship.
- **Create this feeling through:**
  - Rich royal cobalt blue hero (`#0a226d`) and crisp clean white surface cards (`#ffffff`).
  - Warm sun-yellow conversion accents (`#ffd014`) on high-intent CTAs and punctuation marks (`fast and quality cleaning service.`).
  - Human-first specialist photography with professional uniforms and equipment.
  - Pinned 3-pillar promise strip, Trustpilot verified badge, interactive multi-step appointment booking form with instant time slots, and team roster.

## Source of Truth
- This file + CSS `:root` in `library/websites/klaro/index.html`. Code tokens take precedence in case of divergence.

## Aesthetic Commitment
- **Name:** Warm Clean Service / White-Glove Custodial
- **Signature Element:** The Pinned 3-Pillar Promise band under the cobalt hero + Floating Instant Appointment Booking card with live estimate calculation.

## Color System (Semantic Tokens)
```css
:root {
  /* Surfaces */
  --surface-page: #f8fafc;
  --surface-card: #ffffff;
  --surface-subtle: #f1f5f9;
  --surface-hero: #0a226d;
  --surface-hero-dark: #081a52;
  --surface-footer: #061542;
  
  /* Text */
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --text-on-dark: #ffffff;
  --text-on-dark-muted: #cbd5e1;
  
  /* Brand Accents */
  --brand-blue: #0d329e;
  --brand-blue-hover: #09257a;
  --brand-blue-light: #eff6ff;
  --brand-yellow: #ffd014;
  --brand-yellow-hover: #f0c20a;
  --brand-yellow-soft: rgba(255, 208, 20, 0.16);
  --brand-green: #10b981;
  
  /* Borders */
  --border-subtle: rgba(15, 23, 42, 0.08);
  --border-card: rgba(15, 23, 42, 0.10);
  --border-dark: rgba(255, 255, 255, 0.12);
  
  /* Radii */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 30px;
  --radius-pill: 9999px;
  
  /* Layout */
  --container-max: 1240px;
  --container-padding: clamp(1.25rem, 3.5vw, 2.5rem);
  --section-y: clamp(4.5rem, 7.5vw, 6.5rem);
}
```

## Typography
- **Primary Family:** `Plus Jakarta Sans`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Weights:** 400, 500, 600, 700, 800.
- **Heading Signature:** Lowercase punctuation accent in brand yellow (e.g. `fast and quality cleaning service.`).
