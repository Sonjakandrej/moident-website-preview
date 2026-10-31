/* Moident — shared site behaviour (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu after a nav link is clicked.
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- FAQ accordion (za-starse.html) ---------- */
  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector(".faq-question");
      if (!question) return;
      question.addEventListener("click", function () {
        var isOpen = item.classList.toggle("is-open");
        question.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  /* ---------- Contact form stub submission (kontakt.html) ---------- */
  function initContactForm() {
    var form = document.getElementById("appointment-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var successMessage = document.createElement("div");
      successMessage.className = "form-success";
      successMessage.setAttribute("role", "status");
      successMessage.textContent =
        "Hvala! Vaše povpraševanje smo prejeli, kmalu vas bomo kontaktirali.";

      form.parentNode.replaceChild(successMessage, form);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initFaqAccordion();
    initContactForm();
  });
})();
