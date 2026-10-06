# Rebuild prompt — Oravita (`oravita`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/oravita/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modern dental clinic and orthodontics website template: faithful hero with 3D intraoral scanner visualization, emergency clinic status badge, common dental problems grid, interactive treatment pricing and financing calculator, specialist physician cards, and appointment booking modal.

## Title
Oravita Dental Care — Your Smile Deserves The Best Quality

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-page: #F8FAFC;
  --bg-surface: #FFFFFF;
  --bg-light: #F0F9FF;
  --text-main: #0F172A;
  --text-muted: #64748B;
  --text-subtle: #94A3B8;
  --primary-blue: #0284C7;
  --primary-hover: #0369A1;
  --primary-light: #E0F2FE;
  --accent-emerald: #10B981;
  --accent-amber: #F59E0B;
  --border-color: #E2E8F0;
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - ul .nav-links
    - li: Home
    - li: Treatments
    - li: Cost Estimator
    - li: Specialists
    - li: Emergency Care
  - button: Book Appointment ↗
- main
  - section #hero .hero-section
    - h1: Your Smile Deserves The Best Quality Dental Care
    - p: We provide trusted dental care with bright healthy smiles, gentle treatments, advanced 3D scanning technology, and expert support for strong lasting confidence every single day.
    - button: Book Appointment ↗
    - a: Explore Treatments → #problems
  - section #problems .section-problems
    - h2: Common Dental Problems We Solve
    - p: Early detection and gentle conservative therapies preserve natural tooth structure with zero pain.
    - h3: Tooth Decay & Cavities
    - p: Painless laser detection and tooth-colored composite bio-fillings that bond directly to natural enamel, restoring full bite strength.
    - h3: Crooked & Crowded Teeth
    - p: Custom digital clear aligners mapped with 3D intraoral scans to straighten teeth in as little as 6 to 9 months without metal brackets.
    - h3: Staining & Discoloration
    - p: Professional in-office whitening combining cold LED illumination with desensitizing fluoride varnishes for up to 8 shades lighter.
    - h3: Gum Bleeding & Gingivitis
    - p: Micro-ultrasonic scaling and laser pocket sterilization that halts periodontal recession and stimulates cellular gum reattachment.
    - h3: Missing or Cracked Teeth
    - p: Surgically guided titanium implants capped with custom-milled monolithic zirconia crowns matching your natural tooth translucency.
    - h3: TMJ & Night Clenching
    - p: Custom therapeutic splints and digital occlusion balancing to permanently relieve morning jaw soreness, migraines, and tooth wear.
  - section #calculator .section-calculator
    - h2: Estimate Your Treatment & Monthly Plan
    - p: Select your primary dental goal to view transparent pricing, average appointment count, and zero-interest monthly financing options.
    - p: We accept in-network coverage with Delta Dental, Cigna, Aetna, MetLife, and UnitedHealthcare.
    - button: Cleaning & Prevention
    - button: Clear Aligners
    - button: Laser Whitening
    - button: Single Dental Implant
    - button: Lock In This Consultation Rate ↗
  - section #doctors .section-doctors
    - h2: Meet Our Board-Certified Specialists
    - p: Our team combines Ivy-league hospital training with empathetic patient care.
    - h3: Dr. Claire Vance, DDS
    - p: Former Harvard School of Dental Medicine fellow with 14 years specializing in computer-guided implants and full-arch restorative aesthetic treatments.
    - button: Book with Dr. Vance ↗
    - h3: Dr. Marcus Lind, DMD
    - p: Pioneer in accelerated clear aligner therapy and adolescent bite correction, having treated over 3,200 successful orthodontic smile cases.
    - button: Book with Dr. Lind ↗
    - h3: Dr. Ananya Sen, DDS
    - p: Dedicated to anxiety-free pediatric visits and gentle laser therapies, helping families build positive, fear-free lifelong dental habits.
    - button: Book with Dr. Sen ↗
- button: ×
- h3: Book Your Appointment
- p: Complete this brief form to reserve your consultation suite. Same-day emergency appointments available.
- form
  - label: Full Name
  - label: Phone Number
  - label: Preferred Specialist
  - option: First Available Board Specialist
  - option: Dr. Claire Vance (Prosthodontist)
  - option: Dr. Marcus Lind (Orthodontics)
  - option: Dr. Ananya Sen (Pediatric / Preventive)
  - label: Treatment Goal
  - option: Routine Checkup & Hygiene Clean
  - option: Clear Aligners / Orthodontic Scan
  - option: Laser Teeth Whitening
  - option: Single / Multi-Tooth Implant Consult
  - option: Emergency / Acute Toothache
  - button: Confirm Booking Request ↗
- footer #contact .site-footer
  - p: Providing high-precision dental medicine, 3D intraoral diagnostics, and anxiety-free patient care.
  - h4: Treatments
  - ul .footer-links
    - li: Clear Aligners 3D
    - li: Zirconia Dental Implants
    - li: In-Office Laser Whitening
    - li: Micro-Ultrasonic Cleaning
    - li: Pediatric Preventive Care
  - h4: Clinic Hours
  - h4: Locations

## Images in the page
- `assets/oravita-logo.svg — Oravita Dental Care`
- `assets/dental-scanner.svg — 3D Intraoral digital arch scanner interface`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #patientName placeholder='E.g. Sarah Jenkins'
- input[tel] #patientPhone placeholder='(555) 000-0000'
- select #preferredDoctor
- select #appointmentType

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/clinic-room.svg`
- `assets/dental-scanner.svg`
- `assets/oravita-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
