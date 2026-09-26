# Rebuild prompt — Orthon (`orthon`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/orthon/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Manufacturing intelligence platform — architectural drafting grid, live schematic conduit tree, edge telemetry, predictive line balance, and protocol specs.

## Title
Orthon — Manufacturing Intelligence & Autonomous Telemetry

## Description meta
Orthon turns continuous factory telemetry into real-time decisions, zero unlogged line halts, and peak plant throughput.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-sheet: #f6f7f9;
  --bg-surface: #ffffff;
  --bg-surface-subtle: #f0f2f6;
  --bg-surface-hover: #e8ebf0;
  --bg-dark: #0e1116;
  --bg-dark-card: #151a22;
  --ink-primary: #0e1116;
  --ink-secondary: #4a5568;
  --ink-muted: #718096;
  --ink-faint: #9aa5b5;
  --ink-inverse: #ffffff;
  --line-grid: #e2e5eb;
  --line-bold: #cbd2dc;
  --line-dark: #272f3d;
  --line-bracket: #0e1116;
  --signal-live: #10b981;
  --signal-live-glow: rgba(16, 185, 129, 0.25);
  --signal-warn: #f59e0b;
  --signal-alert: #ef4444;
  --signal-bus: #2563eb;
  --signal-conduit: #1e293b;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", "Fira Code", monospace;
  --wrap: min(1320px, 100% - 2rem);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --dur: 200ms;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-bar
  - a: ORTHON → #
  - nav
    - ul #nav-menu .nav-links
      - li: PROBLEM
      - li: PLATFORM
      - li: HOW IT WORKS
      - li: INTEGRATIONS
      - li: CASE STUDIES
      - li: PRICING
  - button: BOOK A DEMO
- section #hero .hero-grid
  - h1: Manufacturing Intelligence That Keeps Every Line Moving
  - p: Orthon turns continuous factory telemetry into real-time decisions, zero unlogged line halts, and peak production throughput.
  - a: GET IN TOUCH → #pricing
  - a: CASE STUDIES → #case-studies
  - button: ALL SIGNALS
  - button: THERMAL
  - button: VIBRATION
- section .blueprint-section
- section #problem .blueprint-section
  - h3: The Cost of Blind Spots on High-Speed Lines
  - ul .comp-list
    - li: × Post-Mortem CSV Logs: Operators discover thermal or bearing wear only after parts fail end-of-line optical inspection.
    - li: × 3 to 4-Hour Mean Time to Triage: Maintenance engineers manually dig through disjointed PLC trace files to locate root fault.
    - li: × Siloed Proprietary Islands: CNC machines, robotic welders, and conveyor sensors cannot correlate cross-machine harmonics.
    - li: × Unplanned Line Halts: Sudden motor tripping leads to cascading upstream buffer starvation and lost shift capacity.
  - h3: Continuous Telemetry That Intercepts Failure
  - ul .comp-list
    - li: ✓ 45-Minute Advance Drift Warnings: Continuous state-space models flag sub-micron mechanical drift before scrap is produced.
    - li: ✓ Sub-Second Root Cause Pinpointing: Multi-sensor harmonic clustering maps the exact actuator or spindle causing variance.
    - li: ✓ Unified 100kHz Fieldbus Mesh: Standardized OPC-UA and MQTT bridges unify legacy PLCs, modern robotics, and vision rigs.
    - li: ✓ Closed-Loop Micro-Trims: Automated feedrate adjustments and line balancing keep throughput steady without manual halts.
- section #platform .blueprint-section
  - button: LINE ALPHA: EV CELL STACKING 54 Actuators · 1,420 ppm · OEE 96.2%
  - button: LINE BETA: CNC 5-AXIS AEROSPACE 12 Spindles · Titanium 6Al-4V · OEE 92.8%
  - button: LINE GAMMA: CLEANROOM WAFER PACK 80 Pick-and-Place · 0.2µm Spec · OEE 98.4%
  - button: INJECT BEARING DRIFT
  - button: AUTO-TRIM LINE BALANCE
  - button: RESET BASELINE
  - h4: LINE ALPHA — HIGH-SPEED EV CELL STACKING
  - p: TELEMETRY BUS: PROFINET IRT 125µs · 100kHz SAMPLING · DUAL CONDUIT
