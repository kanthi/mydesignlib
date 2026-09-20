# Palomar Labs — One Unified System for LLMs

A standalone pixel-accurate recreation of the Palomar Labs marketing landing page: fixed navbar + full-viewport video hero only.

## Stack & Architecture

- **Static Deliverable**: Self-contained vanilla static HTML5 + Tailwind CSS + Vanilla JS controller in `index.html`.
- **Component Source**: React + TypeScript + Vite (`src/App.tsx`, `src/main.tsx`, `package.json`, `tailwind.config.js`, `vite.config.ts`).
- **Icons**: Lucide (`ChevronDown`, `ArrowRight`, `Triangle`).

## Design Tokens

- **Colors**:
  - `brand.dark`: `#2d3a2e`
  - `brand.green`: `#3d5a3e`
  - `brand.light`: `#f5f3ef`
  - `brand.cream`: `#faf8f5`
- **Typography**:
  - Primary UI & Body: `Helvetica Neue Light`, `Helvetica`, `Arial`, sans-serif
  - Backed by Wordmarks:
    - `Meridian`: Playfair Display 700
    - `STELLEX`: Oswald 500 uppercase
    - `Luminar`: Montserrat 700
    - `OVERLAND`: Roboto Slab 600 uppercase
    - `Kinetic`: Raleway 700

## Viewport & Layout

- Single-viewport hero (`min-h-[700px] h-screen bg-brand-cream overflow-hidden`).
- Pure CloudFront background video (`hf_20260820_010308_b1636845-4c15-4ab6-b0c9-9a29bfb0c6e3.mp4`) with `object-cover object-bottom`.
- No dark overlay, no gradient, no poster image.
- Content column left-aligned:
  - Frosted announcement pill with $1MM credits offer and ArrowRight.
  - Headline: `One unified system to build, <br className="hidden sm:block" /> test, ship, and observe LLMs`.
  - Backed by wordmarks row with responsive spacing (`gap-6 md:gap-12 lg:gap-16`).
- Fixed navbar with scroll detection (`scrollY > 20`), animated 2-bar cubic-bezier hamburger, and full-screen cream overlay drawer.
