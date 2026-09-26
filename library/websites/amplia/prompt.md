# Rebuild prompt — Amplia (`amplia`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/amplia/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Clean growth-marketing agency with measured-growth badge, vector coastal panorama, service stats, and simple retainers.

## Title
Amplia — Marketing That Moves Your Business Forward

## Description meta
Amplia is a fictional growth marketing agency: paid social, paid search, SEO and creative strategy. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --ink:#0B0B0C; --mut:#5c5c60; --paper:#fff; --wash:#F4F4F2; --line:#E7E7E3;
  --sky:#7FB6E4; --sea:#2E7FA8; --grass:#9AA04C;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .wrap
  - nav .nav “Primary”
    - a: Amplia → #top
    - a: Industries → #services
    - a: Services → #services
    - a: Work → #work
    - a: About → #results
    - a: Contact → #final
    - a: Book A Call → #final
    - button: MENU
  - a: Industries → #services
  - a: Services → #services
  - a: Work → #work
  - a: About → #results
  - a: Contact → #final
- main #top
  - section .wrap.hero
    - h1: Marketing that movesyour business forward
    - p: From strategy to creative and optimization, we build campaigns that get noticed, generate qualified traffic, and deliver real business growth
    - a: Book A Free Call → #final
  - section .wrap.clients
    - p: TRUSTED BY FICTIONAL TEAMS
  - section #services .wrap.block
    - p: 01 — SERVICES
    - h2: Full-funnel, minus the hand-waving.
    - p: Four crafts, one shared dashboard. Every engagement starts with measurement — so growth is a number, not a narrative.
    - h3: Paid Social
    - p: Prospecting and retargeting across social feeds, tuned weekly against cost-per-qualified-visit.
    - p: 0x avg. ROAS
    - h3: Paid Search
    - p: High-intent capture on search — structured campaigns, tight negatives, landing pages that close.
    - p: 0% lower CAC
    - h3: SEO
    - p: Compounding organic growth: technical fixes, editorial engines, and links worth having.
    - p: +0% organic traffic
    - h3: Creative Strategy
    - p: Hooks, angles, and iterations — a testing roadmap that feeds every channel at once.
    - p: 0+ creatives / quarter
  - section #results .wrap
    - p: 02 — HOW WE WORK
    - h2: Measure first. Scale what works.
    - p: WEEK 01–02
    - h3: Audit & baseline
    - p: Tracking, analytics, and creative teardown. You get a measurement plan before a single dollar moves.
    - p: WEEK 03–06
    - h3: Test & learn
    - p: Structured experiments across audiences, angles, and offers. Losers die fast; winners get budget.
    - p: WEEK 07+
    - h3: Scale & compound
    - p: Winners scale into always-on engines while SEO and creative compound underneath.
  - section #work .wrap.block
    - p: 03 — SELECTED WORK
    - h2: Growth, itemized.
    - h3: Copperline Coffee — from local roast to national subscription
    - p: Paid social + CRO · 4.6x ROAS in two quarters (fictional).
    - h3: Northbeam Legal — pipeline from search, not referrals
    - p: Paid search + landing system · −38% cost per matter (fictional).
    - h3: Fieldnotes Supply — organic as a growth channel
    - p: SEO + creative · +240% organic revenue YoY (fictional).
    - p: “Amplia killed our worst-performing 70% in week three — and scaled the rest past anything we'd done in-house.”
  - section #pricing .wrap.block
    - p: 04 — ENGAGEMENTS
    - h2: Simple retainers.
    - p: Fictional sample prices. No percentage-of-spend games, no twelve-month lock-ins.
    - h3: LAUNCH
    - p: $2.4k/mo
    - ul
      - li: 1 channel, fully managed
      - li: Monthly creative sprint
      - li: Live dashboard
      - li: Async support
    - a: Choose Launch → #final
    - h3: GROWTH
    - p: $4.8k/mo
    - ul
      - li: 3 channels, fully managed
      - li: Bi-weekly creative sprints
      - li: CRO + landing tests
      - li: Slack line to strategist
    - a: Choose Growth → #final
    - h3: SCALE
    - p: Custom
    - ul
      - li: Embedded growth squad
      - li: Creative studio on tap
      - li: Board-ready reporting
      - li: Quarterly roadmaps
    - a: Talk to us → #final
  - section #final .wrap.final
    - h2: Let's move your business forward.
    - a: Book A Free Call → #top
    - p: hello@amplia.example · replies within one business day
- footer .wrap
  - a: BACK TO TOP ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
