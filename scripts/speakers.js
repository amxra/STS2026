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
  { name: 'Dolapo Fasawe', title: 'Mandate Secretary for Health & Environment', org: 'FCT Administration', photo: 'assets/speakers/DolapoFasawe.jpg' },
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
  {name: 'Mudrakat Alabi-Macfoy',title: 'Supervisory Councilor',org: 'Department of Environment, Health Services and Waste Management, Lagos Island Local Government',photo: 'assets/speakers/MudrakatAlabi.jpg'},
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
  { name: 'Solape Hammod', title: 'Co-Founder & CEO', org: 'Impact Hub Lagos', photo: 'assets/speakers/SolapeHammod.jpg' },
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
   STS @ 10 (2026) SPEAKER DATA
   Add confirmed 2026 speakers here — same format as above.
   Photos go in assets/speakers/. Leave photo as '' to show initials.
   While this list is empty, the "coming soon" box shows instead.
   e.g. { name: 'Jane Doe', title: 'Chief Executive Officer', org: 'Example Ltd', photo: 'assets/speakers/JaneDoe.jpg' },
   PROTOCOL ORDER — optional 'rank' puts a speaker at the top (lower = earlier):
   1 Governor · 2 Deputy Governor · 3 Emir of Kano · 4 Federal Minister
   5 First Lady / Chair, Governors' Spouses Forum · 6 State Commissioner
   7 Presidential advisers · 8 Heads of federal agencies · 9 Lagos State officials
   Speakers without a rank follow, A–Z.