- section .blueprint-section
  - h3: Deterministic Edge Ingestion
  - p: Captures raw high-frequency waveforms from sensors and PLCs up to 100kHz without saturating plant OT networks.
  - h3: Predictive Line Balancing
  - p: Calculates conveyor micro-buffer saturation and redistributes cycle loads before station bottlenecks throttle total throughput.
  - h3: Sub-Millisecond Defect Triage
  - p: Correlates downstream optical camera rejects directly back to upstream spindle vibration and thermal expansion signatures.
  - h3: Closed-Loop Actuation
  - p: Sends calibrated micro-offsets directly to machine controllers with deterministic safety interlocks and watchdog verification.
- section #how-it-works .blueprint-section
  - h4: Tap Existing Bus
  - p: Non-invasive DIN-rail edge gateway install connects directly to existing PLC racks and vibration transducers with zero line stoppage.
  - h4: Model Kinematics
  - p: Orthon builds an exact state-space physical model of every motor, pneumatic valve, and tooling axis within the first 48 hours.
  - h4: Intercept Variance
  - p: Anomalous harmonic frequencies and thermal drift vectors are isolated in real time, triggering immediate operator alerts.
  - h4: Dispatch & Tune
  - p: Closed-loop PLC adjustments or automated work orders with precise CAD component coordinates are dispatched instantaneously.
- section #integrations .blueprint-section
- section #case-studies .blueprint-section
  - h3: Vortex Aero Group
  - p: "Orthon eliminated chatter harmonics on our 5-axis titanium milling cells. We caught tool degradation 35 minutes before surface tolerance was breached."
  - h3: Kinetix Gigafab 03
  - p: "Managing line balance across 120 ultrasonic welding stations was a manual guessing game. Orthon gave us sub-millimeter visibility and unified our cycle times."
  - h3: Strata Microelectronics
  - p: "When an actuator drifts by 2 microns in a cleanroom, you lose millions in hours. Orthon's closed-loop writeback stabilized our pick-and-place lines."
- section #pricing .blueprint-section
  - h3: Pilot Line
  - p: Designed for single assembly lines or high-criticality CNC cells requiring rapid validation.
  - ul .tier-features
    - li: Up to 2 Edge Gateway Appliances
    - li: 500 Telemetry Tags at 10kHz
    - li: Real-time Anomaly Interception
    - li: OPC-UA / MQTT Connector
    - li: Standard 8x5 Engineering Support
  - button: START 30-DAY PILOT
  - h3: Plant Standard
  - p: Complete facility coverage with cross-line balancing and closed-loop PLC tuning.
  - ul .tier-features
    - li: Redundant Edge Cluster Hardware
    - li: Unlimited Telemetry Tags at 100kHz
    - li: Predictive Line Balancing & Buffer Tuning
    - li: Closed-Loop PLC Actuation Writeback
    - li: 24/7 Dedicated Plant SLA & Support
  - button: SCHEDULE DEPLOYMENT
  - h3: Enterprise Fleet
  - p: Multi-gigafab orchestration with air-gapped on-premise AI compute and on-site field engineers.
  - ul .tier-features
    - li: Air-gapped 1U DIN-rail Server Clusters
    - li: Global Multi-Facility Digital Twin Mesh
    - li: Custom Legacy PLC Driver Synthesis
    - li: IEC 62443 Certified Security Audit
    - li: Dedicated On-Site Field Systems Engineer
  - button: TALK TO SOLUTIONS ARCHITECT
- section .blueprint-section
  - button: Does Orthon require replacing existing PLCs or wiring? +
  - button: Can the platform run completely disconnected from the Internet? +
  - button: How does Orthon ensure safety during closed-loop writeback? +
  - button: How long does it take from install to first anomaly catch? +
- section .cta-blueprint-frame
  - h2: Ready to Eliminate Line Stoppages Before They Happen?
  - p: Connect your assembly cell to Orthon and see live telemetry, predictive harmonic balance, and instantaneous root-cause isolation in under 48 hours.
  - button: REQUEST PILOT HARDWARE
  - button: DOWNLOAD ARCHITECTURE WHITEPAPER
- footer .cad-footer
  - p: Autonomous manufacturing intelligence and high-frequency industrial telemetry platform for high-throughput global plants.
  - ul .footer-links
    - li: Edge Ingestion
    - li: Line Balancing
    - li: Defect Triage
    - li: Closed-Loop Tuning
    - li: Protocol Matrix
  - ul .footer-links
    - li: EV Gigafabs
    - li: Aerospace 5-Axis
    - li: Semiconductor Fab
    - li: Medical Robotics
    - li: Automotive Stamping
  - ul .footer-links
    - li: IEC 62443-4-2
    - li: SOC 2 Type II
    - li: ISO 27001 Certified
    - li: SIL-3 Safety Guard
    - li: Air-Gap Validation

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
