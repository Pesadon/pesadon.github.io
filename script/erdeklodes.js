function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileNavMenu');
        mobileMenu.classList.toggle('active');
      }

      // Close mobile menu when clicking outside
      document.addEventListener('click', function(event) {
        const mobileMenu = document.getElementById('mobileNavMenu');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
          mobileMenu.classList.remove('active');
        }
      });

      // Add scroll effect to header and navbar
      let lastScrollTop = 0;
      window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
        const navbar = document.querySelector('.navbar-custom');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.style.transform = 'translateY(-100%)';
          navbar.style.transform = 'translateY(-150px)';
        } else {
          header.style.transform = 'translateY(0)';
          navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
      });

      // Form handling
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Clear previous errors
          clearErrors();

          // Get form data
          const formData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            activities: getSelectedActivities(),
            message: document.getElementById("message").value.trim(),
          };

          // Validate form
          if (!validateForm(formData)) {
            return;
          }

          // Simulate email sending (replace with actual implementation)
          sendEmail(formData);
        });

      function clearErrors() {
        const errorElements = document.querySelectorAll(".error-message");
        errorElements.forEach((el) => (el.textContent = ""));

        const inputElements = document.querySelectorAll(".form-control");
        inputElements.forEach((el) => el.classList.remove("error"));
      }

      function validateForm(data) {
        let isValid = true;

        // Name validation
        if (!data.name) {
          showError("name", "nameError", "A név megadása kötelező");
          isValid = false;
        } else if (data.name.length < 2) {
          showError(
            "name",
            "nameError",
            "A név legalább 2 karakter hosszú legyen"
          );
          isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email) {
          showError("email", "emailError", "Az e-mail cím megadása kötelező");
          isValid = false;
        } else if (!emailRegex.test(data.email)) {
          showError("email", "emailError", "Érvénytelen e-mail cím");
          isValid = false;
        }

        // Phone validation (optional, but if provided, should be valid)
        if (data.phone) {
          const phoneRegex = /^(\+36|06)?[0-9\s\-]{8,}$/;
          if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
            showError(
              "phone",
              "phoneError",
              "Érvénytelen telefonszám formátum"
            );
            isValid = false;
          }
        }

        return isValid;
      }

      function showError(inputId, errorId, message) {
        document.getElementById(inputId).classList.add("error");
        document.getElementById(errorId).textContent = message;
      }

      function getSelectedActivities() {
        const checkboxes = document.querySelectorAll(
          'input[name="activities"]:checked'
        );
        return Array.from(checkboxes).map((cb) =>
          cb.nextElementSibling.textContent.trim()
        );
      }

      function sendEmail(data) {
        // This is a placeholder for email sending functionality
        // In a real implementation, you would:
        // 1. Send data to your backend server
        // 2. Use a service like EmailJS, or
        // 3. Use server-side email sending (PHP mail, Node.js with nodemailer, etc.)

        console.log("Email data to send:", data);

        // Show success message
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("contactForm").reset();

        // Scroll to success message
        document
          .getElementById("successMessage")
          .scrollIntoView({ behavior: "smooth", block: "center" });

        // Hide success message after 5 seconds
        setTimeout(() => {
          document.getElementById("successMessage").style.display = "none";
        }, 5000);
      }

      function formatEmailMessage(data) {
        return `
Új érdeklődés érkezett a weboldalról:

Név: ${data.name}
E-mail: ${data.email}
Telefon: ${data.phone || "Nem adta meg"}

Érdekes foglalkozások:
${
  data.activities.length > 0
    ? data.activities.join(", ")
    : "Nem választott ki foglalkozást"
}

Üzenet:
${data.message || "Nem írt üzenetet"}
      `;
      }

document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Toggle dropdown on click
  dropdownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    dropdown.classList.toggle('active');
    dropdownContent.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('show');
    }
  });

  // Handle dropdown item clicks
  const dropdownItems = dropdownContent.querySelectorAll('.nav-btn');
  dropdownItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Close dropdown after selection
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('show');
    });
  });
});