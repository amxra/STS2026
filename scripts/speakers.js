/* =============================================
   STS 2026 — speakers.js
   ============================================= */

/* ------------------------------------------
   SPEAKER DATA
------------------------------------------ */
var SPEAKERS = [
  { name: 'Adaobi Nnoruka',         title: 'Investment Director',                          org: 'ARM-Harith Infrastructure Investment Ltd' },
  { name: 'Adedoyin Jaiyesimi',     title: 'Chief Communications Consultant',               org: 'The Comms Avenue' },
  { name: 'Adenike Adeyemi',        title: 'Executive Director',                            org: 'Fate Foundation' },
  { name: 'Adrian Clews',           title: 'Managing Director',                             org: 'Hinddey Limited' },
  { name: 'Ahmed Sanda',            title: 'Managing Consultant',                           org: 'Ashawa Consults' },
  { name: 'Aisha Raheem Bolarinwa', title: 'Chief Executive Officer',                       org: 'Farmz2u' },
  { name: 'Aishat Raji',            title: 'Principal & Co-Head Nigeria Advisory',          org: 'CrossBoundary' },
  { name: 'Ajibola Asolo',          title: 'Partner',                                       org: 'Aluko & Oyebode' },
  { name: 'Akinleye Olagbende',     title: 'Head of Legal and Compliance',                  org: 'Azura Power West Africa Ltd' },
  { name: 'Akintunde Oyebode',      title: 'Commissioner for Finance & Economic Dev.',      org: 'Ekiti State' },
  { name: 'Alero Balogun',          title: 'General Manager, Corporate Communications',     org: 'Oando Energy Resources' },
  { name: 'Aliyu Jauro',            title: 'Former Director General',                       org: 'NESREA' },
  { name: 'Ayaan Adam',             title: 'Senior Director',                               org: 'African Finance Corporation' },
  { name: 'Ayokunle Ilesanmi',      title: 'Managing Director',                             org: 'Berkshire Advisory Partners' },
  { name: 'Ayomide Adeagbo',        title: 'Special Assistant to the President',            org: 'Arts, Culture & Creative Economy' },
  { name: 'Babatomiwa Adesida',     title: 'Head, External & Community Relations',          org: 'Sahara Group' },
  { name: 'Babajide Sanwo-Olu',     title: 'Executive Governor',                            org: 'Lagos State' },
  { name: 'Babatunde Jeje',         title: 'Senior Operations Geologist',                   org: 'TotalEnergies' },
  { name: 'Beulah Adeoye',          title: 'President',                                     org: 'Beulah Adeoye Foundation' },
  { name: 'Bisola Evboren',         title: 'Sr. Manager, PR & Communications',              org: 'Moniepoint Group' },
  { name: 'Bolanle Olaniyan',       title: 'Professor, Crop Physiology',                    org: 'University of Ibadan' },
  { name: 'Caleb Adebayo',          title: 'Associate, Structured Finance',                 org: 'Linklaters LLP' },
  { name: 'Carlos Garcete',         title: 'Ambassador of Brazil to Nigeria',               org: 'Embassy of Brazil' },
  { name: 'Caroline Rakus-Wojciechowsk', title: 'UN Sustainable Development Advocate',     org: 'YSDC' },
  { name: 'Cecilia Akintomide',     title: 'Chairperson',                                   org: 'The Sanitation & Hygiene Fund Africa' },
  { name: 'Celine Lafoucriere',     title: 'Chief, UNICEF Field Office',                    org: 'UNICEF Lagos' },
  { name: 'Cima Sholatan',          title: 'General Manager, Advisory Services',            org: 'Harley Reed Nigeria' },
  { name: 'Damilola Agbaje',        title: 'Investment Director',                           org: 'African Infrastructure Investment Managers' },
  { name: 'Damilola Dania',         title: 'Marketing and Brand Developer',                 org: 'UNILEVER Nigeria' },
  { name: 'Dapo Otunla',            title: 'Chief Corporate Services Officer',              org: 'IHS Nigeria Limited' },
  { name: 'David Kahale',           title: 'CEO',                                           org: 'Panta' },
  { name: 'Desmond Majekodunmi',    title: 'Chairman',                                      org: 'LUFASI' },
  { name: 'Deyemi Okanlawon',       title: 'Actor & Event Compere',                         org: '' },
  { name: 'Dolapo Fasawe',          title: 'Mandate Secretary for Health & Environment',    org: 'FCT Administration' },
  { name: 'Doyin Ogunye',           title: 'Founder',                                       org: 'RESWAYE' },
  { name: 'Ella Togun',             title: 'Engagement Manager',                            org: 'McKinsey & Company' },
  { name: 'Etemore Glover',         title: 'CEO',                                           org: 'Impact Investors Foundation' },
  { name: 'Faruq Abass',            title: 'Managing Partner',                              org: 'Abdu-Salaam Abbas & Co' },
  { name: 'Femi Adeyemo',           title: 'CEO',                                           org: 'Arnergy Limited' },
  { name: 'Feyisayo Alayande',      title: 'Executive Secretary',                           org: 'Lagos State Employment Trust Fund' },
  { name: 'Frank Eggman',           title: 'Consul General of Switzerland',                  org: 'Swiss Consulate' },
  { name: 'Ghaith Al Hassan',       title: 'Director, Engineering & Design',                org: 'IHS Nigeria Limited' },
  { name: 'Gimba Mohammed',         title: 'Director, Government & External Relations',     org: 'IHS Towers' },
  { name: 'Godfrey Adejumoh',       title: 'Head of Corporate Relations',                   org: 'Diageo' },
  { name: 'Hameed Adediran',        title: 'Country Director',                              org: 'Doctors Medical Aid Foundation' },
  { name: 'Ibukun Faluyi',          title: 'Executive Secretary',                           org: 'EPRON' },
  { name: 'Ibukun Tunde Oni',       title: 'CEO & Founder',                                 org: 'Eight Medical' },
  { name: 'Idris Olorunnimbe',      title: 'CEO',                                           org: 'Temple Management Company' },
  { name: 'Ifeanyi Ochonogor',      title: 'CEO',                                           org: 'Eterra Technologies' },
  { name: 'Ifeoma Adeoye',          title: 'Managing Director',                             org: 'Business Nest Investments Ltd' },
  { name: 'Inalogwu Akogwu',        title: 'Chief Digital & Innovation Officer',            org: 'T2mobile NG' },
  { name: 'Innocent Barikor',       title: 'Director General',                              org: 'NESREA' },
  { name: 'Jette Bjerrum',          title: 'Consul General of Denmark',                     org: 'Danish Consulate, Lagos' },
  { name: 'Joke Adu',               title: 'Country Head, Corporate Affairs',               org: 'Standard Chartered Nigeria' },
  { name: 'Joshua Chibueze',        title: 'Co-Founder',                                    org: 'PiggyVest' },
  { name: 'Jubril Adeojo',          title: 'CEO',                                           org: 'SMEFunds Capital' },
  { name: 'Kabir Shagaya',          title: 'Director of Strategy',                          org: 'Cavista Holdings' },
  { name: 'Kayode Adegbola',        title: 'Founder / Director',                            org: 'Adegbola Art Projects' },
  { name: 'Kayode Olaniyan',        title: 'Principal Consultant',                          org: 'Avant-Garde Limited' },
  { name: 'Kazeem Oladepo',         title: 'SVP / Chief Operating Officer',                 org: 'IHS Nigeria Limited' },
  { name: 'Kofo Adeleke',           title: 'Development Consultant',                        org: '' },
  { name: 'Labake Ajiboye Richard', title: 'Principal Consultant',                          org: 'AR Initiative' },
  { name: 'Laila Johnson Salami',   title: 'Correspondent',                                 org: 'Arise TV' },
  { name: 'Lawrence Anukam',        title: 'Former Director General',                       org: 'NESREA' },
  { name: 'Lehle Balde',            title: 'Award Winning Media Entrepreneur',              org: '' },
  { name: 'Mansur Matazu',          title: 'Former Director General',                       org: 'NiMet' },
  { name: 'Michel Deelen',          title: 'Consul General',                                org: 'Kingdom of the Netherlands' },
  { name: 'Mimi Onalaja',           title: 'Actor, TV Presenter & Compère',                 org: '' },
  { name: 'Mofifioluwa Olawunmi',   title: 'Entrepreneur Selection & Growth',               org: 'Endeavour' },
  { name: 'Mojirayo Folarin-Lawal', title: 'Head, Funding & Partnerships',                  org: 'Lagos State Employment Trust Fund' },
  { name: 'Morin Akeredolu-Ale',    title: 'CEO / Lead Sustainability Consultant',          org: 'Enconverge Green Ltd' },
  { name: 'Mudrakat Alabi-Macfoy',  title: 'Head of Sustainability & ESG',                  org: 'LAWMA' },
  { name: 'Oladimeji Oresanya',     title: 'Commissioner for Environment',                  org: 'Ogun State' },
  { name: 'Olatunbosun Alake',      title: 'Honourable Commissioner',                       org: 'Innovation, Science & Technology, Lagos State' },
  { name: 'Olufolake Abdulrazaq',   title: 'First Lady',                                    org: 'Kwara State' },
  { name: 'Olugbeminiyi Idowu',     title: 'Responsibility Senior Manager',                 org: 'IHS Nigeria Limited' },
  { name: 'Olumbe Akinkugbe',       title: 'Executive Director, Digital Exploration',       org: 'Galaxy Backbone' },
  { name: 'Olumide Lala',           title: 'Co-Founder & Director',                         org: 'Climate Transition Ltd' },
  { name: 'Olumide Soyombo',        title: 'Co-Founder',                                    org: 'Voltron Capital' },
  { name: 'Omolara Adewunmi',       title: 'Partner',                                       org: 'ISEDA Consulting' },
  { name: 'Omowunmi Sanni',         title: 'Partner',                                       org: 'Duale, Ovia & Alex Adedipe' },
  { name: 'Oreoluwa Finnih',        title: 'Special Advisor on SDGs',                       org: 'Lagos State Government' },
  { name: 'Osioke Ojior',           title: 'Principal Security Architect',                  org: 'Covenda AI' },
  { name: 'Oswald Guobadia',        title: 'Managing Partner',                              org: 'DigitA' },
  { name: 'Onyeka Akumah',          title: 'Founder & CEO',                                 org: 'Farmcrowdy' },
  { name: 'Safiya Sule',            title: 'Managing Consultant',                           org: 'Capgemini Invent' },
  { name: 'Segun Adebayo',          title: 'Executive Secretary',                           org: 'NALDA' },
  { name: 'Solape Hammond',         title: 'Co-Founder & CEO',                              org: 'Impact Hub Lagos' },
  { name: 'Teju Abisoye',           title: 'Vice President (Africa Region)',                org: 'United Way' },
  { name: 'Temitayo Ade-Peters',    title: 'Community Engagement',                          org: 'City of Toronto' },
  { name: 'Temitope Arasi',         title: 'Head, Regulatory Reporting & Tax',              org: 'Unity Bank Plc' },
  { name: 'Titilope Oguntuga',      title: 'Director, Sustainability',                      org: 'IHS Nigeria Limited' },
  { name: 'Tola Adesanmi',          title: 'Managing Partner',                              org: 'Harbone Capital' },
  { name: 'Tolulope Falola',        title: 'Renewable Energy Expert',                       org: 'Pakam Technology' },
  { name: 'Tosin Faniro Dada',      title: 'Partner',                                       org: 'Breega' },
  { name: 'Tunde Salako',           title: 'Co-Founder',                                    org: 'Hadiel Health' },
  { name: 'Tunji Bello',            title: 'Chief Executive Officer',                       org: 'FCCPC' },
  { name: 'Uka Eje',                title: 'CEO',                                           org: 'Thrive Agric' },
  { name: 'Wunmi Ogunde',           title: 'Co-Founder',                                    org: 'Pakam Technology' },
  { name: 'Yewande Sadiku',         title: 'Former Executive Secretary',                    org: 'Nigerian Investment Promotion Commission' },
  { name: 'Yosola Onanuga',         title: 'Head of Corporate Responsibilities',            org: 'TGI Group' },
  { name: 'Zahra Abdulkareem',      title: 'Founder & Community Lead',                      org: 'The Umm Fariha Network' },
  { name: 'Zara Odu',               title: 'Founder',                                       org: 'Designers Consociate' }
];

