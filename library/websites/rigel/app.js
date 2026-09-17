(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      const open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll("[data-tabs]").forEach(function (root) {
    const buttons = root.querySelectorAll("[data-tab]");
    const panes = root.querySelectorAll("[data-pane]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const id = btn.getAttribute("data-tab");
        buttons.forEach(function (b) {
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        panes.forEach(function (p) {
          p.hidden = p.getAttribute("data-pane") !== id;
        });
      });
    });
  });

  document.querySelectorAll(".step").forEach(function (item) {
    const btn = item.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      document.querySelectorAll(".step").forEach(function (s) {
        const on = s === item;
        s.classList.toggle("is-open", on);
        const b = s.querySelector("button");
        if (b) b.setAttribute("aria-expanded", on ? "true" : "false");
      });
    });
  });

  document.querySelectorAll(".faq-item").forEach(function (item) {
    const btn = item.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  const wait = document.querySelector("#waitlist");
  if (wait) {
    wait.addEventListener("submit", function (e) {
      e.preventDefault();
      const note = document.querySelector("#wait-note");
      wait.reset();
      if (note) {
        note.hidden = false;
        note.textContent = "You're on the list. We'll send a seat at hello@rigel.example.";
      }
    });
  }

  const modal = document.querySelector("#login-modal");
  const openers = document.querySelectorAll("[data-open-login]");
  const close = document.querySelector("[data-close-login]");
  function setModal(on) {
    if (!modal) return;
    modal.hidden = !on;
    document.body.style.overflow = on ? "hidden" : "";
  }
  openers.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      setModal(true);
    });
  });
  if (close) close.addEventListener("click", function () { setModal(false); });
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) setModal(false);
    });
  }

  const login = document.querySelector("#login-form");
  if (login) {
    login.addEventListener("submit", function (e) {
      e.preventDefault();
      const n = document.querySelector("#login-note");
      if (n) {
        n.hidden = false;
        n.textContent = "Sample template — no real accounts. Request access from the hero instead.";
      }
    });
  }
})();
