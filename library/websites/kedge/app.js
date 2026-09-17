(function () {
  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap foot-grid">' +
      '<div><a class="brand" href="index.html"><img src="assets/mark.svg" alt="" />Kedge</a><p>Revenue infrastructure for enterprises that need a number they can defend.</p></div>' +
      '<div><h3>Product</h3><a href="features.html">Features</a><a href="pricing.html">Pricing</a><a href="index.html#platform">Platform</a></div>' +
      '<div><h3>Company</h3><a href="about.html">About</a><a href="journal.html">Journal</a><a href="contact.html">Contact</a></div>' +
      '<div><h3>Contact</h3><a href="mailto:hello@kedge.example">hello@kedge.example</a><p>+1 (503) 555-0148</p><p>Portland, OR</p></div>' +
      "</div>" +
      '<div class="wrap foot-legal"><span>© 2026 Kedge Systems, Inc. Sample template.</span><nav><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></nav></div>';
  }

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      const open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll(".tabs").forEach(function (tabs) {
    const buttons = tabs.querySelectorAll(".tab");
    const panes = tabs.parentElement.querySelectorAll(".pane");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-tab");
        buttons.forEach(function (b) {
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        panes.forEach(function (p) {
          p.classList.toggle("is-on", p.id === id);
        });
      });
    });
  });

  document.querySelectorAll(".faq-item").forEach(function (item) {
    const btn = item.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      const mark = btn.querySelector(".pm");
      if (mark) mark.textContent = open ? "–" : "+";
    });
  });

  const form = document.querySelector("#consult-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const note = document.querySelector("#form-note");
      form.reset();
      if (note) {
        note.classList.add("is-on");
        note.textContent = "Thanks — a Kedge consultant will reply within one business day.";
      }
    });
  }

  const search = document.querySelector("#journal-search");
  const chips = document.querySelectorAll(".chip");
  const posts = document.querySelectorAll(".post");
  function filterPosts() {
    const q = search ? search.value.toLowerCase().trim() : "";
    const active = document.querySelector('.chip[aria-pressed="true"]');
    const tag = active ? active.getAttribute("data-tag") : "all";
    posts.forEach(function (p) {
      const hay = (p.textContent || "").toLowerCase();
      const matchTag = tag === "all" || p.getAttribute("data-tag") === tag;
      const matchQ = !q || hay.indexOf(q) !== -1;
      p.style.display = matchTag && matchQ ? "" : "none";
    });
  }
  if (search) search.addEventListener("input", filterPosts);
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      filterPosts();
    });
  });
})();
