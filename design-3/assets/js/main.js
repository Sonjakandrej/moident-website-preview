// Moident — design-3 "Pastelno prijazna"
// Plain vanilla JS, no dependencies, no build step.

(function () {
  "use strict";

  /* -----------------------------------------------------
     Mobile hamburger nav toggle (shared across all pages)
     ----------------------------------------------------- */
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");

    if (!toggle || !navLinks) return;

    toggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after a nav link is tapped
    navLinks.addEventListener("click", function (event) {
      var target = event.target.closest("a");
      if (!target) return;
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  /* -----------------------------------------------------
     Mark the active nav link based on the current page
     ----------------------------------------------------- */
  function markActiveNavLink() {
    var current = window.location.pathname.split("/").pop() || "index.html";
    var links = document.querySelectorAll(".nav-links a[href]");

    links.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === current) {
        link.classList.add("active");
      }
    });
  }

  /* -----------------------------------------------------
     Contact form — stub submission (no backend exists yet)
     ----------------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById("appointment-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var wrapper = form.closest(".form-card") || form.parentNode;

      var success = document.createElement("div");
      success.className = "form-success";
      success.setAttribute("role", "status");
      success.innerHTML =
        '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<circle cx="24" cy="24" r="22" fill="#BFEEE0"/>' +
        '<path d="M15 24.5L21 30.5L33 17.5" stroke="#1F7A5E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
        "</svg>" +
        "<p>Hvala! Vaše povpraševanje smo prejeli, kmalu vas bomo kontaktirali.</p>";

      form.replaceWith(success);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    markActiveNavLink();
    initContactForm();
  });
})();
