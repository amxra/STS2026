/* =============================================
   STS 2026 — about.js
   About-page specific JS only.
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
        document.querySelectorAll('.accordion-item').forEach(function (i) {
          i.classList.remove('open');
          var t = i.querySelector('.accordion-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
          setTimeout(function () {
            trigger.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 50);
        }
      });
    });
  
  
    /* ------------------------------------------
       STS @ 10 COUNTDOWN
       IDs: cd-days, cd-hours, cd-mins, cd-secs
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
        var dEl = document.getElementById('cd-days');
        var hEl = document.getElementById('cd-hours');
        var mEl = document.getElementById('cd-mins');
        var sEl = document.getElementById('cd-secs');
        if (dEl) dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2,'0');
        if (hEl) hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
        if (mEl) mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
        if (sEl) sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
      }
    }
    updateAboutCountdown();
    setInterval(updateAboutCountdown, 1000);
  
  
    /* ------------------------------------------
       HERO STRIP COUNTDOWN
       IDs: as-days, as-hours, as-mins, as-secs
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
        var dEl = document.getElementById('as-days');
        var hEl = document.getElementById('as-hours');
        var mEl = document.getElementById('as-mins');
        var sEl = document.getElementById('as-secs');
        if (dEl) dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2,'0');
        if (hEl) hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
        if (mEl) mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
        if (sEl) sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
      }
    }
    updateAboutStrip();
    setInterval(updateAboutStrip, 1000);
  
  
    /* ------------------------------------------
       FOOTER STRIP COUNTDOWN
       IDs: as2-days, as2-hours, as2-mins, as2-secs
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
        var dEl = document.getElementById('as2-days');
        var hEl = document.getElementById('as2-hours');
        var mEl = document.getElementById('as2-mins');
        var sEl = document.getElementById('as2-secs');
        if (dEl) dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2,'0');
        if (hEl) hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0');
        if (mEl) mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0');
        if (sEl) sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2,'0');
      }
    }
    updateAboutStrip2();
    setInterval(updateAboutStrip2, 1000);
  
  
    /* ------------------------------------------
       PILLAR CARD STAGGER
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
  
  
    /* ------------------------------------------
       SUBSCRIBE FORM
    ------------------------------------------ */
    var subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', function () {
        var name  = document.getElementById('subName').value.trim();
        var email = document.getElementById('subEmail').value.trim();
        if (!name || !email) { alert('Please fill in both your name and email address.'); return; }
        document.getElementById('subscribeForm').style.display = 'none';
        document.getElementById('subscribeSuccess').style.display = 'block';
      });
    }
  
  });