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

      // Add scroll effect to header
      let lastScrollTop = 0;
      window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
       
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
      });

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