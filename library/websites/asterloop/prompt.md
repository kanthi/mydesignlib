# Rebuild prompt — Asterloop (`asterloop`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/asterloop/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cosmic operations automation with a luminous signal-path hero, modular workflow engine, interactive use-case selector, lead-routing board, daily-ops timeline, and a clear three-step setup story.

## Title
Asterloop — Work moves on its own

## Description meta
A calmer way to connect the work your team repeats every day.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{--surface-night:#090b20;--surface-paper:#f4f3f8;--surface-card:#fff;--text-primary:#17172a;--text-on-night:#f8f7ff;--text-muted:#77758d;--action-primary:#5e53ea;--signal-cyan:#68ddf4;--border-default:#e4e2ed;--font-display:"Space Grotesk",sans-serif;--font-body:"DM Sans",sans-serif;--section-y:clamp(5rem,10vw,9rem);--wrap:min(1200px,100% - 3rem);--radius-card:18px;--ease:cubic-bezier(.2,.8,.2,1)}
```

## Page outline
Reading order. Text after the colon is exact copy.
- main
  - section #top .hero
    - nav .nav “Main navigation”
      - a: Asterloop → #top
      - a: Workflows → #workflows
      - a: How it works → #method
      - a: About → #about
      - a: Map a workflow ↗ → mailto:hello@asterloop.example
    - h1: Let the busywork find its own way.
    - p: Automate repeatable work, connect your tools, and give your team more time to focus on what matters.
    - button: Lead intake
    - button: Customer care
    - button: Operations
    - button: Campaigns
    - button: Reporting
  - section #about .section
    - h2: Good work has a rhythm.
    - p: But the small tasks between the big ones can break it. Asterloop connects the steps your team already follows and keeps each handoff moving.
  - section #workflows .section.workflows
    - h2: Let the handoff happen in the background.
    - p: Keep every important detail close to the work. Start with a pattern your team knows, then shape it around the way you work.
    - article .workflow-card.wide
      - h3: Every new lead lands with context.
      - p: Sort the request, pull the right account details, and put a clear next step in front of the right person.
      - a: Explore lead routing → mailto:hello@asterloop.example
    - article .workflow-card.slim-card
      - h3: Close the loop before the day closes.
      - p: Move approvals, reminders, and follow-ups forward with one dependable route.
      - a: Explore daily ops → mailto:hello@asterloop.example
  - section #method .section.dark-band
    - h2: A clear route from idea to done.
    - p: Build the first useful connection in an afternoon. Keep every step visible, and adjust the route as your team learns.
    - article .step
      - h3: Choose a repeat
      - p: Pick a handoff that happens often and has a clear finish line.
    - article .step
      - h3: Connect the signal
      - p: Bring in the tools and context that help the next action make sense.
    - article .step
      - h3: Watch it move
      - p: Review every run, then tune the route with your team.
  - section .section
    - figure
      - blockquote: We got our best hours back. The team knows what is moving, and nothing disappears between tools.
      - figcaption: Rina Patel · Operations lead, fictional sample studio
  - section .final-cta
    - h2: Give your team its focus back.
    - p: Find one repeatable task. We’ll help you map the route that moves it forward.
    - a: Map a workflow → mailto:hello@asterloop.example
- footer .footer
  - a: Asterloop → #top
  - p: Sample website template · Fictional brand
  - a: Workflows → #workflows
  - a: How it works → #method
  - a: Contact → mailto:hello@asterloop.example

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-horizon.png`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
