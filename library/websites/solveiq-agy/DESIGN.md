# Solveiq Design System

## Brand
- **Name:** Solveiq
- **Tagline:** Close tickets faster. Keep customers longer.
- **Audience:** Customer success teams, support ops leads at mid-market SaaS companies.
- **Aesthetic:** Dark editorial tech. Inspired by monitoring dashboards but with editorial warmth from amber.

## Colors
- `--surface-page`: `#0c0e10` (Charcoal black)
- `--surface-card`: `#141719` (Elevated dark grey)
- `--surface-hover`: `#1e2226`
- `--text-primary`: `#f0ece4` (Warm white)
- `--text-secondary`: `#8a8f96` (Muted steel)
- `--border-default`: `#242830` (Subtle border)
- `--action-primary`: `#f59e0b` (Amber)
- `--accent-dim`: `#92400e` (Deep amber for hover/accents)
- `--success-dim`: `#064e3b`
- `--success-text`: `#34d399`

## Typography
- **Display:** Space Grotesk (Google Fonts)
- **Body:** IBM Plex Sans (Google Fonts)
- **Scale:**
  - H1: `clamp(2.8rem, 5vw, 4.2rem)`
  - H2: `clamp(2.2rem, 4vw, 3rem)`
  - H3: `clamp(1.5rem, 3vw, 2rem)`
  - Body Large: `1.125rem`
  - Body: `1rem`
  - Body Small: `0.875rem`

## Components
- **Buttons:** Amber primary, sharp or slightly rounded corners, dark text for contrast.
- **Cards:** Elevated charcoal surface with subtle border, no heavy drop shadows, relying on borders and background color separation.
- **Hero Device:** Pure CSS HTML-rendered mock of an inbox floating UI, showing an AI drafting a reply.

## Layout & Motion
- Strict CSS Grid/Flexbox
- `prefers-reduced-motion` support
- Mobile responsive

