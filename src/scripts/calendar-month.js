// Shared "month calendar" behaviour, used by both the Aktuális page (which
// only ever shows the month grid) and the Naptár page (which adds day/list
// views on top of this).
//
// -----------------------------------------------------------------------
// WHY THIS FILE EXISTS (a real bug this fixes):
// The old aktualis.html loaded the *entire* naptar.js file, even though it
// only has the HTML markup for the month view. naptar.js's startup code
// unconditionally ran renderDayView() first, which does
// `document.getElementById('dayViewDate').textContent = ...` — but
// aktualis.html has no #dayViewDate element, so that line threw an error.
// Because the following calls (renderCalendar(), renderListView(), the
// swipe listeners, ...) were all in the *same* function, that error stopped
// all of them from running too — meaning the month calendar on the Aktuális
// page most likely never actually rendered in production.
//
// Splitting the shared month-view logic into its own module means the
// Aktuális page only runs code that matches HTML it actually has.
// -----------------------------------------------------------------------

import { EVENTS, getSortedEvents, enrichEvent, eventCoversDate, formatDateRange, MONTHS_HU } from '../data/events.js';

export const START_YEAR = 2026;
export const START_MONTH = 4; // May (0-indexed)
export const MAX_MONTHS_AHEAD = 11;
export let currentMonthOffset = 0;

export function renderCalendar() {
  const date = new Date(START_YEAR, START_MONTH + currentMonthOffset, 1);
  const year = date.getFullYear();
  const month = date.getMonth();

  document.getElementById('calMonthTitle').textContent = `${MONTHS_HU[month]} ${year}`;
  document.getElementById('calPrevBtn').disabled = currentMonthOffset <= 0;
  document.getElementById('calNextBtn').disabled = currentMonthOffset >= MAX_MONTHS_AHEAD;

  const grid = document.getElementById('calGrid');
  grid.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const enriched = getSortedEvents();

  function buildCell(y, m, d, faded) {
    const dayEvents = enriched.filter((ev) => eventCoversDate(ev, y, m, d));
    const isToday = d === today.getDate() && m === today.getMonth() && y === today.getFullYear();
    const isStart = dayEvents.some(
      (ev) => ev._start.getDate() === d && ev._start.getMonth() === m && ev._start.getFullYear() === y
    );

    const cell = document.createElement('div');
    let classes = 'calendar-day';
    if (faded) classes += ' faded';
    if (dayEvents.length) classes += isStart ? ' has-event event-start' : ' has-event event-cont';
    if (isToday) classes += ' today';
    cell.className = classes;

    const num = document.createElement('span');
    num.className = 'day-number';
    num.textContent = d;
    cell.appendChild(num);

    if (dayEvents.length) {
      if (isStart) {
        const label = document.createElement('span');
        label.className = 'event-label';
        label.textContent = dayEvents[0].title;
        cell.appendChild(label);
      } else {
        const cont = document.createElement('span');
        cont.className = 'event-cont-bar';
        cell.appendChild(cont);
      }
      cell.addEventListener('click', () => openEventModal(dayEvents[0].id));
    }
    return cell;
  }

  const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = startOffset - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    const prevMonth = month - 1;
    const prevYear = prevMonth < 0 ? year - 1 : year;
    const pm = (prevMonth + 12) % 12;
    grid.appendChild(buildCell(prevYear, pm, d, true));
  }

  for (let d = 1; d <= daysInMonth; d++) {
    grid.appendChild(buildCell(year, month, d, false));
  }

  const totalCells = startOffset + daysInMonth;
  const trailingDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let d = 1; d <= trailingDays; d++) {
    const nextMonth = month + 1;
    const nextYear = nextMonth > 11 ? year + 1 : year;
    const nm = nextMonth % 12;
    grid.appendChild(buildCell(nextYear, nm, d, true));
  }
}

export function changeMonth(dir) {
  const newOffset = currentMonthOffset + dir;
  if (newOffset < 0 || newOffset > MAX_MONTHS_AHEAD) return;

  const title = document.getElementById('calMonthTitle');
  const grid = document.getElementById('calGrid');
  title.style.opacity = '0';
  grid.style.opacity = '0';

  setTimeout(() => {
    currentMonthOffset = newOffset;
    renderCalendar();
    title.style.opacity = '1';
    grid.style.opacity = '1';
  }, 180);
}

export function openEventModal(id) {
  const raw = EVENTS.find((e) => e.id === id);
  if (!raw) return;
  const ev = enrichEvent(raw);
  document.getElementById('evModalDate').textContent = formatDateRange(ev);
  document.getElementById('evModalTitle').textContent = ev.title;
  document.getElementById('evModalDesc').textContent = ev.description;
  document.getElementById('evModalDetails').innerHTML =
    `<strong>🕐 Időpont:</strong> ${ev.time}<br><strong>📍 Helyszín:</strong> ${ev.location}`;
  document.getElementById('evModalBtn').href = ev.signupUrl;
  document.getElementById('eventModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

export function closeEventModal() {
  document.getElementById('eventModal').classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Wires up the buttons, swipe gesture, and outside-click / Escape handling
// for the month view. Call this once per page after the DOM is ready.
export function initMonthCalendar() {
  renderCalendar();

  const eventModal = document.getElementById('eventModal');
  eventModal?.addEventListener('click', function (e) {
    if (e.target === this) closeEventModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeEventModal();
  });

  const calWrapper = document.getElementById('calendarWrapper');
  if (calWrapper) {
    let touchStartX = 0;
    calWrapper.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    calWrapper.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) changeMonth(dx < 0 ? 1 : -1);
    }, { passive: true });
  }
}

// The markup calls these from onclick="" attributes, so expose them as
// globals too.
if (typeof window !== 'undefined') {
  window.changeMonth = changeMonth;
  window.openEventModal = openEventModal;
  window.closeEventModal = closeEventModal;
}
