(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reducedByOS = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = reducedByOS.matches;
  const toast = $('#toast');
  let toastTimer;
  const say = message => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2100);
  };
  const hasGsap = typeof window.gsap !== 'undefined';
  if (hasGsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  const noMotion = () => reduced || reducedByOS.matches;

  // Compact mobile navigation and hash links.
  const menuToggle = $('.menu-toggle');
  const mainNav = $('.main-nav');
  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    mainNav.classList.toggle('open', !open);
  });
  $$('.main-nav a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  // Broad filters, keyword search, sorting, and grid/list views.
  const cards = $$('.motion-card');
  const grid = $('#motionGrid');
  let category = 'all';
  let interaction = 'all';
  const search = $('#animationSearch');
  const updateCards = () => {
    const query = (search.value || '').trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const byCategory = category === 'all' || card.dataset.category === category;
      const byInteraction = interaction === 'all' || card.dataset.interaction.split(' ').includes(interaction);
      const haystack = `${card.dataset.title} ${card.dataset.tags} ${card.dataset.description}`.toLowerCase();
      const bySearch = !query || haystack.includes(query);
      card.hidden = !(byCategory && byInteraction && bySearch);
      if (!card.hidden) visible++;
    });
    $('#resultCount').textContent = visible;
    $('.empty-state').hidden = visible > 0;
  };
  $$('.filter-tab').forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    $$('.filter-tab').forEach(tab => { const active = tab === button; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); });
    updateCards();
  }));
  $$('.interaction').forEach(button => button.addEventListener('click', () => {
    interaction = button.dataset.interaction;
    $$('.interaction').forEach(item => item.classList.toggle('active', item === button));
    updateCards();
  }));
  search.addEventListener('input', updateCards);
  $('#clearFilters').addEventListener('click', () => {
    category = 'all'; interaction = 'all'; search.value = '';
    $$('.filter-tab').forEach((tab, i) => { tab.classList.toggle('active', i === 0); tab.setAttribute('aria-selected', String(i === 0)); });
    $$('.interaction').forEach((tab, i) => tab.classList.toggle('active', i === 0));
    updateCards();
  });
  $$('.view-toggle').forEach(button => button.addEventListener('click', () => {
    $$('.view-toggle').forEach(item => item.classList.toggle('active', item === button));
    grid.classList.toggle('list-view', button.dataset.view === 'list');
  }));
  $('#sortSelect').addEventListener('change', event => {
    const mode = event.target.value;
    [...cards].sort((a, b) => mode === 'name' ? a.dataset.title.localeCompare(b.dataset.title) : mode === 'duration' ? Number(a.dataset.duration) - Number(b.dataset.duration) : Number(a.dataset.number) - Number(b.dataset.number)).forEach(card => grid.append(card));
  });

  // Details dialog and code copy affordance.
  const dialog = $('#detailDialog');
  let selectedCard = cards[0];
  const openDetails = card => {
    if (!card) return;
    selectedCard = card;
    $('#dialogNumber').textContent = card.dataset.number;
    $('#dialogTitle').textContent = card.dataset.title;
    $('#dialogDescription').textContent = card.dataset.description;
    $('#dialogCode').textContent = card.dataset.code;
    $('#dialogTags').innerHTML = card.dataset.tags.split(' ').map(tag => `<span>${tag}</span>`).join('');
    dialog.showModal();
  };
  cards.forEach(card => $('.card-open', card).addEventListener('click', () => openDetails(card)));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  $('#copyCode').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('#dialogCode').textContent); say('Motion snippet copied.'); }
    catch { say('Select the snippet to copy it.'); }
  });
  $('.dialog-replay').addEventListener('click', () => { dialog.close(); replay(selectedCard); });

  // Keyboard search shortcut.
  const openSearch = () => { search.focus(); search.select(); };
  $$('[data-open-search]').forEach(button => button.addEventListener('click', openSearch));
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
    if (event.key === 'Escape' && mainNav.classList.contains('open')) { mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }
  });

  // Ease playground: play, drag, and compare the same distance with different curves.
  let chosenEase = 'power3.out';
  const easeTarget = $('#easeTarget');
  const range = $('#durationRange');
  const easeTrack = $('.ease-track');
  const targetX = () => Math.max(0, easeTrack.clientWidth - easeTarget.offsetWidth);
  const moveEase = (ease = chosenEase) => {
    if (noMotion()) { gsap.set(easeTarget, { x: targetX() }); return; }
    gsap.killTweensOf(easeTarget);
    gsap.to(easeTarget, { x: targetX(), duration: Number(range.value), ease, overwrite: true });
  };
  $$('.ease-option').forEach(button => button.addEventListener('click', () => {
    chosenEase = button.dataset.ease;
    $$('.ease-option').forEach(option => option.classList.toggle('active', option === button));
    $('#easeName').textContent = chosenEase;
    moveEase();
  }));
  range.addEventListener('input', () => { $('#durationValue').textContent = `${Number(range.value).toFixed(1)}s`; });
  $('#playEase').addEventListener('click', () => { gsap.set(easeTarget, { x: 0 }); requestAnimationFrame(() => moveEase()); });
  $('#resetPlayground').addEventListener('click', () => { gsap.killTweensOf(easeTarget); gsap.set(easeTarget, { x: 0 }); chosenEase = 'power3.out'; $('#easeName').textContent = chosenEase; range.value = '.8'; $('#durationValue').textContent = '0.8s'; $$('.ease-option').forEach((o, i) => o.classList.toggle('active', i === 0)); });
  let dragging = false;
  easeTarget.addEventListener('pointerdown', event => { dragging = true; easeTarget.setPointerCapture(event.pointerId); gsap.killTweensOf(easeTarget); });
  easeTarget.addEventListener('pointermove', event => {
    if (!dragging) return;
    const rect = easeTrack.getBoundingClientRect();
    const x = gsap.utils.clamp(0, targetX(), event.clientX - rect.left - easeTarget.offsetWidth / 2);
    gsap.set(easeTarget, { x });
  });
  easeTarget.addEventListener('pointerup', () => { if (dragging) { dragging = false; gsap.to(easeTarget, { x: targetX(), duration: .6, ease: chosenEase }); } });
  easeTarget.addEventListener('pointercancel', () => { dragging = false; });

  // Individual play buttons rerun the corresponding live interaction.
  const replayMap = {
    cascade: card => { const text = $('.cascade-demo', card); if (noMotion()) return; gsap.fromTo(text, { y: 20, opacity: .2, clipPath: 'inset(0 0 70% 0)' }, { y: 0, opacity: 1, clipPath: 'inset(0 0 -10% 0)', duration: .9, ease: 'power3.out', clearProps: 'clipPath' }); },
    jiggle: card => { const b = $('.jiggle-demo', card); if (noMotion()) return; gsap.fromTo(b, { scale: .88, rotation: -5 }, { scale: 1, rotation: 0, duration: .7, ease: 'elastic.out(1,.45)', overwrite: true }); },
    magnetic: card => { const b = $('.magnetic-demo', card); if (noMotion()) return; gsap.fromTo(b, { x: 18, y: -8 }, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.6)' }); },
    fill: card => { const line = $('.fill-line span', card); if (noMotion()) return; gsap.fromTo(line, { width: '5%' }, { width: '100%', duration: 1.3, ease: 'power2.inOut' }); },
    underline: card => { const p = $('.underline-demo path', card); if (noMotion()) return; gsap.fromTo(p, { strokeDashoffset: 160 }, { strokeDashoffset: 0, duration: .9, ease: 'power2.out' }); },
    tilt: card => { const el = $('.tilt-demo', card); if (noMotion()) return; gsap.fromTo(el, { rotationY: -11, rotationX: 7, y: -5 }, { rotationY: 0, rotationX: 0, y: 0, duration: .6, ease: 'power3.out', transformPerspective: 700 }); },
    list: card => { const list = $('.morph-list', card); const items = gsap.utils.toArray('.morph-item', list); const active = $('.morph-item.active', list); const next = items[(items.indexOf(active) + 1) % items.length]; reorderList(list, next); },
    words: card => { const track = $('.word-track', card); if (noMotion()) return; gsap.fromTo(track, { y: 0 }, { y: -60, duration: 1.2, ease: 'power2.inOut', onComplete: () => gsap.set(track, { y: 0 }) }); },
    image: card => { const scene = $('.image-slice', card); if (noMotion()) return; gsap.fromTo(scene, { clipPath: 'inset(42% 38% 42% 38%)', scale: .92 }, { clipPath: 'inset(0 0 0 0)', scale: 1, duration: 1.05, ease: 'power3.inOut' }); },
    tags: card => { const tags = $$('.tag-cloud span', card); if (noMotion()) return; gsap.fromTo(tags, { x: i => (i % 2 ? 18 : -18), y: 11, rotation: i => i % 2 ? 5 : -5 }, { x: 0, y: 0, rotation: 0, duration: .7, stagger: .035, ease: 'elastic.out(1,.65)' }); },
    carousel: card => { const track = $('.carousel-track', card); if (noMotion()) return; gsap.to(track, { x: -34, duration: .45, ease: 'power3.out', yoyo: true, repeat: 1 }); },
    menu: card => toggleMiniMenu(card, true),
    path: card => animateDrawPath(card),
    accordion: card => { const details = $$('.accordion-demo', card); details[0].open = !details[0].open; details[1].open = false; if (details[0].open && !noMotion()) gsap.fromTo($('p', details[0]), { y: -5, opacity: 0 }, { y: 0, opacity: 1, duration: .3, ease: 'power2.out' }); },
    scramble: card => scrambleText($('.scramble-demo span', card)),
    counter: card => { const n = $('.counter-demo', card); if (noMotion()) return; const obj = { value: 0 }; gsap.to(obj, { value: 128, duration: 1.5, ease: 'power2.out', onUpdate: () => n.textContent = Math.round(obj.value) }); },
    gradient: card => { const orb = $('.gradient-orb', card); if (!noMotion()) gsap.fromTo(orb, { scale: .7, rotation: -12 }, { scale: 1.14, rotation: 12, duration: 2.1, yoyo: true, repeat: 1, ease: 'sine.inOut' }); },
    paper: card => { const sample = $('.paper-sample', card); if (!noMotion()) gsap.fromTo(sample, { clipPath: 'inset(0 50% 0 50%)', x: 20 }, { clipPath: 'inset(0 0% 0 0%)', x: 0, duration: .75, ease: 'power3.inOut' }); },
    drawer: card => toggleDrawer(card, true),
    player: card => togglePlayback(card)
  };
  function replay(card) { if (!card) return; const key = $('[data-replay]', card)?.dataset.replay; replayMap[key]?.(card); }
  $$('[data-replay]').forEach(button => button.addEventListener('click', event => { event.stopPropagation(); replay(button.closest('.motion-card')); }));
  cards.forEach(card => card.addEventListener('click', event => { if (event.target.closest('button,summary,a')) return; openDetails(card); }));

  // Cursor-led demos: magnetic pull, spotlight tilt, and magnetic labels.
  $$('.magnetic-wrap').forEach(wrap => {
    const button = $('.magnetic-demo', wrap);
    wrap.addEventListener('pointermove', event => { if (noMotion()) return; const r = wrap.getBoundingClientRect(); gsap.to(button, { x: (event.clientX - r.left - r.width / 2) * .22, y: (event.clientY - r.top - r.height / 2) * .22, duration: .35, ease: 'power2.out', overwrite: true }); });
    wrap.addEventListener('pointerleave', () => gsap.to(button, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.6)' }));
  });
  $$('.jiggle-demo').forEach(button => {
    const play = () => { if (!noMotion()) gsap.fromTo(button, { scale: .94, rotation: -2 }, { scale: 1, rotation: 0, duration: .65, ease: 'elastic.out(1,.4)' }); };
    button.addEventListener('mouseenter', play); button.addEventListener('click', play);
  });
  $$('.tilt-demo').forEach(el => {
    el.addEventListener('pointermove', e => { if (noMotion()) return; const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5; const y = (e.clientY - r.top) / r.height - .5; gsap.to(el, { rotationY: x * 12, rotationX: -y * 10, transformPerspective: 750, duration: .3, ease: 'power2.out', overwrite: true }); });
    el.addEventListener('pointerleave', () => gsap.to(el, { rotationX: 0, rotationY: 0, duration: .55, ease: 'elastic.out(1,.55)' }));
  });
  function reorderList(list, item) {
    const items = gsap.utils.toArray('.morph-item', list);
    const before = new Map(items.map(el => [el, el.getBoundingClientRect()]));
    item.classList.add('active');
    items.filter(el => el !== item).forEach(el => el.classList.remove('active'));
    list.prepend(item);
    if (!noMotion()) items.forEach(el => { const first = before.get(el); const last = el.getBoundingClientRect(); gsap.fromTo(el, { x: first.left - last.left, y: first.top - last.top }, { x: 0, y: 0, duration: .55, ease: 'power2.inOut', clearProps: 'transform' }); });
  }
  $$('.morph-item').forEach(item => item.addEventListener('click', () => reorderList(item.parentElement, item)));
  $$('.tag-cloud').forEach(cloud => {
    const tags = $$('.tag-cloud span', cloud);
    cloud.addEventListener('pointermove', e => { if (noMotion()) return; tags.forEach((tag, i) => { const r = tag.getBoundingClientRect(); const dx = r.left + r.width / 2 - e.clientX; const dy = r.top + r.height / 2 - e.clientY; const d = Math.max(1, Math.hypot(dx, dy)); const strength = Math.max(0, 1 - d / 115) * 13; gsap.to(tag, { x: dx / d * strength, y: dy / d * strength, duration: .35, ease: 'power2.out', overwrite: true }); }); });
    cloud.addEventListener('pointerleave', () => gsap.to(tags, { x: 0, y: 0, duration: .65, ease: 'elastic.out(1,.5)', stagger: .02 }));
  });
  $$('.carousel-track').forEach(track => {
    let down = false, startX = 0, currentX = 0;
    track.addEventListener('pointerdown', e => { down = true; startX = e.clientX - currentX; track.setPointerCapture(e.pointerId); });
    track.addEventListener('pointermove', e => { if (!down) return; currentX = gsap.utils.clamp(-80, 25, e.clientX - startX); gsap.set(track, { x: currentX }); });
    track.addEventListener('pointerup', () => { if (!down) return; down = false; gsap.to(track, { x: Math.round(currentX / 102) * 102, duration: .45, ease: 'power3.out' }); });
    track.addEventListener('pointercancel', () => { down = false; });
  });
  function toggleMiniMenu(card, open) {
    const overlay = $('.mini-menu-overlay', card);
    const menuOpen = open ?? overlay.classList.contains('closed');
    overlay.classList.toggle('closed', !menuOpen);
    if (noMotion()) { overlay.style.clipPath = menuOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)'; return; }
    gsap.to(overlay, { clipPath: menuOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)', duration: .5, ease: 'power3.inOut' });
    gsap.fromTo($$('a', overlay), { y: menuOpen ? 15 : 0, opacity: menuOpen ? 0 : 1 }, { y: menuOpen ? 0 : -10, opacity: menuOpen ? 1 : 0, stagger: .055, duration: .3, delay: menuOpen ? .18 : 0, ease: 'power2.out' });
  }
  $$('.mini-menu-toggle').forEach(button => button.addEventListener('click', () => toggleMiniMenu(button.closest('.motion-card'))));
  $$('.mini-menu-overlay>button').forEach(button => button.addEventListener('click', () => toggleMiniMenu(button.closest('.motion-card'), false)));
  $$('.mini-menu-overlay a').forEach(a => a.addEventListener('click', e => { e.preventDefault(); toggleMiniMenu(a.closest('.motion-card'), false); say('Menu selection previewed.'); }));
  function toggleDrawer(card, open) {
    const drawer = $('.drawer-panel', card);
    const isOpen = open ?? drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open', isOpen);
    if (noMotion()) { gsap.set(drawer, { xPercent: isOpen ? 0 : -105 }); return; }
    gsap.to(drawer, { xPercent: isOpen ? 0 : -105, duration: .5, ease: 'power3.out' });
    if (isOpen) gsap.fromTo($$('a', drawer), { x: -14, opacity: 0 }, { x: 0, opacity: 1, stagger: .06, delay: .12, duration: .3, ease: 'power2.out' });
  }
  $$('.drawer-trigger').forEach(button => button.addEventListener('click', () => toggleDrawer(button.closest('.motion-card'), true)));
  $$('.drawer-close').forEach(button => button.addEventListener('click', () => toggleDrawer(button.closest('.motion-card'), false)));
  $$('.drawer-panel a').forEach(link => link.addEventListener('click', event => { event.preventDefault(); toggleDrawer(link.closest('.motion-card'), false); }));
  $$('.drawer-scene').forEach(scene => scene.addEventListener('click', event => { if (event.target === scene) toggleDrawer(scene.closest('.motion-card'), false); }));
  function togglePlayback(card) {
    const button = $('.media-play', card); const progress = $('.player-bar span', card); const amount = Number(gsap.getProperty(progress, 'scaleX')) || 0;
    if (noMotion()) { button.textContent = button.textContent === '▶' ? 'Ⅱ' : '▶'; return; }
    const active = gsap.getTweensOf(progress).find(tween => tween.isActive());
    if (active) { active.pause(); button.textContent = '▶'; button.setAttribute('aria-label', 'Resume preview'); return; }
    if (amount >= .999) gsap.set(progress, { scaleX: 0 });
    const nextAmount = amount >= .999 ? 0 : amount;
    button.textContent = 'Ⅱ'; button.setAttribute('aria-label', 'Pause preview');
    gsap.to(progress, { scaleX: 1, duration: 7 * (1 - nextAmount), ease: 'none', overwrite: true, onUpdate: () => setPlayerTime(card, Number(gsap.getProperty(progress, 'scaleX'))), onComplete: () => { button.textContent = '▶'; button.setAttribute('aria-label', 'Play preview'); } });
  }
  function setPlayerTime(card, ratio) { $('.player-time', card).textContent = `0:${String(Math.min(7,Math.floor(ratio*7))).padStart(2,'0')} / 0:07`; }
  $$('.media-play').forEach(button => button.addEventListener('click', () => togglePlayback(button.closest('.motion-card'))));
  $$('.player-bar').forEach(bar => {
    const seek = event => { const r = bar.getBoundingClientRect(); const ratio = gsap.utils.clamp(0, 1, (event.clientX - r.left) / r.width); const card = bar.closest('.motion-card'); const progress = $('span', bar); gsap.killTweensOf(progress); gsap.set(progress, { scaleX: ratio }); setPlayerTime(card, ratio); $('.media-play', card).textContent = '▶'; $('.media-play', card).setAttribute('aria-label', 'Play preview'); };
    bar.addEventListener('pointerdown', event => { bar.setPointerCapture(event.pointerId); seek(event); });
    bar.addEventListener('pointermove', event => { if (event.buttons) seek(event); });
  });
  $$('.accordion-demo').forEach(details => details.addEventListener('toggle', () => { if (details.open && !noMotion()) gsap.fromTo($('p', details), { y: -5, opacity: 0 }, { y: 0, opacity: 1, duration: .3, ease: 'power2.out' }); }));
  $$('.paper-next').forEach(button => button.addEventListener('click', () => replay(button.closest('.motion-card'))));
  $$('.scramble-demo').forEach(button => button.addEventListener('mouseenter', () => scrambleText($('span', button))));
  function scrambleText(el) {
    if (noMotion()) return;
    const final = el.dataset.final || el.textContent;
    el.dataset.final = final;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const obj = { progress: 0 };
    gsap.to(obj, { progress: 1, duration: .8, ease: 'power2.out', onUpdate: () => {
      const complete = Math.floor(final.length * obj.progress);
      el.textContent = final.split('').map((char, i) => i < complete ? char : char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join('');
    }, onComplete: () => el.textContent = final });
  }
  $$('.underline-demo').forEach(el => {
    const path = $('path', el);
    el.addEventListener('mouseenter', () => gsap.to(path, { strokeDashoffset: 0, duration: .85, ease: 'power2.out' }));
    el.addEventListener('mouseleave', () => gsap.to(path, { strokeDashoffset: 160, duration: .35, ease: 'power2.in' }));
  });

  // Hero motion and scroll-triggered studies.
  function animateDrawPath(card) {
    const path = $('.draw-path', card); const dot = $('.path-dot', card); const len = path.getTotalLength();
    path.style.strokeDasharray = len; path.style.strokeDashoffset = len;
    if (noMotion()) { path.style.strokeDashoffset = 0; return; }
    const obj = { progress: 0 };
    gsap.to(obj, { progress: 1, duration: 1.35, ease: 'power2.inOut', onUpdate: () => { const p = obj.progress; path.style.strokeDashoffset = `${len * (1 - p)}`; const pt = path.getPointAtLength(len * p); dot.setAttribute('cx', pt.x); dot.setAttribute('cy', pt.y); } });
  }
  const heroReplay = () => {
    if (noMotion()) return;
    const tl = gsap.timeline();
    tl.fromTo('.stage-card-main', { y: 16, rotation: 0, scale: .96 }, { y: 0, rotation: -5, scale: 1, duration: .8, ease: 'power3.out' })
      .fromTo('.stage-square', { x: -35, y: -20 }, { x: 0, y: 0, duration: .7, ease: 'back.out(1.8)' }, '-=.55')
      .fromTo('.stage-ring', { scale: .65, opacity: .3 }, { scale: 1, opacity: 1, duration: .7, ease: 'power2.out' }, '-=.55')
      .fromTo('.float-a,.float-b', { y: 10, opacity: .2 }, { y: 0, opacity: 1, duration: .45, stagger: .08 }, '-=.35');
  };
  $('.stage-replay').addEventListener('click', heroReplay);
  $$('.preview-image').forEach(card => ScrollTrigger && ScrollTrigger.create({ trigger: card, start: 'top 85%', once: true, onEnter: () => replayMap.image(card.closest('.motion-card')) }));
  if (hasGsap && window.ScrollTrigger && !noMotion()) {
    gsap.from('.hero-copy .eyebrow', { y: 12, opacity: 0, duration: .55, delay: .08, ease: 'power2.out' });
    gsap.from('.hero h1', { y: 40, opacity: 0, duration: .85, delay: .13, ease: 'power3.out' });
    gsap.from('.hero-copy>p,.hero-actions,.hero-meta', { y: 16, opacity: 0, duration: .55, stagger: .1, delay: .34, ease: 'power2.out' });
    gsap.from('.hero-stage', { clipPath: 'inset(12% 12% 12% 12%)', opacity: 0, duration: .9, delay: .12, ease: 'power3.inOut' });
    gsap.to('.stage-orbit', { rotation: '+=14', duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: .6 });
    gsap.to('.stage-card-back', { y: -8, rotation: 5, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.stage-square', { x: 48, y: 24, rotation: 65, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.stage-ring', { scale: .84, x: -12, duration: 3.3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.ticker-track', { xPercent: -25, duration: 15, repeat: -1, ease: 'none' });
    gsap.to('.word-track', { y: -90, duration: 2.8, repeat: -1, ease: 'none', onRepeat: () => gsap.set('.word-track', { y: 0 }) });
    gsap.utils.toArray('.motion-card').forEach((card, i) => gsap.from(card, { y: 20, opacity: 0, duration: .6, delay: (i % 3) * .06, ease: 'power2.out', scrollTrigger: { trigger: card, start: 'top 92%', once: true } }));
    gsap.to('.fill-line span', { width: '100%', ease: 'none', scrollTrigger: { trigger: '.preview-fill', start: 'top 90%', end: 'bottom 42%', scrub: .7 } });
    gsap.to('.study-blob', { rotation: 55, scale: 1.3, x: -20, scrollTrigger: { trigger: '.study-one', start: 'top 85%', end: 'bottom 35%', scrub: 1 } });
    gsap.to('.parallax-sun', { y: -25, x: 10, scrollTrigger: { trigger: '.study-two', start: 'top bottom', end: 'bottom top', scrub: 1 } });
    gsap.from('.study-lines i', { scaleX: 0, stagger: .1, ease: 'power2.out', scrollTrigger: { trigger: '.study-three', start: 'top 75%', end: 'center 40%', scrub: .5 } });
    gsap.from('.settle-grid i', { scale: .2, rotation: -18, stagger: .09, ease: 'back.out(2)', scrollTrigger: { trigger: '.study-four', start: 'top 85%', once: true } });
    const horizontal = gsap.matchMedia();
    horizontal.add('(min-width: 681px)', () => {
      const track = $('.horizontal-track');
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 72);
      const tween = gsap.to(track, { x: () => -distance(), ease: 'none', scrollTrigger: { trigger: '.horizontal-study', start: 'top top', end: () => `+=${distance() + window.innerHeight * .55}`, scrub: 1, pin: true, anticipatePin: 1, invalidateOnRefresh: true, onUpdate: self => gsap.set('.horizontal-progress span', { width: `${self.progress * 100}%` }) } });
      return () => tween.scrollTrigger?.kill();
    });
    gsap.from('.principle', { y: 22, opacity: 0, stagger: .12, duration: .6, ease: 'power2.out', scrollTrigger: { trigger: '.principle-grid', start: 'top 82%', once: true } });
    gsap.from('.closing-orbit', { rotation: -35, scale: .7, opacity: 0, duration: .8, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.closing', start: 'top 80%', once: true } });
  } else {
    $$('.motion-card,.principle').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
  }
  if (noMotion()) {
    $$('.draw-path').forEach(path => animateDrawPath(path.closest('.motion-card')));
    $$('.fill-line span').forEach(line => { line.style.width = '100%'; });
  } else {
    $$('.draw-path').forEach(path => { const card = path.closest('.motion-card'); ScrollTrigger.create({ trigger: card, start: 'top 85%', once: true, onEnter: () => animateDrawPath(card) }); });
  }

  // Accessible site-level reduced-motion toggle; also follows the OS preference.
  const motionSwitch = $('#motionSwitch');
  motionSwitch.setAttribute('aria-pressed', String(reduced));
  document.body.classList.toggle('reduce-motion', reduced);
  const setReduced = value => {
    reduced = value;
    document.body.classList.toggle('reduce-motion', reduced);
    motionSwitch.setAttribute('aria-pressed', String(reduced));
    if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(trigger => reduced ? trigger.disable(false) : trigger.enable());
    if (!reduced && window.ScrollTrigger) ScrollTrigger.refresh();
    if (reduced && hasGsap) gsap.globalTimeline.pause();
    if (!reduced && hasGsap) gsap.globalTimeline.resume();
    say(reduced ? 'Motion paused. The page stays in place.' : 'Motion is back on.');
  };
  motionSwitch.addEventListener('click', () => setReduced(!reduced));
  reducedByOS.addEventListener?.('change', event => setReduced(event.matches));
  window.addEventListener('resize', () => { if (window.ScrollTrigger && !noMotion()) ScrollTrigger.refresh(); });
})();