------------------------------------------ */
var SPEAKERS_2026 = [
  { name: 'Lehlé Baldé', title: 'Summit Host', org: '', photo: 'assets/speakers/2026-speakers/LehleBalde.jpg' },
  { name: 'H.E. Babajide Olusola Sanwo-Olu', title: 'Governor of Lagos State', org: 'Lagos State', photo: 'assets/speakers/2026-speakers/H.E.BabajideOlusolaSanwo-Olu.png', rank: 1 },
  { name: 'H.E. Dr. Kadri Obafemi Hamzat', title: 'Deputy Governor of Lagos State', org: 'Lagos State', photo: 'assets/speakers/2026-speakers/H.E.Dr.KadriObafemiHamzat.jpeg', rank: 2 },
  { name: 'H.H. Muhammadu Sanusi II', title: 'Emir of Kano', org: 'Kano Emirate', photo: 'assets/speakers/2026-speakers/H.H.MuhammaduSanusiII.jpg', rank: 3 },
  { name: 'Tenioye Majekodunmi', title: 'Director-General', org: 'National Council on Climate Change (NCCC)', photo: 'assets/speakers/2026-speakers/tenioyeMajekodunmi.jpeg', rank: 8 },
  { name: 'H.E. Amb. Prof. (Mrs.) Olufolake AbdulRazaq', title: 'First Lady of Kwara State; Chairperson', org: 'Nigeria Governors Spouses’ Forum', photo: 'assets/speakers/2026-speakers/H.E.Amb.Prof.(Mrs.)OlufolakeAbdulRazaq.jpg', rank: 5 },
  { name: 'Dr. Innocent Barikor', title: 'Director-General/CEO', org: 'NESREA', photo: 'assets/speakers/2026-speakers/Prof.InnocentBarikor.jpg', rank: 8 },
  { name: 'Dapo Otunla', title: 'Chief Corporate Services Officer', org: 'IHS Nigeria', photo: 'assets/speakers/2026-speakers/DapoOtunla.jpg' },
  { name: 'Olu Arowolo Verheijen', title: 'Special Adviser to the President on Energy', org: 'Presidency', photo: 'assets/speakers/2026-speakers/OluArowoloVerheijen.png', rank: 7 },
  { name: 'Rukaiya El-Rufai', title: 'Presidency / National Economic Council & Climate Change', org: 'Presidency', photo: 'assets/speakers/2026-speakers/RukaiyaElRufai.jpg', rank: 7 },
  { name: 'Akintunde Oyebode', title: 'Commissioner for Finance, Ekiti State; Chairman', org: 'Forum of State Commissioners of Finance', photo: 'assets/speakers/2026-speakers/AkintundeOyebode.jpg', rank: 6 },
  { name: 'Ademola Ogunbanjo', title: 'President & CEO', org: 'Oando Clean Energy', photo: 'assets/speakers/2026-speakers/AdemolaOgunbanjo.png' },
  { name: 'Rolake Akinkugbe-Filani', title: 'Managing Director & CEO', org: 'EnergyInc Advisors Limited', photo: 'assets/speakers/2026-speakers/RolakeAkinkugbeFilani.jpg' },
  { name: 'Dr. Eugene Itua', title: 'Facilitator', org: 'NESG Climate Special Task Force', photo: 'assets/speakers/2026-speakers/Dr.EugeneItuah.png' },
  { name: 'Uche Uzoebo', title: 'MD/CEO', org: 'Shared Agent Network Expansion Facilities (SANEF)', photo: 'assets/speakers/2026-speakers/UcheUzoebo.jpg' },
  { name: 'Dr. Sam Olugbenga Faleye', title: 'Chairman & CEO', org: 'Saglev Inc', photo: 'assets/speakers/2026-speakers/Dr.SamOlugbengaFaleye.jpg' },
  { name: 'Lolade Abiola', title: 'Head, Energy Transition Office', org: 'Sustainable Energy for All', photo: 'assets/speakers/2026-speakers/LoladeAbiola.png' },
  { name: 'Titilayo Oshodi', title: 'Special Adviser to the Lagos State Governor on Climate Change and Circular Economy', org: 'Lagos State', photo: 'assets/speakers/2026-speakers/TitilayoOshodi.jpg', rank: 9 },
  { name: 'Titilope Oguntuga', title: 'Director, Sustainability', org: 'IHS Nigeria', photo: 'assets/speakers/TitilopeOguntuga.jpg' },
  { name: 'Dr. Azizat ’Sola Gbadegesin', title: 'Chief Operating Officer', org: 'RenSource Energy', photo: 'assets/speakers/2026-speakers/AzizatGbadegesin.jpeg' },
  { name: 'Adam Boros', title: 'Vice President & Head of Impact', org: 'Africa Finance Corporation', photo: 'assets/speakers/2026-speakers/AdamBoros.jpg' },
  { name: 'Ejiro Gray', title: 'Executive Director, Governance & Sustainability', org: 'Sahara Group', photo: 'assets/speakers/2026-speakers/EjiroGray.jpg' },
  { name: 'Ahmad Damcida', title: 'CEO', org: 'Edryv', photo: 'assets/speakers/2026-speakers/AhmadDamcida.jpg' },
  { name: 'Kashifu Inuwa Abdullahi', title: 'Director-General/Chief Executive Officer', org: 'NITDA', photo: 'assets/speakers/2026-speakers/KashifuInuwaAbdullahi.jpg', rank: 8 },
  { name: 'Labake Ajiboye-Richard', title: 'Founder', org: 'ARI Initiatives', photo: 'assets/speakers/2026-speakers/LabakeAjiboye-Richard.jpg' },
  { name: 'Oluseun Onigbinde', title: 'Global Director', org: 'BudgIT', photo: 'assets/speakers/2026-speakers/SeunOnigbinde.jpeg' },
  { name: 'Ayobami Adisa', title: 'Founder', org: 'Graypatch Advisory Limited', photo: 'assets/speakers/2026-speakers/AyobamiAdisa.jpg' },
  { name: 'Aderonke Alex-Adedipe', title: 'Founding/Managing Partner', org: 'Pavestone Legal', photo: 'assets/speakers/2026-speakers/Aderonke-AlexAdedipe.png' },
  { name: 'Jumoke Akande', title: '', org: 'Project BRIDGE', photo: 'assets/speakers/2026-speakers/JumokeAkande.jpg' },
  { name: 'Ibraheem Babalola', title: 'CEO', org: 'ETAP', photo: 'assets/speakers/2026-speakers/IbrahimBabalola.png' },
  { name: 'Mudrakat Alabi-MacFoy', title: 'Head of Sustainability', org: 'Lagos Waste Management Authority (LAWMA)', photo: 'assets/speakers/2026-speakers/Hon.MudrakatAlabiMacFoy.jpg' },
  { name: 'Dr. Muyiwa Gbadegesin', title: 'Managing Director/Chief Executive Officer', org: 'Lagos Waste Management Authority (LAWMA)', photo: 'assets/speakers/2026-speakers/Dr.MuyiwaGbadegesin.jpg', rank: 9 },
  { name: 'Agharese Onaghise', title: 'Executive Director/Secretary', org: 'Food and Beverage Recycling Alliance', photo: 'assets/speakers/2026-speakers/AghareseL.Onaghise.png' },
  { name: 'Ibukun Faluyi', title: 'Executive Secretary', org: 'E-Waste Producer Responsibility Organisation of Nigeria', photo: 'assets/speakers/2026-speakers/IbukunFaluyi.png' },
  { name: 'Miranda Amachree', title: 'Executive Secretary', org: 'Alliance for Responsible Battery Recycling', photo: 'assets/speakers/2026-speakers/MirandaAmachree.jpeg' },
  { name: 'Amaka Onyemelukwe', title: 'Director, Public Affairs, Communications and Sustainability', org: 'Coca-Cola', photo: 'assets/speakers/2026-speakers/amakaOnyemelukwe.jpeg' },
  { name: 'Senator Abubakar Kyari', title: 'Honourable Minister of Agriculture and Food Security', org: 'Ministry of Agriculture', photo: 'assets/speakers/2026-speakers/SenatorAbubakarKyari.jpg', rank: 4 },
  { name: 'Ayodele Olajiga', title: 'CEO', org: 'AgroXchange', photo: 'assets/speakers/2026-speakers/AyodeleOlajiga.jpg' },
  { name: 'Michael Ojo', title: 'Country Director', org: 'Global Alliance for Improved Nutrition (GAIN)', photo: 'assets/speakers/2026-speakers/MichaelOjo.jpg' },
  { name: 'Modupe Ojo', title: 'Sustainability Manager', org: 'Sunbeth Global Concepts', photo: 'assets/speakers/2026-speakers/ModupeOjo.jpg' },
  { name: 'Babatunde Niran-Aluko', title: 'Managing Director', org: 'Mystrose Agro Commodities Limited', photo: 'assets/speakers/2026-speakers/BabatundeNiranAluko.jpg' },
  { name: 'Akinkunle Gbolu', title: 'Zonal Vice President, South West', org: 'National Onion Producers, Processors and Marketers Association of Nigeria (NOPPMAN)', photo: 'assets/speakers/2026-speakers/AkinkuleGbolu.jpg' },
  { name: 'Aliyu Maitasamu Isah', title: 'President', org: 'National Onion Producers, Processors and Marketers Association of Nigeria (NOPPMAN)', photo: 'assets/speakers/2026-speakers/AliyuMaitasamuIsah.png' },
  { name: 'Princess Kemdi Chika-Okafor', title: 'Founder', org: 'Century 21 Foundation', photo: 'assets/speakers/2026-speakers/PrincessKemdiChika-Okafor.jpg' },
  { name: 'Professor Emmanuel Ladipo', title: 'Chairman ', org: 'Policy Advisory Panel for the Resource and Environmental Policy Research Centre, Environment for Development Nigeria (REPRC-EfD Nigeria)', photo: 'assets/speakers/2026-speakers/ProfEmmanuelOladipo.png' },
  { name: 'Wunmi Ogunde', title: 'Circular Economy & Net-Zero Business Strategist', org: '', photo: 'assets/speakers/2026-speakers/WunmiOgunde.jpg' },
  { name: 'Tosin Faniro-Dada', title: 'Investor & Innovation Strategist', org: '', photo: 'assets/speakers/2026-speakers/TosinFaniroDada.jpg' },
  { name: 'Gbolahan Thomas', title: 'Entrepreneur', org: '', photo: 'assets/speakers/2026-speakers/GbolahanThomas.jpg' },
  { name: 'Amira Adediran', title: 'Strategy & Commercial Consultant', org: '', photo: 'assets/speakers/2026-speakers/AmiraAdediran.jpg' },
  { name: 'Deyi Dipeolu', title: 'Entrepreneur', org: '', photo: '' },
  { name: 'Seun Awojobi', title: 'Entrepreneur', org: '', photo: 'assets/speakers/2026-speakers/SeunAwojobi.jpeg' },
  { name: 'Ireayo Oladunjoye', title: 'Investor & Innovation Strategist', org: '', photo: 'assets/speakers/2026-speakers/ireayooladunjoye.png' },
  { name: 'Abba Abubakar Aliyu', title: 'Managing Director / CEO', org: 'Rural Electrification Agency', photo: 'assets/speakers/2026-speakers/AbbaAbubakar.jpeg', rank: 8 },
  { name: 'Ini-obong Antaih', title: 'Sustainability Manager', org: 'Lafarge Africa Plc', photo: 'assets/speakers/2026-speakers/Ini-obongAntaih.png' },
  { name: 'Kayode Olaniyan', title: 'Principal Consultant', org: 'Avant-Garde Limited', photo: 'assets/speakers/2026-speakers/KayodeOlaniyan.jpg' },
  { name: 'Mosadoluwa Otenaike', title: 'Deputy Team Lead', org: 'EPPlus Sustainability Network', photo: 'assets/speakers/2026-speakers/MosadoluwaOtenaike.jpg' },
  { name: 'Oluwole Adama', title: 'Executive Director, Midstream & Downstream Gas Infrastructure Fund', org: 'NMDPRA', photo: 'assets/speakers/2026-speakers/OluwoleAdama.jpg', rank: 8 },
  { name: 'Yosola Onanuga', title: 'Head of Corporate Responsibilities', org: 'TGI Group', photo: 'assets/speakers/2026-speakers/YosolaOnanuga.jpg' }
];

