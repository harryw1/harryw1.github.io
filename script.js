// Main initialization function
document.addEventListener("DOMContentLoaded", function () {
  initBackToTop();
  initDarkMode();
  initAnimations();
  enhanceAccessibility();
});

// Back to top functionality
function initBackToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;
  
  function handleBackToTopVisibility() {
    backToTopButton.style.display = window.scrollY > 300 ? "flex" : "none";
  }
  
  window.addEventListener("scroll", handleBackToTopVisibility);
  handleBackToTopVisibility(); // Initial check
  
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
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

// Animation functionality
function initAnimations() {
  animateTimeline();
  animateProjectCards();
}

// Timeline animation
function animateTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  if (timelineItems.length === 0) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );
  
  timelineItems.forEach((item) => {
    observer.observe(item);
  });
}

// Project cards animation
function animateProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");
  if (projectCards.length === 0) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );
  
  projectCards.forEach((card) => {
    observer.observe(card);
  });
}

// Accessibility enhancements
function enhanceAccessibility() {
  enhanceSkillTagsKeyboardNavigation();
}

// Improve keyboard navigation for skill tags
function enhanceSkillTagsKeyboardNavigation() {
  const skillTags = document.querySelectorAll('.skill-tag');
  if (skillTags.length === 0) return;
  
  skillTags.forEach(tag => {
    tag.addEventListener('keydown', (e) => {
      // If Enter or Space is pressed, trigger the hover effect
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tag.classList.add('skill-tag-active');
        setTimeout(() => {
          tag.classList.remove('skill-tag-active');
        }, 300);
      }
    });
  });
}
