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


  /* ------------------------------------------
     SECOND EVENT STRIP (above footer)
  ------------------------------------------ */
  function updateAboutStrip2() {
    var now   = new Date();
    var start = new Date('2026-10-15T00:00:00');
    var end   = new Date('2026-10-17T23:59:59');
    var timer  = document.getElementById('aboutStripTimer2');
    var status = document.getElementById('aboutStripStatus2');

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
      var dEl = document.getElementById('as2-days');
      var hEl = document.getElementById('as2-hours');
      var mEl = document.getElementById('as2-mins');
      var sEl = document.getElementById('as2-secs');
      if (dEl) dEl.textContent = d;
      if (hEl) hEl.textContent = h;
      if (mEl) mEl.textContent = m;
      if (sEl) sEl.textContent = s;
    }
  }

  updateAboutStrip2();
  setInterval(updateAboutStrip2, 1000);
/* =============================================
   STS 2026 — deal-room.js
   Deal Room page specific JS.
   Shared behaviour lives in main.js.
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       COUNTRIES DATA
    ------------------------------------------ */
    var COUNTRIES = [
      {name:'Afghanistan',code:'+93'},{name:'Algeria',code:'+213'},{name:'Angola',code:'+244'},
      {name:'Argentina',code:'+54'},{name:'Australia',code:'+61'},{name:'Austria',code:'+43'},
      {name:'Azerbaijan',code:'+994'},{name:'Bangladesh',code:'+880'},{name:'Belgium',code:'+32'},
      {name:'Benin',code:'+229'},{name:'Bolivia',code:'+591'},{name:'Brazil',code:'+55'},
      {name:'Burkina Faso',code:'+226'},{name:'Burundi',code:'+257'},{name:'Cameroon',code:'+237'},
      {name:'Canada',code:'+1'},{name:'Chad',code:'+235'},{name:'Chile',code:'+56'},
      {name:'China',code:'+86'},{name:'Colombia',code:'+57'},{name:'Congo',code:'+242'},
      {name:'DR Congo',code:'+243'},{name:'Côte d\'Ivoire',code:'+225'},{name:'Denmark',code:'+45'},
      {name:'Djibouti',code:'+253'},{name:'Ecuador',code:'+593'},{name:'Egypt',code:'+20'},
      {name:'Ethiopia',code:'+251'},{name:'Finland',code:'+358'},{name:'France',code:'+33'},
      {name:'Gabon',code:'+241'},{name:'Gambia',code:'+220'},{name:'Germany',code:'+49'},
      {name:'Ghana',code:'+233'},{name:'Greece',code:'+30'},{name:'Guinea',code:'+224'},
      {name:'India',code:'+91'},{name:'Indonesia',code:'+62'},{name:'Ireland',code:'+353'},
      {name:'Israel',code:'+972'},{name:'Italy',code:'+39'},{name:'Japan',code:'+81'},
      {name:'Jordan',code:'+962'},{name:'Kenya',code:'+254'},{name:'Kuwait',code:'+965'},
      {name:'Lebanon',code:'+961'},{name:'Liberia',code:'+231'},{name:'Libya',code:'+218'},
      {name:'Madagascar',code:'+261'},{name:'Malawi',code:'+265'},{name:'Malaysia',code:'+60'},
      {name:'Mali',code:'+223'},{name:'Mauritania',code:'+222'},{name:'Mauritius',code:'+230'},
      {name:'Mexico',code:'+52'},{name:'Morocco',code:'+212'},{name:'Mozambique',code:'+258'},
      {name:'Namibia',code:'+264'},{name:'Netherlands',code:'+31'},{name:'New Zealand',code:'+64'},
      {name:'Niger',code:'+227'},{name:'Nigeria',code:'+234'},{name:'Norway',code:'+47'},
      {name:'Oman',code:'+968'},{name:'Pakistan',code:'+92'},{name:'Philippines',code:'+63'},
      {name:'Poland',code:'+48'},{name:'Portugal',code:'+351'},{name:'Qatar',code:'+974'},
      {name:'Romania',code:'+40'},{name:'Rwanda',code:'+250'},{name:'Saudi Arabia',code:'+966'},
      {name:'Senegal',code:'+221'},{name:'Sierra Leone',code:'+232'},{name:'Singapore',code:'+65'},
      {name:'Somalia',code:'+252'},{name:'South Africa',code:'+27'},{name:'South Korea',code:'+82'},
      {name:'South Sudan',code:'+211'},{name:'Spain',code:'+34'},{name:'Sudan',code:'+249'},
      {name:'Sweden',code:'+46'},{name:'Switzerland',code:'+41'},{name:'Tanzania',code:'+255'},
      {name:'Togo',code:'+228'},{name:'Tunisia',code:'+216'},{name:'Turkey',code:'+90'},
      {name:'Uganda',code:'+256'},{name:'United Arab Emirates',code:'+971'},
      {name:'United Kingdom',code:'+44'},{name:'United States',code:'+1'},
      {name:'Uruguay',code:'+598'},{name:'Zambia',code:'+260'},{name:'Zimbabwe',code:'+263'}
    ];
  
    var sorted = COUNTRIES.slice().sort(function(a,b){ return a.name.localeCompare(b.name); });
    var nigeria = sorted.find(function(c){ return c.name === 'Nigeria'; });
  
  
    /* ------------------------------------------
       POPULATE DROPDOWNS
    ------------------------------------------ */
    function populateCountry(id) {
      var el = document.getElementById(id);
      if (!el) return;
      sorted.forEach(function(c) {
        var o = document.createElement('option');
        o.value = c.name; o.textContent = c.name;
        el.appendChild(o);
      });
      el.value = 'Nigeria';
    }
  
    function populateDial(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var nigOpt = document.createElement('option');
      nigOpt.value = nigeria.code;
      nigOpt.textContent = 'Nigeria ' + nigeria.code;
      el.appendChild(nigOpt);
      sorted.forEach(function(c) {
        if (c.name === 'Nigeria') return;
        var o = document.createElement('option');
        o.value = c.code;
        o.textContent = c.name + ' ' + c.code;
        el.appendChild(o);
      });
    }
  
    ['inv-country','inv-opCountry','gr-country','ln-country'].forEach(populateCountry);
    ['inv-dialCode','gr-dialCode','ln-dialCode'].forEach(populateDial);
  
    /* Year dropdowns */
    ['gr-yearFounded','ln-yearEstablished'].forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      var cur = new Date().getFullYear();
      for (var y = cur; y >= 1990; y--) {
        var o = document.createElement('option');
        o.value = y; o.textContent = y;
        el.appendChild(o);
      }
    });
  
  
    /* ------------------------------------------
       PRIMARY TAB SWITCHING
    ------------------------------------------ */
    document.querySelectorAll('.dr-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = btn.getAttribute('data-tab');
        document.querySelectorAll('.dr-tab').forEach(function(t){ t.classList.remove('active'); });
        document.querySelectorAll('.dr-panel').forEach(function(p){ p.classList.remove('active'); });
        btn.classList.add('active');
        var panel = document.getElementById('panel-' + tab);
        if (panel) panel.classList.add('active');
      });
    });
  
  
    /* ------------------------------------------
       SECONDARY TAB SWITCHING
    ------------------------------------------ */
    document.querySelectorAll('.dr-sub-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var subtab = btn.getAttribute('data-subtab');
        document.querySelectorAll('.dr-sub-tab').forEach(function(t){ t.classList.remove('active'); });
        document.querySelectorAll('.dr-sub-panel').forEach(function(p){ p.classList.remove('active'); });
        btn.classList.add('active');
        var panel = document.getElementById('panel-' + subtab);
        if (panel) panel.classList.add('active');
      });
    });
  
  
    /* ------------------------------------------
       CHECKBOX SELECTED STATE
    ------------------------------------------ */
    document.querySelectorAll('.dr-check-item input[type="checkbox"]').forEach(function(cb) {
      cb.addEventListener('change', function() {
        cb.closest('.dr-check-item').classList.toggle('selected', cb.checked);
      });
    });
  
  
    /* ------------------------------------------
       RADIO PILL SELECTED STATE
    ------------------------------------------ */
    document.querySelectorAll('.dr-radio-item input[type="radio"]').forEach(function(rb) {
      rb.addEventListener('change', function() {
        document.querySelectorAll('input[name="' + rb.name + '"]').forEach(function(r) {
          r.closest('.dr-radio-item').classList.remove('selected');
        });
        rb.closest('.dr-radio-item').classList.add('selected');
      });
    });
  
  
    /* ------------------------------------------
       WORD COUNTS
    ------------------------------------------ */
    [
      ['inv-thesis',    'inv-thesis-count'],
      ['gr-description','gr-desc-count'],
      ['gr-impact',     'gr-impact-count']
    ].forEach(function(pair) {
      var ta = document.getElementById(pair[0]);
      var wc = document.getElementById(pair[1]);
      if (!ta || !wc) return;
      ta.addEventListener('input', function() {
        var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
        wc.textContent = words + ' / 300 words';
        wc.classList.toggle('over', words > 300);
      });
    });
  
  
    /* ------------------------------------------
       FILE NAME DISPLAY
    ------------------------------------------ */
    window.showFileNames = function(inputId, displayId) {
      var input = document.getElementById(inputId);
      var display = document.getElementById(displayId);
      if (!input || !display) return;
      var names = Array.from(input.files).map(function(f){ return f.name; }).join(', ');
      display.textContent = names ? 'Selected: ' + names : '';
    };
  
  
    /* ------------------------------------------
       FORM VALIDATION HELPER
    ------------------------------------------ */
    function validateRequired(ids) {
      var valid = true;
      ids.forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) return;
        var field = el.closest('.dr-field');
        if (!el.value.trim()) {
          valid = false;
          if (field) field.classList.add('error');
        } else {
          if (field) field.classList.remove('error');
        }
      });
      return valid;
    }
  
  
    /* ------------------------------------------
       SUBMIT HANDLERS
    ------------------------------------------ */
    var investorBtn = document.getElementById('investorSubmitBtn');
    if (investorBtn) {
      investorBtn.addEventListener('click', function() {
        if (!validateRequired(['inv-firstName','inv-lastName','inv-email','inv-phone','inv-country','inv-state','inv-orgName','inv-orgType','inv-role'])) {
          alert('Please fill in all required fields.');
          return;
        }
        document.getElementById('investorForm').style.display = 'none';
        document.getElementById('investorSuccess').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    var grantsBtn = document.getElementById('grantsSubmitBtn');
    if (grantsBtn) {
      grantsBtn.addEventListener('click', function() {
        if (!validateRequired(['gr-firstName','gr-lastName','gr-email','gr-phone','gr-country','gr-state','gr-projectName','gr-stage','gr-amount','gr-duration','gr-description','gr-impact'])) {
          alert('Please fill in all required fields.');
          return;
        }
        document.getElementById('grantsForm').style.display = 'none';
        document.getElementById('grantsSuccess').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    var loansBtn = document.getElementById('loansSubmitBtn');
    if (loansBtn) {
      loansBtn.addEventListener('click', function() {
        if (!validateRequired(['ln-firstName','ln-lastName','ln-email','ln-phone','ln-country','ln-state','ln-bizName','ln-yearEstablished','ln-regStatus','ln-bizSize','ln-sector','ln-amount','ln-tenure','ln-purpose'])) {
          alert('Please fill in all required fields.');
          return;
        }
        document.getElementById('loansForm').style.display = 'none';
        document.getElementById('loansSuccess').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
  
    /* ------------------------------------------
       SUBSCRIBE FORM
    ------------------------------------------ */
    var subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', function() {
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
  
  
    /* ------------------------------------------
       SCROLL REVEAL — form sections
    ------------------------------------------ */
    function initFormReveal() {
      var sections = document.querySelectorAll('.dr-form-section');
      if (!('IntersectionObserver' in window) || !sections.length) {
        sections.forEach(function(s){ s.classList.add('visible'); });
        return;
      }
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var idx = Array.from(sections).indexOf(entry.target);
            setTimeout(function(){
              entry.target.classList.add('visible');
            }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  
      sections.forEach(function(s){ observer.observe(s); });
    }
  
    initFormReveal();
  
    /* Re-run reveal when switching tabs so new panel sections animate in */
    document.querySelectorAll('.dr-tab, .dr-sub-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        setTimeout(initFormReveal, 50);
      });
    });
  
  
    /* ------------------------------------------
       COUNTDOWN TIMERS (hero strip + footer strip)
    ------------------------------------------ */
    var strips = [
      { timer:'heroTimer',   status:'heroStatus',   days:'h-days', hours:'h-hours', mins:'h-mins', secs:'h-secs', wrap:'heroStrip' },
      { timer:'footerTimer', status:'footerStatus', days:'f-days', hours:'f-hours', mins:'f-mins', secs:'f-secs', wrap:'footerStrip' }
    ];
  
    function updateCountdowns() {
      var now   = new Date();
      var start = new Date('2026-10-15T00:00:00');
      var end   = new Date('2026-10-17T23:59:59');
  
      strips.forEach(function(s) {
        var wrap   = document.getElementById(s.wrap);
        var timer  = document.getElementById(s.timer);
        var status = document.getElementById(s.status);
        if (!wrap) return;
  
        if (now >= end) {
          wrap.style.display = 'none';
        } else if (now >= start) {
          if (timer) timer.style.display = 'none';
          if (status) status.textContent = 'Ongoing 🎉';
        } else {
          var diff = start - now;
          var d = String(Math.floor(diff / 86400000)).padStart(2,'0');
          var h = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
          var m = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
          var sec = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
          var dEl = document.getElementById(s.days);
          var hEl = document.getElementById(s.hours);
          var mEl = document.getElementById(s.mins);
          var sEl = document.getElementById(s.secs);
          if (dEl) dEl.textContent = d;
          if (hEl) hEl.textContent = h;
          if (mEl) mEl.textContent = m;
          if (sEl) sEl.textContent = sec;
        }
      });
    }
  
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
  
  });

  /* =============================================
   STS 2026 — partners.js
   Partners page specific JS.
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     COUNTRIES DATA
  ------------------------------------------ */
  var COUNTRIES = [
    {name:'Afghanistan',code:'+93'},{name:'Algeria',code:'+213'},{name:'Angola',code:'+244'},
    {name:'Argentina',code:'+54'},{name:'Australia',code:'+61'},{name:'Austria',code:'+43'},
    {name:'Bangladesh',code:'+880'},{name:'Belgium',code:'+32'},{name:'Benin',code:'+229'},
    {name:'Brazil',code:'+55'},{name:'Burkina Faso',code:'+226'},{name:'Cameroon',code:'+237'},
    {name:'Canada',code:'+1'},{name:'Chad',code:'+235'},{name:'China',code:'+86'},
    {name:'Colombia',code:'+57'},{name:'Congo',code:'+242'},{name:'DR Congo',code:'+243'},
    {name:'Denmark',code:'+45'},{name:'Egypt',code:'+20'},{name:'Ethiopia',code:'+251'},
    {name:'France',code:'+33'},{name:'Germany',code:'+49'},{name:'Ghana',code:'+233'},
    {name:'Greece',code:'+30'},{name:'Guinea',code:'+224'},{name:'India',code:'+91'},
    {name:'Indonesia',code:'+62'},{name:'Ireland',code:'+353'},{name:'Israel',code:'+972'},
    {name:'Italy',code:'+39'},{name:'Japan',code:'+81'},{name:'Jordan',code:'+962'},
    {name:'Kenya',code:'+254'},{name:'Kuwait',code:'+965'},{name:'Lebanon',code:'+961'},
    {name:'Liberia',code:'+231'},{name:'Madagascar',code:'+261'},{name:'Malawi',code:'+265'},
    {name:'Malaysia',code:'+60'},{name:'Mali',code:'+223'},{name:'Mauritius',code:'+230'},
    {name:'Mexico',code:'+52'},{name:'Morocco',code:'+212'},{name:'Mozambique',code:'+258'},
    {name:'Namibia',code:'+264'},{name:'Netherlands',code:'+31'},{name:'New Zealand',code:'+64'},
    {name:'Niger',code:'+227'},{name:'Nigeria',code:'+234'},{name:'Norway',code:'+47'},
    {name:'Pakistan',code:'+92'},{name:'Philippines',code:'+63'},{name:'Poland',code:'+48'},
    {name:'Portugal',code:'+351'},{name:'Qatar',code:'+974'},{name:'Rwanda',code:'+250'},
    {name:'Saudi Arabia',code:'+966'},{name:'Senegal',code:'+221'},{name:'Sierra Leone',code:'+232'},
    {name:'Singapore',code:'+65'},{name:'Somalia',code:'+252'},{name:'South Africa',code:'+27'},
    {name:'South Korea',code:'+82'},{name:'South Sudan',code:'+211'},{name:'Spain',code:'+34'},
    {name:'Sudan',code:'+249'},{name:'Sweden',code:'+46'},{name:'Switzerland',code:'+41'},
    {name:'Tanzania',code:'+255'},{name:'Togo',code:'+228'},{name:'Tunisia',code:'+216'},
    {name:'Turkey',code:'+90'},{name:'Uganda',code:'+256'},{name:'United Arab Emirates',code:'+971'},
    {name:'United Kingdom',code:'+44'},{name:'United States',code:'+1'},
    {name:'Zambia',code:'+260'},{name:'Zimbabwe',code:'+263'}
  ];

  var sorted = COUNTRIES.slice().sort(function(a,b){ return a.name.localeCompare(b.name); });
  var nigeria = sorted.find(function(c){ return c.name === 'Nigeria'; });

  /* Populate country select */
  var countryEl = document.getElementById('pt-country');
  if (countryEl) {
    sorted.forEach(function(c) {
      var o = document.createElement('option');
      o.value = c.name; o.textContent = c.name;
      countryEl.appendChild(o);
    });
  }

  /* Populate dial code select — Nigeria first */
  var dialEl = document.getElementById('pt-dialCode');
  if (dialEl) {
    var nigOpt = document.createElement('option');
    nigOpt.value = nigeria.code;
    nigOpt.textContent = 'Nigeria ' + nigeria.code;
    dialEl.appendChild(nigOpt);
    sorted.forEach(function(c) {
      if (c.name === 'Nigeria') return;
      var o = document.createElement('option');
      o.value = c.code; o.textContent = c.name + ' ' + c.code;
      dialEl.appendChild(o);
    });
  }


  /* ------------------------------------------
     PARTNER FORM SUBMIT
  ------------------------------------------ */
  var submitBtn = document.getElementById('pt-submitBtn');
  if (submitBtn) {
    submitBtn.addEventListener('click', function() {
      var fields = ['pt-firstName','pt-lastName','pt-email','pt-phone','pt-org','pt-role','pt-address','pt-city','pt-country','pt-region'];
      var valid = true;

      fields.forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) return;
        var field = el.closest('.pt-field');
        if (!el.value.trim()) {
          valid = false;
          if (field) field.classList.add('error');
        } else {
          if (field) field.classList.remove('error');
        }
      });

      if (!dialEl || !dialEl.value) {
        valid = false;
        if (dialEl) dialEl.style.borderColor = '#d0392b';
      } else {
        if (dialEl) dialEl.style.borderColor = '';
      }

      if (!valid) { alert('Please fill in all fields before submitting.'); return; }

      document.getElementById('partnerForm').style.display = 'none';
      document.getElementById('partnerSuccess').style.display = 'block';
    });
  }


  /* ------------------------------------------
     SUBSCRIBE FORM
  ------------------------------------------ */
  var subscribeBtn = document.getElementById('subscribeBtn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
      var name  = document.getElementById('subName').value.trim();
      var email = document.getElementById('subEmail').value.trim();
      if (!name || !email) { alert('Please fill in both your name and email address.'); return; }
      document.getElementById('subscribeForm').style.display = 'none';
      document.getElementById('subscribeSuccess').style.display = 'block';
    });
  }


  /* ------------------------------------------
     LOGO CARD STAGGER ANIMATION
  ------------------------------------------ */
  var cards = document.querySelectorAll('.pt-logo-card');
  if ('IntersectionObserver' in window && cards.length) {
    var cardObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var idx = Array.from(cards).indexOf(entry.target);
          setTimeout(function() {
            entry.target.classList.add('visible');
          }, idx * 50);
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    cards.forEach(function(card) { cardObserver.observe(card); });
  } else {
    cards.forEach(function(card) { card.classList.add('visible'); });
  }


  /* ------------------------------------------
     WHY ITEM STAGGER ANIMATION
  ------------------------------------------ */
  var whyItems = document.querySelectorAll('.pt-why-item');
  if ('IntersectionObserver' in window && whyItems.length) {
    var whyObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var idx = Array.from(whyItems).indexOf(entry.target);
          setTimeout(function() {
            entry.target.classList.add('visible');
          }, idx * 100);
          whyObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    whyItems.forEach(function(item) { whyObserver.observe(item); });
  } else {
    whyItems.forEach(function(item) { item.classList.add('visible'); });
  }


  /* ------------------------------------------
     COUNTDOWN TIMERS
  ------------------------------------------ */
  var strips = [
    { timer:'heroTimer',   status:'heroStatus',   days:'h-days', hours:'h-hours', mins:'h-mins', secs:'h-secs', wrap:'heroStrip' },
    { timer:'footerTimer', status:'footerStatus', days:'f-days', hours:'f-hours', mins:'f-mins', secs:'f-secs', wrap:'footerStrip' }
  ];

  function updateCountdowns() {
    var now   = new Date();
    var start = new Date('2026-10-15T00:00:00');
    var end   = new Date('2026-10-17T23:59:59');

    strips.forEach(function(s) {
      var wrap   = document.getElementById(s.wrap);
      var timer  = document.getElementById(s.timer);
      var status = document.getElementById(s.status);
      if (!wrap) return;

      if (now >= end) {
        wrap.style.display = 'none';
      } else if (now >= start) {
        if (timer) timer.style.display = 'none';
        if (status) status.textContent = 'Ongoing 🎉';
      } else {
        var diff = start - now;
        var d   = String(Math.floor(diff / 86400000)).padStart(2,'0');
        var h   = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
        var m   = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
        var sec = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
        var dEl = document.getElementById(s.days);
        var hEl = document.getElementById(s.hours);
        var mEl = document.getElementById(s.mins);
        var sEl = document.getElementById(s.secs);
        if (dEl) dEl.textContent = d;
        if (hEl) hEl.textContent = h;
        if (mEl) mEl.textContent = m;
        if (sEl) sEl.textContent = sec;
      }
    });
  }

  updateCountdowns();
  setInterval(updateCountdowns, 1000);

});