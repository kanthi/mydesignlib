(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var catalog = [
    { name: "Valet Tray", price: 105, sold: false },
    { name: "Ledger Starter Kit", price: 65, sold: false },
    { name: "Plywood Clock", price: 120, sold: false },
    { name: "Desk Shears", price: 48, sold: false },
    { name: "Pen Tray", price: 38, sold: false },
    { name: "Match Striker", price: 50, sold: false },
    { name: "Desk Knife", price: 75, sold: false },
    { name: "Bolt Pen", price: 135, sold: false },
    { name: "Double Glasses", price: 50, sold: false },
    { name: "Amber Press", price: 85, sold: false },
    { name: "Steel Box", price: 32, sold: false },
    { name: "Hourglass", price: 30, sold: false },
    { name: "Ledger Cards", price: 30, sold: true },
    { name: "Ledger Weekly Kit", price: 79, sold: false }
  ];
  var lines = [];
  var countEl = document.getElementById("cart-count");
  var linesEl = document.getElementById("cart-lines");
  var emptyEl = document.getElementById("cart-empty");
  var cart = document.getElementById("cart");
  var scrim = document.getElementById("scrim");

  function money(n) { return "$" + Number(n).toFixed(2); }

  function renderCart() {
    countEl.textContent = String(lines.length);
    linesEl.innerHTML = "";
    emptyEl.hidden = lines.length !== 0;
    lines.forEach(function (line, i) {
      var li = document.createElement("li");
      var name = document.createElement("span");
      name.textContent = line.name + " · " + money(line.price);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "Remove";
      btn.addEventListener("click", function () {
        lines.splice(i, 1);
        renderCart();
      });
      li.appendChild(name);
      li.appendChild(btn);
      linesEl.appendChild(li);
    });
  }

  function addItem(name, price, sold, button) {
    if (sold) return;
    lines.push({ name: name, price: Number(price) });
    renderCart();
    if (button && button.dataset.open !== "1") button.textContent = "Added";
  }

  function openCart() {
    cart.classList.add("is-open");
    cart.setAttribute("aria-hidden", "false");
    scrim.hidden = false;
    document.getElementById("cart-open").setAttribute("aria-expanded", "true");
  }
  function closeCart() {
    cart.classList.remove("is-open");
    cart.setAttribute("aria-hidden", "true");
    scrim.hidden = true;
    document.getElementById("cart-open").setAttribute("aria-expanded", "false");
  }

  document.querySelectorAll("[data-add]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.dataset.sold === "1") return;
      addItem(btn.dataset.add, btn.dataset.price, false, btn);
      if (btn.dataset.open === "1") openCart();
    });
  });

  document.getElementById("cart-open").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);

  document.querySelectorAll("[data-mat]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("[data-mat]").forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      var img = document.getElementById("week-photo");
      var maple = btn.dataset.mat === "maple";
      img.classList.toggle("is-maple", maple);
      img.alt = maple ? "Weekly board in a maple rail" : "White weekly board on a walnut rail";
    });
  });

  var frame = 0;
  var positions = ["50% 50%", "32% 42%", "70% 46%", "50% 18%", "40% 72%", "62% 30%", "22% 55%", "78% 60%"];
  function showFrame(n) {
    frame = (n + positions.length) % positions.length;
    document.getElementById("week-photo").style.objectPosition = positions[frame];
    document.getElementById("gal-count").textContent = (frame + 1) + " — 8";
  }
  document.querySelectorAll("[data-gal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showFrame(frame + Number(btn.dataset.gal));
    });
  });

  var more = document.getElementById("more");
  var extra = document.getElementById("more-copy");
  more.addEventListener("click", function () {
    var open = extra.hidden;
    extra.hidden = !open;
    more.setAttribute("aria-expanded", open ? "true" : "false");
    more.textContent = open ? "Show less" : "Show more";
  });

  var sets = Array.prototype.slice.call(document.querySelectorAll(".hero-set"));
  var dots = Array.prototype.slice.call(document.querySelectorAll("[data-dot]"));
  var heroIndex = 0;
  var timer = null;
  function showHero(n) {
    heroIndex = (n + sets.length) % sets.length;
    sets.forEach(function (set, i) {
      var on = i === heroIndex;
      set.classList.toggle("is-on", on);
      set.setAttribute("aria-hidden", on ? "false" : "true");
      if ("inert" in set) set.inert = !on;
    });
    dots.forEach(function (dot, i) {
      dot.setAttribute("aria-selected", i === heroIndex ? "true" : "false");
    });
  }
  function stopHero() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }
  function startHero() {
    if (reduce) return;
    stopHero();
    timer = window.setInterval(function () { showHero(heroIndex + 1); }, 5000);
  }
  document.querySelectorAll("[data-hero]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      showHero(heroIndex + Number(btn.dataset.hero));
      startHero();
    });
  });
  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      showHero(Number(dot.dataset.dot));
      startHero();
    });
  });
  var hero = document.getElementById("hero");
  hero.addEventListener("mouseenter", stopHero);
  hero.addEventListener("mouseleave", startHero);
  hero.addEventListener("focusin", stopHero);
  hero.addEventListener("focusout", startHero);
  showHero(0);
  startHero();

  function visibleCount(root) {
    var base = Number(root.dataset.visible || 4);
    if (window.matchMedia("(max-width: 720px)").matches) return Math.min(base, base > 2 ? 2 : 1);
    if (window.matchMedia("(max-width: 980px)").matches && base > 2) return 2;
    return base;
  }
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector(".track");
    var windowEl = root.querySelector(".track-window");
    var cards = Array.prototype.slice.call(track.children);
    var index = 0;
    function stride() {
      if (!cards.length) return 0;
      return cards[0].getBoundingClientRect().width;
    }
    function apply() {
      var show = visibleCount(root);
      windowEl.style.setProperty("--show", String(show));
      var max = Math.max(0, cards.length - show);
      if (index > max) index = max;
      track.style.transform = "translateX(" + (-index * stride()) + "px)";
    }
    root.querySelectorAll("[data-dir]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var show = visibleCount(root);
        var max = Math.max(0, cards.length - show);
        index += Number(btn.dataset.dir);
        if (index > max) index = 0;
        if (index < 0) index = max;
        apply();
      });
    });
    window.addEventListener("resize", apply);
    apply();
  });

  var searchPanel = document.getElementById("search-panel");
  var searchOpen = document.getElementById("search-open");
  var searchInput = document.getElementById("search-input");
  var searchResults = document.getElementById("search-results");
  var accountPanel = document.getElementById("account-panel");
  var accountOpen = document.getElementById("account-open");

  function closeSearch() {
    searchPanel.hidden = true;
    searchOpen.setAttribute("aria-expanded", "false");
  }
  function closeAccount() {
    accountPanel.hidden = true;
    accountOpen.setAttribute("aria-expanded", "false");
  }
  searchOpen.addEventListener("click", function () {
    var open = searchPanel.hidden;
    closeAccount();
    searchPanel.hidden = !open;
    searchOpen.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) searchInput.focus();
  });
  accountOpen.addEventListener("click", function () {
    var open = accountPanel.hidden;
    closeSearch();
    accountPanel.hidden = !open;
    accountOpen.setAttribute("aria-expanded", open ? "true" : "false");
  });
  searchInput.addEventListener("input", function () {
    var q = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";
    if (!q) return;
    catalog.filter(function (item) {
      return item.name.toLowerCase().indexOf(q) !== -1;
    }).forEach(function (item) {
      var li = document.createElement("li");
      var name = document.createElement("span");
      name.textContent = item.name + " · " + money(item.price);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill";
      if (item.sold) {
        btn.textContent = "Sold out";
        btn.disabled = true;
        btn.dataset.sold = "1";
      } else {
        btn.textContent = "Add";
        btn.addEventListener("click", function () {
          addItem(item.name, item.price, false, btn);
        });
      }
      li.appendChild(name);
      li.appendChild(btn);
      searchResults.appendChild(li);
    });
  });

  document.getElementById("menu").addEventListener("click", function () {
    var nav = document.getElementById("nav");
    var open = nav.classList.toggle("is-open");
    this.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.getElementById("nav").querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.getElementById("nav").classList.remove("is-open");
      document.getElementById("menu").setAttribute("aria-expanded", "false");
    });
  });

  scrim.addEventListener("click", function () {
    closeCart();
    closeSearch();
    closeAccount();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeCart();
      closeSearch();
      closeAccount();
    }
  });

  var read = document.getElementById("read-more");
  var quote = document.getElementById("quote-mid");
  read.addEventListener("click", function () {
    quote.classList.toggle("is-open");
    var open = quote.classList.contains("is-open");
    read.setAttribute("aria-expanded", open ? "true" : "false");
    read.textContent = open ? "Show less" : "Read more";
  });

  renderCart();
})();
