# Rebuild prompt — Deepward (`deepward`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/deepward/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Threat intelligence prospectus — white editorial shell, blue wireframe horse plates, narrative timeline, Northglass case, method and FAQ.

## Title
Deepward — Security that sees beyond the surface

## Description meta
Fictional threat intelligence. Editorial prospectus, blue wireframe metaphor art, narrative timelines, dual CTAs.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --surface-page:#eef2f8;
  --surface-paper:#fff;
  --surface-tint:#f4f8ff;
  --surface-hover:#f8faff;
  --ink:#1a2744;
  --muted:#6b7a99;
  --soft:#8b97b3;
  --line:#e6ebf4;
  --action-primary:#2f5bff;
  --action-primary-hover:#1e3a8a;
  --on-accent:#fff;
  --ink-hover:#0f172a;
  --font:"Plus Jakarta Sans",system-ui,sans-serif;
  --serif:"Instrument Serif",Georgia,serif;
  --text-display:clamp(2.2rem,4.4vw,3.15rem);
  --text-2xl:clamp(1.45rem,2.4vw,1.75rem);
  --text-xl:1.35rem;
  --text-lg:1.05rem;
  --text-base:1rem;
  --text-sm:.9rem;
  --text-xs:.72rem;
  --leading-display:1.08;
  --leading-body:1.6;
  --track-display:-.035em;
  --track-label:.1em;
  --wrap:min(1120px,100% - 1.5rem);
  --section-y:clamp(2.5rem,5vw,3.5rem);
  --pad-x:clamp(1.25rem,3vw,2rem);
  --radius-shell:14px;
  --radius-panel:10px;
  --radius-btn:6px;
  --ease:cubic-bezier(.22,1,.36,1);
  --dur:220ms;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - nav #nav .nav “Primary”
    - a: Deepward → #top
    - a: Platform → #platform
    - a: Method → #method
    - a: Proof → #proof
    - a: Company → #company
    - a: Explore Deepward → #contact
- section .hero
  - p: Threat intelligence / hidden payload
  - h1: Security that sees beyond the surface
  - p: Attackers rarely break the door. They arrive as mail, vendors, and trusted sessions. Deepward shows the payload — not just the package.
  - a: Reveal the threat → #contact
  - a: See the method → #platform
- p: They don’t break through the front door. They get invited.
- section #platform .band
  - p: The problem
  - h2: Threats arrive dressed as gifts
  - p: A PDF from a known supplier. A calendar hold from a partner. A session that looks like last Tuesday. The package is familiar. The contents are not.
  - p: Deepward fuses mail, identity, and endpoint into one narrative so a SOC lead can say what moved, who invited it, and what to cut — before the board asks why dwell time is still a quarter long.
- section #intel .band
  - p: Platform
  - h2: Four surfaces. One story.
  - p: Not another alert pile. Each module writes into the same timeline so the horse has a beginning, a middle, and a cut.
  - article .row
    - h3: Signal fusion
    - p: Correlate endpoint, identity, and mail into a single narrative. Duplicate noise collapses; the first trusted object stays marked.
  - article .row
    - h3: Human-risk radar
    - p: Social-engineering patterns: urgency language, lookalike domains, calendar hijacks, and help-desk resets that precede a token theft.
  - article .row
    - h3: Supply-chain watch
    - p: Vendor artifacts, build tickets, and invoice graphs. The crate is logged at the gate — and opened before it is wheeled inside.
  - article .row
    - h3: Containment briefs
    - p: Guided cuts with an audit trail a board can read: what we saw, what we isolated, what still needs a human.
- section #method .band
  - p: Method
  - h2: Ingest. Narrate. Cut.
  - p: A sequence, not a slogan. Deepward only numbers steps that actually happen in that order.
  - article .step
    - h3: Ingest the gift
    - p: Connect mail, identity, and endpoint. We keep the original object — the invoice, the session, the binary — as the spine of the case.
  - article .step
    - h3: Write the narrative
    - p: Lateral hops become a timeline. Who invited it, where it sat, which token it minted. Analysts edit the story; the model does not overwrite it.
  - article .step
    - h3: Cut the payload
    - p: Playbooks isolate the object and its children. The brief the board reads is the same document the night shift used.