/* ------------------------------------------
 GET INITIALS
------------------------------------------ */
function spGetInitials(name) {
var parts = name.trim().split(/\s+/);
if (parts.length === 1) return parts[0][0].toUpperCase();
return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ------------------------------------------
 RENDER CARDS
------------------------------------------ */
function spRenderCards(list) {
var grid      = document.getElementById('speakerGrid');
var countEl   = document.getElementById('speakerCount');
var noResults = document.getElementById('noResults');
if (!grid) return;

grid.innerHTML = '';

if (list.length === 0) {
  if (noResults) noResults.removeAttribute('hidden');
  if (countEl) countEl.innerHTML = 'No results found';
  return;
}

if (noResults) noResults.setAttribute('hidden', '');
if (countEl) countEl.innerHTML = 'Showing <strong>' + list.length + '</strong> speaker' + (list.length !== 1 ? 's' : '');

list.forEach(function(speaker, i) {
  var card = document.createElement('div');
  card.className = 'sp-card';
  var colorClass = 'sp-av-' + (i % 6);
  var avatarHtml = speaker.photo
    ? '<div class="sp-avatar sp-avatar--photo"><img src="' + speaker.photo + '" alt="' + speaker.name + '" loading="lazy"></div>'
    : '<div class="sp-avatar ' + colorClass + '">' + spGetInitials(speaker.name) + '</div>';
  card.innerHTML =
    avatarHtml +
    '<div class="sp-card-info">' +
      '<div class="sp-card-name">' + speaker.name + '</div>' +
      (speaker.title ? '<div class="sp-card-title">' + speaker.title + '</div>' : '') +
      (speaker.org   ? '<div class="sp-card-org">'   + speaker.org   + '</div>' : '') +
    '</div>';
  grid.appendChild(card);
});

/* Stagger in with IntersectionObserver */
if ('IntersectionObserver' in window) {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  grid.querySelectorAll('.sp-card').forEach(function(card, i) {
    card.style.transitionDelay = Math.min(i * 20, 400) + 'ms';
    obs.observe(card);
  });
} else {
  grid.querySelectorAll('.sp-card').forEach(function(c){ c.classList.add('visible'); });
}
}

/* ------------------------------------------
 INIT — runs as soon as DOM is ready
------------------------------------------ */
function spInit() {
spRenderCards(SPEAKERS);

/* Search */
var searchInput = document.getElementById('speakerSearch');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    var q = searchInput.value.toLowerCase().trim();
    if (!q) { spRenderCards(SPEAKERS); return; }
    var filtered = SPEAKERS.filter(function(s) {
      return (
        s.name.toLowerCase().indexOf(q) > -1 ||
        s.title.toLowerCase().indexOf(q) > -1 ||
        s.org.toLowerCase().indexOf(q) > -1
      );
    });
    spRenderCards(filtered);
  });
}

/* Subscribe */
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

/* Countdowns */
var strips = [
  { timer:'heroTimer',   status:'heroStatus',   days:'h-days', hours:'h-hours', mins:'h-mins', secs:'h-secs', wrap:'heroStrip' },
  { timer:'footerTimer', status:'footerStatus', days:'f-days', hours:'f-hours', mins:'f-mins', secs:'f-secs', wrap:'footerStrip' }
];

function spUpdateCountdowns() {
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
      var dEl = document.getElementById(s.days);   if (dEl) dEl.textContent = d;
      var hEl = document.getElementById(s.hours);  if (hEl) hEl.textContent = h;
      var mEl = document.getElementById(s.mins);   if (mEl) mEl.textContent = m;
      var sEl = document.getElementById(s.secs);   if (sEl) sEl.textContent = sec;
    }
  });
}

spUpdateCountdowns();
setInterval(spUpdateCountdowns, 1000);
}

/* Run on DOMContentLoaded or immediately if already ready */
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', spInit);
} else {
spInit();
}