// Moident — Design 4 — shared site behaviour (no backend, no build step)

(function () {
  "use strict";

  /* -----------------------------------------------------------------
     Mobile hamburger nav toggle
     ----------------------------------------------------------------- */
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile nav when a link is clicked (nicer UX on small screens)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -----------------------------------------------------------------
     FAQ accordion (za-starse.html)
     ----------------------------------------------------------------- */
  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector(".faq-question");
      if (!question) return;

      question.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");

        isOpen ? item.classList.remove("open") : item.classList.add("open");
        question.setAttribute("aria-expanded", isOpen ? "false" : "true");
      });
    });
  }

  /* -----------------------------------------------------------------
     Contact form stub submission (kontakt.html)
     No backend exists yet — we only show a confirmation message.
     ----------------------------------------------------------------- */
  function initContactForm() {
    var form = document.getElementById("appointment-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var wrapper = form.parentElement;
      var success = document.createElement("div");
      success.className = "form-success";
      success.setAttribute("role", "status");
      success.textContent = "Hvala! Vaše povpraševanje smo prejeli, kmalu vas bomo kontaktirali.";

      form.replaceWith(success);
      if (wrapper) {
        success.focus && success.setAttribute("tabindex", "-1");
        success.focus();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initFaqAccordion();
    initContactForm();
  });
})();
