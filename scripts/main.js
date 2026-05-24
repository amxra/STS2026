/* =============================================
   STS 2026 — main.js
   Shared behaviour across ALL pages.
   Page-specific JS lives in its own file:
   about.js / deal-room.js / partners.js / speakers.js
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       MOBILE NAV TOGGLE
    ------------------------------------------ */
    var hamburger = document.querySelector('.hamburger');
    var mobileNav = document.getElementById('mobile-nav');
  
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        var isOpen = mobileNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        var spans = hamburger.querySelectorAll('span');
        if (isOpen) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity  = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity  = '';
          spans[2].style.transform = '';
        }
      });
  
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          var spans = hamburger.querySelectorAll('span');
          spans[0].style.transform = '';
          spans[1].style.opacity  = '';
          spans[2].style.transform = '';
        });
      });
    }
  
  
    /* ------------------------------------------
       MOBILE PAST EVENTS ACCORDION
    ------------------------------------------ */
    var submenuBtn   = document.querySelector('.mobile-submenu-title');
    var submenuLinks = document.querySelector('.mobile-submenu-links');
  
    if (submenuBtn && submenuLinks) {
      submenuBtn.addEventListener('click', function () {
        var isOpen = submenuLinks.hasAttribute('hidden');
        if (isOpen) {
          submenuLinks.removeAttribute('hidden');
          submenuBtn.setAttribute('aria-expanded', 'true');
          submenuBtn.textContent = 'Past Events ▴';
        } else {
          submenuLinks.setAttribute('hidden', '');
          submenuBtn.setAttribute('aria-expanded', 'false');
          submenuBtn.textContent = 'Past Events ▾';
        }
      });
    }
  
  
    /* ------------------------------------------
       SMOOTH SCROLL
    ------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id     = this.getAttribute('href');
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          var headerH = document.querySelector('.site-header')
            ? document.querySelector('.site-header').offsetHeight : 0;
          var top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  
  
    /* ------------------------------------------
       SCROLL-TRIGGERED REVEAL
    ------------------------------------------ */
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  
      document.querySelectorAll('.reveal').forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }
  
  
    /* ------------------------------------------
       ANIMATED COUNTERS (homepage stats bar)
    ------------------------------------------ */
    function animateCounter(el) {
      var target   = parseInt(el.getAttribute('data-count'), 10);
      var suffix   = target > 100 ? '+' : '';
      var duration = 2000;
      var steps    = duration / 16;
      var step     = target / steps;
      var current  = 0;
      var timer = setInterval(function () {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current).toLocaleString() + suffix;
      }, 16);
    }
  
    var statsBar = document.querySelector('.stats-bar');
    if (statsBar && 'IntersectionObserver' in window) {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      statsObserver.observe(statsBar);
    }
  
  
    /* ------------------------------------------
       SCROLL TO TOP BUTTON
    ------------------------------------------ */
    var scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
      window.addEventListener('scroll', function () {
        scrollTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
      });
      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
  
    /* ------------------------------------------
       NETLIFY CONTACT FORM — AJAX SUBMIT
    ------------------------------------------ */
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn     = contactForm.querySelector('.form-submit');
        var origTxt = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled    = true;
        var data = new FormData(contactForm);
        fetch('/', {
          method:  'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body:    new URLSearchParams(data).toString()
        }).then(function () {
          var msg = document.getElementById('success-msg');
          if (msg) { msg.style.display = 'block'; msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
          contactForm.reset();
        }).catch(function () {
          alert('Something went wrong. Please try again or email us directly.');
        }).finally(function () {
          btn.textContent = origTxt;
          btn.disabled    = false;
        });
      });
    }
  
  
    /* ------------------------------------------
       ACTIVE NAV LINK
    ------------------------------------------ */
    var path = window.location.pathname;
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href !== '#' && path.endsWith(href)) {
        link.classList.add('active');
      }
    });
  
  
    /* ------------------------------------------
       HOMEPAGE — EVENT INFO BLOCK COUNTDOWN
       IDs: e-days, e-hours, e-mins, e-secs
    ------------------------------------------ */
    function updateEventCountdown() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T23:59:59');
      var block  = document.getElementById('eventCountdown');
      var status = document.getElementById('eventStatus');
      if (!block) return;
      if (now >= end) {
        block.style.display = 'none';
        if (status) status.textContent = 'This edition has concluded.';
      } else if (now >= start) {
        block.style.display = 'none';
        if (status) status.textContent = 'Ongoing now 🎉';
      } else {
        var diff = start - now;
        var dEl = document.getElementById('e-days');
        var hEl = document.getElementById('e-hours');
        var mEl = document.getElementById('e-mins');
        var sEl = document.getElementById('e-secs');
        if (dEl) dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2,'0');
        if (hEl) hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
        if (mEl) mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
        if (sEl) sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
      }
    }
    updateEventCountdown();
    setInterval(updateEventCountdown, 1000);
  
  
    /* ------------------------------------------
       HOMEPAGE — PARTNERS CAROUSEL COUNTDOWN
       IDs: s-days, s-hours, s-mins, s-secs
    ------------------------------------------ */
    function updateStripCountdown() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T23:59:59');
      var timer  = document.getElementById('stripTimer');
      var status = document.getElementById('stripStatus');
      if (!timer) return;
      if (now >= end) {
        timer.style.display = 'none';
        if (status) status.textContent = 'Completed';
      } else if (now >= start) {
        timer.style.display = 'none';
        if (status) status.textContent = 'Ongoing 🎉';
      } else {
        var diff = start - now;
        var dEl = document.getElementById('s-days');
        var hEl = document.getElementById('s-hours');
        var mEl = document.getElementById('s-mins');
        var sEl = document.getElementById('s-secs');
        if (dEl) dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2,'0');
        if (hEl) hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
        if (mEl) mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
        if (sEl) sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
      }
    }
    updateStripCountdown();
    setInterval(updateStripCountdown, 1000);
  
  });