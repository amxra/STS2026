/* =============================================
   STS 2026 — speakers.js
   ============================================= */

/* ------------------------------------------
   SPEAKER DATA
------------------------------------------ */
var SPEAKERS = [
  { name: 'Adaobi Nnoruka', title: 'Investment Director', org: 'ARM-Harith Infrastructure Investment Ltd', photo: 'assets/speakers/AdaobiNnoruka.jpg' },
  { name: 'Adedoyin Jaiyesimi', title: 'Chief Communications Consultant', org: 'The Comms Avenue', photo: 'assets/speakers/AdedoyinJaiyesimi.jpg' },
  { name: 'Adenike Adeyemi', title: 'Executive Director', org: 'Fate Foundation', photo: 'assets/speakers/AdenineAdeyemi.jpg' },
  { name: 'Adrian Clews', title: 'Managing Director', org: 'Hinddey Limited', photo: 'assets/speakers/AdrianClews.jpg' },
  { name: 'Ahmed Sanda', title: 'Managing Consultant', org: 'Ashawa Consults', photo: 'assets/speakers/AhmedSanda.jpg' },
  { name: 'Aisha Raheem Bolarinwa', title: 'Chief Executive Officer', org: 'Farmz2u', photo: 'assets/speakers/AishaRaheemBolarinwa_.jpg' },
  { name: 'Aishat Raji', title: 'Principal & Co-Head Nigeria Advisory', org: 'CrossBoundary', photo: 'assets/speakers/AishatRaji.jpg' },
  { name: 'Ajibola Asolo', title: 'Partner', org: 'Aluko & Oyebode', photo: 'assets/speakers/AjibolaAsolo.jpg' },
  { name: 'Akinleye Olagbende', title: 'Head of Legal and Compliance', org: 'Azura Power West Africa Ltd', photo: 'assets/speakers/AkinleyeOlagbende.jpg' },
  { name: 'Akintunde Oyebode', title: 'Commissioner for Finance & Economic Dev.', org: 'Ekiti State', photo: 'assets/speakers/AkintundeOyebode.jpg' },
  { name: 'Alero Balogun', title: 'General Manager, Corporate Communications', org: 'Oando Energy Resources', photo: 'assets/speakers/AleroBalogun.jpg' },
  { name: 'Aliyu Jauro', title: 'Former Director General', org: 'NESREA', photo: 'assets/speakers/AliyuJauro.jpg' },
  { name: 'Ayaan Adam', title: 'Senior Director', org: 'African Finance Corporation', photo: 'assets/speakers/AyaanAdam.jpg' },
  { name: 'Ayokunle Ilesanmi', title: 'Managing Director', org: 'Berkshire Advisory Partners', photo: 'assets/speakers/AyokunleIlesanmi.jpg' },
  { name: 'Ayomide Adeagbo', title: 'Special Assistant to the President', org: 'Arts, Culture & Creative Economy', photo: 'assets/speakers/AyomideAdeagbo.jpg' },
  { name: 'Babatomiwa Adesida', title: 'Head, External & Community Relations', org: 'Sahara Group', photo: 'assets/speakers/BabatomiwaAdesida.jpg' },
  { name: 'Babajide Sanwo-Olu', title: 'Executive Governor', org: 'Lagos State', photo: 'assets/speakers/BabajideSanwoOlu.jpg' },
  { name: 'Babatunde Jeje', title: 'Senior Operations Geologist', org: 'TotalEnergies', photo: 'assets/speakers/BabatundeJeje.jpg' },
  { name: 'Beulah Adeoye', title: 'President', org: 'Beulah Adeoye Foundation', photo: 'assets/speakers/BeulahAdeoye.jpg' },
  { name: 'Bisola Evboren', title: 'Sr. Manager, PR & Communications', org: 'Moniepoint Group', photo: 'assets/speakers/BisolaEvboren.jpg' },
  { name: 'Bolanle Olaniyan', title: 'Professor, Crop Physiology', org: 'University of Ibadan', photo: 'assets/speakers/BolanleOlaniyan.jpg' },
  { name: 'Caleb Adebayo', title: 'Associate, Structured Finance', org: 'Linklaters LLP', photo: 'assets/speakers/CalebAdebayo.jpg' },
  { name: 'Carlos Garcete', title: 'Ambassador of Brazil to Nigeria', org: 'Embassy of Brazil', photo: 'assets/speakers/CarlosJoseAreiasMorenoGarcete.jpg' },
  { name: 'Caroline Rakus-Wojciechowsk', title: 'UN Sustainable Development Advocate', org: 'YSDC', photo: 'assets/speakers/CarolineRakus-Wojciechowsk.jpg' },
  { name: 'Cecilia Akintomide', title: 'Chairperson', org: 'The Sanitation & Hygiene Fund Africa', photo: 'assets/speakers/CecillaAkintomide.jpg' },
  { name: 'Celine Lafoucriere', title: 'Chief, UNICEF Field Office', org: 'UNICEF Lagos', photo: 'assets/speakers/CelineLafoucriere.jpg' },
  { name: 'Cima Sholatan', title: 'General Manager, Advisory Services', org: 'Harley Reed Nigeria', photo: 'assets/speakers/CimaSholatan.jpg' },
  { name: 'Damilola Agbaje', title: 'Investment Director', org: 'African Infrastructure Investment Managers', photo: 'assets/speakers/DamilolaAgbaje.jpg' },
  { name: 'Damilola Dania', title: 'Marketing and Brand Developer', org: 'UNILEVER Nigeria', photo: 'assets/speakers/DamilolaDania.jpg' },
  { name: 'Dapo Otunla', title: 'Chief Corporate Services Officer', org: 'IHS Nigeria Limited', photo: 'assets/speakers/DapoOtunla.jpg' },
  { name: 'David Kahale', title: 'CEO', org: 'Panta', photo: 'assets/speakers/DavidKahale.jpg' },
  { name: 'Desmond Majekodunmi', title: 'Chairman', org: 'LUFASI', photo: 'assets/speakers/DesmondMajekodunmi.jpg' },
  { name: 'Deyemi Okanlawon', title: 'Actor & Event Compere', org: '', photo: 'assets/speakers/deyemiOkanlawon.jpg' },
  { name: 'Dolapo Fasawe', title: 'Mandate Secretary for Health & Environment', org: 'FCT Administration', photo: 'assets/speakers/DollopFasawe.jpg' },
  { name: 'Doyin Ogunye', title: 'Founder', org: 'RESWAYE', photo: 'assets/speakers/DoyinOgunye.jpg' },
  { name: 'Ella Togun', title: 'Engagement Manager', org: 'McKinsey & Company', photo: 'assets/speakers/EllaTough.jpg' },
  { name: 'Etemore Glover', title: 'CEO', org: 'Impact Investors Foundation', photo: 'assets/speakers/EtemoreGlover.jpg' },
  { name: 'Faruq Abass', title: 'Managing Partner', org: 'Abdu-Salaam Abbas & Co', photo: 'assets/speakers/FaruqAbass.jpg' },
  { name: 'Femi Adeyemo', title: 'CEO', org: 'Arnergy Limited', photo: 'assets/speakers/FemiAdeyemo.jpg' },
  { name: 'Feyisayo Alayande', title: 'Executive Secretary', org: 'Lagos State Employment Trust Fund', photo: 'assets/speakers/FeyisayoAlayande.jpg' },
  { name: 'Frank Eggman', title: 'Consul General of Switzerland', org: 'Swiss Consulate', photo: 'assets/speakers/FrankEggman.jpg' },
  { name: 'Ghaith Al Hassan', title: 'Director, Engineering & Design', org: 'IHS Nigeria Limited', photo: 'assets/speakers/GhaithAlHassan.jpg' },
  { name: 'Gimba Mohammed', title: 'Director, Government & External Relations', org: 'IHS Towers', photo: 'assets/speakers/GimbaMohammed.jpg' },
  { name: 'Godfrey Adejumoh', title: 'Head of Corporate Relations', org: 'Diageo', photo: 'assets/speakers/GodfreyAdejumoh.jpg' },
  { name: 'Hameed Adediran', title: 'Country Director', org: 'Doctors Medical Aid Foundation', photo: 'assets/speakers/HameedAdediran.jpg' },
  { name: 'Ibukun Faluyi', title: 'Executive Secretary', org: 'EPRON', photo: 'assets/speakers/IbukunFaluyi.jpg' },
  { name: 'Ibukun Tunde Oni', title: 'CEO & Founder', org: 'Eight Medical', photo: 'assets/speakers/IbukunTundeOni.jpg' },
  { name: 'Idris Olorunnimbe', title: 'CEO', org: 'Temple Management Company', photo: 'assets/speakers/IdrisOlorunnimbe.jpg' },
  { name: 'Ifeanyi Ochonogor', title: 'CEO', org: 'Eterra Technologies', photo: 'assets/speakers/IfeanyiOchonogo.jpg' },
  { name: 'Ifeoma Adeoye', title: 'Managing Director', org: 'Business Nest Investments Ltd', photo: 'assets/speakers/IfeomaAdeoye.jpg' },
  { name: 'Inalogwu Akogwu', title: 'Chief Digital & Innovation Officer', org: 'T2mobile NG', photo: 'assets/speakers/InalogwuAkogwu.jpg' },
  { name: 'Innocent Barikor', title: 'Director General', org: 'NESREA', photo: 'assets/speakers/InnocentBariateBarikor.jpg' },
  { name: 'Jette Bjerrum', title: 'Consul General of Denmark', org: 'Danish Consulate, Lagos', photo: 'assets/speakers/JetteBjerrum.jpg' },
  { name: 'Joke Adu', title: 'Country Head, Corporate Affairs', org: 'Standard Chartered Nigeria', photo: 'assets/speakers/JokeAdu.jpg' },
  { name: 'Joshua Chibueze', title: 'Co-Founder', org: 'PiggyVest', photo: 'assets/speakers/JoshuaChibueze.jpg' },
  { name: 'Jubril Adeojo', title: 'CEO', org: 'SMEFunds Capital', photo: 'assets/speakers/JubrilAdeojo.jpg' },
  { name: 'Kabir Shagaya', title: 'Director of Strategy', org: 'Cavista Holdings', photo: 'assets/speakers/KabirShagaya.jpg' },
  { name: 'Kayode Adegbola', title: 'Founder / Director', org: 'Adegbola Art Projects', photo: 'assets/speakers/KayodeAdegbola_.jpg' },
  { name: 'Kayode Olaniyan', title: 'Principal Consultant', org: 'Avant-Garde Limited', photo: 'assets/speakers/KayodeOlaniyan.jpg' },
  { name: 'Kazeem Oladepo', title: 'SVP / Chief Operating Officer', org: 'IHS Nigeria Limited', photo: 'assets/speakers/KazeemOladepo.jpg' },
  { name: 'Kofo Adeleke', title: 'Development Consultant', org: '', photo: 'assets/speakers/KofoAdeleke.jpg' },
  { name: 'Labake Ajiboye Richard', title: 'Principal Consultant', org: 'AR Initiative', photo: 'assets/speakers/LabakeAjiboyeRichard.jpg' },
  { name: 'Laila Johnson Salami', title: 'Correspondent', org: 'Arise TV', photo: 'assets/speakers/LailaJohnsonSalami.jpg' },
  { name: 'Lawrence Anukam', title: 'Former Director General', org: 'NESREA', photo: 'assets/speakers/LawrenceAnukam.jpg' },
  { name: 'Lehle Balde', title: 'Award Winning Media Entrepreneur', org: '', photo: 'assets/speakers/LehleBalde.jpg' },
  { name: 'Mansur Matazu', title: 'Former Director General', org: 'NiMet', photo: 'assets/speakers/MansurBakoBatazu.jpg' },
  { name: 'Michel Deelen', title: 'Consul General', org: 'Kingdom of the Netherlands', photo: 'assets/speakers/MichelDeelen.jpg' },
  { name: 'Mimi Onalaja', title: 'Actor, TV Presenter & Compère', org: '', photo: 'assets/speakers/MimiOnalaja.jpg' },
  { name: 'Mofifoluwa Olawumi',   title: 'Entrepreneur Selection & Growth',  org: 'Endeavour', photo: 'assets/speakers/MofifoluwaOlawumi.jpg' },
  { name: 'Mojirayo Folarin-Lawal', title: 'Head, Funding & Partnerships', org: 'Lagos State Employment Trust Fund', photo: 'assets/speakers/MojirayoFolarinLawal.jpg' },
  { name: 'Morin Akeredolu-Ale', title: 'CEO / Lead Sustainability Consultant', org: 'Enconverge Green Ltd', photo: 'assets/speakers/MorinAkeredoluAle.jpg' },
  { name: 'Mudrakat Alabi-Macfoy', title: 'Head of Sustainability & ESG', org: 'LAWMA', photo: 'assets/speakers/MudrakatAlabi.jpg' },
  { name: 'Oladimeji Oresanya', title: 'Commissioner for Environment', org: 'Ogun State', photo: 'assets/speakers/OladimejiOresanya.jpg' },
  { name: 'Olatunbosun Alake', title: 'Honourable Commissioner', org: 'Innovation, Science & Technology, Lagos State', photo: 'assets/speakers/OlatunbosunAlake.jpg' },
  { name: 'Olufolake Abdulrazaq', title: 'First Lady', org: 'Kwara State', photo: 'assets/speakers/OlufolakeAbdulrazaq.jpg' },
  { name: 'Olugbeminiyi Idowu', title: 'Responsibility Senior Manager', org: 'IHS Nigeria Limited', photo: 'assets/speakers/OlugbeminiyiIdowu.jpg' },
  { name: 'Olumbe Akinkugbe', title: 'Executive Director, Digital Exploration', org: 'Galaxy Backbone', photo: 'assets/speakers/OlumbeAkinkugbe.jpg' },
  { name: 'Olumide Lala', title: 'Co-Founder & Director', org: 'Climate Transition Ltd', photo: 'assets/speakers/OlumideLala.jpg' },
  { name: 'Olumide Soyombo', title: 'Co-Founder', org: 'Voltron Capital', photo: 'assets/speakers/OlumideSoyomba.jpg' },
  { name: 'Omolara Adewumi', title: 'Partner', org: 'ISEDA Consulting', photo: 'assets/speakers/OmolaraAdewumi.jpg' },
  { name: 'Omowunmi Sanni', title: 'Partner', org: 'Duale, Ovia & Alex Adedipe', photo: 'assets/speakers/OmowunmiSanni.jpg' },
  { name: 'Oreoluwa Finnih', title: 'Special Advisor on SDGs', org: 'Lagos State Government', photo: 'assets/speakers/OreoluwaFinnih.jpg' },
  { name: 'Osioke Ojior', title: 'Principal Security Architect', org: 'Covenda AI', photo: 'assets/speakers/OsiokeOjior.jpg' },
  { name: 'Oswald Guobadia', title: 'Managing Partner', org: 'DigitA', photo: 'assets/speakers/OswaldOsaretinGuobadia.jpg' },
  { name: 'Onyeka Akumah', title: 'Founder & CEO', org: 'Farmcrowdy', photo: 'assets/speakers/OnyekaAkumah.jpg' },
  { name: 'Safiya Sule', title: 'Managing Consultant', org: 'Capgemini Invent', photo: 'assets/speakers/SafiyaSule.jpg' },
  { name: 'Segun Adebayo', title: 'Executive Secretary', org: 'NALDA', photo: 'assets/speakers/SegunAdebayo.jpg' },
  { name: 'Solape Hammond', title: 'Co-Founder & CEO', org: 'Impact Hub Lagos', photo: 'assets/speakers/SolapeHammod.jpg' },
  { name: 'Teju Abisoye', title: 'Vice President (Africa Region)', org: 'United Way', photo: 'assets/speakers/TejuAbisoye.jpg' },
  { name: 'Temitayo Ade-Peters', title: 'Community Engagement', org: 'City of Toronto', photo: 'assets/speakers/TemitayoAde-Peters.jpg' },
  { name: 'Temitope Arasi', title: 'Head, Regulatory Reporting & Tax', org: 'Unity Bank Plc', photo: 'assets/speakers/TemitopeArasi.jpg' },
  { name: 'Titilope Oguntuga', title: 'Director, Sustainability', org: 'IHS Nigeria Limited', photo: 'assets/speakers/TitilopeOguntuga.jpg' },
  { name: 'Tola Adesanmi', title: 'Managing Partner', org: 'Harbone Capital', photo: 'assets/speakers/TolaAdesanmi.jpg' },
  { name: 'Tolulope Falola', title: 'Renewable Energy Expert', org: 'Pakam Technology', photo: 'assets/speakers/TolulopeFalola.jpg' },
  { name: 'Tosin Faniro Dada', title: 'Partner', org: 'Breega', photo: 'assets/speakers/TosinFaniroDada.jpg' },
  { name: 'Tunde Salako', title: 'Co-Founder', org: 'Hadiel Health', photo: 'assets/speakers/TundeSalado.jpg' },
  { name: 'Tunji Bello', title: 'Chief Executive Officer', org: 'FCCPC', photo: 'assets/speakers/TunjiBello.jpg' },
  { name: 'Uka Eje', title: 'CEO', org: 'Thrive Agric', photo: 'assets/speakers/UkaEje.jpg' },
  { name: 'Wunmi Ogunde', title: 'Co-Founder', org: 'Pakam Technology', photo: 'assets/speakers/WunmiOgunde.jpg' },
  { name: 'Yewande Sadiku', title: 'Former Executive Secretary', org: 'Nigerian Investment Promotion Commission', photo: 'assets/speakers/YewandeSadiku.jpg' },
  { name: 'Yosola Onanuga', title: 'Head of Corporate Responsibilities', org: 'TGI Group', photo: 'assets/speakers/YosolaOnanuga.jpg' },
  { name: 'Zahra Abdulkareem', title: 'Founder & Community Lead', org: 'The Umm Fariha Network', photo: 'assets/speakers/ZahraAbdulkareem.jpg' },
  { name: 'Zara Odu', title: 'Founder', org: 'Designers Consociate', photo: 'assets/speakers/ZaraOdu.jpg' }
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
function spRenderCards(rawList) {
var grid      = document.getElementById('speakerGrid');
var countEl   = document.getElementById('speakerCount');
var noResults = document.getElementById('noResults');
if (!grid) return;

var list = rawList.slice().sort(function (a, b) {
  var rank = function (sp) {
    var t = (sp.title || '').toLowerCase();
    var o = (sp.org || '').toLowerCase();
    if (t.indexOf('governor') > -1 && o.indexOf('lagos') > -1) return 0;
    if (t.indexOf('commissioner') > -1) return 1;
    if (t.indexOf('minister') > -1) return 2;
    if (t.indexOf('convener') > -1) return 3;
    return 4;
  };
  var ra = rank(a), rb = rank(b);
  if (ra !== rb) return ra - rb;
  return a.name.localeCompare(b.name);
});

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