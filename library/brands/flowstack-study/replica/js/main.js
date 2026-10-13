/* =====================================================================
   FLOWSTACK TEMPLATE · interactions + motion
   Modules (each guarded, delete any block you don't need):
     THEME   demo theme switcher
     NAV     mobile menu
     APP     hero product UI: sidebar views, status chips, add-task
     TABS    product tour (ARIA tabs, arrow keys)
     RULES   automation switches
     PRICING monthly / yearly toggle
     MOTION  Lenis smooth scroll + GSAP / ScrollTrigger reveals + hero intro
   ===================================================================== */
(function () {
  'use strict';
  var CFG = (window.FLOWSTACK_CONFIG || {}).motion || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var yr = $('[data-year]'); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- THEME ---------- */
  var themeBtns = $$('[data-set-theme]');
  function syncTheme() {
    var t = document.documentElement.getAttribute('data-theme') || 'default';
    themeBtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.setTheme === t)); });
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.content = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || '#ffffff';
  }
  themeBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.setTheme;
      if (t === 'default') document.documentElement.removeAttribute('data-theme');
      else document.documentElement.setAttribute('data-theme', t);
      try { localStorage.setItem('flowstack-theme', t); } catch (e) {}
      syncTheme();
    });
  });
  syncTheme();

  /* ---------- NAV ---------- */
  var toggle = $('.nav-toggle'), links = $('#nav-links');
  if (toggle && links) {
    function setMenu(open) {
      links.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.querySelector('use').setAttribute('href', open ? '#i-x' : '#i-menu');
    }
    toggle.addEventListener('click', function () { setMenu(!links.classList.contains('is-open')); });
    links.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && links.classList.contains('is-open')) { setMenu(false); toggle.focus(); } });
  }

  /* ---------- APP ---------- */
  var app = $('#app');
  if (app) {
    var live = $('#app-live');
    var say = function (msg) { if (live) { live.textContent = ''; setTimeout(function () { live.textContent = msg; }, 30); } };
    // sidebar views
    $$('.app-nav button', app).forEach(function (btn) {
      btn.addEventListener('click', function () {
        $$('.app-nav button', app).forEach(function (b) { b.removeAttribute('aria-current'); });
        btn.setAttribute('aria-current', 'page');
        $$('.app-view', app).forEach(function (v) { v.hidden = v.dataset.panel !== btn.dataset.view; });
        var panel = $('.app-view[data-panel="' + btn.dataset.view + '"]', app);
        if (panel && window.gsap && !reduce) gsap.fromTo(panel, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .35, ease: 'power2.out' });
        say(btn.textContent.trim() + ' view shown');
      });
    });
    // status chips cycle
    var ORDER = ['pending', 'progress', 'done'], LABEL = { pending: 'Pending', progress: 'In Progress', done: 'Completed' };
    function recount() {
      var chips = $$('#task-rows .chip', app);
      var prog = chips.filter(function (c) { return c.dataset.status === 'progress'; }).length;
      var done = chips.filter(function (c) { return c.dataset.status === 'done'; }).length;
      var p = $('[data-count="progress"]', app), d = $('[data-count="done"]', app);
      if (p) p.textContent = String(5 + prog);
      if (d) d.textContent = String(23 + done);
    }
    function labelChip(chip) {
      var task = chip.closest('tr').querySelector('td').textContent.trim();
      chip.setAttribute('aria-label', 'Status for ' + task + ': ' + LABEL[chip.dataset.status] + '. Activate to change.');
    }
    $$('#task-rows .chip', app).forEach(labelChip);
    app.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip'); if (!chip) return;
      var next = ORDER[(ORDER.indexOf(chip.dataset.status) + 1) % ORDER.length];
      chip.dataset.status = next; chip.textContent = LABEL[next]; labelChip(chip); recount();
      say('Status changed to ' + LABEL[next]);
    });
    // add task
    var addBtn = $('[data-add-task]', app), form = $('#task-form'), input = $('#task-input'), rows = $('#task-rows');
    function openForm(open) {
      form.hidden = !open; addBtn.setAttribute('aria-expanded', String(open));
      if (open) input.focus(); else addBtn.focus();
    }
    if (addBtn && form) {
      addBtn.addEventListener('click', function () { openForm(form.hidden); });
      $('[data-cancel]', form).addEventListener('click', function () { openForm(false); });
      form.addEventListener('keydown', function (e) { if (e.key === 'Escape') openForm(false); });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var v = input.value.trim(); if (!v) { input.focus(); return; }
        var tr = document.createElement('tr'); tr.className = 'is-new';
        var td = document.createElement('td');
        td.innerHTML = '<svg class="i" aria-hidden="true"><use href="#i-sparkle"/></svg>';
        td.appendChild(document.createTextNode(v));
        tr.appendChild(td);
        tr.insertAdjacentHTML('beforeend', '<td class="col-meta"><span><svg class="i" aria-hidden="true"><use href="#i-msg"/></svg>0</span><span><svg class="i" aria-hidden="true"><use href="#i-link"/></svg>0</span></td><td class="col-assign">John (you)</td><td><button type="button" class="chip" data-status="pending">Pending</button></td>');
        rows.insertBefore(tr, rows.firstChild);
        labelChip(tr.querySelector('.chip'));
        input.value = ''; recount();
        say('Task "' + v + '" added as Pending');
        input.focus();
      });
    }
  }

  /* ---------- TABS ---------- */
  $$('[role="tablist"]').forEach(function (list) {
    var tabs = $$('[role="tab"]', list);
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) { p.hidden = !on; if (on && window.gsap && !reduce) gsap.fromTo(p, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .4, ease: 'power2.out' }); }
      });
      if (focus) tab.focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t); });
      t.addEventListener('keydown', function (e) {
        var k = e.key, n = null;
        if (k === 'ArrowDown' || k === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (k === 'ArrowUp' || k === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (k === 'Home') n = tabs[0]; if (k === 'End') n = tabs[tabs.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  });

  /* ---------- RULES ---------- */
  function countRules() { var c = $('[data-rule-count]'); if (c) c.textContent = $$('.rule .switch[aria-checked="true"]').length; }
  $$('.rule .switch').forEach(function (s) {
    s.closest('.rule').classList.toggle('is-off', s.getAttribute('aria-checked') !== 'true');
    s.addEventListener('click', function () {
      var on = s.getAttribute('aria-checked') !== 'true';
      s.setAttribute('aria-checked', String(on)); s.closest('.rule').classList.toggle('is-off', !on); countRules();
    });
  });
  countRules();

  /* ---------- PRICING ---------- */
  var bill = $('#billing-toggle');
  if (bill) bill.addEventListener('click', function () {
    var yearly = bill.getAttribute('aria-checked') !== 'true';
    bill.setAttribute('aria-checked', String(yearly));
    $$('.amt').forEach(function (a) {
      var to = +(yearly ? a.dataset.y : a.dataset.m);
      if (window.gsap && !reduce) {
        var o = { v: +a.textContent.replace(/\D/g, '') };
        gsap.to(o, { v: to, duration: .45, ease: 'power2.out', onUpdate: function () { a.textContent = '$' + Math.round(o.v); } });
      } else a.textContent = '$' + to;
    });
    var note = $('#bill-note'); if (note) note.textContent = yearly ? 'Billed yearly, prices shown per month. Prices in USD.' : 'Billed monthly. Prices in USD.';
  });

  /* ---------- MOTION ---------- */
  if (!window.gsap || reduce) return;
  gsap.registerPlugin(window.ScrollTrigger);
  document.documentElement.classList.add('js-motion');

  if (CFG.smoothScroll !== false && window.Lenis) {
    var lenis = new Lenis({ lerp: 0.1, anchors: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    window.flowstackLenis = lenis;
  }

  if (CFG.heroIntro !== false) {
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.nav > *', { y: -10, opacity: 0, duration: .6, stagger: .05 })
      .from('.hero .eyebrow', { y: 14, opacity: 0, duration: .6 }, .1)
      .from('.hero .display .line', { yPercent: 60, opacity: 0, duration: .9, stagger: .09 }, .15)
      .from('.hero .lede, .btn-demo', { y: 16, opacity: 0, duration: .7, stagger: .08 }, .35)
      .from('.dunes--hero', { opacity: 0, duration: 1.2, ease: 'power1.out' }, .2)
      .from('[data-app-rise]', { y: 140, opacity: 0, duration: 1.3, ease: 'expo.out' }, .45);
    // gentle depth: the UI keeps rising a touch as you scroll past the dunes
    gsap.to('#app', { y: -40, ease: 'none', scrollTrigger: { trigger: '.hero-stage', start: 'top 60%', end: 'bottom top', scrub: true } });
  }

  if (CFG.reveals !== false) {
    $$('[data-reveal]').forEach(function (el) {
      gsap.fromTo(el, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    $$('[data-reveal-stagger]').forEach(function (el) {
      gsap.fromTo(el.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', stagger: .07, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
  } else {
    document.documentElement.classList.remove('js-motion');
  }
})();
