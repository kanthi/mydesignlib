# Rebuild prompt — Stave (`stave`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/stave/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
No-code portals from the tables you already keep: tilted intake mock, yellow meet-band, electric blue.

## Title
Stave — Customer portals from the tables you already keep

## Description meta
Stave turns business data into customer portals, CRMs, and internal tools. Live in an afternoon, not a quarter.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --surface-frame: #2563EB;
  --surface-page: #ffffff;
  --surface-soft: #F4F6F8;
  --surface-hero-a: #3B82F6;
  --surface-hero-b: #E8F1FF;
  --surface-meet-a: #F5C400;
  --surface-meet-b: #FFE56A;
  --surface-dark: #111827;
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --text-on-accent: #ffffff;
  --text-on-meet: #111827;
  --border-default: #E5E7EB;
  --action-primary: #2563EB;
  --action-primary-hover: #1D4ED8;
  --status-success: #16A34A;
  --text-display: clamp(2.35rem, 5.4vw, 3.65rem);
  --text-3xl: clamp(1.85rem, 3.4vw, 2.6rem);
  --text-2xl: clamp(1.45rem, 2.2vw, 1.85rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --leading-tight: 1.08;
  --leading-snug: 1.2;
  --leading-body: 1.55;
  --tracking-display: -0.035em;
  --section-y: clamp(3.75rem, 8vw, 6.25rem);
  --wrap: min(1120px, 100% - 2.5rem);
  --sheet-gutter: clamp(0.6rem, 2vw, 1.15rem);
  --radius-sheet: 28px;
  --radius-hero: 22px;
  --radius-card: 20px;
  --radius-inner: 14px;
  --radius-pill: 999px;
  --shadow-mock: 0 28px 70px rgba(37, 99, 235, 0.22);
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --radius-sheet: 16px; }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header #nav .nav
  - a: stave → #top
  - nav .nav-links “Primary”
    - a: Home → #top
    - a: Solutions → #solutions
    - a: Product → #product
    - a: Resources → #resources
    - a: Pricing → #pricing
  - a: Book a demo → mailto:hello@stave.example
  - a: Start for free → #pricing
  - a: Solutions → #solutions
  - a: Product → #product
  - a: Resources → #resources
  - a: Pricing → #pricing
  - a: Book a demo → mailto:hello@stave.example
