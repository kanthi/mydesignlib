# Rebuild prompt — Courtside (`courtside`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/courtside/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Championship tennis club and high-performance academy featuring massive poster typography (Own The Court), neon sticker badge (Show Up, Level Up), court series proof metrics, 4-tier training program stack, and live court telemetry.

## Title
Courtside — Own The Court | Championship Tennis Club & Academy

## Description meta
From first-timers to nationally ranked juniors, players train here because the progress shows up on the court. Premier tennis academy and private club.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --court-blue: #071224;
  --court-blue-card: #0c1c38;
  --court-blue-surface: rgba(12, 28, 56, 0.7);
  --chalk-white: #ffffff;
  --text-muted: #94a3b8;
  --tennis-ball: #ccff00;
  --tennis-ball-glow: rgba(204, 255, 0, 0.3);
  --border-line: rgba(255, 255, 255, 0.12);
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'Space Grotesk', monospace;
  --radius-pill: 9999px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: Programs & Coaches → #programs
  - a: Club & Events → #events
  - a: Courtside → #
  - a: Book a Visit → #programs
- section .hero-section
  - h1: Own The Court
  - p: Reserve a court for focused practice, squad drills, or private sessions — and train in the same conditions you'll compete in.
  - a: Explore Programs → → #programs
- section .proof-section
  - h2: Trusted by serious players
  - p: From first-timers to nationally ranked juniors, players train here because the progress shows up on the court. Precision coaching meets championship grounds.
  - p: Centre hardcourts and indoor clay suites currently operating at peak session capacity. Evening academy slots open for reservation.
- section #programs .programs-section
  - h2: Built for every level
  - h3: Junior Development
  - p: Fundamentals, footwork, and match play for ages 6–14.
  - h3: High Performance Squad
  - p: Tournament prep, match strategy, and mental resilience for ranked juniors.
  - h3: Adult Masterclass
  - p: Tactical conditioning, serve velocity, and doubles positioning for club competitors.
  - h3: Private Tour Coaching
  - p: 1-on-1 personalized technical overhaul with high-speed video telemetry analysis.
- section #events .numbers-section
  - h2: A club that keeps score
- footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
