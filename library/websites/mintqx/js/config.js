/* =====================================================================
   TEMPLATE CONFIG: behaviour switches. Colours live in css/tokens.css.
   ===================================================================== */
window.TEMPLATE_CONFIG = {
  theme: null,              // null = <html data-theme> / ?theme= ; or "mint" | "violet" | "ember"
  themeSwitcher: true,      // small demo switcher bottom-left. Set false for production.
  smoothScroll: true,       // Lenis
  revealAnimations: true,   // GSAP scroll reveals outside the hero

  dashboard: {
    tilt: true,             // dashboard rises from a perspective tilt into flat as it scrolls into view
    tiltAngle: 18,          // starting rotateX in degrees
    modeToggle: true,       // moon/sun buttons switch the mock between dark and light
    defaultMode: 'dark',    // 'dark' | 'light'
    countUp: true,          // numbers in the mock count up once
    animateCharts: true     // line chart draws in, bars grow
  },
  glow: {
    breathe: true,          // neon frame + CTA line slowly pulse
    cardPointer: true       // cards light up under the pointer
  },
  pricing: { defaultBilling: 'monthly' }   // 'monthly' | 'yearly'
};
