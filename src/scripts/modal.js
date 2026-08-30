// Shared "activity" modal behaviour — open/close a .modal by id, plus
// closing it on an outside click or the Escape key. Used on any page with
// activity-card popups: Gyerekeknek, Felnőtteknek, and Rólam's
// "Szakmai háttér" modal.
//
// This is the same logic that used to live in both foglalkozasok.js and
// index_script.js.

export function openModal(modalId) {
  const modal = document.getElementById(modalId + '-modal');
  if (!modal) return;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId + '-modal');
  if (!modal) return;
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

document.addEventListener('click', (event) => {
  document.querySelectorAll('.modal').forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const open = document.querySelector('.modal.show');
    if (open) {
      open.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  }
});

if (typeof window !== 'undefined') {
  window.openModal = openModal;
  window.closeModal = closeModal;
}
