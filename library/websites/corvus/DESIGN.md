# Corvus — Design System Specification

## Brand Identity & Aesthetic Thesis
- **Brand Name**: Corvus (Autonomous Cloud Threat Intelligence & Incident Suppression Sentinel)
- **Tagline**: Loud where it counts. One unmistakable signal at the moment it matters, and silence for the rest of the day.
- **Tone & Mood**: Elite cybersecurity vigilance, quiet luxury, atmospheric natural power, high-precision clarity.
- **Reference**: Derived from the Scrolltide "Toucan" motion landing page by `@himanshubuildss`.
- **Fictional Isolation**: Rebranded 100% as Corvus. Zero real brand names, client references, or proprietary tracker scripts.

---

## Color Tokens

| Token | Value | Semantic Role |
| :--- | :--- | :--- |
| `--bg-canopy` | `#161f15` | Deep atmospheric forest baseline canvas |
| `--bg-canopy-dark` | `#0f150e` | Darkest void sections & terminal backgrounds |
| `--bg-card-sand` | `#d5c4a1` | Distinctive warm kraft/sand card surface |
| `--bg-card-sand-dark` | `#c4b18c` | Chamfered notch & hover state on sand cards |
| `--text-on-sand` | `#182016` | Deep obsidian ink text for sand cards |
| `--accent-amber` | `#e2b35b` | Primary call-to-action & signal glow |
| `--accent-amber-bright` | `#f5c66e` | Hover state for buttons & active telemetry |
| `--accent-beak-orange` | `#f97316` | Secondary vibrant avian accent |
| `--text-primary` | `#f7f8f4` | Crisp bone white for display headlines |
| `--text-secondary` | `#b8c5b4` | Soft canopy sage for descriptions & body |
| `--text-muted` | `#7a8876` | Muted olive gray for metadata, kickers, timestamps |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Hairline container outlines |
| `--border-amber` | `rgba(226, 179, 91, 0.35)` | Active state highlights & signal rings |

---

## Typography Hierarchy

- **Display Serif**: *Playfair Display* / *Newsreader* (500, 600 weight, italic emphasis)
  - `hero-display`: `clamp(3rem, 6vw, 5rem)` / line-height `1.08` / letter-spacing `-0.025em`
  - `section-display`: `clamp(2.2rem, 4.5vw, 3.4rem)` / line-height `1.15`
  - `card-stat`: `clamp(2.5rem, 3.8vw, 3.8rem)` / line-height `1` (12ms, 99.98%)
- **Body & UI**: *Plus Jakarta Sans* / *Inter* (400, 500, 600 weight)
  - `kicker`: `0.78rem` / letter-spacing `0.1em` / uppercase tracking
  - `body-lg`: `1.125rem` / line-height `1.65`
  - `body-md`: `0.95rem` / line-height `1.6`
- **Code & Telemetry**: *JetBrains Mono* / *Fira Code* (monospace)
  - Latency stats, eBPF logs, CLI terminal commands

---

## Hero Composition

1. **Sun-Shafted Canopy Backdrop**: Volumetric golden sunlight slicing through misty forest greenery.
2. **Giant Watermark Wordmark**: `CORVUS` centered behind the sentinel in monumental serif lettering with subtle opacity (`rgba(255, 255, 255, 0.14)`).
3. **Hero Avian Sentinel**: High-resolution centered sentinel in alert stance with vibrant bill and plumage.
4. **Left Editorial Stack**:
   - Kicker: `— SIGNAL YOU CANNOT MISS`
   - Headline: *"Loud where"* / *"it counts"* (in italic serif)
   - Subtitle: *"One unmistakable signal at the moment it matters, and silence for the rest of the day."*
   - CTAs: Warm amber pill `Start free` + Link with arrow `Watch the system ↗`
5. **Right Chamfered Kraft Cards**:
   - Tab 1: `Detection` — Beak macro image, *"Every signal read, the moment it lands"*, `12ms`
   - Tab 2: `Coverage` — Plumage macro image, *"Contained before a human is paged"*, `99.98%`
