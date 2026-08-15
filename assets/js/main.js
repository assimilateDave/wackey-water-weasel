/* Assimilation Healthcare Technology - main.js */

(function () {
  'use strict';

  /* --- Mobile nav toggle --- */
  const toggle = document.querySelector('.nav__toggle');
  const nav    = document.querySelector('.nav');

  if (toggle && nav) {
    const navLinks = nav.querySelector('.nav__links');

    function updateMobileNavHeight() {
      if (navLinks) {
        const h = navLinks.getBoundingClientRect().height;
        if (h > 0) {
          document.documentElement.style.setProperty('--mobile-nav-height', h + 'px');
        }
      }
    }

    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('nav__mobile-open', !expanded);
      // Measure nav link list height after it becomes visible
      if (!expanded) { requestAnimationFrame(updateMobileNavHeight); }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav__mobile-open');
      }
    });
  }

  /* --- Mark active nav link --- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* --- Contact form: validate only. GitHub Pages cannot send mail. --- */
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');

  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous error states
      form.querySelectorAll('.form__group--error').forEach(function (g) {
        g.classList.remove('form__group--error');
      });

      // Validate required fields manually (novalidate is set on the form)
      var invalid = false;
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          field.closest('.form__group').classList.add('form__group--error');
          invalid = true;
        }
      });

      // Basic e-mail format check
      var emailField = form.querySelector('[type="email"]');
      if (emailField && emailField.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
        emailField.closest('.form__group').classList.add('form__group--error');
        invalid = true;
      }

      if (invalid) {
        var firstError = form.querySelector('.form__group--error [required], .form__group--error [type="email"]');
        if (firstError) { firstError.focus(); }
        return;
      }

      form.style.display = 'none';
      success.style.display = 'block';
    });
  }

  /* --- Scroll-reveal (simple IntersectionObserver) --- */
  const revealEls = document.querySelectorAll(
    '.service-card, .testimonial, .team-card, .value-card, .service-detail'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealEls.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
}());
