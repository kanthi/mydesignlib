/**
 * Personal template collection — vanilla JS
 * Loads data/templates.json; filters, search, sort, detail modal.
 */

(() => {
  "use strict";

  const TAG_PREVIEW = 8;
  const CARD_TAGS = 2;

  const state = {
    catalog: null,
    category: "All",
    activeTags: new Set(),
    query: "",
    sort: "featured",
    tagsExpanded: false,
  };

  const els = {
    grid: document.getElementById("template-grid"),
    empty: document.getElementById("empty-state"),
    resultCount: document.getElementById("result-count"),
    categoryTabs: document.getElementById("category-tabs"),
    tagFilter: document.getElementById("tag-filter"),
    tagCloud: document.getElementById("tag-cloud"),
    tagMore: document.getElementById("tag-more"),
    tagClear: document.getElementById("tag-clear"),
    search: document.getElementById("search"),
    sort: document.getElementById("sort"),
    clearFilters: document.getElementById("clear-filters"),
    statCount: document.getElementById("stat-count"),
    statTags: document.getElementById("stat-tags"),
    themeToggle: document.getElementById("theme-toggle"),
    modal: document.getElementById("detail-modal"),
    modalPreview: document.getElementById("modal-preview"),
    modalCategory: document.getElementById("modal-category"),
    modalTitle: document.getElementById("modal-title"),
    modalDesc: document.getElementById("modal-desc"),
    modalTags: document.getElementById("modal-tags"),
    modalPreviewBtn: document.getElementById("modal-preview-btn"),
    modalSourceBtn: document.getElementById("modal-source-btn"),
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

  async function loadCatalog() {
    showSkeletons(3);
    try {
      const res = await fetch("data/templates.json", { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      state.catalog = await res.json();
      renderAll();
    } catch (err) {
      console.error(err);
      els.grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1">
          <p>Could not load <code>data/templates.json</code>.</p>
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
    if (!state.catalog) return [];
    let list = [...state.catalog.templates];
    const q = state.query.trim().toLowerCase();

    if (state.category !== "All") {
      list = list.filter((t) => t.category === state.category);
    }

    if (state.activeTags.size > 0) {
      list = list.filter((t) =>
        [...state.activeTags].every((tag) => t.tags.includes(tag))
      );
    }

    if (q) {
      list = list.filter((t) => {
        const hay = [t.name, t.description, t.category, ...(t.tags || [])]
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
      // featured first, then newest
      const fa = a.featured ? 1 : 0;
      const fb = b.featured ? 1 : 0;
      if (fb !== fa) return fb - fa;
      return (b.date || "").localeCompare(a.date || "");
    });

    return list;
  }

  function tagFrequency() {
    const counts = new Map();
    state.catalog?.templates.forEach((t) => {
      (t.tags || []).forEach((tag) => {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      });
    });
    return counts;
  }

  /** Tags sorted by frequency (desc), then name. */
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
    // Keep any active filters visible even if outside top N
    state.activeTags.forEach((tag) => {
      if (!set.has(tag) && all.includes(tag)) {
        top.push(tag);
        set.add(tag);
      }
    });
    return top;
  }

  /* ---------- Render ---------- */

  function renderAll() {
    renderStats();
    renderCategories();
    renderTagCloud();
    renderGrid();
  }

  function renderStats() {
    const templates = state.catalog?.templates || [];
    els.statCount.textContent = String(templates.length);
    els.statTags.textContent = String(allTags().length);
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
    els.resultCount.textContent =
      list.length === 1
        ? "1 template"
        : `${list.length} templates`;

    if (!list.length) {
      els.grid.innerHTML = "";
      els.empty.hidden = false;
      return;
    }

    els.empty.hidden = true;
    els.grid.innerHTML = list.map(cardHtml).join("");
  }

  function cardHtml(t) {
    const all = t.tags || [];
    const shown = all.slice(0, CARD_TAGS);
    const extra = all.length - shown.length;
    const tags =
      shown
        .map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`)
        .join("") +
      (extra > 0 ? `<span class="card-tag-more">+${extra}</span>` : "");

    return `
      <article
        class="card"
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
          <img
            src="${escapeAttr(t.thumbnail)}"
            alt=""
            loading="lazy"
            width="640"
            height="400"
            onerror="this.src='data:image/svg+xml,${encodeURIComponent(fallbackThumb(t.name))}'"
          />
        </div>
        <div class="card-body">
          <p class="card-category">${escapeHtml(t.category || "Template")}</p>
          <h3 class="card-title">${escapeHtml(t.name)}</h3>
          <p class="card-desc">${escapeHtml(t.description || "")}</p>
          ${tags ? `<div class="card-tags">${tags}</div>` : ""}
          <div class="card-footer">
            <span class="result-count">${escapeHtml(t.date || "")}</span>
            <div class="card-actions">
              <a
                class="btn btn-sm btn-ghost"
                href="${escapeAttr(t.path)}"
                target="_blank"
                rel="noopener"
                data-stop
              >Preview</a>
              <button type="button" class="btn btn-sm btn-primary" data-details data-id="${escapeAttr(t.id)}">
                Details
              </button>
            </div>
          </div>
        </div>
      </article>`;
  }

  function fallbackThumb(name) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">
      <rect fill="#eef0f6" width="640" height="400"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="system-ui,sans-serif" font-size="22" fill="#5c6378">${escapeHtml(name)}</text>
    </svg>`;
  }

  /* ---------- Modal ---------- */

  function openModal(id) {
    const t = state.catalog?.templates.find((x) => x.id === id);
    if (!t) return;

    els.modalCategory.textContent = t.category || "Template";
    els.modalTitle.textContent = t.name;
    els.modalDesc.textContent = t.description || "";
    els.modalTags.innerHTML = (t.tags || [])
      .map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`)
      .join("");
    els.modalPreview.innerHTML = `
      <img src="${escapeAttr(t.thumbnail)}" alt="" width="640" height="360"
        onerror="this.style.display='none'" />`;
    els.modalPreviewBtn.href = t.path;
    els.modalSourceBtn.href = t.path;

    els.modal.hidden = false;
    document.body.classList.add("modal-open");
    els.modal.querySelector(".modal-close")?.focus();
  }

  function closeModal() {
    els.modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  /* ---------- Events ---------- */

  function bindEvents() {
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
      state.category = "All";
      state.activeTags.clear();
      state.tagsExpanded = false;
      state.query = "";
      els.search.value = "";
      renderCategories();
      renderTagCloud();
      renderGrid();
    });

    els.grid.addEventListener("click", (e) => {
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
      if (e.target.closest("[data-close-modal]")) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !els.modal.hidden) closeModal();
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