- main #main
  - section #top .hero
    - h1: Go-to platform for building customer portals from your data
    - p: Stave turns the tables you already keep into customer portals, CRMs, and internal tools. Live in an afternoon, not a quarter.
    - a: Start for free → #pricing
    - a: Book a demo → mailto:hello@stave.example
    - h3: Intake
    - nav “App”
      - a: Dashboard → #product
      - a: Customers → #product
      - a: Deals → #product
      - a: Reports → #product
    - article .ui-card.card-profile
      - h4: Maren Holt
      - p: CFO at Arden
      - p: Lisbon, Portugal
    - article .ui-card.card-onboard
      - h4: Onboarding
      - ul .checks
        - li: Sign the master services note
        - li: Connect billing contact
        - li: Open the client workspace
    - article .ui-card.card-company
      - h4: Arden
      - dt: Employees
      - dd: 400 – 800
      - dt: Headquarters
      - dd: Lisbon
      - dt: Website
      - dd: arden.example
    - article .ui-card.card-comments
      - h4: Comments
      - p: Ship the hard parts while they are still small. The rest follows.
      - p: Give the client a login. Stop mailing spreadsheets at midnight.
      - p: When the number lives in one place, the meeting gets shorter.
  - section #resources .proof.wrap.reveal
    - p: +42,800 ops teams at companies worldwide build on Stave
    - a: Read customer stories → #stories
    - ul .partners “Teams on Stave”
      - li: Northspin
      - li: Dunlin
      - li: Harborline
      - li: Rivet
      - li: Cinder
      - li: Oakline
      - li: Fathom
      - li: Meridian
  - section .problem.wrap.reveal
    - p: Are you tired of the daily scramble of running a business? The constant juggling between tools, the hunt for a number that lives in three places, and the workflows that seem to have a mind of their own — it’s draining.
    - p: What if the portal was already sitting on the table you keep?
  - section #product .meet.wrap.reveal
    - h2: Meet Stave
  - section #solutions .features.wrap
    - article .feat.feat-site.reveal
      - h3: A fully functioning website from your data
      - p: Connect the tables you already keep and you get a live app — login, records, forms, and buttons — without a build ticket.
    - article .feat.feat-perm.reveal
      - h3: Sensitive data is safe to share
      - p: Select who can see a record, invent roles with field-level hide, and send a login link that you can revoke at 4pm.
  - section .connect.wrap.reveal
    - h2: Stave sits in the middle of the tools you already keep
    - p: Point it at the ledger, the grid, or the mail fold. The portal is the layer your customers actually open.
  - section #stories .uses.wrap.reveal
    - h2: Four portals teams actually ship
    - article .use
      - h3: Customer portal
      - p: Let clients see orders, files, and invoices without a mailbox thread that dies on Friday.
    - article .use
      - h3: Internal CRM
      - p: One record per account, owned by the person who actually talks to them — not a board nobody opens.
    - article .use
      - h3: Vendor hub
      - p: POs, certificates, and renewal dates on a login you can revoke when the contract ends.
    - article .use
      - h3: Ops tracker
      - p: The board your warehouse already keeps, with roles so finance only sees cost.
  - section .steps.wrap.reveal
    - article .step
      - h3: Point Stave at the table
      - p: Gridbook, Basewell, or a CSV you export on Mondays. Fields map once; the portal stays live.
    - article .step
      - h3: Shape pages, forms, and roles
      - p: Pick the records a customer can touch. Hide cost. Require a signature before the next step.
    - article .step
      - h3: Send a login link
      - p: Hosted auth, your mark on the door. Revoke access without filing a ticket.
  - section #pricing .pricing.wrap.reveal
    - h2: Start free. Pay when the portal is doing work.
    - p: Every plan includes hosted login and the stave-beam mark on your portal.
    - article .plan
      - h3: Starter
      - p: $0 / month
      - ul
        - li: 1 live portal
        - li: 2 roles
        - li: Stave-hosted login
        - li: Community notes
      - a: Start for free → mailto:hello@stave.example?subject=Start%20Starter
    - article .plan.featured
      - h3: Team
      - p: $49 / month
      - ul
        - li: 10 portals
        - li: Custom roles
        - li: Field-level hide
        - li: Shared workspace
      - a: Start Team → mailto:hello@stave.example?subject=Start%20Team
    - article .plan
      - h3: Company
      - p: $149 / month
      - ul
        - li: Unlimited portals
        - li: SAML sign-in
        - li: Audit log
        - li: Named success lead
      - a: Talk to us → mailto:hello@stave.example?subject=Company%20plan
  - section .close.wrap.reveal
    - h2: Build the portal this afternoon.
    - p: Start free on your own tables. Book a demo if you want a workspace set up with you.
    - a: Start for free → mailto:hello@stave.example?subject=Start%20for%20free
    - a: Book a demo → mailto:hello@stave.example
- footer .site-foot
  - a: stave → #top
  - p: Customer portals, CRMs, and internal tools from the tables you already keep.
  - h4: Product
  - ul
    - li: Portal builder
    - li: Roles & permissions
    - li: Pricing
  - h4: Solutions
  - ul
    - li: Customer portal
    - li: Internal CRM
    - li: Vendor hub
  - h4: Resources
  - ul
    - li: Customer stories
    - li: Guides
    - li: Support
  - h4: Company
  - ul
    - li: Contact
    - li: hello@stave.example

## Images in the page
- `assets/maren.jpg`
- `assets/nico.jpg`
- `assets/tomas.jpg`
- `assets/priya.jpg`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='To do…'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/maren.jpg`
- `assets/nico.jpg`
- `assets/priya.jpg`
- `assets/tomas.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
