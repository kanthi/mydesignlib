# Rebuild prompt — Rigel (`rigel`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/rigel/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dark cosmic AI task workspace: ice-blue starfield beam, glass dashboard, 2×2 feature specimens, integration constellation, and waitlist access.

## Title
Rigel — Plan less. Get more done.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Outfit:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Outfit", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --surface-page: #05060c;
  --surface-raised: #0c1020;
  --text-primary: #e8eeff;
  --text-secondary: #8b93b0;
  --border-default: #1c2440;
  --action-primary: #4e7bff;
  --action-primary-hover: #3d68e8;
  --status-up: #3ddc97;
  --text-display: clamp(2.6rem, 6vw, 4.4rem);
  --text-3xl: clamp(2rem, 4vw, 3rem);
  --text-2xl: 1.85rem;
  --text-xl: 1.35rem;
  --text-base: 1.02rem;
  --text-sm: 0.88rem;
  --text-xs: 0.72rem;
  --leading-tight: 1.08;
  --leading-body: 1.55;
  --tracking-display: -0.04em;
  --section-y: clamp(4.5rem, 10vw, 7.5rem);
  --wrap: min(1120px, 100% - 2.5rem);
  --radius-sm: 10px;
  --radius: 16px;
  --radius-lg: 22px;
  --radius-pill: 999px;
  --glow: 0 30px 80px rgba(78, 123, 255, 0.18);
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-header
  - a: Rigel → index.html
  - nav .nav-links “Primary”
    - a: Home → #main
    - a: Features → #features
    - a: Pricing → #pricing
    - a: Support → #support
  - a: Log in → #login
