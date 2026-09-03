/* =============================================
   STS 2026 — edition.js
   Shared JS for all individual edition pages
   (sts-2016.html through sts-2025.html).
   ============================================= */

/* ------------------------------------------
   RENDER SPEAKER CARDS
   Reads the page-specific EDITION_SPEAKERS array
   (defined inline on each edition page) and builds
   the speaker grid — alphabetical order, cycling
   avatar colors, blurred-backdrop photo treatment,
   initials fallback if a photo fails to load.
------------------------------------------ */
function edGetInitials(name) {
  var parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function edRenderSpeakers() {
  var grid = document.getElementById('edSpeakersGrid');
  if (!grid || typeof EDITION_SPEAKERS === 'undefined') return;

  var sorted = EDITION_SPEAKERS.slice().sort(function (a, b) {
    var rank = function (sp) {
      var t = (sp.title || '').toLowerCase();
      var o = (sp.org || '').toLowerCase();
      if (t.indexOf('governor') > -1 && o.indexOf('lagos') > -1) return 0;
      if (t.indexOf('minister') > -1) return 1;
      if (t.indexOf('convener') > -1) return 2;
      return 3;
    };
    var ra = rank(a), rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.name.localeCompare(b.name);
  });

  grid.innerHTML = '';
  sorted.forEach(function (sp, i) {
    var avClass = 'ed-av-' + (i % 6);
    var initials = edGetInitials(sp.name);
    var card = document.createElement('div');
    card.className = 'ed-sp-card';
    card.innerHTML =
      '<img class="ed-sp-avatar" src="' + sp.photo + '" alt="' + sp.name + '" ' +
      'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="ed-sp-avatar ' + avClass + '" style="display:none">' + initials + '</div>' +
      '<div class="ed-sp-info">' +
        '<div class="ed-sp-name">' + sp.name + '</div>' +
        (sp.title ? '<div class="ed-sp-title">' + sp.title + '</div>' : '') +
        (sp.org ? '<div class="ed-sp-org">' + sp.org + '</div>' : '') +
      '</div>';
    grid.appendChild(card);
  });
}

/* ------------------------------------------
   RENDER EVENT HIGHLIGHTS GALLERY
   Reads the page-specific EDITION_GALLERY array
   (an array of image paths, defined inline on each
   edition page) and builds the photo grid — first
   photo tall, rest standard, broken-image fallback.
   Only ED_GALLERY_VISIBLE tiles are rendered so the
   page stays short even when EDITION_GALLERY holds
   far more photos than that — the lightbox still
   gets the FULL array, so arrowing through from any
   tile browses every photo, not just the visible ones.
------------------------------------------ */
var ED_GALLERY_VISIBLE = 6;

function edRenderGallery() {
  var grid = document.getElementById('edGalleryGrid');
  if (!grid || typeof EDITION_GALLERY === 'undefined' || !EDITION_GALLERY.length) return;

  var visibleCount = Math.min(ED_GALLERY_VISIBLE, EDITION_GALLERY.length);
  var remaining = EDITION_GALLERY.length - visibleCount;

  grid.innerHTML = '';
  for (var i = 0; i < visibleCount; i++) {
    var src = EDITION_GALLERY[i];
    var isLastVisible = (i === visibleCount - 1);
    var item = document.createElement('button');
    item.type = 'button';
    item.className = 'ed-gallery-item' + (i === 0 ? ' tall' : '');
    item.setAttribute('data-index', i);
    item.innerHTML =
      '<img src="' + src + '" alt="STS highlight photo ' + (i + 1) + '" loading="lazy" ' +
      'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<div class="ed-gallery-fallback">' +
        '<svg viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>' +
        '<span>Photo unavailable</span>' +
      '</div>' +
      (isLastVisible && remaining > 0 ? '<div class="ed-gallery-more"><span>+' + remaining + ' more</span></div>' : '');
    grid.appendChild(item);
  }

  edInitLightbox(EDITION_GALLERY);
}

/* ------------------------------------------
   LIGHTBOX
   Injects the modal once per page, then wires up
   open (grid click), close, prev/next, keyboard,
   and its own broken-image fallback.
------------------------------------------ */
function edInitLightbox(photos) {
  if (document.getElementById('edLightbox')) return;

  document.body.insertAdjacentHTML('beforeend',
    '<div class="ed-lightbox" id="edLightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">' +
      '<button type="button" class="ed-lightbox-close" id="edLightboxClose" aria-label="Close photo viewer">' +
        '<svg viewBox="0 0 24 24"><path d="M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z"/></svg>' +
      '</button>' +
      '<button type="button" class="ed-lightbox-prev" id="edLightboxPrev" aria-label="Previous photo">' +
        '<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>' +
      '</button>' +
      '<div class="ed-lightbox-figure">' +
        '<img id="edLightboxImg" src="" alt="">' +
        '<div class="ed-lightbox-fallback" id="edLightboxFallback">' +
          '<svg viewBox="0 0 24 24"><path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>' +
          '<span>Photo unavailable</span>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="ed-lightbox-next" id="edLightboxNext" aria-label="Next photo">' +
        '<svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>' +
      '</button>' +
      '<div class="ed-lightbox-counter" id="edLightboxCounter"></div>' +
    '</div>'
  );

  var grid = document.getElementById('edGalleryGrid');
  var lightbox = document.getElementById('edLightbox');
  var lbImg = document.getElementById('edLightboxImg');
  var lbFallback = document.getElementById('edLightboxFallback');
  var lbCounter = document.getElementById('edLightboxCounter');
  var current = 0;

  function show(index) {
    current = (index + photos.length) % photos.length;
    lbFallback.style.display = 'none';
    lbImg.style.display = 'block';
    lbImg.src = photos[current];
    lbCounter.textContent = (current + 1) + ' / ' + photos.length;
  }

  lbImg.addEventListener('error', function () {
    lbImg.style.display = 'none';
    lbFallback.style.display = 'flex';
  });

  function openLightbox(index) {
    show(index);
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', function (e) {
    var item = e.target.closest('.ed-gallery-item');
    if (!item) return;
    openLightbox(parseInt(item.getAttribute('data-index'), 10));
  });

  document.getElementById('edLightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('edLightboxPrev').addEventListener('click', function () { show(current - 1); });
  document.getElementById('edLightboxNext').addEventListener('click', function () { show(current + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}

document.addEventListener('DOMContentLoaded', function () {

  edRenderSpeakers();
  edRenderGallery();

  /* ------------------------------------------
     SPEAKER CARD STAGGER (progressive enhancement —
     cards are visible by default via CSS either way)
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


  /* ------------------------------------------
     COUNTDOWNS — hero (h-), mid-page (m-), footer (f-) strips
     all counting down to the same STS @ 10 dates.
  ------------------------------------------ */
  var strips = [
    { wrap: 'hStrip', timer: 'hTimer', status: 'hStatus', days: 'h-days', hours: 'h-hours', mins: 'h-mins', secs: 'h-secs' },
    { wrap: 'mStrip', timer: 'mTimer', status: 'mStatus', days: 'm-days', hours: 'm-hours', mins: 'm-mins', secs: 'm-secs' },
    { wrap: 'fStrip', timer: 'fTimer', status: 'fStatus', days: 'f-days', hours: 'f-hours', mins: 'f-mins', secs: 'f-secs' }
  ];

  function updateCountdowns() {
    var now = new Date();
    var start = new Date('2026-10-15T00:00:00');
    var end = new Date('2026-10-17T23:59:59');

    strips.forEach(function (s) {
      var wrap = document.getElementById(s.wrap);
      if (!wrap) return;
      var timer = document.getElementById(s.timer);
      var status = document.getElementById(s.status);

      if (now >= end) {
        wrap.style.display = 'none';
      } else if (now >= start) {
        if (timer) timer.style.display = 'none';
        if (status) status.textContent = 'Ongoing 🎉';
      } else {
        var diff = start - now;
        var dEl = document.getElementById(s.days);
        var hEl = document.getElementById(s.hours);
        var mEl = document.getElementById(s.mins);
        var sEl = document.getElementById(s.secs);
        if (dEl) dEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
        if (hEl) hEl.textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
        if (mEl) mEl.textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        if (sEl) sEl.textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
      }
    });
  }

  updateCountdowns();
  setInterval(updateCountdowns, 1000);

});