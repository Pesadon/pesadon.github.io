// ===== SHARED EVENTS DATA =====
// Used by both index.html and naptar.html.
// For single-day events, omit endDate or set it equal to startDate.
// Date format: "YYYY-MM-DD"

const EVENTS = [
  /*{
    id: "mesejo-2026-05-09",
    title: "Mesejó foglalkozás",
    startDate: "2026-05-09",
    time: "10:00",
    location: "Tótágas Mozgás- és Fejlesztő Stúdió, Balatonfüred",
    description: "A Mesejó világban a történetek kapukat nyitnak – nemcsak a képzelet világába, hanem a gyerekek belső világához is. Élőszavas mesemondással, alkotással, mozgással és játékkal dolgozzuk fel az élményt.",
    signupUrl: "#"
  },*/
  {
    id: "meseerdo-2026-06-06",
    title: "MeseErdő séta",
    startDate: "2026-06-06",
    time: "10:00-11:30",
    location: "Balatonfüred",
    description: `Mesés természetélmények gyerekeknek és családoknak

    A MeseErdő sétákon az erdő nem csupán helyszín — hanem mesei tér, ahol játék, természetkapcsolódás és felfedezés találkozik.
    
    Sétáink során lelassulunk egy kicsit, figyelünk az erdő apró titkaira, közben pedig mesék, érzékszervi játékok, mozgásos feladatok és természetközeli élmények segítségével kapcsolódunk önmagunkhoz és egymáshoz is.
    
    A gyerekeket minden alkalommal egy mesés történet vagy küldetés hívja útra:
    🍃 nyomokat keresünk,
    🌿 növényeket figyelünk meg,
    🪶 érzékszerveinkkel tapasztaljuk meg az erdőt,
    ✨ játszunk, mozgunk, alkotunk,
    💛 és közben felfedezzük, milyen jó a természet részeként jelen lenni.
    
    A MeseErdő séták nem teljesítménytúrák.
    Nem az számít, milyen gyorsan haladunk, hanem az, hogy észrevegyük az apró csodákat:
    egy levél mintázatát,
    az erdő hangjait,
    egy illatot,
    egy történetet,
    egy közös pillanatot.
    
    A programot különösen ajánljuk:
    🌈 kíváncsi,
    🌈 természetkedvelő,
    🌈 érzékenyebb,
    🌈 mozgékony,
    🌈 fantáziadús gyerekeknek.
    
    A séták kis létszámúak és élményközpontúak, így biztonságosabb, figyelmesebb légkör tud kialakulni.
    
    A MeseErdő séták 5 éves kortól ajánlottak. 
    
    A foglalkozásokat Perczel-Szabó Katalin meseterapeuta, pedagógus és MeseErdő séta-vezető tartja.
    
    Mese. Természet. Játék. Kapcsolódás.`,
    signupUrl: "https://forms.gle/qEQSgtRFUFHHA9Yy5"
  },
  {
    id: "meseerdo-2026-06-13",
    title: "MeseErdő séta",
    startDate: "2026-06-13",
    time: "10:00-11:30",
    location: "Balatonfüred",
    description: `Mesés természetélmények gyerekeknek és családoknak

    A MeseErdő sétákon az erdő nem csupán helyszín — hanem mesei tér, ahol játék, természetkapcsolódás és felfedezés találkozik.
    
    Sétáink során lelassulunk egy kicsit, figyelünk az erdő apró titkaira, közben pedig mesék, érzékszervi játékok, mozgásos feladatok és természetközeli élmények segítségével kapcsolódunk önmagunkhoz és egymáshoz is.
    
    A gyerekeket minden alkalommal egy mesés történet vagy küldetés hívja útra:
    🍃 nyomokat keresünk,
    🌿 növényeket figyelünk meg,
    🪶 érzékszerveinkkel tapasztaljuk meg az erdőt,
    ✨ játszunk, mozgunk, alkotunk,
    💛 és közben felfedezzük, milyen jó a természet részeként jelen lenni.
    
    A MeseErdő séták nem teljesítménytúrák.
    Nem az számít, milyen gyorsan haladunk, hanem az, hogy észrevegyük az apró csodákat:
    egy levél mintázatát,
    az erdő hangjait,
    egy illatot,
    egy történetet,
    egy közös pillanatot.
    
    A programot különösen ajánljuk:
    🌈 kíváncsi,
    🌈 természetkedvelő,
    🌈 érzékenyebb,
    🌈 mozgékony,
    🌈 fantáziadús gyerekeknek.
    
    A séták kis létszámúak és élményközpontúak, így biztonságosabb, figyelmesebb légkör tud kialakulni.
    
    A MeseErdő séták 5 éves kortól ajánlottak. 
    
    A foglalkozásokat Perczel-Szabó Katalin meseterapeuta, pedagógus és MeseErdő séta-vezető tartja.
    
    Mese. Természet. Játék. Kapcsolódás.`,
    signupUrl: "https://forms.gle/qEQSgtRFUFHHA9Yy5"
  },
  {
    id: "meseerdo-2026-06-27",
    title: "MeseErdő séta",
    startDate: "2026-06-27",
    time: "10:00-11:30",
    location: "Veszprém",
    description: `Mesés természetélmények gyerekeknek és családoknak

    A MeseErdő sétákon az erdő nem csupán helyszín — hanem mesei tér, ahol játék, természetkapcsolódás és felfedezés találkozik.
    
    Sétáink során lelassulunk egy kicsit, figyelünk az erdő apró titkaira, közben pedig mesék, érzékszervi játékok, mozgásos feladatok és természetközeli élmények segítségével kapcsolódunk önmagunkhoz és egymáshoz is.
    
    A gyerekeket minden alkalommal egy mesés történet vagy küldetés hívja útra:
    🍃 nyomokat keresünk,
    🌿 növényeket figyelünk meg,
    🪶 érzékszerveinkkel tapasztaljuk meg az erdőt,
    ✨ játszunk, mozgunk, alkotunk,
    💛 és közben felfedezzük, milyen jó a természet részeként jelen lenni.
    
    A MeseErdő séták nem teljesítménytúrák.
    Nem az számít, milyen gyorsan haladunk, hanem az, hogy észrevegyük az apró csodákat:
    egy levél mintázatát,
    az erdő hangjait,
    egy illatot,
    egy történetet,
    egy közös pillanatot.
    
    A programot különösen ajánljuk:
    🌈 kíváncsi,
    🌈 természetkedvelő,
    🌈 érzékenyebb,
    🌈 mozgékony,
    🌈 fantáziadús gyerekeknek.
    
    A séták kis létszámúak és élményközpontúak, így biztonságosabb, figyelmesebb légkör tud kialakulni.
    
    A MeseErdő séták 5 éves kortól ajánlottak. 
    
    A foglalkozásokat Perczel-Szabó Katalin meseterapeuta, pedagógus és MeseErdő séta-vezető tartja.
    
    Mese. Természet. Játék. Kapcsolódás.`,
    signupUrl: "https://forms.gle/qEQSgtRFUFHHA9Yy5"
  },
  {
    id: "tabor-2026-06-29-03",
    title: "Mesejó nyár - Az erdő titkainak őrzői ",
    startDate: "2026-06-29",
    endDate:   "2026-07-03",
    time: "8:00-12:00",
    location: "Balatonfüred",
    description: `Nem tábor – hanem mesés délelőttök.

    Egy hét, ahol a gyerekek az erdőn keresztül önmagukhoz kapcsolódhatnak.

    A Mesejó nyári délelőttökön a gyerekeket nem siettetjük egyik programból a másikba. Inkább egy lassabb, figyelmesebb, élményalapú térbe hívjuk őket, ahol mese, természet, mozgás, alkotás és kapcsolódás fonódik össze.

    Minden nap más kapu ugyanabba a mesevilágba:
    🌿 hétfőn elindul a kaland egy interaktív magyar népmese segítségével,
    🧘 kedden gyerekjógával és mozgásos próbákkal kapcsolódunk az érzelmeinkhez erdei környezetben
    🌲 szerdán MeseErdő sétára indulunk növénymegfigyeléssel és gyógynövényes állomásokkal,
    💛 csütörtökön önismereti játékokon keresztül fedezzük fel „belső erdőnket”,
    🍄 pénteken pedig az erdő kincseit alkotjuk meg kreatív formában.

    A programokra egyes napokra és teljes hétre is lehet jelentkezni.

    A hét során a gyerekek saját MeseErdő-térképet készítenek, Mesejó-jelvényt kapnak, közben pedig megtapasztalhatják:
    ✨ helyem van,
    ✨ kapcsolódhatok a természethez,
    ✨ bátor vagyok,
    ✨ jó együtt lenni másokkal.

    A programot különösen ajánljuk:
    🍃 mozgékony,
    🍃 kíváncsi,
    🍃 álmodozó,
    🍃 természetkedvelő gyerekeknek.

    A délelőttök kis létszámúak (maximum 15 fősek), így valódi figyelem és kapcsolódás tud kialakulni.

    📍 Korosztály: 6–10 év
    🕗 Időpont: 8:00–12:00
    🍎 Gyümölcsöt és könnyű nasit biztosítunk.

    A hétfői és pénteki programok benti helyszínen zajlanak, de akkor is sokat vagyunk a szabadban. A keddi, szerdai és csütörtöki napok főként szabadtéri programok. Eső esetén beltéri, hasonló hangulatú programelemekkel készülünk.`,
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "interaktiv-2026-06-29",
    title: "Mesejó nyár - Interaktív mesefoglalkozás",
    startDate: "2026-06-29",
    time: "8:00-12:00",
    location: "Balatonfüred",
    description: "Elindul a Mesejó nyár kaland egy interaktív magyar népmese segítségével",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "gyj-2026-06-30",
    title: "Mesejó nyár - Gyerekjóga és érzelmek birodalma",
    startDate: "2026-06-30",
    time: "8:00-12:00",
    location: "Balatonfüred",
    description: "Gyerekjógával és mozgásos próbákkal kapcsolódunk az érzelmeinkhez erdei környezetben",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "meseerdo-2026-07-01",
    title: "Mesejó nyár - MeseErdő séta és gyógynövényes állomások",
    startDate: "2026-07-01",
    time: "8:00-12:00",
    location: "Balatonfüred",
    description: "MeseErdő sétára indulunk növénymegfigyeléssel és gyógynövényes állomásokkal",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "onbizalom-2026-07-02",
    title: "Mesejó nyár - Önbizalom nap - saját belső erdőm - önismereti játékok",
    startDate: "2026-07-02",
    time: "8:00-12:00",
    location: "Balatonfüred",
    description: "Önismereti játékokon keresztül fedezzük fel „belső erdőnket”",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "kreativ-2026-07-03",
    title: "Mesejó nyár - Kreatív alkotónap",
    startDate: "2026-07-03",
    time: "8:00-12:00",
    location: "Balatonfüred",
    description: "Önismereti játékokon keresztül fedezzük fel „belső erdőnket”",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "tabor-2026-07-06-10",
    title: "Mesejó nyár - Az erdő titkainak őrzői ",
    startDate: "2026-07-06",
    endDate:   "2026-07-10",
    time: "8:00-12:00",
    location: "Veszprém",
    description: `Nem tábor – hanem mesés délelőttök.

    Egy hét, ahol a gyerekek az erdőn keresztül önmagukhoz kapcsolódhatnak.

    A Mesejó nyári délelőttökön a gyerekeket nem siettetjük egyik programból a másikba. Inkább egy lassabb, figyelmesebb, élményalapú térbe hívjuk őket, ahol mese, természet, mozgás, alkotás és kapcsolódás fonódik össze.

    Minden nap más kapu ugyanabba a mesevilágba:
    🌿 hétfőn elindul a kaland egy interaktív magyar népmese segítségével,
    🧘 kedden gyerekjógával és mozgásos próbákkal kapcsolódunk az érzelmeinkhez erdei környezetben
    🌲 szerdán MeseErdő sétára indulunk növénymegfigyeléssel és gyógynövényes állomásokkal,
    💛 csütörtökön önismereti játékokon keresztül fedezzük fel „belső erdőnket”,
    🍄 pénteken pedig az erdő kincseit alkotjuk meg kreatív formában.

    A programokra egyes napokra és teljes hétre is lehet jelentkezni.

    A hét során a gyerekek saját MeseErdő-térképet készítenek, Mesejó-jelvényt kapnak, közben pedig megtapasztalhatják:
    ✨ helyem van,
    ✨ kapcsolódhatok a természethez,
    ✨ bátor vagyok,
    ✨ jó együtt lenni másokkal.

    A programot különösen ajánljuk:
    🍃 mozgékony,
    🍃 kíváncsi,
    🍃 álmodozó,
    🍃 természetkedvelő gyerekeknek.

    A délelőttök kis létszámúak (maximum 15 fősek), így valódi figyelem és kapcsolódás tud kialakulni.

    📍 Korosztály: 6–10 év
    🕗 Időpont: 8:00–12:00
    🍎 Gyümölcsöt és könnyű nasit biztosítunk.

    A hétfői és pénteki programok benti helyszínen zajlanak, de akkor is sokat vagyunk a szabadban. A keddi, szerdai és csütörtöki napok főként szabadtéri programok. Eső esetén beltéri, hasonló hangulatú programelemekkel készülünk.`,
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "interaktiv-2026-07-06",
    title: "Mesejó nyár - Interaktív mesefoglalkozás",
    startDate: "2026-07-06",
    time: "8:00-12:00",
    location: "Veszprém",
    description: "Elindul a Mesejó nyár kaland egy interaktív magyar népmese segítségével",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "gyj-2026-07-07",
    title: "Mesejó nyár - Gyerekjóga és érzelmek birodalma",
    startDate: "2026-07-07",
    time: "8:00-12:00",
    location: "Veszprém",
    description: "Gyerekjógával és mozgásos próbákkal kapcsolódunk az érzelmeinkhez erdei környezetben",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "meseerdo-2026-07-08",
    title: "Mesejó nyár - MeseErdő séta és gyógynövényes állomások",
    startDate: "2026-07-08",
    time: "8:00-12:00",
    location: "Veszprém",
    description: "MeseErdő sétára indulunk növénymegfigyeléssel és gyógynövényes állomásokkal",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "onbizalom-2026-07-09",
    title: "Mesejó nyár - Önbizalom nap - saját belső erdőm - önismereti játékok",
    startDate: "2026-07-09",
    time: "8:00-12:00",
    location: "Veszprém",
    description: "Önismereti játékokon keresztül fedezzük fel „belső erdőnket”",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "kreativ-2026-07-10",
    title: "Mesejó nyár - Kreatív alkotónap",
    startDate: "2026-07-10",
    time: "8:00-12:00",
    location: "Veszprém",
    description: "Önismereti játékokon keresztül fedezzük fel „belső erdőnket”",
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
  },
  {
    id: "alkotonap-2026-07-16-17",
    title: "Mesejó nyár - Mesejó alkotónapok",
    startDate: "2026-07-16",
    endDate:   "2026-07-17",
    time: "8:00-12:00",
    location: "Veszprém",
    description: `Mesés kreatív délelőttök | 6–10 éveseknek

    A Mesejó Alkotónapokon nem „szép egyforma munkák” készülnek — hanem saját ötletek, mesék és alkotások születnek.

    Ezeken a délelőttökön a gyerekek játékosan ismerkedhetnek különféle kreatív technikákkal:
    🎨 kézműveskedés,
    📖 papír- és pop-up alkotások,
    🪶 természetes anyagok használata,
    🧡 origami,
    ✨ mesei tárgyak és saját kis világok készítése vár rájuk.

    Az alkotásokat minden alkalommal mese, közös játék vagy egy különleges téma inspirálja, így a gyerekek nemcsak „kézműveskednek”, hanem belehelyezkedhetnek egy történetbe is.

    A hangsúly nem a tökéletességen van, hanem:
    🌿 az örömteli alkotáson,
    🌿 a fantázia kibontakoztatásán,
    🌿 az önkifejezésen,
    🌿 és azon, hogy a gyerekek megtapasztalják:
    „amit elképzelek, azt létre is hozhatom.”

    A Mesejó Alkotónapok nyugodtabb, kapcsolódóbb légkörű kreatív műhelyek, ahol jut idő:
    💛 figyelni,
    💛 próbálkozni,
    💛 elmélyülni,
    💛 és örülni a saját ötleteknek.

    Különösen ajánljuk:
    🌈 kreatív,
    🌈 álmodozó,
    🌈 kíváncsi,
    🌈 alkotni szerető gyerekeknek.

    A csoport kis létszámú (maximum 15 fő), így minden gyerek személyes figyelmet és segítséget kaphat.

    🍎 Gyümölcsöt és könnyű nasit biztosítunk.

    Alkotás. Fantázia. Mese. Öröm. Kapcsolódás.`,
    signupUrl: "https://forms.gle/TVMXdCsQ9UyLSBDA9"
  },
  {
    id: "alkotonap-2026-08-17-18",
    title: "Mesejó nyár - Mesejó alkotónapok",
    startDate: "2026-08-17",
    endDate:   "2026-08-18",
    time: "8:00-12:00",
    location: "Veszprém",
    description: `Mesés kreatív délelőttök | 6–10 éveseknek

    A Mesejó Alkotónapokon nem „szép egyforma munkák” készülnek — hanem saját ötletek, mesék és alkotások születnek.

    Ezeken a délelőttökön a gyerekek játékosan ismerkedhetnek különféle kreatív technikákkal:
    🎨 kézműveskedés,
    📖 papír- és pop-up alkotások,
    🪶 természetes anyagok használata,
    🧡 origami,
    ✨ mesei tárgyak és saját kis világok készítése vár rájuk.

    Az alkotásokat minden alkalommal mese, közös játék vagy egy különleges téma inspirálja, így a gyerekek nemcsak „kézműveskednek”, hanem belehelyezkedhetnek egy történetbe is.

    A hangsúly nem a tökéletességen van, hanem:
    🌿 az örömteli alkotáson,
    🌿 a fantázia kibontakoztatásán,
    🌿 az önkifejezésen,
    🌿 és azon, hogy a gyerekek megtapasztalják:
    „amit elképzelek, azt létre is hozhatom.”

    A Mesejó Alkotónapok nyugodtabb, kapcsolódóbb légkörű kreatív műhelyek, ahol jut idő:
    💛 figyelni,
    💛 próbálkozni,
    💛 elmélyülni,
    💛 és örülni a saját ötleteknek.

    Különösen ajánljuk:
    🌈 kreatív,
    🌈 álmodozó,
    🌈 kíváncsi,
    🌈 alkotni szerető gyerekeknek.

    A csoport kis létszámú (maximum 15 fő), így minden gyerek személyes figyelmet és segítséget kaphat.

    🍎 Gyümölcsöt és könnyű nasit biztosítunk.

    Alkotás. Fantázia. Mese. Öröm. Kapcsolódás.`,
    signupUrl: "https://forms.gle/TVMXdCsQ9UyLSBDA9"
  },
  {
    id: "meseerdo-2026-08-22",
    title: "MeseErdő séta",
    startDate: "2026-08-22",
    time: "10:00-11:30",
    location: "Veszprém",
    description: `Mesés természetélmények gyerekeknek és családoknak

    A MeseErdő sétákon az erdő nem csupán helyszín — hanem mesei tér, ahol játék, természetkapcsolódás és felfedezés találkozik.
    
    Sétáink során lelassulunk egy kicsit, figyelünk az erdő apró titkaira, közben pedig mesék, érzékszervi játékok, mozgásos feladatok és természetközeli élmények segítségével kapcsolódunk önmagunkhoz és egymáshoz is.
    
    A gyerekeket minden alkalommal egy mesés történet vagy küldetés hívja útra:
    🍃 nyomokat keresünk,
    🌿 növényeket figyelünk meg,
    🪶 érzékszerveinkkel tapasztaljuk meg az erdőt,
    ✨ játszunk, mozgunk, alkotunk,
    💛 és közben felfedezzük, milyen jó a természet részeként jelen lenni.
    
    A MeseErdő séták nem teljesítménytúrák.
    Nem az számít, milyen gyorsan haladunk, hanem az, hogy észrevegyük az apró csodákat:
    egy levél mintázatát,
    az erdő hangjait,
    egy illatot,
    egy történetet,
    egy közös pillanatot.
    
    A programot különösen ajánljuk:
    🌈 kíváncsi,
    🌈 természetkedvelő,
    🌈 érzékenyebb,
    🌈 mozgékony,
    🌈 fantáziadús gyerekeknek.
    
    A séták kis létszámúak és élményközpontúak, így biztonságosabb, figyelmesebb légkör tud kialakulni.
    
    A MeseErdő séták 5 éves kortól ajánlottak. 
    
    A foglalkozásokat Perczel-Szabó Katalin meseterapeuta, pedagógus és MeseErdő séta-vezető tartja.
    
    Mese. Természet. Játék. Kapcsolódás.`,
    signupUrl: "https://forms.gle/qEQSgtRFUFHHA9Yy5"
  }
];

