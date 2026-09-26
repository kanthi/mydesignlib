# GetLayers AI Template Prompts & Mechanical Corpus

A curated archive of website templates, 3D WebGL scenes, hero layouts, and motion mechanics derived from the GetLayers collection (`https://www.getlayers.ai/templates`).

This document records the exact motion behaviors, 3D shader specifications, visual aesthetic, and structured prompts for each template architecture.

---

## 1. Torsion (Derived from "Gravity")
- **Category**: Studio / Creative Engineering
- **Stack**: Three.js WebGL, Verlet Physics Integrator, Vanilla HTML/CSS/JS
- **Prompt**:
  > Create a high-performance physics-driven digital experience studio flagship. Underlay the entire viewport with an interactive Three.js 3D physics simulation containing 48 rigid spheres with PBR lacquer, frosted glass, and matte porcelain materials. Implement a custom Verlet particle relaxation engine with 4 sub-steps per frame.
  >
  > The page features two distinct kinematic states:
  > 1. Hero Equilibrium: Spheres float in a harmonic toroidal orbital path, gently breathing in place.
  > 2. Kinematics Scroll Trigger: When scrolling past the hero fold, gravity activates (`g = 9.8 m/s²`), causing the spheres to tumble, collide with floor boundaries and card obstacles with spring restitution (`0.65`).
  >
  > Include an interactive cursor gravitation well (dragging exerts dynamic force to fling spheres across the canvas), frosted glass telemetry cards (`Solvers`, `Restitution`, `Collisions`), live physics sliders (gravity scale, bounce coefficient, turbulence), and an instant color palette switcher (Cobalt Blue, Cyber Citron, Dark Chromatic).

---

## 2. Castalia (Derived from "Laocoon")
- **Category**: Studio / Classical Foundry & Digital Archive
- **Stack**: Three.js PBR, ACESFilmic Shading, Custom Particle Systems
- **Prompt**:
  > Build a monumental classical sculpture foundry and spatial digital museum flagship. Center the viewport on an interactive Three.js 3D sculpture on an architectural stone pedestal with real-time shadow projection and soft ambient occlusion.
  >
  > Include an instant 4-way material switcher:
  > 1. Antique Cast Bronze (`roughness: 0.35, metalness: 0.9, warm bronze patina`)
  > 2. Pentelic White Marble (`roughness: 0.25, transmission: 0.4, subsurface scattering`)
  > 3. Fluid Obsidian (`roughness: 0.05, reflectivity: 0.95, deep black mirror`)
  > 4. Digital Lattice (`wireframe: true, cyan laser glow, vertex coordinates`)
  >
  > Ambient environment features 250 floating golden dust particles drifting upward, dual warm amber caustics light ribbons slicing the background, a floating museum gallery photographic card, and smooth chaptered scroll progression (`01 Bronze & Time`, `02 Marble Emotion`, `03 Fluid Obsidian`, `04 Digital Lattice`).

---

## 3. Diopter (Derived from "Lumora")
- **Category**: Product / Cybernetic Optics & Hardware
- **Stack**: Three.js Physical Glass Transmission, WebGL Reticles, Live World Clocks
- **Prompt**:
  > Engineer a high-tech cybernetic optics, precision eyewear, and spatial hardware studio flagship in deep obsidian black (`#070709`) with warm photonic amber (`#ff601c`) and laser cyan (`#00e5ff`) accents.
  >
  > Hero stage features an interactive Three.js multi-element optical lens assembly with sagittal bi-convex glass curvature, titanium knurled aperture bezel, counter-rotating reticle rings, floating dust motes, and caustic pulse glows. Mouse and touch drag rotate the lens with smooth inertial damping.
  >
  > Key components:
  > - Header with live multi-city world clock capsules (`TYO`, `SFO`, `ZRH`) updating in real-time every second.
  > - Floating Conversion Design HUD Card ("Crafted to convert.") with an interactive 3-tab switcher (Optics, Haptics, Latency) and dynamic telemetry progress bar.
  > - Infinite partner marquee rail (Kaido, North, Vellum, Orbit, Bright, Cobalt, Mesa).
  > - 4-card Selected Works Grid with custom SVG technical HUD wireframes.
  > - Interactive Optical Lab with real-time WebGL parameter sliders for focal curvature (20mm–120mm), chromatic dispersion (IOR), and spectral polarization filters (Amber, Cyan, Emerald, Obsidian).
  > - Terminal-style calibration contact form with tier selector and CLI handshake output.

