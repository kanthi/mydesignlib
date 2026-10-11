(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Sticky header state ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('nav-menu');
  const setNav = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) { setNav(false); closeDd(); } });

  /* ---------- Resources dropdown ---------- */
  const ddBtn = document.querySelector('.dd-toggle');
  const dd = document.getElementById('dd-resources');
  const closeDd = () => { ddBtn.setAttribute('aria-expanded', 'false'); dd.classList.remove('is-open'); };
  ddBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = ddBtn.getAttribute('aria-expanded') !== 'true';
    ddBtn.setAttribute('aria-expanded', String(open));
    dd.classList.toggle('is-open', open);
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.has-dd')) closeDd(); if (!e.target.closest('.nav')) setNav(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (dd.classList.contains('is-open')) { closeDd(); ddBtn.focus(); }
    else if (nav.classList.contains('is-open')) { setNav(false); toggle.focus(); }
  });
  document.querySelector('.has-dd').addEventListener('focusout', (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) closeDd();
  });
  window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setNav(false); });

  /* ---------- Count-up ---------- */
  const fmt = (v, d) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
  const countUp = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || '0', 10);
    if (reduceMotion.matches) { el.textContent = fmt(target, dec); return; }
    const dur = 1600; const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased, dec);
      if (p < 1) requestAnimationFrame(tick);
    };
    el.textContent = fmt(0, dec);
    requestAnimationFrame(tick);
  };

  /* ---------- Reveal + counters via IntersectionObserver ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        if (en.target.dataset.count) countUp(en.target); else en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
    counters.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- Logo marquee (small screens only) ---------- */
  const marquee = document.querySelector('.marquee');
  const track = marquee.querySelector('.marquee__track');
  const originals = [...track.children];
  const smallMq = window.matchMedia('(max-width: 1100px)');
  const setMarquee = () => {
    const run = smallMq.matches && !reduceMotion.matches;
    track.querySelectorAll('[data-clone]').forEach((n) => n.remove());
    marquee.classList.toggle('is-running', run);
    if (run) originals.forEach((n) => {
      const c = n.cloneNode(true); c.dataset.clone = ''; c.setAttribute('aria-hidden', 'true'); track.appendChild(c);
    });
  };
  setMarquee();
  smallMq.addEventListener('change', setMarquee);
  reduceMotion.addEventListener('change', setMarquee);

  /* ---------- Pricing toggle ---------- */
  const sw = document.querySelector('[data-billing-toggle]');
  const lblM = document.getElementById('bill-m');
  const lblY = document.getElementById('bill-y');
  const setBilling = (yearly) => {
    sw.setAttribute('aria-checked', String(yearly));
    lblM.classList.toggle('is-active', !yearly);
    lblY.classList.toggle('is-active', yearly);
    document.querySelectorAll('[data-monthly]').forEach((el) => { el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly; });
    document.querySelectorAll('[data-note-monthly]').forEach((el) => { el.textContent = yearly ? el.dataset.noteYearly : el.dataset.noteMonthly; });
  };
  sw.addEventListener('click', () => setBilling(sw.getAttribute('aria-checked') !== 'true'));
  lblM.addEventListener('click', () => setBilling(false));
  lblY.addEventListener('click', () => setBilling(true));

  /* ---------- Forms ---------- */
  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  const wireForm = (form, okText) => {
    if (!form) return;
    const input = form.querySelector('input[type="email"]');
    const msg = form.querySelector('[role="status"]');
    const base = msg.textContent;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = input.value.trim();
      msg.classList.remove('is-error', 'is-ok');
      if (!isEmail(v)) {
        msg.textContent = 'Please enter a valid work email, like you@company.com.';
        msg.classList.add('is-error');
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');
      msg.textContent = okText.replace('{email}', v);
      msg.classList.add('is-ok');
      form.reset();
      setTimeout(() => { if (msg.classList.contains('is-ok')) { msg.textContent = base; msg.classList.remove('is-ok'); } }, 6000);
    });
  };
  wireForm(document.querySelector('.cta__form'), 'Thanks! We’ll email {email} within one business day to schedule your demo.');
  wireForm(document.querySelector('.news'), 'You’re subscribed. See you next month.');
})();
