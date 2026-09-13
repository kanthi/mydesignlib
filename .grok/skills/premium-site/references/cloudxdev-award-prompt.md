# CloudAI-X — award landing prompt template

Source: https://x.com/cloudxdev/status/2002526815022190985  
Author: @cloudxdev  
~1.6k likes · 4.3k bookmarks at capture  

## Structure (fill brackets)

### System

World-class frontend designer / CD. Bold, memorable, anti-template. Awwwards-tier bar.

### Context

Landing for `<company_name>` — `<company_description>`.  
Audience: `<target_audience>`.  
Differentiators: `<key_differentiators>`.  
Page job: primary conversion funnel.

### Design philosophy (hard bans)

- NO purple/blue gradients on white  
- NO generic fonts (Inter, Roboto, Arial, system-ui)  
- NO predictable hero-CTA-features-testimonials only  
- NO generic blobs / stock-looking clichés  

### Aesthetic direction

List 5 options A–E specific to the brand; **pick one unexpected-but-appropriate** and commit.

### Required sections (creative interpretation OK)

1. Hero — hook, interactive proof, VP ≤12 words, primary CTA, trust  
2. Problem/solution narrative (story, not feature dump)  
3. Product showcase  
4. Social proof  
5. Technical differentiators  
6. Conversion section  
7. Minimal footer  

### Technical (this repo adaptation)

- Prefer single `index.html` + CSS/JS (vanilla)  
- Mobile-responsive, fluid type  
- Intersection Observer scroll reveals  
- CSS variables for theme  
- Google Fonts / OFL  
- Realistic copy, no lorem  

### Motion

Page-load stagger → scroll fade-up → hover micro → optional ambient (restrained).  
Respect `prefers-reduced-motion`.

### Color

Dark: deep bg, white heads, muted body, **one** accent.  
Light: cream/off-white, charcoal, bold unexpected accent.

### Thinking process (state before code)

1. Aesthetic choice + why  
2. Font pairing  
3. Palette hex  
4. Hero hook  
5. One unique interactive element  

Then build complete page.

## Repo note

Align with `AGENTS.md`: fictional brands, original assets, no real trademarks.  
For catalog templates use vanilla stack, not heavy libraries unless motion-led.  
