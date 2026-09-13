# PRAXIS — Design System & Craft Specification

Unified clinical communications and patient inbox platform for modern medical practices, telehealth clinics, and healthcare networks.

## 1. Overview & Aesthetic Commitment

- **Aesthetic:** High-Converting Clinical SaaS with Crisp Slate Architecture, Medical Blue Accents, and Tactile Micro-Interactions.
- **Concept:** *Praxis* (the practical application of medical care, freeing clinicians from fragmented phone calls, faxes, and portals).
- **Core Narrative:** "Run your practice from one calm inbox."
- **Rules:**
  - High-trust clinical palette: Surgical Slate Blue (`#0284C7`), Deep Medical Indigo (`#0F172A`), Pale Sterile Cyan tint (`#F0F9FF`), and Obsidian midnight (`#0B131F`) for high-contrast doctor spotlight testimonials.
  - Realistic multi-pane triage application mockup: 3-column architecture (navigation rail, prioritized patient inbox list with urgent triage pills, active conversation thread with HIPAA badges, and rich note/prescription composer).
  - Concrete functional mechanics: Live interactive IVR healthcare phone tree route switcher (`#testRouteBtn`), animated AI voicemail waveform player (`#waveformContainer` + `#waveformPlayBtn`), and 3-tier Monthly/Annual billing switcher (-25% discount).
  - Universal EHR Compatibility: 3D perspective cards showcasing Epic, AthenaHealth, DrChrono, Elation, TherapyNotes, and Cerner integrations.
  - Compliance & Trust: Built-in automated HIPAA BAA indicators, SOC2 Type II seals, and 256-bit encryption assurances.

## 2. Color Palette & Semantic Tokens

- **Surface Primary:** `#F8FAFC` (Slate 50) & `#FFFFFF` (Sterile White)
- **Surface Dark / Midnight:** `#0B131F` (95% pitch obsidian for high-contrast testimonial spotlight)
- **Primary Brand Accent:** `#0284C7` (Clinical Sky/Blue 600)
- **Primary Accent Hover:** `#0369A1` (Blue 700)
- **Text Dominant:** `#0F172A` (Slate 900)
- **Text Muted:** `#64748B` (Slate 500)
- **Border Subtle:** `#E2E8F0` (Slate 200)
- **Triage Badges:**
  - Urgent / Stat: `#DC2626` / `#FEF2F2` (Red)
  - Follow-up: `#D97706` / `#FFFBEB` (Amber)
  - Routine / Lab: `#059669` / `#ECFDF5` (Emerald)

## 3. Typography Hierarchy

- **Brand & Display:** `Plus Jakarta Sans` / `Inter` (geometric clinical sans with high legibility)
- **Code & Telemetry:** `JetBrains Mono` (for triage timestamps, EHR sync tokens, and routing IDs)

## 4. Key Interactive Components

1. **Patient Inbox Workspace:** Fully rendered 3-column clinical communications interface.
2. **Interactive IVR Simulator:** Live trigger demonstrating smart routing between triage nurses, on-call physicians, and prescription refills.
3. **AI Voicemail Player:** Animated dynamic waveform canvas with play/pause and real-time medical transcription preview.
4. **Interactive Pricing Switcher:** Smooth toggle switching between monthly and annual plans (-25% discount).
5. **Expandable Clinical FAQ:** Native zero-dependency accordion for HIPAA, EHR coexistence, and number porting questions.
