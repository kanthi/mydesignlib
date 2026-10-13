/* =====================================================================
   FLOWSTACK TEMPLATE · BEHAVIOUR CONFIG
   ---------------------------------------------------------------------
   Colours / fonts / spacing live in css/tokens.css.
   This file only controls the moving parts:
     - backdrop  : the procedural pixel-dithered dune shader (js/dunes.js)
     - motion    : GSAP / ScrollTrigger / Lenis behaviour (js/main.js)
   Every key is optional; delete one and the default in dunes.js is used.
   ===================================================================== */
window.FLOWSTACK_CONFIG = {

  backdrop: {
    enabled: true,          // false = always use the static PNG fallback
    pixelSize: 2,           // CSS px per dither cell. 1 = fine grain, 3-4 = chunky 8-bit look
    levels: 4,              // colour steps per RGB channel after dithering (3 = harsh, 8 = smooth)
    ditherMode: 'blue',     // 'blue' (interleaved-gradient, organic) | 'bayer' (ordered grid) | 'white'
    speckle: 0.15,          // extra random colour noise before quantising (0 = clean dither)
    drift: 0.018,           // speed of the slow sand drift; 0 = frozen
    parallax: 1,            // mouse parallax strength (0 = off). Disabled on touch + reduced motion
    rippleScale: 1,         // density of the wind ripples on the dune floor
    fps: 30,                // render cap. The shader also pauses when off-screen / tab hidden
    fadeBottom: 0.14,       // dithered fade into the page at the bottom of the band (0-0.5)

    /* Colour sets per theme. The active one follows <html data-theme="...">.
       Stops run shadow -> highlight. Add your own theme by adding a key here and
       a matching [data-theme] block in css/tokens.css. A theme may also set
       `levels` and `speckle` to override the global values above.            */
    themes: {
      default: {   // Sahara: peach / orange sand, warm red-brown shadows
        deep:   '#5e2a22',
        shade:  '#a35f45',
        mid:    '#e39466',
        lit:    '#f6b98c',
        hi:     '#fff4b0',
        haze:   '#f6d2b0',   // far dunes fade toward this
        tint:   '#8f8f9a'    // cool speckle mixed into shadows (the grey/blue pixels)
      },
      night: {     // moonlit indigo dunes
        deep:   '#0c0a2a',
        shade:  '#2a2370',
        mid:    '#4b3fb0',
        lit:    '#8a7cf0',
        hi:     '#e3dcff',
        haze:   '#2d2a63',
        tint:   '#20b2c8'
      },
      glacier: {   // snow / ice dunes
        deep:   '#1f3f6e',
        shade:  '#5a86ba',
        mid:    '#9dbde0',
        lit:    '#b6d0ec',
        hi:     '#e6f1fd',
        haze:   '#cfdff0',
        tint:   '#9fd0d8',
        levels: 6,           // optional per-theme overrides of the global levels / speckle
        speckle: 0.12
      }
    },

    /* Static fallback images (rendered from the shader, see README) used when WebGL
       is unavailable or backdrop.enabled = false.                                  */
    fallback: {
      default: 'assets/dunes-default.png',
      night:   'assets/dunes-night.png',
      glacier: 'assets/dunes-glacier.png'
    }
  },

  motion: {
    smoothScroll: true,     // Lenis smooth scrolling
    reveals: true,          // fade/rise sections in on scroll
    heroIntro: true         // headline stagger + app UI rising over the dunes on load
  }
};