---

## 4. Terrene (Derived from "Ascend")
- **Category**: SaaS / Orbital Infrastructure & Satellite Sensing
- **Stack**: Three.js WebGL Earth Shader, Atmospheric Rayleigh Glow, GSAP Scroll
- **Prompt**:
  > Create an aerospace and geospatial orbital infrastructure SaaS flagship. Underlay the dark cosmic viewport with a living 3D Earth globe rendered in Three.js WebGL.
  >
  > Earth Specifications:
  > - High-resolution procedural texture mapping with continent reliefs, specular ocean reflections, and day/night night-lights terminator.
  > - Atmospheric Rayleigh scattering glow shader surrounding the globe perimeter in mint-cyan (`#10b981` / `#00e5ff`).
  > - Drifting cloud layer rotating at independent rotational velocity.
  > - Interactive pulsing radar ping beacons anchored to geographic coordinates (Tokyo, London, San Francisco, Zurich, Singapore).
  > - Camera trajectory: As the user scrolls through the page, the Earth descends, tilts on its polar axis, and swings laterally, revealing satellite orbit lines and planetary coverage telemetry.
  >
  > UI Elements:
  > - Mint-lit dark SaaS interface with glassmorphic telemetry cards.
  > - Live constellation status badge (`32 SATELLITES OPERATIONAL · 99.998% UPTIME`).
  > - Real-time orbital sensor data stream, coverage density maps, and API integration code playground.

---

## 5. Seltzer (Derived from "Soda")
- **Category**: Product / Beverage & DTC Lifestyle
- **Stack**: Three.js 3D Can Mesh, Particle Repulsion Physics, Dynamic Ambient Themes
- **Prompt**:
  > Design a vibrant, high-energy 3D DTC beverage flagship for an adaptogenic botanical sparkling elixir brand.
  >
  > 3D Can Experience:
  > - Centered Three.js 3D beverage can with brushed metallic sheen, embossed tactile typography, pull-tab geometry, and condensation droplets.
  > - Floating botanical fruit berries, herbs, and carbonation bubbles orbiting the can in 3D space.
  > - Particle Repulsion Physics: Moving the cursor or touching the screen scatters the orbiting berries and bubbles away with spring damping.
  > - Live 3-Way Flavor Switcher:
  >   1. *Wild Yuzu Bergamot* (Citron Gold `#ffd000` / Lime `#10b981`)
  >   2. *Midnight Blackberry Ashwagandha* (Deep Indigo `#4f46e5` / Violet `#a855f7`)
  >   3. *Crisp Blood Orange Ginseng* (Vibrant Coral `#ff4500` / Amber `#ff9900`)
  > - Selecting a flavor dynamically morphs the can texture wrap, ambient point lights, background radial gradient aura, and headline typography.
  >
  > UI Components:
  > - Flavor profile tasting notes radar chart.
  > - Adaptogen potency bento grid with clinical research proof points.
  > - Interactive subscription delivery frequency selector with unboxing preview.

---