- main #main
  - section .hero
    - h1: The future of note taking starts with AI
    - p: Plan less, focus more. A personal task workspace, rebuilt for deep work.
    - form #waitlist .wait
      - button: Get access
    - h3: Tracking history
    - h3: Recent activity
    - ul .acts
      - li: App features spec3h
      - li: Website copy pass5h
      - li: Onboarding checklist1d
      - li: Sprint backlog1d
  - section .logos
    - p: Trusted by product teams who ship on quiet weeks.
  - section #features .features.wrap
    - h2: Do less planning. Get more done.
    - article .feat
      - h3: Prompt to task
      - p: Type the thought. Rigel turns it into a task — instantly, with a title, owner, and next step.
      - p: Brainstorm ideas Website copy
    - article .feat
      - h3: Smart sort
      - p: Tasks ordered by urgency, priority, and theme — without dragging a single row.
      - p: Breathe in. One task in view.
    - article .feat
      - h3: Zen focus mode
      - p: Stay in flow. One task at a time. No noise, no overload.
    - article .feat
      - h3: Idea graph
      - p: Unblock a blank page. Fresh angles on the work, linked to the people who own it.
      - p: Draft the onboarding note
  - section #integrations .integ.wrap
    - h2: Works with the tools you already run
    - p: Connect your existing workflow. No extra system of record — just a quieter layer on top.
    - a: Start connecting → #waitlist
  - section .how.wrap
    - h2: From chaos to clarity in four steps
    - article .step.is-open
      - button: 1. Type what you need
      - p: Rigel reads the sentence and builds a task list: titles, owners, and a first next action — in the same breath.
    - article .step
      - button: 2. Connect your apps
      - p: Docs, chat, and calendar stay where they are. Rigel writes the work back so nothing lives in a second inbox.
    - article .step
      - button: 3. Collaborate
      - p: Assign, comment, and keep one person on the hook. Quiet for everyone else.
    - article .step
      - button: 4. Review the week
      - p: A Friday view of what moved, what stalled, and what to drop. Then you close the laptop.
    - h3: Create a task
    - button: Create task
  - section .audience
    - h2: Built for real workflows. Designed for real people.
    - button: For individuals
    - button: For teams
    - button: For founders & PMs
    - p: Individuals
    - h3: Calm, clear, and made for solo flow.
    - ul
      - li: Stay in control of your time.
      - li: Capture tasks quickly, focus on one thing, and review progress without team noise.
    - a: Get access → #waitlist
    - p: Today · Later · Done
    - p: Finance app Landing and mobile notes
    - p: Teams
    - h3: One board. One owner. No status theater.
    - ul
      - li: Shared queue with named owners.
      - li: Writes back to the tools you already open every morning.
    - a: Get access → #waitlist
    - p: Mira, Cole, Leah
    - p: Founders & PMs
    - h3: See the week without a war room.
    - ul
      - li: Risks and stalled work on Monday, not Thursday.
      - li: A Friday review you can send as-is.
    - a: Get access → #waitlist
    - p: 3 risks · 1 decision
  - section .proof.wrap
    - h2: Trusted by teams who move fast
    - p: From solo designers to growing product teams — used to stay clear, focused, and in sync.
    - article .quote
      - p: “I'm not a tools person, but Rigel made it easy. I was up and running in five minutes. No tutorials. Straight to doing.”
    - article .quote
      - p: “Using Rigel feels like working inside a sketchbook. Clean, calm, responsive. A workspace that breathes with you.”
    - article .quote
      - p: “What I like most is that it doesn't try to be everything. Fast start, and the right balance between structure and freedom.”
    - article .quote
      - p: “Visibility into task states is the whole game. I know what's happening without pinging anyone.”
    - article .quote
      - p: “Our team feels like we're working in the same room — even when we're not. It's simple, and it stays simple.”
    - article .quote
      - p: “Friday review used to be a slide. Now it's a filter. I close the week in ten minutes.”
  - section #pricing .pricing.wrap
    - h2: Start free. Grow when the team does.
    - article .plan
      - h3: Spark
      - p: $0 / forever
      - ul
        - li: 1 seat
        - li: Prompt to task
        - li: Zen focus
        - li: Community support
      - a: Get access → #waitlist
    - article .plan.is-hot
      - h3: Orbit
      - p: $12 / seat / mo
      - ul
        - li: Up to 20 seats
        - li: Smart sort + idea graph
        - li: App connections
        - li: Email support
      - a: Get access → #waitlist
    - article .plan
      - h3: Constellation
      - p: $28 / seat / mo
      - ul
        - li: Unlimited seats
        - li: SSO and audit log
        - li: Shared Friday review
        - li: Named success lead
      - a: Talk with us → #waitlist
  - section #support .wrap.faq
    - h2: Support
    - p: Quick answers. For everything else: hello@rigel.example
    - button: Is this a second to-do app? +
    - p: No. Rigel sits on the tools you already run and turns thoughts into owned work. The CRM, docs, and chat stay put.
    - button: When does access open? +
    - p: We send seats in weekly batches. Join the list from the hero — no card until you accept.
    - button: Can a whole team start on Spark? +
    - p: Spark is one seat. Orbit is the team plan. We credit unused Spark time if you upgrade in the first month.
    - button: Where is data hosted? +
    - p: US and EU residency. Encryption in transit and at rest. Constellation adds SSO and an audit log.
- footer .site-footer
  - a: Rigel → index.html
  - p: A task workspace for deep work. Sample template.
  - h3: Product
  - a: Features → #features
  - a: Pricing → #pricing
  - a: Integrations → #integrations
  - h3: Company
  - a: Support → #support
  - a: Contact → mailto:hello@rigel.example
  - h3: Account
  - a: Log in → #login
  - a: Get access → #waitlist
- h2: Log in
- form #login-form
  - label: Work email
  - label: Password
  - button: Log in
- p: Close

## Images in the page
- `assets/mark.svg`
- `assets/face-1.jpg`
- `assets/face-2.jpg`
- `assets/face-3.jpg`
- `assets/face-4.jpg`
- `assets/face-5.jpg`
- `assets/face-6.jpg`

## Fields
Keep these controls, including ids and placeholders.
- input[email] name=email placeholder='Your email address'
- input[email] #lemail
- input[password] #lpw

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `app.js`
- `assets/face-1.jpg`
- `assets/face-2.jpg`
- `assets/face-3.jpg`
- `assets/face-4.jpg`
- `assets/face-5.jpg`
- `assets/face-6.jpg`
- `assets/hero-stars.jpg`
- `assets/mark.svg`
- `assets/planet-rim.jpg`
- `index.html`
- `preview.jpg`
- `styles.css`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
