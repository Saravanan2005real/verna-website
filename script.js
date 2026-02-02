(function () {
  'use strict';

  const header = document.getElementById('header');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const yearEl = document.getElementById('year');

  // Trigger entrance animations (header, hero, logo) after load
  function setLoaded() {
    requestAnimationFrame(function () {
      document.body.classList.add('loaded');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setLoaded);
  } else {
    setLoaded();
  }

  // Current year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll reveal with staggered children
  var revealEls = document.querySelectorAll('.section-head, .services-grid, .why-grid, .about-inner, .section-strip, .strip-list, .contact-inner');
  function reveal() {
    revealEls.forEach(function (el) {
      if (!el || !el.getBoundingClientRect) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('revealed');
    });
  }
  function initReveal() {
    revealEls.forEach(function (el) { if (el) el.classList.add('reveal'); });
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initReveal);
  else initReveal();

  // Header scroll state
  function onScroll() {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');

    // Active nav link based on section
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) link.classList.add('active');
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', nav.classList.contains('open'));
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
