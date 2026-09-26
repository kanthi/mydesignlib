# Rebuild prompt — Vespera (`vespera`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/vespera/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Twilight analytics product — ice-to-ember horizon bloom, overlapping glass boards, dusk-watch process, fictional sources.

## Title
Vespera — See the shift coming

## Description meta
Fictional dusk-watch analytics. Live boards, shared rooms, no warehouse ticket.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Epilogue", system-ui, sans-serif;
  --font-body: "Source Sans 3", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #07080c;
  --surface-plate: #0c0e16;
  --surface-glass: rgba(14, 18, 28, 0.72);
  --text-primary: #f3efe6;
  --text-secondary: #9aa3b5;
  --text-faint: #6b7384;
  --border-default: rgba(243, 239, 230, 0.10);
  --ice: #3ba7ff;
  --ember: #e8923a;
  --action-primary: #e8923a;
  --on-action: #1a1006;
  --status-danger: #e25a4a;
  --text-display: clamp(2.15rem, 5.6vw, 4.15rem);
  --text-3xl: clamp(1.85rem, 3.4vw, 2.65rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.72rem;
  --leading-display: 1.02;
  --leading-body: 1.6;
  --track-display: -0.038em;
  --section-y: clamp(4.5rem, 9vw, 7.25rem);
  --wrap: 1120px;
  --page-pad: 1.25rem;
  --radius-plate: 20px;
  --radius-glass: 18px;
  --radius-inner: 14px;
  --radius-btn: 10px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --page-pad: 1.15rem; }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-head
  - a: Vespera → #top
  - nav #nav .nav-pill “Primary”
    - a: Features → #features
    - a: Process → #process
    - a: Pricing → #pricing
    - a: Sources → #integrations
    - a: Contact → #contact
    - a: Log in → #login-anchor
  - button: Log in
- main #main
  - section #top .hero
    - p: First light to last lamp.
    - h1: See the shift coming. Move before it lands.
    - p: Vespera connects the sources you already keep and draws a live board — no warehouse ticket, no Friday deploy.
    - a: Open a board → #contact
    - a: See plans → #pricing
    - article .board.board-left
      - p: Intake
      - p: $24,180
      - p: Settled this watch
    - article .board.board-mid
      - p: 78.32%
      - p: +41.6% vs last dusk
    - article .board.board-right
      - p: Due this watch
      - p: 14 rooms
      - p: Open on the floor
  - section #features
    - h2: Built for rooms that think in numbers
    - p: Vespera gives the floor one board to watch, shape, and hand off — without waiting on a queue or exporting a Friday CSV.
    - article .plate.reveal
      - h3: Connect anything — instantly
      - p: Plug Gridbook, a warehouse, a webhook, or a CSV. The board lights when the source does.
    - article .plate.reveal
      - h3: Drag the board
      - p: Tiles snap. Fields bind. A chart is a tile you place, not a ticket you file.
    - article .plate.reveal
      - h3: Chart the night
      - p: Bars, sparks, and gauges on the same plate. Thresholds go ember when they break.
    - article .plate.reveal
      - p: Floor · West desk
      - p: 23 on the board
      - h3: Share the room
      - p: One link. The floor watches the same dusk. Comments sit on the number they mean.
  - section #process
    - h2: Four stations from first light
    - p: Not a funnel. A watch. Source, shape, stay with the board, then hand the room — in that order, because the night only runs one way.
    - ol .dusk.reveal
      - li: 01 · Source Plug the pipes Gridbook, Relic, a webhook, a dropped CSV. The board is dark until a source speaks.
      - li: 02 · Shape Lay the tiles Drag a gauge onto intake. Bind a spark to last dusk. Nothing compiles. Nothing waits.
      - li: 03 · Watch Stay after hours Thresholds hold. Ember if they break. The board does not sleep when the floor does.
      - li: 04 · Hand Send the room A link, not a screenshot. Fourteen people, one number, comments pinned to the point they saw.
  - section #integrations
    - h2: Sources the board already knows
    - p: Fictional pipes, real shape. Bring a sheet, a warehouse, a hook, or a file. We do not badge other people’s marks.
    - p: GridbookLive sheet
    - p: Relic SQLWarehouse
    - p: WebhooksEvent in
    - p: Tide CSVFile drop
    - p: RelayRoom chat
    - p: FolioNotes
    - p: NorthmailDigest
    - p: VaultfileLocked store
  - section #pricing
    - h2: A desk, a floor, or the hall
    - p: Start on a desk. Move to the floor when the room is real. Hall is for campuses that need a lock on the door.
    - article .plan.reveal
      - p: Desk
      - p: $0 / forever
      - ul
        - li: Two boards
        - li: One room
        - li: Seven-day history
        - li: Gridbook and CSV
      - a: Start on a desk → #contact
    - article .plan.plan-floor.reveal
      - p: Floor
      - p: $48 / seat · month
      - ul
        - li: Unlimited boards
        - li: Twelve rooms
        - li: Live ember alerts
        - li: Relic + webhooks
      - a: Open a board → #contact
    - article .plan.reveal
      - p: Hall
      - p: $160 / seat · month
      - ul
        - li: Everything on Floor
        - li: SSO and audit log
        - li: Warehouse sync
        - li: Named watch hours
      - a: Talk to the hall → #contact
  - section #contact .close
    - h2: The board is already dark. Open one.
    - p: Tell us the room and the first source. We light a desk the same day — sample template, not a live queue.
    - form .ask
      - label: Name
      - label: Work email
      - label: First source and room
      - button: Open a board
- footer
  - p: Vespera · Sample template
  - p: hello@vespera.example
- dialog #login
  - h2: Log in to the floor
  - form
    - label: Email
    - label: Password
    - button: Close
    - button: Enter

## Fields
Keep these controls, including ids and placeholders.
- input[text] #name name=name
- input[email] #email name=email placeholder='you@team.example'
- textarea #note name=note placeholder='Relic on the west desk, intake + late orders.'
- input[email] #lemail
- input[password] #lpass

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
