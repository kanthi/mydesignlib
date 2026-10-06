# Rebuild prompt — Parley (`parley`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/parley/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Atmospheric hillside talk capture platform: white meeting report window, audience room tiers, and three-step conversational indexing.

## Title
Parley — Record talks. Stay on track.

## Description meta
Parley keeps a talk as notes, a summary, and the next step while people are still in the room.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,500;1,8..60,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #F7F7F5;
  --ink: #141414;
  --muted: #5E675F;
  --line: #E4E4E0;
  --card: #FFFFFF;
  --card-ink: #111111;
  --on-ink: #F7F7F5;
  --font-display: "Source Serif 4", Georgia, serif;
  --font-ui: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 180ms;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #use
- header .nav-bar
  - a: Parley → #product
  - nav .nav-menu “Main Navigation”
    - a: Product → #product
    - a: Use → #use
    - a: Notes → #method
    - a: Security → #security
    - a: Pricing → #pricing
  - button: Sign in
  - a: Start free → mailto:hello@parley.example
  - button: Menu
  - a: Product → #product
  - a: Use → #use
  - a: Notes → #method
  - a: Security → #security
  - a: Pricing → #pricing
  - a: Sign in → mailto:hello@parley.example
- section .hero
  - h1: Record talks. Stay on track.
  - p: Notes, a summary, and the next step, taken while the room is still talking.
  - a: Get started → mailto:hello@parley.example
  - a: Book a call → mailto:hello@parley.example
- main
  - section #use .section-use
    - h2: A talk becomes a list you can run.
    - article .audience-card
      - h3: Desks
      - p: Clear action points and agreed dates ready before the room moves on to the next topic.
    - article .audience-card.founders
      - h3: Founders
      - p: Keep customer calls, board check-ins, and product syncs in one accountable timeline.
      - a: Read the note → #method
    - article .audience-card
      - h3: Studios
      - p: Creative reviews and design briefs preserved without interrupting creative momentum.
  - section #method .section-method
    - h2: Three steps to clean decisions.
    - ol .method-steps
      - li: 01 Listen Passive acoustic capture records natural conversational cadence without requiring explicit cues.
      - li: 02 Mark Identifies key decisions, open questions, and owners in real-time as they emerge in dialogue.
      - li: 03 Send Delivers structured meeting records directly to participants the instant the conversation concludes.
  - section #pricing .section-close
    - h2: Record talks. Stay on track.
    - a: Get started → mailto:hello@parley.example
- footer #security .page-footer
  - a: Parley → #product
  - a: Product → #product
  - a: Use → #use
  - a: Notes → #method
  - a: Security → #security
  - a: Pricing → #pricing
  - a: hello@parley.example → mailto:hello@parley.example

## Images in the page
- `assets/hills.jpg — Soft rolling hills under atmospheric daylight`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hills.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
