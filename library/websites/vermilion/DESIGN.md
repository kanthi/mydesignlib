# Vermilion — Design System & Specification

## 1. Overview
- **Product**: Vermilion (`vermilion`) — Global crypto payment platform and multi-currency debit card infrastructure.
- **Audience**: International remote professionals, crypto native founders, global nomads, cross-border digital commerce earners.
- **Emotion**: Frictionless institutional confidence, precision, high-velocity clarity, refined modern luxury without decorative clutter.
- **Primary CTA**: "Get the app" (hero & navigation) / "Issue Card Now" (card showcase section).
- **Core Visual Motif**: Warm paper-white canvas with luminous vermilion-coral radial atmospheric glow behind floating hardware devices, crisp high-contrast typography, and precision fintech mockups.

---

## 2. Color System & Semantic Roles

| Token | Value | Semantic Intent | Usage & Boundaries |
|---|---|---|---|
| `--color-surface-canvas` | `#FFFFFF` | Core backdrop | Pure white base for pristine clarity |
| `--color-surface-subtle` | `#F8F9FA` | Warm off-white | Section contrasts, input fields, pill badges |
| `--color-surface-card` | `#FFFFFF` | Card surface | Primary feature cards and device frames |
| `--color-surface-dark` | `#0B0F17` | Obsidian dark | Hardware phone bezels, chip containers, dark card |
| `--color-text-primary` | `#0B0F17` | High-contrast ink | Headlines, primary values, active states |
| `--color-text-secondary` | `#475467` | Slate body | Paragraph descriptions, secondary values, labels |
| `--color-text-muted` | `#98A2B3` | Microcopy | Timestamps, inactive labels, helper hints |
| `--color-border-subtle` | `#E4E7EC` | Divider lines | 1px border on cards, inputs, pills, separators |
| `--color-border-strong` | `#D0D5DD` | Focused borders | Interactive input borders, card hover borders |
| `--color-accent-primary` | `#E11D48` | Vermilion Coral | Primary CTA badges, brand mark, key metrics, active tab |
| `--color-accent-hover` | `#BE123C` | Deep Vermilion | Hover state for accent buttons and links |
| `--color-accent-soft` | `#FFF1F2` | Vermilion Tint | Highlighted text pills, notification icons, soft tag fills |
| `--color-accent-glow` | `rgba(225, 29, 72, 0.18)` | Ambient glow | Radial glow behind phone stages and hero mockups |

**Strict Color Boundaries:**
- Never flood backgrounds with pure vermilion; accent is strictly for punchy visual anchors, pills, active indicators, and soft ambient glows.
- No AI-slop purple or indigo gradients.

---

## 3. Typography & Spacing Scales

### Typography
- **Primary & Display Family**: `"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Headings Tracking**: `-0.03em` for bold condensed impact.
- **Body Tracking**: `-0.01em` for clean readability.
- **Tabular Figures**: `font-variant-numeric: tabular-nums` for all financial figures, balances, and exchange rates.

### Scale
- `Display Hero`: `clamp(2.75rem, 5.5vw, 4.25rem)` / Line-height: `1.08` / Weight: `800`
- `H2 Section`: `clamp(2rem, 3.8vw, 3rem)` / Line-height: `1.15` / Weight: `700`
- `H3 Feature`: `1.375rem` / Line-height: `1.3` / Weight: `700`
- `Body Large`: `1.125rem` / Line-height: `1.5` / Weight: `400`
- `Body Regular`: `0.9375rem` / Line-height: `1.5` / Weight: `500`
- `Micro`: `0.8125rem` / Line-height: `1.4` / Weight: `600`

### Spacing & Radii
- `--space-section-y`: `clamp(4rem, 8vw, 7rem)`
- `--radius-pill`: `9999px`
- `--radius-card`: `20px`
- `--radius-phone`: `44px`
- `--radius-sm`: `10px`

---

## 4. Components & Anatomy

1. **Navigation Bar**:
   - Fixed or sticky at top with frosted backdrop blur (`rgba(255, 255, 255, 0.88)` + `backdrop-filter: blur(16px)`).
   - Left: Vermilion emblem + bold wordmark.
   - Center: Nav links (`Personal`, `Business`, `Company`, `Resources`, `Support`) with subtle hover states.
   - Right: "Sign in" text link + `Get the app` pill button.
2. **Hero Stage**:
   - Announcement pill badge with subtle hover transition.
   - Dual-line centered thesis headline.
   - Centered smartphone mockup with custom dynamic island, simulated iOS status bar, balance reveal toggle, and quick action icons.
   - Soft vermilion radial backdrop glow behind phone.
3. **Value Statement & Institutional Backers**:
   - Emphatic editorial typographic paragraph highlighting key verbs in vermilion.
   - Fictional institutional partners marquee (`VERTEX LABS`, `NEXUS CAPITAL`, `AETHER SECURE`, `STELLARIS`, `MERIDIAN`, `HYDRA NETWORK`).
4. **Stats & Hand Mockup Stage**:
   - 3-column layout featuring `12.4M+` Users and `Instant Settlement` on left, realistic hand device in center, and `$18.5B+` Volume and `Live Ledger Sync` on right.
5. **Multi-Feature Bento**:
   - 7 distinct functional cards demonstrating real capabilities: Send Globally, Multi-Currency Vault, In-App UID Transfer, P2P Marketplace, Crypto Credit Line, Yield Staking, and Instant FX Swap.
6. **Card Mode Switcher (Virtual vs Physical)**:
   - Interactive toggle switching between a radiant Vermilion Virtual Card and an obsidian Physical Metal Card with realistic card chip, contactless symbol, and embossed numbers.
7. **Social Proof & Testimonials**:
   - App Store (4.8 ★) and Google Play (4.7 ★) ratings.
   - 4 cardholder reviews with verified avatars and location chips.
8. **Institutional Security & Footer**:
   - SOC2, PCI DSS Level 1, ISO 27001 badges.
   - Multi-column footer navigation and compliance notice.

---

## 5. Interaction & Motion Rules
- Transition timing: `200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- Cards subtle lift: `translateY(-3px)` on hover with smooth shadow expansion.
- Full respect for `@media (prefers-reduced-motion: reduce)`.
