// ===== VIEW SWITCHING =====
function switchView(view) {
  ['day','month','list'].forEach(v => {
    document.getElementById('view' + v.charAt(0).toUpperCase() + v.slice(1)).classList.toggle('hidden', v !== view);
    document.getElementById('btn'  + v.charAt(0).toUpperCase() + v.slice(1)).classList.toggle('active', v === view);
  });
}

// ===== MODAL =====
function openEventModal(id) {
  const ev = enrichEvent(EVENTS.find(e => e.id === id));
  if (!ev) return;
  document.getElementById('evModalDate').textContent  = formatDateRange(ev);
  document.getElementById('evModalTitle').textContent = ev.title;
  document.getElementById('evModalDesc').textContent  = ev.description;
  document.getElementById('evModalDetails').innerHTML =
    `<strong>🕐 Időpont:</strong> ${ev.time}<br><strong>📍 Helyszín:</strong> ${ev.location}`;
  document.getElementById('evModalBtn').href = ev.signupUrl;
  document.getElementById('eventModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  document.getElementById('eventModal').classList.remove('show');
  document.body.style.overflow = 'auto';
}

// ===== DAY VIEW =====
function renderDayView() {
  const today = new Date();
  document.getElementById('dayViewDate').textContent =
    `${today.getFullYear()}. ${MONTHS_HU_GEN[today.getMonth()]} ${today.getDate()}., ${DAYS_HU_LONG[today.getDay()]}`;

  const events    = getEventsForDate(today);
  const container = document.getElementById('dayViewContent');

  if (events.length === 0) {
    container.innerHTML = `<div class="day-empty"><span class="day-empty-icon">🌿</span>Ma nincs esemény.</div>`;
    return;
  }

  container.innerHTML = events.map(ev => `
    <div class="event-card" onclick="openEventModal('${ev.id}')">
      <div class="event-card-title">${ev.title}</div>
      <div class="event-card-meta">🕐 ${ev.time} &nbsp;·&nbsp; 📍 ${ev.location}</div>
    </div>
  `).join('');
}

// ===== MONTH VIEW =====
const START_YEAR      = 2026;
const START_MONTH     = 4; // May (0-indexed)
const MAX_MONTHS_AHEAD = 11;
let currentMonthOffset = 0;

function renderCalendar() {
  const date  = new Date(START_YEAR, START_MONTH + currentMonthOffset, 1);
  const year  = date.getFullYear();
  const month = date.getMonth();

  document.getElementById('calMonthTitle').textContent = `${MONTHS_HU[month]} ${year}`;
  document.getElementById('calPrevBtn').disabled = currentMonthOffset <= 0;
  document.getElementById('calNextBtn').disabled = currentMonthOffset >= MAX_MONTHS_AHEAD;

  const grid        = document.getElementById('calGrid');
  grid.innerHTML    = '';

  const firstDay    = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today       = new Date();

  // Pre-enrich all events once for this render
  const enriched = getSortedEvents();

  // Helper to build a single day cell
  function buildCell(y, m, d, faded) {
    const dayEvents = enriched.filter(ev => eventCoversDate(ev, y, m, d));
    const isToday   = d === today.getDate() && m === today.getMonth() && y === today.getFullYear();
    const isStart   = dayEvents.some(ev => ev._start.getDate() === d && ev._start.getMonth() === m && ev._start.getFullYear() === y);

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

  // Previous month overflow days
  const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = startOffset - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    const prevMonth = month - 1;
    const prevYear  = prevMonth < 0 ? year - 1 : year;
    const pm        = (prevMonth + 12) % 12;
    grid.appendChild(buildCell(prevYear, pm, d, true));
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    grid.appendChild(buildCell(year, month, d, false));
  }

  // Next month overflow days — fill to complete the last row
  const totalCells  = startOffset + daysInMonth;
  const trailingDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let d = 1; d <= trailingDays; d++) {
    const nextMonth = month + 1;
    const nextYear  = nextMonth > 11 ? year + 1 : year;
    const nm        = nextMonth % 12;
    grid.appendChild(buildCell(nextYear, nm, d, true));
  }
}

function changeMonth(dir) {
  const newOffset = currentMonthOffset + dir;
  if (newOffset < 0 || newOffset > MAX_MONTHS_AHEAD) return;

  const title = document.getElementById('calMonthTitle');
  const grid  = document.getElementById('calGrid');
  title.style.opacity = '0';
  grid.style.opacity  = '0';

  setTimeout(() => {
    currentMonthOffset = newOffset;
    renderCalendar();
    title.style.opacity = '1';
    grid.style.opacity  = '1';
  }, 180);
}

// ===== LIST VIEW =====
function renderListView() {
  const container = document.getElementById('listViewContent');
  const today     = midnight(new Date());
  const upcoming  = getSortedEvents().filter(ev => ev._end >= today);

  if (upcoming.length === 0) {
    container.innerHTML = `<div class="list-empty">Jelenleg nincs közelgő esemény.</div>`;
    return;
  }

  container.innerHTML = upcoming.map(ev => {
    const s           = ev._start;
    const e           = ev._end;
    const isMultiDay  = s.toDateString() !== e.toDateString();
    const crossMonth  = isMultiDay && s.getMonth() !== e.getMonth();
    const startMon    = MONTHS_HU_GEN[s.getMonth()].slice(0, 3) + '.';
    const endMon      = MONTHS_HU_GEN[e.getMonth()].slice(0, 3) + '.';
    const dayLabel    = isMultiDay ? `${s.getDate()}–${e.getDate()}` : `${s.getDate()}`;
    const monthLabel  = crossMonth ? `${startMon}–${endMon}` : startMon;

    return `
      <div class="list-item" onclick="openEventModal('${ev.id}')">
        <div class="list-item-date-block">
          <div class="list-item-day">${dayLabel}</div>
          <div class="list-item-month">${monthLabel}</div>
        </div>
        <div class="list-item-body">
          <div class="list-item-title">${ev.title}</div>
          <div class="list-item-meta">🕐 ${ev.time} &nbsp;·&nbsp; 📍 ${ev.location}</div>
        </div>
        <span class="list-item-arrow">›</span>
      </div>
    `;
  }).join('');
}

// ===== NAV =====
function toggleMobileMenu() {
  document.getElementById('mobileNavMenu').classList.toggle('active');
}

document.addEventListener('click', function(e) {
  const menu   = document.getElementById('mobileNavMenu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('active');
  }
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header    = document.querySelector('.header');
  const navbar    = document.querySelector('.navbar-custom');
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    header.style.transform = 'translateY(-100%)';
    navbar.style.transform = 'translateY(-150px)';
  } else {
    header.style.transform = 'translateY(0)';
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop;
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  renderDayView();
  renderCalendar();
  renderListView();

  // Dropdown
  const dropdown       = document.querySelector('.dropdown');
  const dropdownBtn    = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dropdown.classList.toggle('active');
    dropdownContent.classList.toggle('show');
  });
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('show');
    }
  });
  dropdownContent.querySelectorAll('.nav-btn').forEach(item => {
    item.addEventListener('click', () => {
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('show');
    });
  });

  // Modal close
  document.getElementById('eventModal').addEventListener('click', function(e) {
    if (e.target === this) closeEventModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeEventModal();
  });

  // Swipe for month view
  const calWrapper = document.getElementById('calendarWrapper');
  let touchStartX  = 0;
  calWrapper.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  calWrapper.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) changeMonth(dx < 0 ? 1 : -1);
  }, { passive: true });
});