# Rebuild prompt — Carmine (`carmine`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/carmine/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Burgundy editorial sales desk: white application telemetry chrome, black-and-white operator portrait, and four quiet handoff stages.

## Title
Carmine — Lift the desk with a quieter agent.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600&family=Lora:ital,wght@0,500;0,600;1,500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --burgundy: #3E0D1C;
  --burgundy-deep: #2A0813;
  --cream: #F3EEE6;
  --ink: #1A1214;
  --muted: #8A7C76;
  --line: rgba(243, 238, 230, .35);
  --paper: #FFFFFF;
  --rule: rgba(26, 18, 20, .16);
  --font-display: "Lora", "Iowan Old Style", Palatino, Georgia, serif;
  --font-ui: "Albert Sans", "Avenir Next", "Segoe UI", sans-serif;
  --quiet: color-mix(in srgb, var(--ink) 70%, var(--cream));
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to the story → #features
- section #top .stage
  - header .nav
    - a: Carmine → #top
    - nav #site-nav .nav-links “Primary”
      - a: Home → #top
      - a: Features → #features
      - a: Notes → #notes
      - a: Studies → #studies
      - a: Desk → #desk
    - button: Menu
    - a: Sign up → mailto:hello@carmine.example
  - p: Carmine keeps a second room
  - h1: Lift the desk with a quieter agent.
  - p: It listens on the floor, then waits with a shorter list.
  - a: Get started → mailto:hello@carmine.example
  - p: 4.6 · from the floor
  - p: Today on the floor
  - ul .queue
    - li: Ivo RenReply waiting
    - li: Sera HoltOrder checked
    - li: Cal DunnHandoff ready
  - figure .shot
    - figcaption: Sell with a shorter list Hear the call Sort the queue Leave the draft
  - p: Trusted by a thousand desks
  - p: HarlPinderMossQuillanBex
- main
  - section #features .band
    - p: A second room, not a louder desk.
    - p: Today on the floor
    - ul .queue
      - li: Ivo RenReply waiting
      - li: Sera HoltOrder checked
      - li: Cal DunnHandoff ready
    - p: How the desk opens
    - p: Carmine sits with the closer and holds the list, the note, and the next sentence until a person is ready. The floor can stay noisy. This room does not.
    - a: Learn more → #desk
  - section #desk .band
    - h2: How a thread moves
    - ol .rows
      - li: 01 Listen It stays on the call and keeps only the lines the closer will need again.
      - li: 02 Sort Names fall into a shorter list, by who is ready, not by who shouted.
      - li: 03 Draft The reply uses the closer’s voice and does not send itself.
      - li: 04 Hand off A person receives the thread with the order and the next step already set.
  - section #notes .band
    - h2: Notes from the floor
    - p: Keep the list shorter than the noise around it.
    - p: Leave the draft in the closer’s words.
    - p: Send nothing until someone on the desk decides.
  - section #studies .band
    - h2: From desks already using it
    - ul .rows.studies
      - li: Harl Tuesday’s queue fits on a single page.
      - li: Pinder Replies wait in the closer’s own wording.
      - li: Moss An order leaves with a name, not a stack of open work.
      - li: Quillan Notes from the call are on the desk before the next meeting.
      - li: Bex The handoff names a person, not a shared pile.
  - section .band.close
    - h2: Lift the desk with a quieter agent.
    - a: Get started → mailto:hello@carmine.example
- footer .footer
  - a: Carmine → #top
  - nav .foot-links “Footer”
    - a: Home → #top
    - a: Features → #features
    - a: Notes → #notes
    - a: Studies → #studies
    - a: Desk → #desk
  - a: hello@carmine.example → mailto:hello@carmine.example
  - p: Sample template

## Images in the page
- `assets/profile.jpg — Nia Pell, Carmine operator, in profile`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/profile.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
