/* =============================================
   STS 2026 — main.js
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       MOBILE NAV TOGGLE
    ------------------------------------------ */
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-nav');
  
    if (hamburger && mobileNav) {
      hamburger.addEventListener('click', function () {
        const isOpen = mobileNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        // Animate hamburger → X
        const spans = hamburger.querySelectorAll('span');
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
  
      // Close when any mobile nav link is clicked
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          const spans = hamburger.querySelectorAll('span');
          spans[0].style.transform = '';
          spans[1].style.opacity  = '';
          spans[2].style.transform = '';
        });
      });
    }
  
  
    /* ------------------------------------------
       SMOOTH SCROLL
    ------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const id     = this.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const headerH = document.querySelector('.site-header')
            ? document.querySelector('.site-header').offsetHeight
            : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
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
      // Fallback: just show everything
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }
  
  
    /* ------------------------------------------
       ANIMATED COUNTER
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
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
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
    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
  
        var btn     = form.querySelector('.form-submit');
        var origTxt = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled    = true;
  
        try {
          var data = new FormData(form);
          await fetch('/', {
            method:  'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body:    new URLSearchParams(data).toString()
          });
  
          var msg = document.getElementById('success-msg');
          if (msg) msg.style.display = 'block';
          form.reset();
  
          // Scroll to success message
          if (msg) msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
        } catch (err) {
          alert('Something went wrong. Please try again or email us directly.');
        }
  
        btn.textContent = origTxt;
        btn.disabled    = false;
      });
    }
  
  
    /* ------------------------------------------
       ACTIVE NAV LINK (highlight current page)
    ------------------------------------------ */
    var path = window.location.pathname;
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href !== '#' && path === href) {
        link.classList.add('active');
      }
    });
  
  });
  
  
    /* ------------------------------------------
       MOBILE PAST EVENTS ACCORDION
    ------------------------------------------ */
    var submenuBtn = document.querySelector('.mobile-submenu-title');
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
       EVENT COUNTDOWN TIMER
    ------------------------------------------ */
    function updateCountdown() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T00:00:00');
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
        var d = String(Math.floor(diff / 86400000)).padStart(2, '0');
        var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        var s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        var dEl = document.getElementById('s-days');
        var hEl = document.getElementById('s-hours');
        var mEl = document.getElementById('s-mins');
        var sEl = document.getElementById('s-secs');
        if (dEl) dEl.textContent = d;
        if (hEl) hEl.textContent = h;
        if (mEl) mEl.textContent = m;
        if (sEl) sEl.textContent = s;
      }
    }
  
    updateCountdown();
    setInterval(updateCountdown, 1000);
  
  
    /* ------------------------------------------
       EVENT INFO BLOCK COUNTDOWN
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
        var d = String(Math.floor(diff / 86400000)).padStart(2, '0');
        var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        var s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        var dEl = document.getElementById('e-days');
        var hEl = document.getElementById('e-hours');
        var mEl = document.getElementById('e-mins');
        var sEl = document.getElementById('e-secs');
        if (dEl) dEl.textContent = d;
        if (hEl) hEl.textContent = h;
        if (mEl) mEl.textContent = m;
        if (sEl) sEl.textContent = s;
      }
    }
  
    updateEventCountdown();
    setInterval(updateEventCountdown, 1000);

    /* =============================================
   STS 2026 — about.js
   About-page specific JS.
   Shared behaviour lives in main.js.
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     ACCORDION — Milestones
  ------------------------------------------ */
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item   = trigger.closest('.accordion-item');
      var body   = item.querySelector('.accordion-body');
      var isOpen = item.classList.contains('open');

      // Close all first
      document.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('open');
        var t = i.querySelector('.accordion-trigger');
        var b = i.querySelector('.accordion-body');
        if (t) t.setAttribute('aria-expanded', 'false');
        if (b) b.setAttribute('hidden', '');
      });

      // Open this one if it was closed
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        if (body) body.removeAttribute('hidden');

        // Smooth scroll so the opened content is visible
        setTimeout(function () {
          trigger.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    });
  });


  /* ------------------------------------------
     STS @ 10 COUNTDOWN
  ------------------------------------------ */
  function updateAboutCountdown() {
    var now   = new Date();
    var start = new Date('2026-10-15T00:00:00');
    var end   = new Date('2026-10-17T23:59:59');
    var block  = document.getElementById('countdown');
    var status = document.getElementById('countdown-status');

    if (!block) return;

    if (now >= end) {
      block.style.display = 'none';
      if (status) status.textContent = 'This edition has concluded.';
    } else if (now >= start) {
      block.style.display = 'none';
      if (status) status.textContent = 'Ongoing now 🎉';
    } else {
      var diff = start - now;
      var d = String(Math.floor(diff / 86400000)).padStart(2, '0');
      var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
      var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      var s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
      var dEl = document.getElementById('cd-days');
      var hEl = document.getElementById('cd-hours');
      var mEl = document.getElementById('cd-mins');
      var sEl = document.getElementById('cd-secs');
      if (dEl) dEl.textContent = d;
      if (hEl) hEl.textContent = h;
      if (mEl) mEl.textContent = m;
      if (sEl) sEl.textContent = s;
    }
  }

  updateAboutCountdown();
  setInterval(updateAboutCountdown, 1000);


  /* ------------------------------------------
     PILLAR CARD STAGGER
     Each card fades in with a slight delay
  ------------------------------------------ */
  var pillars = document.querySelectorAll('.pillar-card');
  if ('IntersectionObserver' in window && pillars.length) {
    var pillarObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = Array.from(pillars).indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 60);
          pillarObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    pillars.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      pillarObserver.observe(card);
    });
  }


  /* ------------------------------------------
     TESTIMONIAL CARD STAGGER
  ------------------------------------------ */
  var testimonials = document.querySelectorAll('.testimonial-card');
  if ('IntersectionObserver' in window && testimonials.length) {
    var testObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = Array.from(testimonials).indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          testObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    testimonials.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      testObserver.observe(card);
    });
  }

});

