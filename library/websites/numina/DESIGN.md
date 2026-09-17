# Numina — Design System & Specification

## 1. Overview
- **Product**: Numina Foundation (`numina`) — Global open-source Artificial General Intelligence research institute and decentralized frontier model foundation.
- **Audience**: Frontier AI researchers, open-source model contributors, distributed systems engineers, university labs, and autonomous agent builders.
- **Emotion**: Sublime frontier exploration, intellectual gravitas, mathematical precision, open institutional transparency, cinematic vertigo.
- **Primary CTA**: "APPLY FOR GRANT [ + ]" / "EXPLORE SUMMIT [ + → ]".
- **Signature Visual Device**:
  - Full-screen WebGL Fisheye Lens Shader (`#canvas_mountain`) with mouse-reactive chromatic refraction and GSAP ScrollTrigger distortion unbending from 3.5 to 0.3.
  - Multi-plane floating Python pipeline code layers drifting at differential parallax speeds.
  - Architectural bracket framing (`[` and `]`) for cards, buttons, and navigation nodes.

---

## 2. Color System & Semantic Roles

| Token | Value | Semantic Intent | Usage & Boundaries |
|---|---|---|---|
| `--color-surface-dark` | `#080B10` | Space void | Mountain stage background, hero shader container |
| `--color-surface-paper` | `#F9F8F6` | Archival cream paper | Editorial research & community sections |
| `--color-surface-card` | `rgba(11, 16, 24, 0.85)` | Frosted bracket HUD | Overlay cards on top of 3D canvas |
| `--color-text-light` | `#F4F6F8` | Primary text on dark | Summit headings, HUD labels, code text |
| `--color-text-dark` | `#1A1A1A` | Primary text on light | Editorial headings and research titles |
| `--color-text-muted-dark` | `#8A94A6` | Muted labels on dark | Code comments, timestamps, secondary HUD text |
| `--color-text-muted-light` | `#667085` | Muted labels on light | Article excerpts, footer descriptions |
| `--color-border-bracket` | `rgba(255, 255, 255, 0.4)` | Tactical bracket line | Corner bracket markers on floating cards |
| `--color-accent-amber` | `#FF6B4A` | Frontier spark | Active bracket arrows, grant dates, code highlights |
| `--color-accent-blue` | `#718698` | Slate horizon | Gradient transitions and atmospheric fog |

**Strict Color Boundaries:**
- No generic purple or neon gradients. The palette is grounded in natural landscape minerals, deep slate horizons, and high-contrast typographic monochrome.

---

## 3. Typography & Spacing Scales

### Typography
- **Primary & Display Family**: `"Plus Jakarta Sans", -apple-system, sans-serif`
- **Monospace / Technical Code Family**: `"IBM Plex Mono", "SF Mono", "Consolas", monospace`
- **Display Tracking**: `-0.04em` for expansive editorial headers.
- **Monospace Tracking**: `0.02em` with uppercase bracket styling.

### Scale
- `Display Massive`: `clamp(3rem, 7vw, 6.5rem)` / Line-height: `1.02` / Weight: `800`
- `H2 Section`: `clamp(2rem, 4vw, 3.5rem)` / Line-height: `1.15` / Weight: `700`
- `Code Ambient`: `0.8125rem` / Line-height: `1.7` / Weight: `400`
- `Bracket Tag`: `0.75rem` / Line-height: `1` / Weight: `600` / Uppercase

---

## 4. Components & Anatomy

1. **Top HUD Bar**:
   - Fixed header with adaptive color inversion (`data-nav-color`).
   - Left: Geometric Numina emblem + bold wordmark.
   - Center: Monospace anchor links with hover brackets.
   - Right: "APPLY FOR GRANT [ + ]" bracket button.
2. **Hero Glitch & Perspective Horizon**:
   - Real-time WebGL particle horizon shader responding to cursor displacement.
   - Kinetic glitch text reveal on mission thesis statement.
3. **Mountain Summit 3D Parallax Canvas**:
   - Canvas `#canvas_mountain` running custom GLSL vertex + fragment shaders.
   - Interactive mouse target lerp with spherical fisheye distortion and chromatic RGB aberration.
   - GSAP ScrollTrigger scrub animating lens strength `3.5 → 0.3` and image offset `y: -0.09 → -0.5`.
   - Floating Python reasoning pipeline code with soft opacity scrub.
   - Corner bracket HUD card with event date, title, and registration CTA.
4. **Research Papers & Grants Bento**:
   - 12-column architectural grid with bracketed action links (`READ MORE [ + → ]`).
5. **Architectural Footer**:
   - Full-width grid with monospace bracket directory links.

---

## 5. Interaction & Motion Rules
- Lenis smooth scroll engine locked to `gsap.ticker`.
- Transitions: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Full respect for `@media (prefers-reduced-motion: reduce)`.
