(() => {
  const menu = document.querySelector("[data-menu]");
  const drawer = document.getElementById("drawer");
  if (menu && drawer) {
    menu.addEventListener("click", () => {
      const open = drawer.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", String(open));
    });
    drawer.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        drawer.classList.remove("is-open");
        menu.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.getElementById("consult");
  if (form) {
    const params = new URLSearchParams(location.search);
    const svc = params.get("service");
    const sel = form.querySelector("[name=service]");
    if (svc && sel) {
      const opt = [...sel.options].find((o) => o.value === svc);
      if (opt) sel.value = svc;
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.querySelectorAll(".field").forEach((f) => f.classList.remove("is-bad"));
      if (!form.reportValidity()) {
        form.querySelectorAll(":invalid").forEach((el) => {
          const field = el.closest(".field");
          if (field) field.classList.add("is-bad");
        });
        return;
      }
      form.classList.add("is-sent");
    });
  }
})();
