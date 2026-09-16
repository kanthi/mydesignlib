# Mentara — Brand Identity System & Specification

## 1. Overview & Positioning
- **Brand**: **Mentara** (`mentara`)
- **Category**: `Education` / Daily Cognitive Knowledge & Micro-Learning System
- **Proposition**: *Precision cognitive conditioning through focused daily knowledge synthesis.*
- **Core Visual Metaphor**: The Interlocking Synapse / Dual Capsule — two horizontal rounded squircles with diagonal offset and precision knockout slit. Symbolizes the neural bridge between curiosity and comprehension, memory consolidation, and continuous cognitive growth.
- **Audience**: Knowledge workers, researchers, modern polymaths, software engineers, and lifelong learners seeking high-retention micro-learning.
- **Core Archetype**: The Sage × The Explorer — intellectual rigor elevated by high-contrast kinetic energy and modern digital clarity.

---

## 2. Color System & Semantic Tokens

| Token | Hex Value | Semantic Role | Usage & Boundaries |
|---|---|---|---|
| `--color-lime` | `#D4FF00` | Electric Kinetic Accent | Primary brand spark, interactive CTA buttons, focus states, badge outlines |
| `--color-sage` | `#7C8D76` | Organic Calm Anchor | Secondary emblem tones, tranquil surfaces, editorial balance, secondary chips |
| `--color-sage-light` | `#A8B8A2` | Tonal Soft Fill | Supporting illustrations, secondary icon strokes, quiet tag fills |
| `--color-obsidian` | `#111311` | Primary Foundation Field | Deep carbon canvas, slide backgrounds, dark substrate test panels |
| `--color-obsidian-card`| `#161916` | Structural Surface | Presentation cards, specimen containers, interactive control blocks |
| `--color-obsidian-surface`| `#1C201C` | Elevated Panel | Modal drawers, hover states, interactive control bars |
| `--color-mist` | `#B6BFB2` | Subdued Metadata & Body | Body descriptions, spec annotations, technical ratios, inactive tabs |
| `--color-white` | `#FFFFFF` | Primary Contrast Typography | Headlines, hero typography, inverted logo marks, stark clarity |

---

## 3. The Mentara Mark & Geometric Construction

### Geometric Rules
- **Bounding Box**: 120u × 80u optical bounding field with 45° dynamic diagonal progression.
- **Dual Capsule Architecture**: Two identical horizontal pill squircles ($64 \times 32$ optical units, radius $16\text{px}$), offset horizontally by $44\text{px}$ and vertically by $28\text{px}$.
- **Precision Knockout Slit**: A $6\text{px}$ optical incision isolating the overlapping geometry, maintaining silhouette legibility across all contrast conditions.
- **Interlock Principle**: Creates an infinite forward rhythm representing memory retention loops and neural synapse connection.

### Responsive Mark Hierarchy
1. **Primary Horizontal Lockup**: Interlocking Synapse mark + Title Case `Mentara` wordmark in Plus Jakarta Sans 800 (ratio: 1 mark : 2.8 wordmark height).
2. **Standalone App Icon / Monogram**: Mark centered within a `#111311` rounded squircle container with 24% corner radius and subtle `#D4FF00` inner rim light.
3. **16px Favicon Glyph**: Monochromatic silhouette with widened $8\text{px}$ knockout slit ensuring crisp definition at browser tab resolution.
4. **Substrate Adaptation**: Dynamic inversion across Electric Lime, Stark White, and Obsidian Carbon surfaces.

---

## 4. Typography Scale & Hierarchy

- **Display & Headlines**: `Plus Jakarta Sans` (weights: 700, 800, 900)
  - Hero Title: $36\text{px} - 48\text{px}$ / line-height: 1.15 / tracking: $-0.03\text{em}$
  - Section Headings: $24\text{px} - 28\text{px}$ / line-height: 1.25 / tracking: $-0.02\text{em}$
- **Body & Editorial**: `Plus Jakarta Sans` (weights: 400, 500, 600)
  - Primary Body: $15\text{px} - 17\text{px}$ / line-height: 1.6 / tracking: $-0.01\text{em}$
  - Captions & Microcopy: $12\text{px} - 13\text{px}$ / line-height: 1.4
- **Technical & Metric Specifications**: `IBM Plex Mono` (weights: 500, 600)
  - Spec Badges & Ratios: $11\text{px} - 13\text{px}$ / line-height: 1.3 / tracking: $+0.04\text{em}$

---

## 5. 3-Step Logo Stress Test Suite

1. **The 16px Favicon Scalability Test**:
   - Rendered down to $16\times16\text{px}$ viewport.
   - Evaluated for aperture fill, silhouette clarity, and optical balance. Zero mudding of the diagonal interlock.
2. **Surface Inversion & Contrast Test**:
   - Monochromatic stress across `#111311` Obsidian, `#D4FF00` Electric Lime, `#7C8D76` Moss Sage, and `#FFFFFF` Stark White.
   - Contrast ratio exceeds WCAG AAA ($> 12:1$) across all supported variations.
3. **Gaussian Blur Peripheral Test**:
   - Subjected to $4\text{px} - 10\text{px}$ Gaussian blur to simulate peripheral glance and billboard distance.
   - The dual-capsule diagonal silhouette remains instantly recognizable without reliance on interior line detail.

---

## 6. Clear Space & Isolation Rules
- **Minimum Clear Space**: $1X$ unit boundary on all 4 quadrants, where $X$ equals half the capsule height ($16\text{px}$ at reference scale).
- **Prohibited Alterations**:
  - Do not rotate the mark off its standard 45° diagonal axis.
  - Do not alter the relative spacing of the two interlocking capsules.
  - Do not apply unapproved drop shadows, bevels, or skeuomorphic gradients.
  - Do not pair with serif or script typography.
