// Main initialization function
document.addEventListener("DOMContentLoaded", function () {
  initBackToTop();
  initDarkMode();
  initAnimations();
  enhanceAccessibility();
});

// Back to top functionality with performance optimizations
function initBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;
  
  // Throttle scroll event for better performance
  let lastScrollTime = 0;
  const scrollThreshold = 300;
  let isVisible = false;
  const throttleTime = 100; // ms between scroll checks
  
  function handleBackToTopVisibility() {
    const now = Date.now();
    if (now - lastScrollTime < throttleTime) return;
    
    lastScrollTime = now;
    const shouldBeVisible = window.scrollY > scrollThreshold;
    
    // Only update DOM if visibility changes
    if (shouldBeVisible !== isVisible) {
      isVisible = shouldBeVisible;
      backToTopButton.style.display = isVisible ? "flex" : "none";
    }
  }
  
  // Use passive listener for better scroll performance
  window.addEventListener("scroll", handleBackToTopVisibility, { passive: true });
  handleBackToTopVisibility(); // Initial check
  
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Smoother scroll with requestAnimationFrame for better performance
    const scrollToTop = () => {
      const position = window.scrollY;
      if (position > 0) {
        // Using smaller steps for smoother scrolling
        window.scrollTo(0, position - Math.max(position / 10, 10));
        requestAnimationFrame(scrollToTop);
      }
    };
    requestAnimationFrame(scrollToTop);
  });
}

// Dark mode functionality
function initDarkMode() {
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;
  if (!darkModeToggle) return;
  
  // Function to update the toggle button icon based on current mode
  function updateDarkModeIcon() {
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = '☀'; // Sun icon for dark mode (to switch to light)
      darkModeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
      darkModeToggle.textContent = '☾'; // Moon icon for light mode (to switch to dark)
      darkModeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
  }
  
  // Function to set dark mode preference
  function setDarkModePreference(isDarkMode) {
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode);
    updateDarkModeIcon();
  }
  
  // Check for saved preference in localStorage first
  const savedPreference = localStorage.getItem("darkMode");
  
  if (savedPreference !== null) {
    // Use saved preference if available
    setDarkModePreference(savedPreference === "true");
  } else {
    // Otherwise, check system preference
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkModePreference(prefersDarkMode);
  }
  
  // Listen for clicks on the toggle button
  darkModeToggle.addEventListener("click", function () {
    const isDarkMode = !body.classList.contains("dark-mode");
    setDarkModePreference(isDarkMode);
  });
  
  // Listen for changes in system preference
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e) {
    // Only update if the user hasn't explicitly set a preference
    if (localStorage.getItem("darkMode") === null) {
      setDarkModePreference(e.matches);
    }
  });
}

// Animation functionality with performance optimizations
function initAnimations() {
  // Use a single IntersectionObserver for both timeline and project cards
  // to reduce the number of observers
  animateElements();
  // Add smooth scroll for navigation links
  initSmoothScroll();
}

// Unified animation function for better performance
function animateElements() {
  const animatedElements = document.querySelectorAll(".timeline-item, .project-card");
  if (animatedElements.length === 0) return;
  
  // Optimize IntersectionObserver options
  const observerOptions = {
    // Lower threshold for earlier detection
    threshold: 0.05,
    // Add rootMargin to trigger animations a bit earlier
    rootMargin: "50px 0px",
  };
  
  // Reuse a single observer for all animated elements
  const observer = new IntersectionObserver((entries) => {
    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Unobserve after animation to save resources
          observer.unobserve(entry.target);
        }
      });
    });
  }, observerOptions);
  
  // Stagger the observation of elements to improve initial load
  let delay = 0;
  const staggerAmount = 50; // ms between batches
  
  // Group elements into smaller batches for smoother loading
  const batchSize = 5;
  const batches = [];
  
  // Create batches for staggered animation
  for (let i = 0; i < animatedElements.length; i += batchSize) {
    batches.push(Array.from(animatedElements).slice(i, i + batchSize));
  }
  
  // Observe each batch with a staggered delay
  batches.forEach(batch => {
    setTimeout(() => {
      batch.forEach(element => observer.observe(element));
    }, delay);
    delay += staggerAmount;
  });
}

// Accessibility enhancements
function enhanceAccessibility() {
  enhanceSkillTagsKeyboardNavigation();
  enhanceNavigationAccessibility();
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a, .contact-option');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only process internal links
      if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Calculate header height for offset
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Set focus to the target element for accessibility
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus();
        }
      }
    });
  });
}

// Enhance navigation accessibility
function enhanceNavigationAccessibility() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Add active state to navigation based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 200; // Offset to trigger sooner
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink(); // Initial check
}

// Improve keyboard navigation for skill tags with performance optimization
function enhanceSkillTagsKeyboardNavigation() {
  const skillsContainer = document.querySelector('.skills-list');
  if (!skillsContainer) return;
  
  // Use event delegation instead of multiple listeners
  skillsContainer.addEventListener('keydown', (e) => {
    // Only process if target is a skill tag
    if (!e.target.classList.contains('skill-tag')) return;
    
    // If Enter or Space is pressed, trigger the hover effect
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        e.target.classList.add('skill-tag-active');
        
        // Clear existing timeout if any
        const tagId = e.target.dataset.animTimeout;
        if (tagId) window.clearTimeout(parseInt(tagId));
        
        // Set new timeout and store its ID
        const timeoutId = window.setTimeout(() => {
          e.target.classList.remove('skill-tag-active');
          delete e.target.dataset.animTimeout;
        }, 300);
        
        e.target.dataset.animTimeout = timeoutId;
      });
    }
  });
}
