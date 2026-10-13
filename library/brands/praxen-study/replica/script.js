(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gsapOK = !!window.gsap && !reduced;
  if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const header = $('.header');
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  const navToggle = $('.nav-toggle');
  const nav = $('.nav');
  navToggle.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  $$('.nav a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false');
  }));

  const animate = () => {
    if (!gsapOK) return;
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro.to('.hero-copy>*', { y: 0, opacity: 1, duration: .65, stagger: .075, clearProps: 'transform' }, .1)
      .to('.hero-art>*:not(.art-grid)', { opacity: 1, duration: .5, stagger: .045 }, .2)
      .fromTo('.node-main', { scale: .88 }, { scale: 1, duration: .8, ease: 'back.out(1.5)' }, .4)
      .fromTo('.hero-art .orbit', { scale: .8, rotation: -15 }, { scale: 1, rotation: 0, duration: 1.4, stagger: .1, ease: 'power2.out' }, .2);
    gsap.to('.orbit-one', { rotation: 8, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.node-main', { y: -6, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
    gsap.to('.node-a,.node-b,.node-c', { y: -4, duration: 2.7, stagger: .3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: .7 });
    gsap.to('.layer-front', { y: -9, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.map-center', { scale: 1.06, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' });

    if (window.ScrollTrigger) {
      $$('[data-reveal]').forEach(el => gsap.fromTo(el, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .7, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
      gsap.fromTo('.stack-layer', { y: 50, opacity: .3, rotate: -3 }, { y: 0, opacity: 1, rotate: -8, stagger: .16, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: '.stack-stage', start: 'top 75%', once: true } });
      gsap.fromTo('.chart-line', { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: '.terminal-frame', start: 'top 80%', once: true }, onComplete: () => gsap.to('.chart-pulse', { opacity: 1, duration: .25 }) });
      gsap.to('.chart-pulse', { attr: { r: 10 }, opacity: 0, duration: 1.4, repeat: -1, ease: 'sine.out' });
      gsap.fromTo('.solution-card', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .65, stagger: .12, ease: 'power3.out', scrollTrigger: { trigger: '.solution-grid', start: 'top 83%', once: true } });
      gsap.to('.parallax', { yPercent: -9, ease: 'none', scrollTrigger: { trigger: '.stack-visual', start: 'top bottom', end: 'bottom top', scrub: 1 } });
    }
  };
  if (gsapOK) animate();

  // Chart range selector changes the visible trace and period cue.
  const chartButtons = $$('.chart-filters button');
  const line = $('.chart-line');
  const chartPaths = {
    '1H': 'M0 160 C30 150 48 158 68 140 S104 118 130 133 S164 124 190 108 S220 121 246 101 S280 117 304 88 S340 98 365 75 S398 91 420 70 S455 78 479 55 S512 69 536 47 S570 60 590 35 S610 40 620 25',
    '1D': 'M0 146 C34 128 52 155 83 132 S120 148 150 121 S190 130 219 107 S253 126 282 113 S319 93 348 110 S381 73 409 88 S442 70 470 76 S508 43 538 62 S580 32 620 29',
    '1W': 'M0 120 C28 98 57 121 82 135 S126 112 154 126 S189 89 217 100 S250 122 280 92 S315 104 344 80 S378 103 409 72 S442 77 471 59 S505 89 535 57 S580 52 620 25',
    '1M': 'M0 169 C29 157 52 133 80 150 S114 123 143 142 S174 106 202 123 S237 112 267 121 S298 87 327 100 S359 78 388 93 S420 62 449 79 S477 51 506 66 S549 33 578 48 S603 24 620 18'
  };
  chartButtons.forEach(btn => btn.addEventListener('click', () => {
    chartButtons.forEach(b => b.classList.toggle('active', b === btn));
    const d = chartPaths[btn.dataset.period];
    if (gsapOK) gsap.to(line, { attr: { d }, duration: .55, ease: 'power2.inOut' }); else line.setAttribute('d', d);
    $('.chart-tooltip b').textContent = btn.dataset.period === '1H' ? '62.8%' : btn.dataset.period === '1D' ? '64.1%' : btn.dataset.period === '1W' ? '59.7%' : '62.8%';
  }));

  // Motion-safe anchor navigation; smooth scroll is supplied by CSS.
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', event => {
    const target = $(a.getAttribute('href'));
    if (!target) return;
    event.preventDefault(); target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }));
  window.addEventListener('resize', () => { if (window.ScrollTrigger) ScrollTrigger.refresh(); });
})();