// ── Helpers ────────────────────────────────────────────────

// Parse "YYYY-MM-DD" to a local Date at midnight
function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// Returns midnight Date for a Date object
function midnight(d) {
  const c = new Date(d);
  c.setHours(0, 0, 0, 0);
  return c;
}

// Enrich an event with _start and _end Date objects
function enrichEvent(ev) {
  const start = parseDate(ev.startDate);
  const end   = ev.endDate ? parseDate(ev.endDate) : new Date(start);
  return { ...ev, _start: start, _end: end };
}

// Format a date range label: "2026. júl. 6–10." or "2026. máj. 9."
function formatDateRange(ev) {
  const s = ev._start;
  const e = ev._end;
  const sm = MONTHS_HU_GEN[s.getMonth()].slice(0,3) + '.';
  if (s.toDateString() === e.toDateString()) {
    return `${s.getFullYear()}. ${sm} ${s.getDate()}.`;
  }
  if (s.getMonth() === e.getMonth()) {
    return `${s.getFullYear()}. ${sm} ${s.getDate()}–${e.getDate()}.`;
  }
  const em = MONTHS_HU_GEN[e.getMonth()].slice(0,3) + '.';
  return `${s.getFullYear()}. ${sm} ${s.getDate()} – ${em} ${e.getDate()}.`;
}

// Returns all events sorted by start date
function getSortedEvents() {
  return EVENTS.map(enrichEvent).sort((a, b) => a._start - b._start);
}

// Returns the next N events that haven't fully ended yet
function getUpcomingEvents(n) {
  const today = midnight(new Date());
  return getSortedEvents().filter(ev => ev._end >= today).slice(0, n);
}

// Returns events active on a given date
function getEventsForDate(dateObj) {
  const d = midnight(dateObj);
  return getSortedEvents().filter(ev => ev._start <= d && ev._end >= d);
}

// Returns true if an event spans the given date
function eventCoversDate(ev, year, month, day) {
  const d = new Date(year, month, day);
  return ev._start <= d && ev._end >= d;
}

// ── Locale constants ───────────────────────────────────────

const MONTHS_HU = [
  "Január","Február","Március","Április","Május","Június",
  "Július","Augusztus","Szeptember","Október","November","December"
];

const MONTHS_HU_GEN = [
  "január","február","március","április","május","június",
  "július","augusztus","szeptember","október","november","december"
];

const DAYS_HU_LONG = ["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"];