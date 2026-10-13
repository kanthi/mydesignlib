(function () {
  var navLinks = document.getElementById("nav-links");
  var menuBtn = document.getElementById("menu-btn");

  function closeMenu() {
    if (!navLinks || !menuBtn) return;
    navLinks.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");
  }

  function closeAll() {
    document.querySelectorAll("[data-panel]").forEach(function (panel) {
      panel.hidden = true;
    });
    document.querySelectorAll("[data-open]").forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function show(id) {
    var panel = document.getElementById(id);
    if (!panel) return;
    panel.hidden = false;
    var opener = document.querySelector('[data-open="' + id + '"]');
    if (opener) opener.setAttribute("aria-expanded", "true");
    var input = panel.querySelector("input");
    if (input) input.focus();
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-trial]")) {
      closeAll();
      show("signin");
      return;
    }
    var opener = e.target.closest("[data-open]");
    if (opener) {
      var id = opener.getAttribute("data-open");
      var panel = document.getElementById(id);
      var was = panel && !panel.hidden;
      closeAll();
      if (!was) show(id);
      return;
    }
    if (e.target.closest("[data-close]")) {
      closeAll();
      return;
    }
    if (!e.target.closest("[data-panel]")) closeAll();
    if (navLinks && navLinks.classList.contains("is-open") && !e.target.closest("#nav-links") && !e.target.closest("#menu-btn")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAll();
      closeMenu();
    }
  });

  var form = document.getElementById("signin");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  document.querySelectorAll("[data-cycle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var yearly = btn.getAttribute("data-cycle") === "year";
      document.querySelectorAll("[data-cycle]").forEach(function (other) {
        other.setAttribute("aria-pressed", other === btn ? "true" : "false");
      });
      document.querySelectorAll("[data-amount]").forEach(function (el) {
        el.textContent = yearly ? el.getAttribute("data-year") : el.getAttribute("data-month");
      });
      document.querySelectorAll(".unit").forEach(function (el) {
        el.textContent = yearly ? "/ year" : "/ month";
      });
    });
  });

  document.querySelectorAll(".faq-item button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var was = btn.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".faq-item").forEach(function (other) {
        other.querySelector("button").setAttribute("aria-expanded", "false");
        other.querySelector(".faq-a").hidden = true;
        var mark = other.querySelector(".mark");
        if (mark) mark.textContent = "+";
      });
      if (!was) {
        btn.setAttribute("aria-expanded", "true");
        answer.hidden = false;
        var openMark = btn.querySelector(".mark");
        if (openMark) openMark.textContent = "–";
      }
    });
  });
})();
