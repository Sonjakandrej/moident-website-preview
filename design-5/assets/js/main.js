// Moident — Bold moderna — shared site behaviour
// No build step, no dependencies. Runs on every page.

(function () {
  "use strict";

  /* ---------------------------------------------------------
     Keep the sticky header pinned exactly below the draft
     banner, whatever its rendered height is (it can wrap to
     two lines on narrow screens).
     --------------------------------------------------------- */
  function syncBannerHeight() {
    var banner = document.querySelector(".draft-banner");
    if (!banner) return;
    var h = banner.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--banner-h", h + "px");
  }

  window.addEventListener("load", syncBannerHeight);
  window.addEventListener("resize", syncBannerHeight);
  syncBannerHeight();

  /* ---------------------------------------------------------
     Mobile hamburger nav toggle
     --------------------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("navLinks");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after a link is chosen, for a smoother UX.
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  /* ---------------------------------------------------------
     Appointment request form (kontakt.html)
     This is a static pitch-deck site — there is no backend.
     We only prevent the real submit and show a confirmation.
     --------------------------------------------------------- */
  var form = document.getElementById("appointmentForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var wrapper = document.getElementById("formWrapper");
      if (!wrapper) return;

      var success = document.createElement("div");
      success.className = "form-success";
      success.setAttribute("role", "status");
      success.innerHTML =
        "<h3>Hvala!</h3>" +
        "<p>Vaše povpraševanje smo prejeli, kmalu vas bomo kontaktirali.</p>";

      wrapper.innerHTML = "";
      wrapper.appendChild(success);
      success.setAttribute("tabindex", "-1");
      success.focus();
    });
  }
})();