- p: Lateral movement
- h2: It looks like weather until you draw the lines.
- p: Eleven hops from a vendor PDF can hide in four tools. Deepward plots them on one coast — so “anomalous” becomes a path you can cut.
- section #proof .band.band-tint
  - p: Product
  - h2: The case file, not the firehose
  - p: A CSS specimen of the timeline analysts actually work. Labels are the product — not a generated screenshot.
  - ol .tl
    - li: 09:14 Invoice PDF from known vendormail.northglass · invoice-8841.pdf Gift
    - li: 09:21 Macro spawned signed helperendpoint · finance-12 Payload
    - li: 11:02 OAuth grant to lookalike IdPidentity · treas-ops Token
    - li: 14:40 East hop to settlement share11 objects · 3 hops remaining Path
    - li: 16:05 Containment brief issuedisolate helper · revoke grant · notify vendor Cut
  - h3: One object. Every child.
  - p: The first trusted file stays pinned at the top of the case. Everything after is a child — so the night shift does not reopen “which PDF.” Walkthroughs use this same spine.
  - a: Walk this case → #contact
- section .band
  - p: Inside the horse
  - h2: What you invite in is the incident
  - p: Most stacks see the crate. Deepward opens it: nested objects, minted tokens, the person-shaped session that should not have a badge.
  - p: The cutaway is the product metaphor — a section drawing, not a myth. We do not name horses. We name the payload.
- section .band
  - p: Proof
  - h2: Northglass Exchange, Q1
  - p: Fictional clearing house. Real shape of a walkthrough — vendor mail to settlement share in one afternoon.
  - p: “We had the PDF in four consoles and no sentence. Deepward wrote the sentence: the gift was the incident.”
  - p: Mira Solt Head of Detection, Northglass Exchange
- section .band
  - p: Who it’s for
  - h2: Same brief. Three desks.
  - p: One case file. The CISO reads the cut. The SOC edits the path. IR keeps the original object.
  - article .role
    - p: CISO
    - h3: A number with a noun
    - p: Dwell time, blast radius, and the vendor name — in a page the audit committee will not send back.
  - article .role
    - p: SOC
    - h3: A path you can edit
    - p: Fused timeline, pinned gift, children you can dismiss. Nights do not restart the story at 02:00.
  - article .role
    - p: IR
    - h3: The object, intact
    - p: Preserve the PDF, the token, the helper. Containment writes on top of evidence — it does not replace it.
- section #resources .band
  - p: Resources
  - h2: Briefs you can hand across the table
  - p: Sample library notes. No live downloads — this is a template, not a feed.
  - article .brief
    - h3: Payload in the package
    - p: Why the first trusted object should remain the spine of every case.
    - a: Request the brief → #contact
  - article .brief
    - h3: When the vendor is the door
    - p: A playbook for invoice graphs, lookalike domains, and shared mailboxes.
    - a: Request the brief → #contact
  - article .brief
    - h3: Dwell time as a board number
    - p: How to report 277 days without turning the slide into a threat catalog.
    - a: Request the brief → #contact
- section #company .band
  - p: Company
  - h2: Questions we hear before a walkthrough
  - summary: Do you replace the SIEM?
  - p: No. Deepward sits on mail, identity, and endpoint and writes a case file. Keep the lake. We are the sentence on top of it.
  - summary: How long is a threat walkthrough?
  - p: Ninety minutes. We bring one anonymized case in your shape — invoice, session, or vendor crate — and run it through Ingest / Narrate / Cut on a sample tenant.
  - summary: Where does telemetry live?
  - p: In the fiction: your VPC, your keys. Retention is a contract line, not a marketing claim. This template does not collect data.
  - summary: Is Deepward a real product?
  - p: No. This is a sample design in a private library. Names, metrics, and Northglass Exchange are invented. Contact uses hello@deepward.example.
- section #contact .band.band-tint
  - p: Walkthrough
  - h2: See what’s inside the horse
  - p: Book a threat walkthrough. Same verb as the hero. Fictional product, finished craft.
  - a: Reveal the threat → mailto:hello@deepward.example
  - a: Review the method → #method
- footer
  - p: Deepward
  - p: Threat intelligence for gifts that are already inside. Sample template.
  - h4: Platform
  - ul
    - li: Signal fusion
    - li: Human-risk radar
    - li: Method
  - h4: Library
  - ul
    - li: Northglass case
    - li: Briefs
    - li: Questions
  - h4: Contact
  - ul
    - li: hello@deepward.example
    - li: Book a walkthrough

## Images in the page
- `horse.jpg — Blue wireframe horse standing in shallow water — the gift already inside the walls`
- `crate.jpg — Wireframe crate in shallow water, lid open on a dense dark payload`
- `lattice.jpg — Blueprint of a coastal city with radiating connection lines across water`
- `cutaway.jpg — Wireframe horse in section, belly opened to show stacked hidden objects`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `crate.jpg`
- `cutaway.jpg`
- `horse.jpg`
- `index.html`
- `lattice.jpg`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
