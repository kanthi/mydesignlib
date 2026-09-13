# VERBA — Design System & Craft Specification

Multi-channel autonomous content engine and AI agent team for modern founders, creators, and media studios.

## 1. Overview & Aesthetic Commitment

- **Aesthetic:** Clean Daytime Azure Sky with Billowing Cumulus Atmosphere and High-Elevation Floating App Canvas.
- **Concept:** *Verba* (Latin for words/expression, turning a single raw idea into a multi-channel content engine).
- **Core Narrative:** "Your content team, powered by AI agents."
- **Rules:**
  - Daytime Cerulean Sky Foundation (`#76CBFA` -> `#A5DBFD` -> `#F2F8FD`): Radiates clarity, calm focus, and creative elevation.
  - Crisp Architectural Contrast: Jet black geometric typography (`#0A0D12`) and solid black pill buttons (`#000000`) grounding the airy backdrop.
  - Floating Workspace Mockup: Realistic high-elevation desktop canvas with rounded corners (`20px`), subtle hairline borders (`rgba(0,0,0,0.06)`), and lush multi-layered ambient sky shadows (`rgba(0, 70, 150, 0.12)`).
  - Concrete Functional Mechanics:
    - Interactive Prompt Composer with live sample draft ingestion.
    - 4 Multi-Channel Autonomous Agents (X Thread, LinkedIn Thought Leadership, Newsletter Segment, Short Reel Script) with realistic simulated live streaming generation and one-click copy.
    - Live Voice Tuner with 3 reactive sliders (Formality, Density, Cadence) that rewrite sample text in real-time.
    - Multi-Platform Output Comparator tabs with pixel-accurate platform previews.
    - 3-tier Monthly / Annual pricing switcher (-20% discount).
    - Expandable zero-dependency FAQ accordion.

## 2. Color Palette & Semantic Tokens

- **Sky Top:** `#76CBFA` (Azure Blue 400)
- **Sky Mid:** `#A5DBFD` (Sky 300)
- **Sky Base / Horizon:** `#DCF0FE` to `#F4FAFE`
- **Surface Pure:** `#FFFFFF`
- **Surface Muted Tint:** `#F8FAFC`
- **Text Ink Dominant:** `#0A0D12` (True Deep Obsidian)
- **Text Body / Muted:** `#475569` (Slate 600)
- **Border Hairline:** `rgba(15, 23, 42, 0.08)`
- **Accent Primary (Action):** `#000000` (Pill button with white text)
- **Accent Highlight:** `#0284C7` (Sky blue link/focus)
- **Status Indicators:**
  - Published: `#10B981` (Emerald Green)
  - Scheduled: `#F59E0B` (Amber Orange)
  - Draft: `#94A3B8` (Slate Gray)

## 3. Typography Hierarchy

- **Display & Headlines:** `Plus Jakarta Sans`, `-apple-system`, BlinkMacSystemFont, `sans-serif` (tight negative tracking `-0.03em`, authoritative optical kerning)
- **Body & UI Labels:** `Inter`, system sans (high legibility at 13px–15px)
- **Telemetry & Draft Metadata:** `JetBrains Mono` / monospace (for timestamps, word counts, and agent token meters)

## 4. Key Interactive Components

1. **Interactive Workspace Canvas (`#appPreviewCard`):** Full 2-pane content studio featuring brand voice selector, recent outputs, and active composer.
2. **Real-Time Agent Runner (`.agent-run-btn`):** Triggers live typed output simulation across Twitter thread, LinkedIn post, newsletter, and video script formats.
3. **Voice Tuner Studio (`#voiceTuner`):** Real-time NLP tone re-synthesizer responding dynamically to slider adjustments.
4. **Channel Comparator Tabs (`.channel-tab`):** Flips between platform-specific preview containers.
5. **Pricing Switcher (`#pricingToggle`):** Smooth toggle between monthly and annual rates.
6. **FAQ Accordion (`.faq-item`):** Smooth height animation for objection handling.
