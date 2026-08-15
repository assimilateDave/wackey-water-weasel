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
