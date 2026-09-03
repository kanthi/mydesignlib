# Prompt Specification — Velora HR (`velora-agy`)

> Master technical and architectural prompt that defines Velora HR.

```text
Build a standalone modern high-converting SaaS landing page that recreates this reference EXACTLY. Do not invent unrelated sections, extra overlays, or generic slop. Match structure, typography, spacing, concentric border radii, color palettes, and micro-interactions.

STACK
- Vite + React 18 + TypeScript + Tailwind CSS 3
- Lucide React icons: ArrowRight, Calendar, Clock, User, MoreHorizontal, Play, Pause, Menu, X, Shield, Lock, Award, Globe, Database, GitPullRequest, Users, CheckCircle2, ChevronDown
- Path alias @ -> src
- Single App architecture. Built with relative asset paths suitable for static delivery.

BRAND & IDENTITY
- Rebrand: Velora HR (id: "velora-agy")
- Tagline: "Manpower your workforce with an HR system"
- Subhead: "Velora HR gives you full control, automation, and visibility, so you can build stronger teams, simplify workflows, and focus on growth."
- Accent Color: Vivid Coral Red (#eb4438, hover #d73328)
- Background Hero: Deep Wine Sangria Radial Gradient (#4a0d24 -> #260612 -> #1c040c)
- Distinctive Element: Luminous elliptical crimson arc behind hero title (radial gradient with blur-3xl)

PAGE ARCHITECTURE & SECTIONS
1. Top Navigation:
   - Left: Kinetic geometric 'V' mark + "velora.hr" wordmark
   - Center: Product (dropdown), Solutions, Pricing, About, Resources (dropdown)
   - Right: "Log in" link, "Try 14 days for free" solid white rounded pill button, Mobile hamburger toggle
2. Hero Stage:
   - Two CTAs: Solid Coral "Start Free Trial →" + Ghost Outline "Schedule A Consultation →"
   - Floating Dark Dashboard Window (#11141a):
     - Window chrome dots (red, yellow, green) + Breadcrumb path
     - Left Sidebar: Overview, Team Clips, Highlights, Projects, Channels, Settings
     - Video Player: Showing Elena Rostova (VP People & Culture) presentation, live broadcast badge, interactive play/pause button with ripple glow, and time scrubber overlay (04:18 / 12:45)
3. Social Proof Ticker:
   - "Trusted by leading companies worldwide"
   - Fictional vector partner brand marks: kinetiq, synthetix, aether, vanguard, lumina, hyperion
4. Manifesto Headline:
   - "Less time managing, more time achieving."
   - "Automate manual work, simplify HR processes, and free up your team's time to focus on what really matters: growing your business. Velora HR handles the paperwork."
5. Three Alternating 2-Column Feature Sections:
   - Section 4A (Employee panels):
     - Left: Red dot tag "⦿ Employee panels", Title "Working time and leave requests? Employees", Body, "Learn more explore →"
     - Right: Coral card shell (#eb4438) with top circular icon tabs (Calendar, Time, User, More), white form box with working dropdown, radio chip selectors ("Absence", "Secure Storage" active, "Remote work"), handover note input, and "Confirm" button with live success toast
   - Section 4B (Work scheduling - Reversed):
     - Left: Interactive Shift Scheduling calendar table card with Department filter ("Administration", "Engineering", "Operations", "Design"), tab switches ("Calendar", "List of requests", "List of employees"), KPI badges ("Total: 260", "Planned: 80.5H", "Overtime: 80.5H", "January - 2026"), and colored shift chips (08-16 blue, 09-17 cyan, 12-20 purple, OFF gray)
     - Right: Red dot tag "⦿ Work scheduling", Title "Plan shifts without confusion or endless follow-ups", Body, "Learn more explore →"
   - Section 4C (Records and reports):
     - Left: Red dot tag "⦿ Records and reports", Title "From manual to magical: automate and manual calculations in Excel", Body, "Learn more explore →"
     - Right: Timesheet ledger card with user avatar (James Brown, HR Manager), "Work time" badge, and clean tabular calculation logs (Date, Start time, End time)
6. Results & 3D Isometric Proof Section (Deep Wine Background):
   - "These aren't promises. These are real results from our client" + Coral pill CTA
   - Three 3D Isometric Columns with perspective tilt, illuminated top facets, and vertical embossed typography:
     - "80% HR DEPARTMENT" (Workload reduction)
     - "65% OF MANAGERS' HOURS" (Scheduling follow-ups saved)
     - "12X REPETITIVE WORK" (Payroll export acceleration)
7. HR Control Center:
   - "Your HR control center."
   - 3 clean white cards: Data, Processes, People with coral icons and bullet lists
8. Enterprise Security & Trust:
   - "Data security is our top priority."
   - SOC2 Type II, GDPR Compliant, ISO 27001 Certified, 256-Bit SSL Encryption badges
9. Conversion Banner & Modal:
   - Wine banner with coral button: "Ready to manpower your workforce?"
   - Interactive 14-day free trial modal with form inputs and Escape key support
10. Footer:
    - 4-column modern enterprise layout with brand description, links, and copyright citation

DELIVER
Working Vite + React 18 + TS app: index.html, index.src.html, App.tsx, index.css, vite.config.ts, tailwind.config.js, package.json, preview.jpg. Production build bundled in place.
```
