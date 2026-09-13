// ===== SHARED EVENTS DATA =====
// Used by both index.html and naptar.html.
// For single-day events, omit endDate or set it equal to startDate.
// Date format: "YYYY-MM-DD"

const EVENTS = [
  {
    id: "meseerdo-2026-09-20",
    title: "MeseErdő séta",
    startDate: "2026-09-20",
    time: "10:00-11:30",
    location: "Veszprém",
    description: "Mesék, játékok és felfedezés a természetben.",
    signupUrl: "https://forms.gle/bZgSPZpJRoxL9NMg7"
  },
  {
    id: "gyj-2026-09-23",
    title: "Gyerekjóga",
    startDate: "2026-09-23",
    time: "17:00-18:00",
    location: "Agóra, Veszprém",
    description: "Mozgás, játék, mese, nyugalom, önbizalom.\nJelentkezés a mesejovilag@gmail.com címen.",
    signupUrl: "mailto:mesejovilag@gmail.com"
  },
  {
    id: "meseerdo-2026-10-04",
    title: "MeseErdő séta",
    startDate: "2026-10-04",
    time: "10:00-11:30",
    location: "Veszprém",
    description: "Mesék, játékok és felfedezés a természetben.",
    signupUrl: "https://forms.gle/bZgSPZpJRoxL9NMg7"
  },
  {
    id: "meseerdo-2026-10-18",
    title: "MeseErdő séta",
    startDate: "2026-10-18",
    time: "10:00-11:30",
    location: "Veszprém",
    description: "Mesék, játékok és felfedezés a természetben.",
    signupUrl: "https://forms.gle/bZgSPZpJRoxL9NMg7"
  },
  {
    id: "meseerdo-2026-11-15",
    title: "MeseErdő séta",
    startDate: "2026-11-15",
    time: "10:00-11:30",
    location: "Veszprém",
    description: "Mesék, játékok és felfedezés a természetben.",
    signupUrl: "https://forms.gle/bZgSPZpJRoxL9NMg7"
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