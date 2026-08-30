// Contact form validation + submission for the Kapcsolat page.
// Ported from erdeklodes.js, minus the nav/dropdown code that's now shared.

function clearErrors() {
  document.querySelectorAll('.error-message').forEach((el) => (el.textContent = ''));
  document.querySelectorAll('.form-control').forEach((el) => el.classList.remove('error'));
}

function showError(inputId, errorId, message) {
  document.getElementById(inputId).classList.add('error');
  document.getElementById(errorId).textContent = message;
}

function getSelectedActivities() {
  const checkboxes = document.querySelectorAll('input[name="activities"]:checked');
  return Array.from(checkboxes).map((cb) => cb.nextElementSibling.textContent.trim());
}

function validateForm(data) {
  let isValid = true;

  if (!data.name) {
    showError('name', 'nameError', 'A név megadása kötelező');
    isValid = false;
  } else if (data.name.length < 2) {
    showError('name', 'nameError', 'A név legalább 2 karakter hosszú legyen');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    showError('email', 'emailError', 'Az e-mail cím megadása kötelező');
    isValid = false;
  } else if (!emailRegex.test(data.email)) {
    showError('email', 'emailError', 'Érvénytelen e-mail cím');
    isValid = false;
  }

  if (data.phone) {
    const phoneRegex = /^(\+36|06)?[0-9\s\-]{8,}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      showError('phone', 'phoneError', 'Érvénytelen telefonszám formátum');
      isValid = false;
    }
  }

  return isValid;
}

async function sendEmail(form) {
  const formData = new FormData(form);
  try {
    const response = await fetch('https://formcarry.com/s/9CLuc27gM8C', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    if (response.ok) {
      const successEl = document.getElementById('successMessage');
      successEl.style.display = 'block';
      successEl.textContent = 'Üzeneted sikeresen elküldtük! Hamarosan felvesszük veled a kapcsolatot.';
      form.reset();
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        successEl.style.display = 'none';
      }, 5000);
    } else {
      alert('Hiba történt az üzenet küldésekor. Kérjük, próbáld újra!');
    }
  } catch (err) {
    alert('Hiba történt az üzenet küldésekor. Kérjük, próbáld újra!');
  }
}

const form = document.getElementById('contactForm');
form?.addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors();

  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    activities: getSelectedActivities(),
    message: document.getElementById('message').value.trim(),
  };

  if (!validateForm(data)) return;
  sendEmail(form);
});
