# Rebuild prompt — Sonant (`sonant`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/sonant/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Generative neural voice synthesis and low-latency audio intelligence engine with real-time morphing ribbon wave canvas, interactive prompt composer, equalizer bars, and multi-modal audio lab switchers.

## Title
Sonant — Generative Audio & Neural Voice Platform

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #f8fafc;
  --bg-card: #ffffff;
  --border: rgba(0, 0, 0, 0.08);
  --border-focus: rgba(139, 92, 246, 0.4);
  --text-main: #09090b;
  --text-muted: #64748b;
  --text-light: #94a3b8;
  --brand-violet: #8b5cf6;
  --brand-fuchsia: #ec4899;
  --brand-rose: #f43f5e;
  --brand-cyan: #06b6d4;
  --font-display: 'Space Grotesk', -apple-system, sans-serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav .nav-links
    - a: Platform → #models
    - a: Voice Lab → #demo
    - a: API → #developers
    - a: Enterprise → #enterprise
    - a: Pricing → #pricing
  - a: ← Library → ../../
  - button: Sign Up ↗
- section .hero
  - h1: Your Voice. Any Language. Infinite Scale.
  - p: Generate natural speech in seconds. Clone voices with precision. Deploy across apps, videos, podcasts, and products. Fast. Reliable. Studio-grade quality.
  - button: Start Creating
  - button: Contact Sales
- section #models .section-pad
  - h2: Studio-Grade Audio Synthesis
  - p: State-of-the-art diffusion transformers designed for ultra-low latency, emotional cadence, and acoustic fidelity.
  - h3: Zero-Shot Voice Cloning
  - p: Replicate vocal timbre, pacing, and emotional nuance from a 60-second audio recording with uncompromised clarity across 32 languages.
  - option: Rachel (Narrative Calibrated • EN)
  - option: Kenji (Technical Conversational • JP)
  - option: Elena (Warm Studio Radiance • ES)
  - button: Listen to Voice Sample
  - h3: Autonomous Voice Agents
  - p: Sub-80ms conversational turn latency built for real-time customer support, interactive games, and automated triage assistants.
- footer
  - p: Generative audio, neural voice cloning, and autonomous speech infrastructure for modern applications.
  - h4: Platform
  - ul
    - li: Voice Cloning
    - li: Voice Agents
    - li: Neural Dubbing
    - li: Design Library
  - h4: Company
  - ul
    - li: About Us
    - li: Security & Trust
    - li: Research Papers
    - li: Contact Enterprise

## Fields
Keep these controls, including ids and placeholders.
- input[text] #promptInput
- select #voiceSelect

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/audio-field-bg.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
