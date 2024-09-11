document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Lazy load images and other media
  const lazyElements = Array.from(
    document.querySelectorAll("img.lazy, iframe.lazy"),
  );
  if ("IntersectionObserver" in window) {
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyElement = entry.target;
          lazyElement.src = lazyElement.dataset.src;
          lazyElement.classList.remove("lazy");
          lazyObserver.unobserve(lazyElement);
        }
      });
    });

    lazyElements.forEach((lazyElement) => {
      lazyObserver.observe(lazyElement);
    });
  }

  // Dark mode toggle
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;

  // Check for saved dark mode preference
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
  }

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    // Save user preference
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
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
