(function () {
      if (new URLSearchParams(location.search).has("shot")) document.body.classList.add("shot");
      var menu = document.querySelector(".menu");
      var nav = document.getElementById("nav");
      menu.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        menu.setAttribute("aria-expanded", open ? "true" : "false");
        menu.textContent = open ? "Close" : "Menu";
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.classList.remove("is-open");
          menu.setAttribute("aria-expanded", "false");
          menu.textContent = "Menu";
        });
      });
      document.querySelectorAll(".faq-item button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var item = btn.parentElement;
          var open = item.classList.toggle("open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          btn.querySelector(".mark").textContent = open ? "−" : "+";
        });
      });
      var dialog = document.getElementById("note");
      document.getElementById("watch").addEventListener("click", function () { dialog.showModal(); });
      document.getElementById("close-note").addEventListener("click", function () { dialog.close(); });
    })();
