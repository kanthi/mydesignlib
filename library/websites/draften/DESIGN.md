# Draften — Design System Specification

## Brand Identity & Vision
**Draften** (`draften`) is a minimalist AI document workspace and collaborative writing environment. It unifies drafting, summarization, structural editing, and multi-format publishing into a clean, distraction-free spatial canvas.

The visual thesis relies on extreme clarity: stark monochrome contrast, generous whitespace, isometric architectural drafting lines, and subtle micro-shadows.

---

## Color Palette

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#FAFAFB` | Primary page canvas |
| `--color-surface` | `#FFFFFF` | Elevated cards, workspace modals, inputs |
| `--color-surface-subtle` | `#F2F4F7` | Secondary buttons, badge fills, hover pills |
| `--color-border` | `#E4E7EC` | Wireframe gridlines, dividers, card borders |
| `--color-border-dark` | `#111318` | High-contrast outlines & focus rings |
| `--color-text-main` | `#101828` | Primary headlines and high-emphasis copy |
| `--color-text-muted` | `#475467` | Descriptive body copy, subtitle text |
| `--color-text-dim` | `#98A2B3` | Captions, labels, grid coordinate marks |
| `--color-accent` | `#101828` | Primary action buttons and focal elements |

---

## Typography

- **Brand Wordmark & Display Serif**: `Newsreader`, `serif` / `italic` (for Draften mark and editorial accents)
- **Primary Interface & Headings**: `Plus Jakarta Sans`, `sans-serif` (weight 400 for light editorial elegance, 600 for UI buttons, 700 for stats)
- **Monospace Telemetry**: `JetBrains Mono`, `monospace` (format badges, version tags, token counters)

---

## Layout & Architecture

1. **Top Nav**: Minimalist bar with wordmark, core links (Features, Solutions, Templates, Pricing, Resources), and dark pill `Sign In`.
2. **Hero Stage**:
   - High-contrast sans headline: `Every Document. One Intelligent Workspace.`
   - Subhead with dual CTAs (`Start Writing Free` / `Watch Demo`).
   - Isometric 3D wireframe canvas with animated spline connectors, floating document cards, and central processor node.
   - Social proof strip: "AI Document Review now supports 25+ document formats. Trusted by teams at Notion, Microsoft, Canva, WPS Office".
3. **Interactive Workspace Demo**:
   - Interactive document editor simulator with live AI summarization, outline generation, and multi-format export tabs (Markdown, PDF, DOCX, EPUB).
4. **Bento Feature Grid**:
   - Intelligent synthesis, structural diffing, automated referencing, and privacy-first local vector index.
5. **Format & Integration Carousel**:
   - Interactive format compatibility directory.
6. **Pricing Tiers**:
   - Transparent Free, Pro, and Enterprise tiers.
7. **Minimalist Footer**:
   - Symmetrical monochrome footer with legal, documentation, and status indicators.