## 6. Courtier (Derived from "Baseline")
- **Category**: Services / Sports & Luxury Members Club
- **Stack**: CSS Keyframes, SVG Trajectory Physics, Swiss Typographic Grid
- **Prompt**:
  > Build a prestigious lawn and hardcourt tennis academy, members club, and racquet atelier website.
  >
  > Visual Direction:
  > - Deep tournament court-blue (`#0b192c`), grass championship green (`#1e4d2b`), and crisp chalk-line white (`#ffffff`).
  > - Authoritative typography using high-contrast editorial serifs combined with Swiss grotesque labels.
  >
  > Key Interactions & Motion:
  > - Interactive Court Visualizer: Top-down tactical tennis court with animated ball trajectory curves, slice spins, and landing zone heatmaps.
  > - Live Court Availability Radar: Real-time booking slots for grass, clay, and indoor hardcourts.
  > - Academy Masterclasses & Coaching Roster carousel with subtle parallax depth.
  > - Exclusive Membership Tier Cards (`Championship`, `Atelier`, `Patron`) with gold foil emboss hover states and private lounge application modal.

---

## 7. Artefakt (Derived from "Artefakt")
- **Category**: Product / High-Tech Outerwear
- **Stack**: Three.js Iridescent Fabric Shader, Reactive Cursor Lattice, Text Scramble Decoder
- **Prompt**:
  > A near-black technical outerwear flagship drawn on a geometric screen lattice that illuminates in square cells beneath the cursor. A lacquered, iridescent technical parka travels down the page across viewport sections — rotating toward cursor velocity, with sleeves following with secondary inertial delay.
  >
  > Labels, technical fabric specifications, and waterproof ratings decode out of randomized ASCII static glyphs upon entry. Features an interactive weather chamber simulator allowing the user to test precipitation, thermal insulation down to -30°C, and aerodynamic drag.

---

## 8. Brewns (Derived from "Brewns")
- **Category**: Restaurant / Artisanal Roastery
- **Stack**: Three.js Packaging Visualizer, Interactive Brew Ratio Calculator, Audio/Visual Haptics
- **Prompt**:
  > A specialty coffee roastery and bean laboratory flagship. The page opens with an animated line-drawn ceramic cup that fills with dark espresso crema and dissipates into the hero fold.
  >
  > A 3D coffee bag and single-origin beans rest in an illuminated studio environment that the user can grab, rotate, and inspect at macro resolution. As the user scrolls, an iced latte rotates on a 24-hour sun-dial clock face, roasted coffee beans drift with zero-gravity inertia behind cards, and an interactive thermal receipt printer feeds out order details with authentic monospace typesetting.

---

## 9. Vesper (Derived from "Vesper")
- **Category**: Developer / Neural Computing & AI
- **Stack**: Three.js WebGL GPGPU Particle Field (100,000 particles), Curl Noise, Audio Reactive
- **Prompt**:
  > A living interface for a cognitive AI research laboratory. A volumetric particle cloud of mint and violet photons breathes as a luminous spherical orb.
  >
  > Scroll & Interaction Progression:
  > 1. Hero: Pulsing harmonic sphere responding to audio frequency or cursor distance.
  > 2. Scroll Step 1: Sphere blows open into a double-arm logarithmic spiral galaxy with trailing stardust.
  > 3. Scroll Step 2: Particles reconverge and lock onto the 3D topology of a human neural brain mesh with glowing synaptic firings along axon pathways.
  > 4. Interactive Live Prompt: Users type prompts into a minimalist floating console, causing the neural particle cloud to ripple in localized shockwaves.

---

## 10. Kimi (Derived from "Kimi")
- **Category**: Portfolio / Formula 1 Athlete & High-Speed Engineering
- **Stack**: WebGL Mask Dissolve Shader, SVG Telemetry Circuit Map, Stacked Card Parallax
- **Prompt**:
  > High-speed racing driver and performance aerodynamics flagship. As the page loads, a carbon-fiber aerodynamic helmet burns away with a particle heat-dissolve shader to reveal the driver's portrait, reconstituting only where the cursor traces.
  >
  > As the user scrolls to the Grand Prix section, an SVG track circuit map initiates an animated apex telemetry dot showing cornering G-forces, braking points, and gear shifts. Subsequent content blocks land over one another with physical card stack inertia and tactile mechanical audio clicks.