/* =============================================
   STS 2026 — about.js
   About-page specific JS.
   Shared behaviour lives in main.js.
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       ACCORDION — Milestones
    ------------------------------------------ */
    document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var item   = trigger.closest('.accordion-item');
        var isOpen = item.classList.contains('open');
  
        // Close all
        document.querySelectorAll('.accordion-item').forEach(function (i) {
          i.classList.remove('open');
          var t = i.querySelector('.accordion-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
  
        // Open clicked if it was closed
        if (!isOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
  
          // Smooth scroll so trigger stays visible
          setTimeout(function () {
            trigger.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 50);
        }
      });
    });
  
  
    /* ------------------------------------------
       STS @ 10 COUNTDOWN
    ------------------------------------------ */
    function updateAboutCountdown() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T23:59:59');
      var block  = document.getElementById('countdown');
      var status = document.getElementById('countdown-status');
  
      if (!block) return;
  
      if (now >= end) {
        block.style.display = 'none';
        if (status) status.textContent = 'This edition has concluded.';
      } else if (now >= start) {
        block.style.display = 'none';
        if (status) status.textContent = 'Ongoing now 🎉';
      } else {
        var diff = start - now;
        var d = String(Math.floor(diff / 86400000)).padStart(2, '0');
        var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        var s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        var dEl = document.getElementById('cd-days');
        var hEl = document.getElementById('cd-hours');
        var mEl = document.getElementById('cd-mins');
        var sEl = document.getElementById('cd-secs');
        if (dEl) dEl.textContent = d;
        if (hEl) hEl.textContent = h;
        if (mEl) mEl.textContent = m;
        if (sEl) sEl.textContent = s;
      }
    }
  
    updateAboutCountdown();
    setInterval(updateAboutCountdown, 1000);
  
  
    /* ------------------------------------------
       PILLAR CARD STAGGER
       Each card fades in with a slight delay
    ------------------------------------------ */
    var pillars = document.querySelectorAll('.pillar-card');
    if ('IntersectionObserver' in window && pillars.length) {
      var pillarObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var index = Array.from(pillars).indexOf(entry.target);
            setTimeout(function () {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 60);
            pillarObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  
      pillars.forEach(function (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        pillarObserver.observe(card);
      });
    }
  
  
    /* ------------------------------------------
       TESTIMONIAL CARD STAGGER
    ------------------------------------------ */
    var testimonials = document.querySelectorAll('.testimonial-card');
    if ('IntersectionObserver' in window && testimonials.length) {
      var testObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var index = Array.from(testimonials).indexOf(entry.target);
            setTimeout(function () {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            testObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
  
      testimonials.forEach(function (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        testObserver.observe(card);
      });
    }
  
  });
  
  
    /* ------------------------------------------
       EVENT STRIP COUNTDOWN (under hero)
    ------------------------------------------ */
    function updateAboutStrip() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T23:59:59');
      var timer  = document.getElementById('aboutStripTimer');
      var status = document.getElementById('aboutStripStatus');
  
      if (!timer) return;
  
      if (now >= end) {
        timer.style.display = 'none';
        if (status) status.textContent = 'Completed';
      } else if (now >= start) {
        timer.style.display = 'none';
        if (status) status.textContent = 'Ongoing 🎉';
      } else {
        var diff = start - now;
        var d = String(Math.floor(diff / 86400000)).padStart(2, '0');
        var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        var s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        var dEl = document.getElementById('as-days');
        var hEl = document.getElementById('as-hours');
        var mEl = document.getElementById('as-mins');
        var sEl = document.getElementById('as-secs');
        if (dEl) dEl.textContent = d;
        if (hEl) hEl.textContent = h;
        if (mEl) mEl.textContent = m;
        if (sEl) sEl.textContent = s;
      }
    }
  
    updateAboutStrip();
    setInterval(updateAboutStrip, 1000);
  
  
    /* ------------------------------------------
       SUBSCRIBE FORM
    ------------------------------------------ */
    var subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', function () {
        var name  = document.getElementById('subName').value.trim();
        var email = document.getElementById('subEmail').value.trim();
        if (!name || !email) {
          alert('Please fill in both your name and email address.');
          return;
        }
        document.getElementById('subscribeForm').style.display = 'none';
        document.getElementById('subscribeSuccess').style.display = 'block';
      });
    }

    /* =============================================
   STS 2026 — about.js
   About-page specific JS.
   Shared behaviour lives in main.js.
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     ACCORDION — Milestones
  ------------------------------------------ */
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item   = trigger.closest('.accordion-item');
      var isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('open');
        var t = i.querySelector('.accordion-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');

        // Smooth scroll so trigger stays visible
        setTimeout(function () {
          trigger.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
      }
    });
  });


  /* ------------------------------------------
     STS @ 10 COUNTDOWN
  ------------------------------------------ */
  function updateAboutCountdown() {
    var now   = new Date();
    var start = new Date('2026-10-15T00:00:00');
    var end   = new Date('2026-10-17T23:59:59');
    var block  = document.getElementById('countdown');
    var status = document.getElementById('countdown-status');

    if (!block) return;

    if (now >= end) {
      block.style.display = 'none';
      if (status) status.textContent = 'This edition has concluded.';
    } else if (now >= start) {
      block.style.display = 'none';
      if (status) status.textContent = 'Ongoing now 🎉';
    } else {
      var diff = start - now;
      var d = String(Math.floor(diff / 86400000)).padStart(2, '0');
      var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
      var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      var s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
      var dEl = document.getElementById('cd-days');
      var hEl = document.getElementById('cd-hours');
      var mEl = document.getElementById('cd-mins');
      var sEl = document.getElementById('cd-secs');
      if (dEl) dEl.textContent = d;
      if (hEl) hEl.textContent = h;
      if (mEl) mEl.textContent = m;
      if (sEl) sEl.textContent = s;
    }
  }

  updateAboutCountdown();
  setInterval(updateAboutCountdown, 1000);


  /* ------------------------------------------
     PILLAR CARD STAGGER
     Each card fades in with a slight delay
  ------------------------------------------ */
  var pillars = document.querySelectorAll('.pillar-card');
  if ('IntersectionObserver' in window && pillars.length) {
    var pillarObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = Array.from(pillars).indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 60);
          pillarObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    pillars.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      pillarObserver.observe(card);
    });
  }


  /* ------------------------------------------
     TESTIMONIAL CARD STAGGER
  ------------------------------------------ */
  var testimonials = document.querySelectorAll('.testimonial-card');
  if ('IntersectionObserver' in window && testimonials.length) {
    var testObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = Array.from(testimonials).indexOf(entry.target);
          setTimeout(function () {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          testObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    testimonials.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      testObserver.observe(card);
    });
  }

});


  /* ------------------------------------------
     EVENT STRIP COUNTDOWN (under hero)
  ------------------------------------------ */
  function updateAboutStrip() {
    var now   = new Date();
    var start = new Date('2026-10-15T00:00:00');
    var end   = new Date('2026-10-17T23:59:59');
    var timer  = document.getElementById('aboutStripTimer');
    var status = document.getElementById('aboutStripStatus');

    if (!timer) return;

    if (now >= end) {
      timer.style.display = 'none';
      if (status) status.textContent = 'Completed';
    } else if (now >= start) {
      timer.style.display = 'none';
      if (status) status.textContent = 'Ongoing 🎉';
    } else {
      var diff = start - now;
      var d = String(Math.floor(diff / 86400000)).padStart(2, '0');
      var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
      var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      var s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
      var dEl = document.getElementById('as-days');
      var hEl = document.getElementById('as-hours');
      var mEl = document.getElementById('as-mins');
      var sEl = document.getElementById('as-secs');
      if (dEl) dEl.textContent = d;
      if (hEl) hEl.textContent = h;
      if (mEl) mEl.textContent = m;
      if (sEl) sEl.textContent = s;
    }
  }

  updateAboutStrip();
  setInterval(updateAboutStrip, 1000);


  /* ------------------------------------------
     SUBSCRIBE FORM
  ------------------------------------------ */
  var subscribeBtn = document.getElementById('subscribeBtn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function () {
      var name  = document.getElementById('subName').value.trim();
      var email = document.getElementById('subEmail').value.trim();
      if (!name || !email) {
        alert('Please fill in both your name and email address.');
        return;
      }
      document.getElementById('subscribeForm').style.display = 'none';
      document.getElementById('subscribeSuccess').style.display = 'block';
    });
  }