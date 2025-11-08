document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    ".scroll-animate, .scroll-animate-left, .scroll-animate-right"
  );

  // Function to handle the scroll-triggered animations
  function handleScroll() {
    const triggerBottom = window.innerHeight * 1.0;

    animatedElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  }

  // Add scroll listene and run once at load
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
