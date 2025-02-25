const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "50px",
  }
);

document
  .querySelectorAll(
    ".landing, .services, .design, .portfolio, .about, .stats, .our-skills, .quote, .pricing, .subscribe, .contact, footer"
  )
  .forEach((el) => observer.observe(el));
