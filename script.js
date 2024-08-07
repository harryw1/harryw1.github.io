document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Lazy load images and other media
  var lazyElements = [].slice.call(
    document.querySelectorAll("img.lazy, iframe.lazy")
  );
  if ("IntersectionObserver" in window) {
    let lazyObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyElement = entry.target;
          lazyElement.src = lazyElement.dataset.src;
          lazyElement.classList.remove("lazy");
          lazyObserver.unobserve(lazyElement);
        }
      });
    });

    lazyElements.forEach(function (lazyElement) {
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
    { threshold: 0.1 }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
}

// Call the timeline function when the DOM is loaded
document.addEventListener("DOMContentLoaded", animateTimeline);
