// Shared navigation behaviour: mobile menu, header/nav hide-on-scroll, and
// the "Foglalkozások" dropdown.
//
// This used to be copy-pasted (with small drift) into aktualis.js,
// erdeklodes.js, foglalkozasok.js, index_script.js and naptar.js. It's
// loaded once now, by the shared Layout, instead of once per page.

export function toggleMobileMenu() {
  document.getElementById('mobileNavMenu')?.classList.toggle('active');
}

// Close the mobile menu when tapping outside it
document.addEventListener('click', (event) => {
  const menu = document.getElementById('mobileNavMenu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});

// Hide the header + nav bar while scrolling down, bring them back on scroll up
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.navbar-custom');

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    if (header) header.style.transform = 'translateY(-100%)';
    if (navbar) navbar.style.transform = 'translateY(-150px)';
  } else {
    if (header) header.style.transform = 'translateY(0)';
    if (navbar) navbar.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop;
});

// "Foglalkozások" dropdown: toggle on click, close on outside click or on
// picking an item
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  if (!dropdown || !dropdownBtn || !dropdownContent) return;

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
    dropdownContent.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('show');
    }
  });

  dropdownContent.querySelectorAll('.nav-btn').forEach((item) => {
    item.addEventListener('click', () => {
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('show');
    });
  });
});

// The markup still calls toggleMobileMenu() from onclick="" attributes
// (kept as-is for step 1, see the chat explanation for why), so it needs to
// exist as a global as well as an export.
if (typeof window !== 'undefined') {
  window.toggleMobileMenu = toggleMobileMenu;
}
