# Rebuild prompt — Kalliope (`kalliope`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/kalliope/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous multilingual AI voice receptionist website with Scandinavian minimalism, pinstripe accents, acoustic orb resonance, bento metrics, and live voice audio simulation.

## Title
Kalliope — Autonomous Multilingual AI Voice Receptionist

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-white: #FFFFFF;
  --bg-subtle: #FBFBFC;
  --bg-card: #F7F7F8;
  --text-main: #111111;
  --text-muted: #666666;
  --text-light: #999999;
  --border-color: #E8E8E8;
  --border-dark: #111111;
  --accent-green: #4F7942;
  --accent-blue: #0070F3;
  --font-main: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Kalliope → #
  - ul .nav-links
    - li: Agents
    - li: Benefits
    - li: How It Works
    - li: Pricing
    - li: FAQs
  - button: Book A Demo
- main
  - section .hero-section
    - h1: Never miss a phone call again.
    - p: Kalliope, your multilingual AI receptionist, answers every call 24/7, books appointments into your calendar, and handles routine patient and client questions with zero latency.
    - button: Book A Demo
    - a: Hear Voice Samples → #demo
  - section .trust-section
  - section #benefits .problem-section
    - h2: One missed call is all it takes to lose a client forever.
    - p: A hurried receptionist, an unanswered phone call during peak clinic rush, or a generic voicemail after hours immediately drives potential patients or high-value clients straight to your competitors.
    - p: Human front-desk teams need breaks, sick days, lunch hours, and sleep. Call volume doesn't care.
    - p: Kalliope answers every call within two rings, speaks kindly in 80+ native accents, and never takes a day off.
  - section #agents .bento-section
    - h2: More efficient than any human receptionist.
    - h3: Works 24/7 without exception
    - p: No breaks, no sick days, no maternity leave. Absolute uptime and availability every minute of every day.
    - h3: Handles multiple calls at once
    - p: Kalliope answers simultaneous inbound calls concurrently so no caller is left on hold or sent to voicemail.
    - h3: Speaks 80+ languages
    - p: Makes your practice fully accessible to callers from diverse linguistic backgrounds without extra bilingual staff.
    - h3: Books appointments automatically
    - p: Schedules directly into your Google Calendar, Outlook, Epic, Dentrix, or custom EHR without human intervention.
    - h3: Dramatically lowers staff costs
    - p: A full-time front desk costs thousands per month. Kalliope delivers infinite scale for a fraction of the payroll.
  - section .quote-section
    - p: "Kalliope cut our front-desk phone overload by 60% within weeks. She now handles all appointment intakes so our nurses focus exclusively on patient care."
  - section #how .how-section
    - h2: From zero to live AI voice agent in 3-4 weeks
    - h3: We train Kalliope on your verified business data
    - p: She is trained exclusively on your clinic guidelines, pricing rules, doctor schedules, and triage boundaries. Pre-configured with medical and legal vocabulary so every answer remains accurate, compliant, and strictly on-brand.
  - section #demo .simulator-section
    - h3: Live Receptionist Audio Preview
    - p: Test simulated phone call interaction in real-time
    - button: ▶ Simulate Inbound Dental Call
- footer .site-footer

## Images in the page
- `assets/hero-stepped-gradient.png`
- `assets/orb-voice.svg — Luminous Acoustic Orb`
- `assets/quote-stepped-gradient.png`
- `assets/orb-voice.svg`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-stepped-gradient.png`
- `assets/logo.svg`
- `assets/orb-voice.svg`
- `assets/quote-stepped-gradient.png`
- `assets/stepped-pyramid.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
