# DESIGN — Trestle

## Overview
- Audience: operations and technology leads at mid-size firms who need a services partner, not a product.
- Single CTA: Request a consultation
- Emotion: a complete firm you can actually hire
- Create this feeling through:
  - Multi-page architecture (home, services, industries, work, about, process, careers, contact)
  - Cool stone field (`surface-page`) and paper plates — never white + indigo
  - IBM Plex Serif for page titles; IBM Plex Sans for body; Mono for indexes and labels
  - One pine accent (`action-primary`) on the primary button, mark, and active nav
  - Service directory (index rows) as the signature — not six icon cards

## Source of truth
- This file + `site.css` `:root`. Prefer CSS if they diverge; report conflicts.

## Aesthetic commitment
- Name: Institutional services (directory + stone)
- Signature element: the trestle mark (two posts + lintel) and the service index

## Plan gate
- Subject: full IT services & solutions firm (software, cloud, security, consulting, data, support)
- Layout: sticky bar → page hero band → directory / case / form → full footer on every page
- Uniqueness: a generic IT brochure is one Inter/blue landing. This is a multi-page firm with a directory, case files, offices, and open roles. Pine + Plex, not `#2563eb`.
- Default-cluster: not cream+terracotta; not black+acid green; not broadsheet.

## Colors (semantic)
- surface-page: #E7E9ED
- surface-paper: #F6F7F8
- surface-ink: #14161A
- text-primary: #14161A
- text-secondary: #5A5F66
- text-faint: #8A9098
- text-on-ink: #E7E9ED
- border-default: #C5CAD1
- action-primary: #1B5347
- action-ink: #F6F7F8
- signal-live: #2A7A68
- status-danger: #B44532
- Usage: pine only for primary CTA, mark, and current nav. Never a page wash or blue mesh.

## Typography
- Display: IBM Plex Serif — H1/H2
- Body: IBM Plex Sans
- Label / index: IBM Plex Mono
- Scale: display clamp(2.2rem, 4.8vw, 3.4rem) / 3xl clamp(1.6rem, 2.8vw, 2.2rem) / xl 1.25rem / lg 1.0625rem / base 1rem / sm 0.8125rem / xs 0.6875rem
- Rules: H1 leading 1.12, tracking −0.028em. Body measure 60–68ch on article pages. Indexes `tabular-nums`.

## Space
- section-y: clamp(4rem, 8vw, 6.25rem)
- wrap: min(1140px, 100% - 2.5rem)
- page-hero-y: clamp(2.5rem, 6vw, 4rem)
- gap: 8 / 12 / 16 / 24 / 40 / 64

## Layout and responsiveness
### Compact (< ~720px)
- Single column; hamburger; primary CTA in drawer
- Indexes stack (code / title / text)
### Medium (~720–1040px)
- Nav links visible; 2-col cards; form + address side by side
### Expanded (≥ ~1040px)
- Full bar: mark, 6 links, Request a consultation
- Home hero 5/7 split; service index one row; process 5-col

## Shape & elevation
- Plates `radius-card` 4px. Buttons 2px (not pills).
- One elevation on home proof plate only.

## Components
### Buttons
- Primary: `action-primary` + `action-ink`, min-height 44px
- Hover #153F36; focus 2px pine ring; active scale 0.98
- Secondary: paper + `border-default`
### Nav
- Current page: `text-primary` + 2px pine underline
- Compact: drawer under bar
### Cards / directory
- Index row: mono code, title, one-line, arrow
- Case plate: kicker, title, metric, 2–3 sentences — not four identical icon cards
### Inputs
- 44px; label above; error in `status-danger` under field

## Motion
- 220ms color/transform on chrome
- Page heroes static (completeness over theatre)
- reduced-motion: transitions off

## Iconography
- Mark: two posts + lintel. Inline 18px stroke 1.5 elsewhere. No emoji. No Font Awesome.

## Content
- Clear services language. CTA = Request a consultation.
- No lorem. No “cutting-edge / digital transformation / next-gen / seamless”.
- Fictional: Trestle Systems, Marrow Bay / Port Sable / Eastwick, @trestle.example
- Do not name AWS, Azure, Google, Microsoft, Lorven, or real client firms

## Ban list
- Inter as display, indigo mesh, one-page stub, icon-card-only services, real trademarks, scraped media, real phone/address from the reference

## Accessibility
- Contrast ≥ 7:1 / 4.5:1; focus visible; tap ≥44px; reduced motion honored
- Every page: robots noindex + gtag `G-Z97ZD3EVSF`

## Sitemap
- `index.html` Home
- `services.html` Services
- `solutions.html` Industries
- `work.html` Work
- `about.html` About
- `process.html` How we work
- `careers.html` Careers
- `contact.html` Contact
- `privacy.html` / `terms.html` Legal
