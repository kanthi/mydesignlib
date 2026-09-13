# DESIGN — Vireo

## Overview
- **Audience:** B2B SaaS founders, CFOs, agency directors, mid-market finance teams, and operations leaders navigating delayed receivables.
- **Single Job / Primary CTA:** Try Demo for free (with secondary action: Meet Our AI Underwriter / Book a Demo).
- **Emotion:** Unshakeable institutional trust, effortless financial velocity, mathematical clarity, and modern calm.
- **Create this feeling through:**
  - Crisp, airy paper background (`#fcfdfc`) structured with subtle hairline slate borders (`rgba(14, 24, 18, 0.08)`).
  - Deep evergreen anchor containers (`#082115`, `#0d2e1f`) with high-contrast electric lime chartreuse accents (`#c8f237`).
  - Tight, geometric typography (`Plus Jakarta Sans`) with optical hierarchy and strict tabular numerals for all financial figures.
  - Interactive, functional product mockups: live 3-step payment routing pipeline, tabbed AI liquidity dashboard, and alternating capital suite cards.

## Source of Truth
- This file + CSS `:root` in `library/websites/vireo/index.html`. Code tokens take precedence in case of divergence.

## Aesthetic Commitment
- **Name:** Modern Swiss-Fintech / Precision Liquidity
- **Signature Element:** The Hero Payment Engine card — deep forest green radial container with live interactive term selector (`7-day split` vs `14-day split`), animated connector lines, and instant vendor payout badges.

## Color System (Semantic Tokens)
```css
:root {
  /* Surfaces */
  --surface-page: #fcfdfc;
  --surface-card: #ffffff;
  --surface-subtle: #f2f6f3;
  --surface-forest: #082115;
  --surface-forest-card: #0d2e1f;
  --surface-forest-hover: #123d2a;
  --surface-forest-glow: rgba(200, 242, 55, 0.12);
  
  /* Text */
  --text-primary: #0d1712;
  --text-secondary: #4a5951;
  --text-muted: #798a80;
  --text-on-dark: #ffffff;
  --text-on-dark-muted: #9fb3a7;
  
  /* Accents & Brand */
  --brand-forest: #082115;
  --brand-lime: #c8f237;
  --brand-lime-hover: #b6df24;
  --brand-lime-soft: rgba(200, 242, 55, 0.15);
  --brand-emerald: #10b981;
  --brand-emerald-soft: rgba(16, 185, 129, 0.12);
  --brand-coral: #ef4444;
  
  /* Borders */
  --border-subtle: rgba(14, 24, 18, 0.08);
  --border-card: rgba(14, 24, 18, 0.10);
  --border-dark: rgba(255, 255, 255, 0.12);
  --border-lime: rgba(200, 242, 55, 0.35);
  
  /* Shadows & Elevation */
  --shadow-sm: 0 1px 2px rgba(14, 24, 18, 0.04);
  --shadow-md: 0 6px 16px -2px rgba(14, 24, 18, 0.06), 0 2px 6px -1px rgba(14, 24, 18, 0.04);
  --shadow-lg: 0 20px 35px -8px rgba(14, 24, 18, 0.08), 0 8px 16px -4px rgba(14, 24, 18, 0.04);
  --shadow-glow: 0 12px 30px -4px rgba(200, 242, 55, 0.25);
  
  /* Radii */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;
  --radius-pill: 9999px;
  
  /* Layout */
  --container-max: 1240px;
  --container-padding: clamp(1.25rem, 3.5vw, 2.5rem);
  --section-y: clamp(5rem, 8vw, 7.5rem);
}
```

## Typography
- **Primary Family:** `Plus Jakarta Sans`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Weights:** 400 (regular body), 500 (medium labels), 600 (semi-bold interactive), 700 (bold headers), 800 (display hero).
- **Scale:**
  - `--text-hero`: clamp(2.75rem, 5.5vw, 4.5rem) / Line-height: 1.08 / Tracking: -0.035em
  - `--text-h2`: clamp(2rem, 3.5vw, 3rem) / Line-height: 1.15 / Tracking: -0.03em
  - `--text-h3`: clamp(1.35rem, 2.2vw, 1.75rem) / Line-height: 1.25 / Tracking: -0.02em
  - `--text-xl`: 1.25rem / Line-height: 1.4
  - `--text-base`: 1rem / Line-height: 1.6
  - `--text-sm`: 0.875rem / Line-height: 1.5
  - `--text-xs`: 0.75rem / Line-height: 1.4 / Tracking: 0.02em
- **Tabular Figures:** `font-variant-numeric: tabular-nums` enforced on all metric tables, dollar values, percentages, and timestamps.
