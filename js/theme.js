(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-theme";
  var toggle = document.getElementById("theme-toggle");
  var label = document.getElementById("theme-toggle-label");

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function applyLabel(theme) {
    if (!label) return;
    label.textContent = theme === "light" ? "Dark mode" : "Light mode";
  }

  applyLabel(currentTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* localStorage unavailable, theme just won't persist */
      }
      applyLabel(next);
    });
  }
})();
