function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileNavMenu');
  mobileMenu.classList.toggle('active');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId + '-modal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId + '-modal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Function specifically for welcome modal
function closeWelcomeModal() {
  const modal = document.getElementById('welcome-modal');
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

// Function specifically for welcome modal
function closeWelcomeModal() {
  const modal = document.getElementById('welcome-modal');
  const video = modal.querySelector('.modal-video');
  
  // Stop video playback
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
  
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
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

document.addEventListener('DOMContentLoaded', function() {
  // Dropdown functionality
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

  // Auto-show welcome modal on page load
  // Show modal after a short delay for better UX
  setTimeout(function() {
    const welcomeModal = document.getElementById('welcome-modal');
    welcomeModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }, 500); // 500ms delay - adjust as needed
});

// Close modals when clicking outside
document.addEventListener('click', function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  });
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const openModal = document.querySelector('.modal.show');
    if (openModal) {
      openModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    }
  }
});