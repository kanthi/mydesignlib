# Rebuild prompt — Velora HR (`velora-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/velora-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Keep the stack already in this folder (package.json, source, and built assets). Do not convert it to a different framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Next-generation workforce operating system & people operations platform — deep wine sangria gradient header with glowing crimson horizon arc, floating executive video briefing stage, clean white alternating feature suite with interactive leave request simulator, shift scheduling matrix, records ledger, and 3D isometric ROI pillars.

## Title
Velora HR — Manpower Your Workforce With An HR System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tailwind colors
Keep these color names and values.

```js
colors: {
        wine: {
          dark: '#1c040c',
          base: '#260612',
          elevated: '#36091a',
          glow: '#5e0f2b',
        },
        coral: {
          DEFAULT: '#eb4438',
          hover: '#d73328',
          subtle: 'rgba(235, 68, 56, 0.12)',
          glow: 'rgba(235, 68, 56, 0.35)',
        },
        ink: {
          900: '#111827',
          700: '#374151',
          500: '#6b7280',
          300: '#d1d5db',
          100: '#f3f4f6',
        }
      }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav “Main Navigation”
    - a: velora.hr → #top
    - button: Product
    - a: Employee Panels → #features
    - a: Shift Scheduling → #scheduling
    - a: Records & Payroll → #reports
    - a: HR Control Center → #control-center
    - a: Solutions → #features
    - a: Pricing → #metrics
    - a: About → #control-center
    - button: Resources
    - a: Client ROI Metrics → #metrics
    - a: Security & Trust → #security
    - button: Log in
    - button: Try 14 days for free
  - h1: Manpower your workforce with an HR system
  - p: Velora HR gives you full control, automation, and visibility, so you can build stronger teams, simplify workflows, and focus on growth.
  - button: Start Free Trial
  - button: Schedule A Consultation
  - button: Export Stream ↗
- section “Trusted companies”
  - p: Trusted by leading companies worldwide
- section #features
  - h2: Less time managing, more time achieving.
  - p: Automate manual work, simplify HR processes, and free up your team's time to focus on what really matters: growing your business. Velora HR handles the paperwork.
- section
  - h3: Working time and leave requests? Employees
  - p: Automate manual work, simplify HR processes, and free up your team's time to focus on what really matters: growing your business.
  - form
    - h4: Add request
    - option: Leave request (Paid Annual)
    - option: Medical & Sick Absence
    - option: Flexible Remote Day
    - label: Handover / Team Note
  - option: Administration
  - option: Engineering
  - option: Operations
  - option: Design
  - button: Clear
  - table
    - th: Member
    - th: Mon 1
    - th: Tue 2
    - th: Wed 3
    - th: Thu 4
    - th: Fri 5
    - th: Sat 6
    - th: Sun 7
    - td: Sarah Chen
    - td: 08-16
    - td: 08-16
    - td: 08-16
    - td: 09-17
    - td: 09-17
    - td: OFF
    - td: OFF
    - td: Marcus Vance
    - td: 09-17
    - td: 09-17
    - td: 08-16
    - td: 08-16
    - td: 12-20
    - td: 12-20
    - td: OFF
    - td: Amara Okafor
    - td: OFF
    - td: 08-16
    - td: 08-16
    - td: 09-17
    - td: 09-17
    - td: 09-17
    - td: OFF
  - h3: Plan shifts without confusion or endless follow-ups
  - p: Set up the schedule and share it with your team — everyone sees when and how they're working. Leave and remote work requests flow automatically along a predefined approval path. You get clarity, up-to-date data, and no more sad spreadsheets.
  - h3: From manual to magical: automate and manual calculations in Excel
  - p: Set up the schedule and share it with your team — everyone sees when and how they're working. Leave and activity records flow automatically along a predefined approval path. You get clarity, up-to-date data, and no more sad spreadsheets.
  - h5: James Brown
  - table
    - th: Date
    - th: Start time
    - th: End time
    - td: 01.04.2026 (TUE)
    - td: 08:00 - 16:00
    - td: 04:00
    - td: 02.04.2026 (WED)
    - td: 08:00 - 16:00
    - td: 08:00
    - td: 03.04.2026 (THU)
    - td: 08:00 - 16:00
    - td: 08:00
    - td: 04.04.2026 (FRI)
    - td: 08:00 - 14:00
    - td: 06:00
    - td: 05.04.2026 (SAT)
    - td: 09:00 - 13:00
    - td: 04:00
- section #metrics
  - h2: These aren't promises. These are real results from our client
  - p: Automate manual work, simplify HR processes, and free up your team's time to focus on what really matters: growing your business.
  - button: See Case Studies
  - p: 80% Reduction in routine repetitive onboarding paperwork
  - p: 65% Saved on weekly manager scheduling follow-ups
  - p: 12X Faster payroll calculation & export pipelines
- section #control-center
  - h2: Your HR control center.
  - p: Whether you're a startup or enterprise, we have a solution for you.
  - h4: Data
  - ul
    - li: • All employee data organized in one place
    - li: • Automated reports
    - li: • Export leave and working time data to payroll systems
  - h4: Processes
  - ul
    - li: • Clear communication/information flow
    - li: • Create, approve, and archive documents
    - li: • No more spreadsheets printouts or dimension paperwork
  - h4: People
  - ul
    - li: • Full overview of each team's records
    - li: • Easy access to execution statistics
    - li: • Fast leave, working hours and flexible work schedules
- section #security
  - h3: Data security is our top priority.
  - p: Enterprise-grade encryption and global data privacy standards built into every layer.
- section
  - h2: Ready to manpower your workforce?
  - p: Join forward-thinking companies scaling faster with Velora HR automation.
  - button: Start Free 14-Day Trial
- footer
  - a: velora.hr → #top
  - p: Next-generation workforce operating system. Unifying shift planning, leave automation, and labor intelligence.
  - h5: Product
  - ul
    - li: Employee Panels
    - li: Shift Scheduling
    - li: Records & Payroll
    - li: Control Center
  - h5: Solutions
  - ul
    - li: Scaleups & Enterprises
    - li: Shift-Based Teams
    - li: Automated Payroll
    - li: Enterprise Security
  - h5: Company
  - ul
    - li: About Us
    - li: Client Outcomes
    - li: Security & Trust
    - li: Contact Sales
- a: Product & Features → #features
- a: Shift Scheduling → #scheduling
- a: Records & Payroll → #reports
- a: Client Results → #metrics
- a: Control Center → #control-center
- a: Security → #security
- h3: Launch Your Velora Workspace
- p: Experience seamless employee scheduling, automatic leave workflows, and unified labor telemetry.
- form
  - label: Work Email
  - label: Company Name
  - label: Workforce Size
  - option: 10 - 50 Employees
  - option: 50 - 250 Employees
  - option: 250 - 1,000 Employees
  - option: 1,000+ Enterprise
  - button: Provision Instance →

## Images in the page
- `./assets/hero_presenter.jpg — Elena Rostova presenting Velora workforce strategy`

## Fields
Keep these controls, including ids and placeholders.
- select
- input[text] placeholder='Brief note for manager...'
- input[email] placeholder='elena@company.com'
- input[text] placeholder='Acme Technologies'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero_presenter.jpg`
- `assets/index-J01woLxD.css`
- `assets/index.src-7jxrh1HQ.js`
- `assets/velora_mark-BCx2z2WM.svg`
- `assets/velora_mark.svg`
- `index.html`
- `index.src.html`
- `package-lock.json`
- `package.json`
- `postcss.config.js`
- `preview.jpg`
- `src/App.tsx`
- `src/index.css`
- `src/main.tsx`
- `tailwind.config.js`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
