# Vaelis — Design System & Architectural Specification

**Brand Identity:** Vaelis (Fictional Rebrand of Comand AI)  
**Vertical:** Defense & Sovereign Security / Command & Control (C2) Software  
**Product Core:** Strata — AI-Native Command & Intelligence Operating Workspace  
**Reference Archetype:** Code Resolution Framer architecture, austere technical Swiss minimalism, Space Grotesk military precision, cinematic reconnaissance aerials, high-contrast monochrome with cobalt datalink accents.

---

## 1. System Overview & Emotional Target

- **Audience:** Defense leadership, general staff officers, defense procurement ministries, NATO/allied tactical commanders.
- **Tone:** Sovereign authority, austere military discipline, cryptographic certainty, modern tactical engineering.
- **Emotional Directive:** Instill absolute confidence in life-critical decision velocity without tech-startup gimmickry or glowing sci-fi clutter.

---

## 2. Color Palette & Token Hierarchy

```css
:root {
  /* Surfaces */
  --surface-night: #0a0b0d;
  --surface-night-elevated: #121418;
  --surface-night-overlay: rgba(10, 11, 13, 0.88);
  --surface-light: #fbfbfc;
  --surface-light-card: #ffffff;
  --surface-light-muted: #f2f3f5;

  /* Text */
  --text-inverse-primary: #ffffff;
  --text-inverse-secondary: rgba(255, 255, 255, 0.72);
  --text-inverse-muted: rgba(255, 255, 255, 0.45);
  --text-body-primary: #0f1115;
  --text-body-secondary: #4b525d;
  --text-body-muted: #848d9a;

  /* Borders & Dividers */
  --border-dark: rgba(255, 255, 255, 0.12);
  --border-light: #e4e7eb;
  --border-light-subtle: #eeeff2;

  /* Tactical Accents */
  --accent-cobalt: #1e5bf0;
  --accent-cobalt-hover: #1447c8;
  --accent-cobalt-dim: rgba(30, 91, 240, 0.08);
  --accent-amber: #d97706;
  --accent-emerald: #059669;

  /* Geometry & Radii */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03);
  --shadow-float: 0 16px 36px -8px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
  --shadow-cinematic: 0 24px 60px -12px rgba(0, 0, 0, 0.4);
}
```

---

## 3. Typography & Typesetting Hierarchy

| Role | Font Family | Weight | Size / Line-height | Tracking |
|---|---|---|---|---|
| **Monumental Display** | `Space Grotesk` | 600 SemiBold | `clamp(2.75rem, 5.5vw, 4.5rem)` / 1.04 | `-0.03em` |
| **Section Headlines** | `Space Grotesk` | 500 Medium | `clamp(2.0rem, 3.5vw, 2.75rem)` / 1.15 | `-0.02em` |
| **Subheadings & Bento Titles** | `Space Grotesk` | 500 Medium | `1.35rem` / 1.35 | `-0.01em` |
| **Body Primary** | `Inter`, sans-serif | 400 Regular | `1.0625rem` (17px) / 1.6 | `normal` |
| **Tactical Metadata & Coordinates** | `Fragment Mono`, monospace | 400 Regular | `0.8125rem` (13px) / 1.4 | `0.04em` |
| **Tactical Eyebrows & Badges** | `Space Grotesk` | 600 SemiBold | `0.75rem` (12px) / 1.2 | `0.1em` uppercase |

---

## 4. Distinctive Structural & Motion Devices

1. **Curved Container Docking:** The dark hero section (`95vh`) features a 20px top-border radius transition onto the white operational workspace canvas below.
2. **Pip Video Card Overlay:** A high-craft floating thumbnail card anchored in the bottom right of the hero with playback glyph and runtime telemetry indicator.
3. **Interactive Strata Solution Switcher:** Live tabbed interactive state switching between 4 core operational modules (Understand, Plan, Learn, Track) with simulated tactical situational maps and telemetry panels.
4. **Live Zulu Time & Telemetry Status:** Monospace UTC clock in the header displaying real-time operational status (Link Status: `NOMINAL // LAT: 48.8566N LON: 2.3522E`).
5. **Interactive Operational Order (OPORD) Simulation:** Fast-briefing calculation showing 4.8x acceleration in terrain and mission vector synthesis.

---

## 5. Strict Brand Audit Boundaries

- Original: `Comand AI`, `Prevail`, `Bundeswehr`, `Airbus Defence`, `Saab`, `Eurosatory`
- Rebrand: `Vaelis`, `Strata Core`, `Allied Joint Defense Command`, `AeroDefense Consortium`, `Hensoldt-Vectron Alliance`, `International Defense Exposition`
- Never retain real URLs, handles, or third-party proprietary tracker scripts.
