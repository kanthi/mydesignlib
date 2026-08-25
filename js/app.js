/**
 * mydesignlib — personal design library
 * Loads data/catalog.json; type / industry / tag filters, search, sort, detail modal.
 */

(() => {
  "use strict";

  const TAG_PREVIEW = 8;
  const CARD_TAGS = 2;

  const TYPE_LABELS = {
    all: "All",
    website: "Websites",
    brand: "Brands",
    logo: "Logos",
    system: "Systems",
  };

  const TYPE_ORDER = ["all", "website", "brand", "logo", "system"];

  const DEVICES = {
    mobile: {
      label: "Phone",
      width: 390,
      height: 844,
      padX: 12,
      padTop: 12,
      padBot: 12,
      stand: 0,
      overhang: 4,
      hint: "outline",
    },
    tablet: {
      label: "Tablet",
      width: 768,
      height: 1024,
      padX: 12,
      padTop: 12,
      padBot: 12,
      stand: 0,
      hint: "outline",
    },
    laptop: {
      label: "Laptop",
      width: 1440,
      height: 900,
      padX: 16,
      padTop: 16,
      padBot: 18,
      stand: 40,
      overhang: 52,
      hint: "laptop",
    },
    desktop: {
      label: "Display",
      width: 1280,
      height: 800,
      padX: 12,
      padTop: 12,
      padBot: 12,
      stand: 145,
      hint: "monitor",
    },
  };

  const state = {
    catalog: null,
    type: "all",
    category: "All",
    activeTags: new Set(),
    query: "",
    sort: "featured",
    tagsExpanded: false,
    device: "desktop",
    previewPath: "",
    previewName: "",
    modalItemId: "",
  };

  const els = {
    grid: document.getElementById("template-grid"),
    empty: document.getElementById("empty-state"),
    emptyMessage: document.getElementById("empty-message"),
    resultCount: document.getElementById("result-count"),
    typeTabs: document.getElementById("type-tabs"),
    categoryTabs: document.getElementById("category-tabs"),
    tagFilter: document.getElementById("tag-filter"),
    tagCloud: document.getElementById("tag-cloud"),
    tagMore: document.getElementById("tag-more"),
    tagClear: document.getElementById("tag-clear"),
    search: document.getElementById("search"),
    sort: document.getElementById("sort"),
    clearFilters: document.getElementById("clear-filters"),
    statWebsites: document.getElementById("stat-websites"),
    statBrands: document.getElementById("stat-brands"),
    statLogos: document.getElementById("stat-logos"),
    statSystems: document.getElementById("stat-systems"),
    themeToggle: document.getElementById("theme-toggle"),
    modal: document.getElementById("detail-modal"),
    modalPreview: document.getElementById("modal-preview"),
    modalCategory: document.getElementById("modal-category"),
    modalTitle: document.getElementById("modal-title"),
    modalDesc: document.getElementById("modal-desc"),
    modalTags: document.getElementById("modal-tags"),
    modalRelated: document.getElementById("modal-related"),
    modalPreviewBtn: document.getElementById("modal-preview-btn"),
    modalSourceBtn: document.getElementById("modal-source-btn"),
    devicePreview: document.getElementById("device-preview"),
    deviceTitle: document.getElementById("device-preview-title"),
    deviceSize: document.getElementById("device-preview-size"),
    deviceFrame: document.getElementById("device-frame"),
    deviceSlot: document.getElementById("device-slot"),
    deviceStage: document.getElementById("device-preview-stage"),
    deviceIframe: document.getElementById("device-iframe"),
    deviceOpenTab: document.getElementById("device-open-tab"),
    deviceClose: document.getElementById("device-preview-close"),
  };

  /* ---------- Theme ---------- */

  function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    applyTheme(theme);

    els.themeToggle?.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
    });
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  /* ---------- Data ---------- */

  function getItems() {
    return state.catalog?.items || [];
  }

  async function loadCatalog() {
    showSkeletons(3);
    try {
      const res = await fetch("data/catalog.json", { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      state.catalog = await res.json();
      renderAll();
      const q = new URLSearchParams(location.search);
      const previewId = q.get("preview");
      if (previewId) openDevicePreview(previewId, q.get("device") || "desktop");
    } catch (err) {
      console.error(err);
      els.grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1">
          <p>Could not load <code>data/catalog.json</code>.</p>
          <p style="font-size:0.9rem">If you opened this as a file:// URL, serve the folder with a local static server instead.</p>
        </div>`;
    }
  }

  function showSkeletons(n) {
    els.grid.innerHTML = Array.from({ length: n }, () =>
      `<div class="skeleton" role="presentation"></div>`
    ).join("");
  }

  /* ---------- Filtering ---------- */

  function getFiltered() {
    let list = [...getItems()];
    const q = state.query.trim().toLowerCase();

    if (state.type !== "all") {
      list = list.filter((t) => (t.type || "website") === state.type);
    }

    if (state.category !== "All") {
      list = list.filter((t) => t.category === state.category);
    }

    if (state.activeTags.size > 0) {
      list = list.filter((t) =>
        [...state.activeTags].every((tag) => (t.tags || []).includes(tag))
      );
    }

    if (q) {
      list = list.filter((t) => {
        const hay = [
          t.name,
          t.description,
          t.category,
          t.type,
          ...(t.tags || []),
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      });
    }

    list.sort((a, b) => {
      if (state.sort === "name") {
        return a.name.localeCompare(b.name);
      }
      if (state.sort === "newest") {
        return (b.date || "").localeCompare(a.date || "");
      }
      const fa = a.featured ? 1 : 0;
      const fb = b.featured ? 1 : 0;
      if (fb !== fa) return fb - fa;
      return (b.date || "").localeCompare(a.date || "");
    });

    return list;
  }

  function countByType() {
    const counts = { website: 0, brand: 0, logo: 0, system: 0 };
    getItems().forEach((t) => {
      const type = t.type || "website";
      if (counts[type] !== undefined) counts[type] += 1;
    });
    return counts;
  }

  function tagFrequency() {
    const counts = new Map();
    const base = getItems().filter(
      (t) => state.type === "all" || (t.type || "website") === state.type
    );
    base.forEach((t) => {
      (t.tags || []).forEach((tag) => {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      });
    });
    return counts;
  }

  function allTags() {
    const counts = tagFrequency();
    return [...counts.keys()].sort((a, b) => {
      const diff = (counts.get(b) || 0) - (counts.get(a) || 0);
      return diff !== 0 ? diff : a.localeCompare(b);
    });
  }

  function visibleTags(all) {
    if (state.tagsExpanded || all.length <= TAG_PREVIEW) return all;
    const top = all.slice(0, TAG_PREVIEW);
    const set = new Set(top);
    state.activeTags.forEach((tag) => {
      if (!set.has(tag) && all.includes(tag)) {
        top.push(tag);
        set.add(tag);
      }
    });
    return top;
  }

  function typeLabel(type) {
    return TYPE_LABELS[type] || type || "Item";
  }

  function typeSingular(type) {
    const map = {
      website: "website",
      brand: "brand",
      logo: "logo",
      system: "system",
    };
    return map[type] || "item";
  }

  /* ---------- Render ---------- */

  function renderAll() {
    renderStats();
    renderTypeTabs();
    renderCategories();
    renderTagCloud();
    renderGrid();
  }

  function renderStats() {
    const counts = countByType();
    if (els.statWebsites) els.statWebsites.textContent = String(counts.website);
    if (els.statBrands) els.statBrands.textContent = String(counts.brand);
    if (els.statLogos) els.statLogos.textContent = String(counts.logo);
    if (els.statSystems) els.statSystems.textContent = String(counts.system);
  }

  function renderTypeTabs() {
    if (!els.typeTabs) return;
    const counts = countByType();
    const total = getItems().length;

    els.typeTabs.innerHTML = TYPE_ORDER.map((key) => {
      const label = TYPE_LABELS[key];
      const count = key === "all" ? total : counts[key] || 0;
      return `
      <button
        type="button"
        class="type-tab"
        role="tab"
        aria-selected="${key === state.type}"
        data-type="${escapeAttr(key)}"
      >${escapeHtml(label)} <span class="type-count">${count}</span></button>`;
    }).join("");
  }

  function renderCategories() {
    const cats = state.catalog?.categories || ["All"];
    els.categoryTabs.innerHTML = cats
      .map(
        (cat) => `
      <button
        type="button"
        class="cat-tab"
        role="tab"
        aria-selected="${cat === state.category}"
        data-category="${escapeAttr(cat)}"
      >${escapeHtml(cat)}</button>`
      )
      .join("");
  }

  function renderTagCloud() {
    const tags = allTags();
    if (!els.tagFilter || !els.tagCloud) return;

    if (!tags.length) {
      els.tagFilter.hidden = true;
      els.tagCloud.innerHTML = "";
      return;
    }

    els.tagFilter.hidden = false;
    els.tagFilter.classList.toggle("is-expanded", state.tagsExpanded);

    const shown = visibleTags(tags);
    els.tagCloud.innerHTML = shown
      .map(
        (tag) => `
      <button
        type="button"
        class="tag-chip"
        aria-pressed="${state.activeTags.has(tag)}"
        data-tag="${escapeAttr(tag)}"
      >${escapeHtml(tag)}</button>`
      )
      .join("");

    const hiddenCount = Math.max(0, tags.length - TAG_PREVIEW);
    if (els.tagMore) {
      if (hiddenCount > 0) {
        els.tagMore.hidden = false;
        els.tagMore.setAttribute("aria-expanded", String(state.tagsExpanded));
        els.tagMore.textContent = state.tagsExpanded
          ? "Less"
          : `+${hiddenCount} more`;
      } else {
        els.tagMore.hidden = true;
      }
    }

    if (els.tagClear) {
      els.tagClear.hidden = state.activeTags.size === 0;
    }
  }

  function renderGrid() {
    const list = getFiltered();
    const n = list.length;
    const typeWord =
      state.type === "all"
        ? n === 1
          ? "item"
          : "items"
        : n === 1
          ? typeSingular(state.type)
          : typeLabel(state.type).toLowerCase();

    els.resultCount.textContent = `${n} ${typeWord}`;

    // Grid density: logos get denser min columns via class
    els.grid.classList.toggle("grid-logos", state.type === "logo");
    els.grid.classList.toggle("grid-brands", state.type === "brand");

    if (!list.length) {
      els.grid.innerHTML = "";
      els.empty.hidden = false;
      if (els.emptyMessage) {
        const hasItemsOfType =
          state.type === "all" ||
          getItems().some((t) => (t.type || "website") === state.type);
        if (!hasItemsOfType) {
          els.emptyMessage.textContent = `No ${typeLabel(state.type).toLowerCase()} yet. Add one under library/${state.type}s/ and register it in data/catalog.json.`;
        } else {
          els.emptyMessage.textContent = "Nothing matches these filters.";
        }
      }
      return;
    }

    els.empty.hidden = true;
    els.grid.innerHTML = list.map(cardHtml).join("");
  }

  function colorStripHtml(colors) {
    if (!Array.isArray(colors) || !colors.length) return "";
    const swatches = colors
      .slice(0, 6)
      .map(
        (c) =>
          `<span class="color-swatch" style="background:${escapeAttr(c)}" title="${escapeAttr(c)}"></span>`
      )
      .join("");
    return `<div class="card-color-strip" aria-hidden="true">${swatches}</div>`;
  }

  function cardHtml(t) {
    const type = t.type || "website";
    const all = t.tags || [];
    const shown = all.slice(0, CARD_TAGS);
    const extra = all.length - shown.length;
    const tags =
      shown
        .map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`)
        .join("") +
      (extra > 0 ? `<span class="card-tag-more">+${extra}</span>` : "");

    const metaLine =
      type === "website"
        ? escapeHtml(t.category || "Website")
        : `${escapeHtml(typeLabel(type))}${t.category ? ` · ${escapeHtml(t.category)}` : ""}`;

    const colors = t.meta?.colors;
    const strip = type === "brand" ? colorStripHtml(colors) : "";

    return `
      <article
        class="card card-type-${escapeAttr(type)}"
        role="listitem"
        tabindex="0"
        data-id="${escapeAttr(t.id)}"
        aria-label="${escapeAttr(t.name)}"
      >
        <div class="card-thumb">
          ${
            t.featured
              ? `<span class="card-badge">Pinned</span>`
              : ""
          }
          <span class="card-type-badge">${escapeHtml(typeSingular(type))}</span>
          <img
            src="${escapeAttr(t.thumbnail)}"
            alt=""
            loading="lazy"
            width="640"
            height="400"
            onerror="this.src='data:image/svg+xml,${encodeURIComponent(fallbackThumb(t.name, type))}'"
          />
          ${strip}
        </div>
        <div class="card-body">
          <p class="card-category">${metaLine}</p>
          <h3 class="card-title">${escapeHtml(t.name)}</h3>
          <p class="card-desc">${escapeHtml(t.description || "")}</p>
          ${tags ? `<div class="card-tags">${tags}</div>` : ""}
          <div class="card-footer">
            <span class="result-count">${escapeHtml(t.date || "")}</span>
            <div class="card-actions">
              <button
                type="button"
                class="btn btn-sm btn-primary"
                data-stop
                data-device-preview
                data-device="desktop"
                data-id="${escapeAttr(t.id)}"
                title="Live preview · phone / tablet / laptop / display"
              >Live preview</button>
              <button type="button" class="btn btn-sm btn-ghost" data-details data-id="${escapeAttr(t.id)}">
                Details
              </button>
            </div>
          </div>
        </div>
      </article>`;
  }

  function fallbackThumb(name, type) {
    const h = type === "logo" ? 480 : 400;
    const w = type === "logo" ? 480 : 640;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect fill="#eef0f6" width="${w}" height="${h}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="system-ui,sans-serif" font-size="22" fill="#5c6378">${escapeHtml(name)}</text>
    </svg>`;
  }

  /* ---------- Modal ---------- */

  function openModal(id) {
    const t = getItems().find((x) => x.id === id);
    if (!t) return;

    const type = t.type || "website";
    const catBits = [typeLabel(type)];
    if (t.category) catBits.push(t.category);
    els.modalCategory.textContent = catBits.join(" · ");
    els.modalTitle.textContent = t.name;
    els.modalDesc.textContent = t.description || "";
    els.modalTags.innerHTML = (t.tags || [])
      .map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`)
      .join("");

    const colors = t.meta?.colors;
    const strip =
      type === "brand" && colors?.length
        ? `<div class="modal-color-strip">${colorStripHtml(colors)}</div>`
        : "";

    els.modalPreview.className = `modal-preview modal-preview-${type}`;
    els.modalPreview.innerHTML = `
      <button type="button" class="modal-preview-hit" data-open-device="desktop" data-id="${escapeAttr(t.id)}" title="Open live preview">
        <img src="${escapeAttr(t.thumbnail)}" alt="" width="640" height="360"
          onerror="this.style.display='none'" />
        <span class="modal-preview-cta">Open live preview</span>
      </button>
      ${strip}`;

    state.modalItemId = t.id;
    if (els.modalPreviewBtn) {
      els.modalPreviewBtn.dataset.id = t.id;
    }
    if (els.modalSourceBtn) {
      els.modalSourceBtn.href = t.path;
    }
    // Mark modal device buttons with current item
    els.modal?.querySelectorAll("[data-open-device]").forEach((btn) => {
      btn.dataset.id = t.id;
    });

    // Related items via projectId or related[]
    if (els.modalRelated) {
      const relatedIds = new Set(t.related || []);
      if (t.projectId) {
        getItems().forEach((other) => {
          if (other.id !== t.id && other.projectId === t.projectId) {
            relatedIds.add(other.id);
          }
        });
      }
      const related = [...relatedIds]
        .map((rid) => getItems().find((x) => x.id === rid))
        .filter(Boolean);

      if (related.length) {
        els.modalRelated.hidden = false;
        els.modalRelated.innerHTML = `
          <p class="modal-related-label">Related</p>
          <ul class="modal-related-list">
            ${related
              .map(
                (r) => `
              <li>
                <button type="button" class="modal-related-link" data-related-id="${escapeAttr(r.id)}">
                  <span class="modal-related-type">${escapeHtml(typeSingular(r.type || "website"))}</span>
                  ${escapeHtml(r.name)}
                </button>
              </li>`
              )
              .join("")}
          </ul>`;
      } else {
        els.modalRelated.hidden = true;
        els.modalRelated.innerHTML = "";
      }
    }

    els.modal.hidden = false;
    document.body.classList.add("modal-open");
    els.modal.querySelector(".modal-close")?.focus();
  }

  function closeModal() {
    els.modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  /* ---------- Device preview ---------- */

  function resolvePreviewUrl(path) {
    if (!path) return "";
    try {
      return new URL(path, window.location.href).href;
    } catch {
      return path;
    }
  }

  function openDevicePreview(id, device) {
    const t = getItems().find((x) => x.id === id);
    if (!t) {
      console.warn("[mydesignlib] preview item not found:", id);
      return;
    }
    if (!els.devicePreview || !els.deviceIframe) {
      console.warn("[mydesignlib] device preview elements missing");
      return;
    }

    const url = resolvePreviewUrl(t.path);
    if (!url) {
      console.warn("[mydesignlib] invalid path for", id, t.path);
      return;
    }

    state.previewPath = t.path;
    state.previewName = t.name;
    state.device = device && DEVICES[device] ? device : "desktop";

    if (els.deviceTitle) els.deviceTitle.textContent = t.name;
    if (els.deviceOpenTab) els.deviceOpenTab.href = t.path;

    // Always set src so reopening works after about:blank
    els.deviceIframe.src = url;

    applyDevice(state.device);

    els.devicePreview.hidden = false;
    els.devicePreview.classList.add("is-open");
    els.devicePreview.setAttribute("aria-hidden", "false");
    document.body.classList.add("device-preview-open");
    requestAnimationFrame(() => {
      fitDevice();
      requestAnimationFrame(fitDevice);
    });
    els.devicePreview
      .querySelector(`.device-btn[data-device="${state.device}"]`)
      ?.focus();
  }

  function closeDevicePreview() {
    if (!els.devicePreview) return;
    els.devicePreview.hidden = true;
    els.devicePreview.classList.remove("is-open");
    els.devicePreview.setAttribute("aria-hidden", "true");
    document.body.classList.remove("device-preview-open");
    if (els.deviceIframe) {
      els.deviceIframe.src = "about:blank";
    }
    state.previewPath = "";
  }

  function applyDevice(device) {
    if (!DEVICES[device]) device = "desktop";
    state.device = device;
    const conf = DEVICES[device];

    if (els.deviceFrame) {
      els.deviceFrame.dataset.device = device;
      els.deviceFrame.style.setProperty("--screen-w", `${conf.width}px`);
      els.deviceFrame.style.setProperty("--screen-h", `${conf.height}px`);
      els.deviceFrame.style.setProperty("--overhang", `${conf.overhang || 0}px`);
    }

    const switcher = document.getElementById("device-switch");
    switcher?.querySelectorAll(".device-btn[data-device]").forEach((btn) => {
      const on = btn.dataset.device === device;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      btn.classList.toggle("is-active", on);
    });

    if (els.deviceSize) {
      els.deviceSize.textContent = `${conf.label} · ${conf.width}×${conf.height}`;
    }

    fitDevice();
  }

  function hardwareSize(conf) {
    const overhang = conf.overhang || 0;
    return {
      w: conf.width + (conf.padX || 0) * 2 + overhang * 2,
      h: conf.height + (conf.padTop || 0) + (conf.padBot || 0) + (conf.stand || 0),
    };
  }

  function fitDevice() {
    const stage = els.deviceStage;
    const frame = els.deviceFrame;
    const slot = els.deviceSlot;
    if (!stage || !frame || !slot || els.devicePreview?.hidden) return;

    const conf = DEVICES[state.device] || DEVICES.desktop;
    const hw = hardwareSize(conf);
    const pad = 48;
    const availW = Math.max(120, stage.clientWidth - pad);
    const availH = Math.max(160, stage.clientHeight - pad);
    const scale = Math.min(1, availW / hw.w, availH / hw.h);

    frame.style.width = `${hw.w}px`;
    frame.style.height = `${hw.h}px`;
    frame.style.transform = `scale(${scale})`;
    slot.style.width = `${hw.w * scale}px`;
    slot.style.height = `${hw.h * scale}px`;
  }

  /* ---------- Events ---------- */

  function bindEvents() {
    els.typeTabs?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-type]");
      if (!btn) return;
      state.type = btn.dataset.type;
      // Drop tags that no longer exist in the active type pool
      const valid = new Set(allTags());
      state.activeTags.forEach((tag) => {
        if (!valid.has(tag)) state.activeTags.delete(tag);
      });
      renderTypeTabs();
      renderTagCloud();
      renderGrid();
    });

    els.categoryTabs.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-category]");
      if (!btn) return;
      state.category = btn.dataset.category;
      renderCategories();
      renderGrid();
    });

    els.tagCloud?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-tag]");
      if (!btn) return;
      const tag = btn.dataset.tag;
      if (state.activeTags.has(tag)) state.activeTags.delete(tag);
      else state.activeTags.add(tag);
      renderTagCloud();
      renderGrid();
    });

    els.tagMore?.addEventListener("click", () => {
      state.tagsExpanded = !state.tagsExpanded;
      renderTagCloud();
    });

    els.tagClear?.addEventListener("click", () => {
      state.activeTags.clear();
      renderTagCloud();
      renderGrid();
    });

    let searchTimer;
    els.search.addEventListener("input", () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.query = els.search.value;
        renderGrid();
      }, 150);
    });

    els.sort.addEventListener("change", () => {
      state.sort = els.sort.value;
      renderGrid();
    });

    els.clearFilters?.addEventListener("click", () => {
      state.type = "all";
      state.category = "All";
      state.activeTags.clear();
      state.tagsExpanded = false;
      state.query = "";
      els.search.value = "";
      renderTypeTabs();
      renderCategories();
      renderTagCloud();
      renderGrid();
    });

    els.grid.addEventListener("click", (e) => {
      const devicePreviewBtn = e.target.closest("[data-device-preview]");
      if (devicePreviewBtn) {
        e.preventDefault();
        e.stopPropagation();
        openDevicePreview(
          devicePreviewBtn.dataset.id,
          devicePreviewBtn.dataset.device || "desktop"
        );
        return;
      }
      if (e.target.closest("[data-stop]")) return;
      const details = e.target.closest("[data-details]");
      if (details) {
        openModal(details.dataset.id);
        return;
      }
      const card = e.target.closest(".card[data-id]");
      if (card) openModal(card.dataset.id);
    });

    els.grid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".card[data-id]");
      if (!card) return;
      e.preventDefault();
      openModal(card.dataset.id);
    });

    els.modal.addEventListener("click", (e) => {
      if (e.target.closest("[data-close-modal]")) {
        closeModal();
        return;
      }
      const related = e.target.closest("[data-related-id]");
      if (related) {
        openModal(related.dataset.relatedId);
        return;
      }
      const openDevice = e.target.closest("[data-open-device]");
      if (openDevice) {
        e.preventDefault();
        const id = openDevice.dataset.id || state.modalItemId;
        const device = openDevice.dataset.openDevice || "desktop";
        if (id) openDevicePreview(id, device);
      }
    });

    if (els.deviceStage && typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => fitDevice());
      ro.observe(els.deviceStage);
    }
    window.addEventListener("resize", fitDevice);

    els.devicePreview?.addEventListener("click", (e) => {
      if (e.target.closest("[data-close-device]")) {
        closeDevicePreview();
        return;
      }
      const deviceBtn = e.target.closest("#device-switch .device-btn[data-device]");
      if (deviceBtn) {
        applyDevice(deviceBtn.dataset.device);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (els.devicePreview && !els.devicePreview.hidden) {
        closeDevicePreview();
        return;
      }
      if (!els.modal.hidden) closeModal();
    });
  }

  /* ---------- Utils ---------- */

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  /* ---------- Boot ---------- */

  initTheme();
  bindEvents();
  loadCatalog();
})();
