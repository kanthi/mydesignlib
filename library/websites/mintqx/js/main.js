/* MintQX: page behaviour (sticky nav, pointer glow, pricing toggle, Lenis + GSAP motion). */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CFG = window.TEMPLATE_CONFIG || {}, DC = CFG.dashboard || {}, GC = CFG.glow || {};
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // sticky nav once the hero header is gone
  const snav = $('#snav'), hero = $('.hero');
  if (snav && hero) new IntersectionObserver(([en]) => snav.classList.toggle('show', !en.isIntersecting && en.boundingClientRect.top < 0)).observe($('.hero-copy') || hero);
  else if (snav) snav.classList.add('show');

  // pointer-reactive glow on cards
  if (GC.cardPointer !== false) $$('.card').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));
  if (GC.breathe === false) document.documentElement.classList.add('no-breathe');

  // pricing toggle
  const bill = $('.bill');
  const setBill = m => {
    $$('.bill button').forEach(b => { const on = b.dataset.bill === m; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    $$('[data-monthly]').forEach(el => { el.textContent = '$' + el.dataset[m]; });
  };
  if (bill) { bill.addEventListener('click', e => { const b = e.target.closest('button'); if (b) setBill(b.dataset.bill); }); setBill((CFG.pricing || {}).defaultBilling || 'monthly'); }

  const fmt = (v, d) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  const countUp = (el, opts = {}) => {
    const to = parseFloat(el.dataset.count), d = +(el.dataset.decimals || 0), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    const o = { v: 0 };
    return gsap.to(o, Object.assign({ v: to, duration: 2, ease: 'power3.out', onUpdate: () => { el.textContent = pre + fmt(o.v, d) + suf; } }, opts));
  };

  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger, SplitText);

  let lenis;
  if (!reduce && CFG.smoothScroll !== false && typeof Lenis !== 'undefined') {
    lenis = new Lenis({ lerp: .1 }); window.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  }
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href'); const el = id.length > 1 && $(id); if (!el) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(id === '#top' ? 0 : el, { offset: id === '#top' ? 0 : -70, duration: 1.3 }); else el.scrollIntoView();
    if (id !== '#top') { el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true }); }
  }));

  document.fonts.ready.then(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const E = 'expo.out';
      // dashboard: perspective tilt -> flat as it scrolls into view (flat by the time its top reaches 55% of the viewport)
      if (DC.tilt !== false && $('#dashFrame')) {
        gsap.fromTo('#dashFrame', { rotateX: DC.tiltAngle ?? 18, y: 60, scale: .96 }, { rotateX: 0, y: 0, scale: 1, ease: 'none',
          scrollTrigger: { trigger: '.dash-stage', start: 'top bottom', end: 'top 55%', scrub: .6 } });
      }
      if ($('#dash')) {
        const st = { trigger: '#dash', start: 'top 85%', once: true };
        if (DC.countUp !== false) $$('#dash [data-count]').forEach(el => countUp(el, { duration: 1.6, scrollTrigger: st }));
        if (DC.animateCharts !== false) {
          const p = $('.d-stroke'); if (p) { const L = p.getTotalLength(); gsap.fromTo(p, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut', scrollTrigger: st }); }
          gsap.from('.d-pt', { scale: 0, transformOrigin: '50% 50%', duration: .6, delay: 1.3, ease: 'back.out(3)', scrollTrigger: st });
          gsap.from('.d-bars i', { scaleY: 0, duration: 1.2, stagger: .06, ease: E, scrollTrigger: st });
          gsap.from('.d-prog i', { scaleX: 0, transformOrigin: '0 50%', duration: 1.4, ease: E, scrollTrigger: st });
        }
      }
      if (CFG.revealAnimations === false) return;
      $$('h2.split').forEach(h => SplitText.create(h, { type: 'lines,words', mask: 'lines', wordsClass: 'w', autoSplit: true, onSplit: self =>
        gsap.from(self.words, { yPercent: 110, duration: 1.1, stagger: .04, ease: E, scrollTrigger: { trigger: h, start: 'top 86%' } }) }));
      $$('.sec-head .lede, .sec-copy .lede, .eyebrow, .bill, .logos-cap').forEach(el => gsap.from(el, { y: 18, autoAlpha: 0, duration: 1, ease: E, scrollTrigger: { trigger: el, start: 'top 90%' } }));
      $$('[data-reveal]').forEach(el => gsap.from(el, { y: 30, autoAlpha: 0, duration: 1, ease: E, scrollTrigger: { trigger: el, start: 'top 88%' } }));
      [['.bento', '.card'], ['.steps', '.step'], ['.tiles', 'li'], ['.badges', 'li'], ['.checks', 'li'], ['.quotes', '.q'], ['.plans', '.plan'], ['.faq', 'details'], ['.cta-btns', 'a']].forEach(([g, i]) => {
        const box = $(g); if (!box) return;
        gsap.from($$(i, box), { y: 40, autoAlpha: 0, duration: 1.1, stagger: .08, ease: E, scrollTrigger: { trigger: box, start: 'top 85%' } });
      });
      if ($('.step-line i')) gsap.from('.step-line i', { scaleX: 0, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 80%', end: 'bottom 60%', scrub: .5 } });
      if ($('.r-fill')) gsap.from('.r-fill', { strokeDasharray: '0 100', duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: '.viz-ring', start: 'top 85%' } });
      if ($('.hub')) gsap.from('.hub', { scale: .6, autoAlpha: 0, duration: 1.2, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.integ', start: 'top 85%' } });
    });
    // count-ups for the metrics band (also run with reduced motion = instant final values already in markup)
    if (!reduce && $('.metrics')) $$('.metrics [data-count]').forEach(el => countUp(el, { scrollTrigger: { trigger: '.metrics', start: 'top 85%', once: true } }));
  });
})();
