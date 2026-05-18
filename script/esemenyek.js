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

    A hétfői és pénteki programok benti helyszínen zajlanak, de akkor is sokat vagyunk a szabadban. A keddi, szerdai és csütörtöki napok főként szabadtéri programok. Eső esetén beltéri, hasonló hangulatú programelemekkel készülünk.

    Felszerelés:
    réteges, időjárásnak megfelelő ruha, kirándulásra alkalmas zárt cipő, esőkabát, sapka vagy kalap, naptej, kullancs elleni védelem.`,
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

    A hétfői és pénteki programok benti helyszínen zajlanak, de akkor is sokat vagyunk a szabadban. A keddi, szerdai és csütörtöki napok főként szabadtéri programok. Eső esetén beltéri, hasonló hangulatú programelemekkel készülünk.

    Felszerelés:
    réteges, időjárásnak megfelelő ruha, kirándulásra alkalmas zárt cipő, esőkabát, sapka vagy kalap, naptej, kullancs elleni védelem.`,
    signupUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdsEo1jLYE7aH_8ikJI9h5f-7F5K2-kDgDBd2xQnkbprORqWw/viewform"
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