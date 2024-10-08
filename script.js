document.addEventListener("DOMContentLoaded", function () {
  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Dark mode toggle
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
  }
  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
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