/* ------------------------------------------
 GET INITIALS
------------------------------------------ */
/* Strips honorifics (H.E., Dr., Prof., Senator…) so initials and A–Z order use the real name */
function spPlainName(name) {
return name.replace(/\((mrs|mr|ms)\.?\)/gi, ' ')
  .replace(/\b(h\.e\.|h\.h\.|hrh|dr\.?|prof\.?|professor|amb\.?|senator|sen\.|princess|chief|engr\.?|hon\.?|mrs\.?|mr\.?|ms\.?)(?=\s|$)/gi, ' ')
  .replace(/\s+/g, ' ').trim() || name;
}

function spGetInitials(name) {
var parts = spPlainName(name).replace(/\s+(ii|iii|iv|jr\.?|sr\.?)$/i, '').split(/\s+/);
if (parts.length === 1) return parts[0][0].toUpperCase();
return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/* ------------------------------------------
 RENDER CARDS
------------------------------------------ */
function spRenderCards(rawList, ids) {
ids = ids || { grid: 'speakerGrid', count: 'speakerCount', noResults: 'noResults' };
var grid      = document.getElementById(ids.grid);
var countEl   = ids.count ? document.getElementById(ids.count) : null;
var noResults = ids.noResults ? document.getElementById(ids.noResults) : null;
if (!grid) return;

var list = rawList.slice().sort(function (a, b) {
  var rank = function (sp) {
    var t = (sp.title || '').toLowerCase();
    var o = (sp.org || '').toLowerCase();
    var to = t + ' ' + o;
    var isLagosGov = to.indexOf('governor') > -1 && to.indexOf('lagos') > -1 && to.indexOf('adviser') === -1;
    if (isLagosGov && to.indexOf('deputy') === -1) return 0;
    if (isLagosGov) return 0.5; /* Deputy Governor straight after the Governor */
    if (t.indexOf('commissioner') > -1) return 1;
    if (t.indexOf('minister') > -1) return 2;
    if (t.indexOf('convener') > -1) return 3;
    return 4;
  };
  /* A speaker with a 'rank' number is placed by that number first (protocol order);
     everyone else follows, using the usual rule above, then A–Z */
  var ra = (typeof a.rank === 'number') ? a.rank : 100 + rank(a);
  var rb = (typeof b.rank === 'number') ? b.rank : 100 + rank(b);
  if (ra !== rb) return ra - rb;
  return spPlainName(a.name).localeCompare(spPlainName(b.name));
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
  var initialsHtml = '<div class="sp-avatar ' + colorClass + '"' + (speaker.photo ? ' style="display:none"' : '') + '>' + spGetInitials(speaker.name) + '</div>';
  /* If the photo is missing or fails to load, swap in the coloured initials (same as edition pages) */
  var avatarHtml = speaker.photo
    ? '<div class="sp-avatar sp-avatar--photo"><img src="' + speaker.photo + '" alt="' + speaker.name + '" loading="lazy" ' +
      'onerror="this.parentNode.style.display=\'none\';this.parentNode.nextElementSibling.style.display=\'flex\'"></div>' + initialsHtml
    : initialsHtml;
  /* review: true = not yet on the confirmed list — shown in red text */
  var red = speaker.review ? ' style="color:#dc2626"' : '';
  card.innerHTML =
    avatarHtml +
    '<div class="sp-card-info">' +
      '<div class="sp-card-name"' + red + '>' + speaker.name + '</div>' +
      (speaker.title ? '<div class="sp-card-title"' + red + '>' + speaker.title + '</div>' : '') +
      (speaker.org   ? '<div class="sp-card-org"'   + red + '>' + speaker.org   + '</div>' : '') +
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

/* 2026 speakers — same cards as past speakers */
if (SPEAKERS_2026.length) {
  var grid2026 = document.getElementById('speakerGrid2026');
  var cs2026   = document.getElementById('sp2026ComingSoon');
  var sub2026  = document.getElementById('sp2026Sub');
  if (grid2026) grid2026.removeAttribute('hidden');
  if (cs2026)   cs2026.style.display = 'none';
  if (sub2026)  sub2026.textContent = 'Meet the voices taking the stage at the 10th edition of the Sustainability Table Discourse Series.';
  spRenderCards(SPEAKERS_2026, { grid: 'speakerGrid2026' });
}

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