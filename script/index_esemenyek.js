// Renders the next 3 upcoming events strip on index.html
// Requires esemenyek.js to be loaded first

document.addEventListener('DOMContentLoaded', function() {
  const strip = document.getElementById('upcomingEventsStrip');
  if (!strip) return;

  const upcoming = getUpcomingEvents(3);

  if (upcoming.length === 0) {
    strip.style.display = 'none';
    return;
  }

  strip.innerHTML = `
    <h2 class="upcoming-strip-title">Közelgő események</h2>
    <div class="upcoming-strip-cards">
      ${upcoming.map(ev => {
        const s          = ev._start;
        const isMultiDay = s.toDateString() !== ev._end.toDateString();
        const monthShort = MONTHS_HU_GEN[s.getMonth()].slice(0, 3) + '.';
        const dayLabel   = isMultiDay ? `${s.getDate()}–${ev._end.getDate()}` : `${s.getDate()}`;

        return `
          <div class="upcoming-card" onclick="window.location.href='naptar.html'">
            <div class="upcoming-card-date">
              <span class="upcoming-day">${dayLabel}</span>
              <span class="upcoming-month">${monthShort}</span>
            </div>
            <div class="upcoming-card-body">
              <div class="upcoming-card-title">${ev.title}</div>
              <div class="upcoming-card-meta">🕐 ${ev.time}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <a href="naptar.html" class="upcoming-strip-more">Összes esemény →</a>
  `;
});