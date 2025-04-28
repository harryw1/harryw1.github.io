document.addEventListener("DOMContentLoaded", function () {
  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");
  // Function to handle back to top button visibility
  function handleBackToTopVisibility() {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  }
  
  window.addEventListener("scroll", handleBackToTopVisibility);
  
  // Initial check for back to top button
  handleBackToTopVisibility();

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark mode toggle
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;
  
  // Function to update the toggle button icon based on current mode
  function updateDarkModeIcon() {
    // Update the button icon based on current mode
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = '☀️'; // Sun icon for dark mode (to switch to light)
      darkModeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
      darkModeToggle.innerHTML = '🌙'; // Moon icon for light mode (to switch to dark)
      darkModeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
  }

  // Function to set dark mode based on preference
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
});

// Timeline animation
function animateTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 },
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
}

// Call the timeline function when the DOM is loaded
document.addEventListener("DOMContentLoaded", animateTimeline);

// Project cards animation
function animateProjectCards() {
  const projectCards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a slight delay based on the card's index to create a staggered effect
          const delay = Array.from(projectCards).indexOf(entry.target) * 100;
          setTimeout(() => {
            entry.target.classList.add("show");
          }, delay);
        }
      });
    },
    { threshold: 0.1 },
  );

  projectCards.forEach((card) => {
    observer.observe(card);
  });
}

// Call the project cards animation function when the DOM is loaded
document.addEventListener("DOMContentLoaded", animateProjectCards);

// Improve keyboard navigation for skill tags
function enhanceSkillTagsKeyboardNavigation() {
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(tag => {
    tag.addEventListener('keydown', (e) => {
      // If Enter or Space is pressed, trigger the hover effect
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Toggle a 'skill-tag-active' class to simulate hover
        tag.classList.add('skill-tag-active');
        setTimeout(() => {
          tag.classList.remove('skill-tag-active');
        }, 300);
      }
    });
  });
}

// Call the keyboard navigation enhancement function when the DOM is loaded
document.addEventListener("DOMContentLoaded", enhanceSkillTagsKeyboardNavigation);
