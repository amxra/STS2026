/* =============================================
   STS 2026 — edition.js
   Shared JS for all individual edition pages.
   ============================================= */

   document.addEventListener('DOMContentLoaded', function () {

    /* ------------------------------------------
       SPEAKER CARD STAGGER
    ------------------------------------------ */
    var cards = document.querySelectorAll('.ed-sp-card');
    if ('IntersectionObserver' in window && cards.length) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = Array.from(cards).indexOf(entry.target);
            setTimeout(function () {
              entry.target.classList.add('visible');
            }, Math.min(idx * 40, 500));
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });
      cards.forEach(function (c) { obs.observe(c); });
    } else {
      cards.forEach(function (c) { c.classList.add('visible'); });
    }
  
  
    /* ------------------------------------------
       TOPIC CARD STAGGER
    ------------------------------------------ */
    var topics = document.querySelectorAll('.ed-topic-card');
    if ('IntersectionObserver' in window && topics.length) {
      var topicObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = Array.from(topics).indexOf(entry.target);
            setTimeout(function () {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, idx * 80);
            topicObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      topics.forEach(function (t) {
        t.style.opacity = '0';
        t.style.transform = 'translateY(16px)';
        t.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        topicObs.observe(t);
      });
    }
  
  
    /* ------------------------------------------
       SUBSCRIBE
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
  
  
    /* ------------------------------------------
       COUNTDOWNS
    ------------------------------------------ */
    var strips = [
      { timer:'heroTimer',   status:'heroStatus',   days:'h-days', hours:'h-hours', mins:'h-mins', secs:'h-secs', wrap:'heroStrip' },
      { timer:'footerTimer', status:'footerStatus', days:'f-days', hours:'f-hours', mins:'f-mins', secs:'f-secs', wrap:'footerStrip' }
    ];
  
    function updateCountdowns() {
      var now = new Date(); var start = new Date('2026-10-15T00:00:00'); var end = new Date('2026-10-17T23:59:59');
      strips.forEach(function (s) {
        var wrap = document.getElementById(s.wrap); if (!wrap) return;
        var timer = document.getElementById(s.timer); var status = document.getElementById(s.status);
        if (now >= end) { wrap.style.display = 'none'; }
        else if (now >= start) { if (timer) timer.style.display = 'none'; if (status) status.textContent = 'Ongoing 🎉'; }
        else {
          var diff = start - now;
          var dEl = document.getElementById(s.days);   if (dEl) dEl.textContent = String(Math.floor(diff/86400000)).padStart(2,'0');
          var hEl = document.getElementById(s.hours);  if (hEl) hEl.textContent = String(Math.floor((diff%86400000)/3600000)).padStart(2,'0');
          var mEl = document.getElementById(s.mins);   if (mEl) mEl.textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
          var sEl = document.getElementById(s.secs);   if (sEl) sEl.textContent = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
        }
      });
    }
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
  
  });