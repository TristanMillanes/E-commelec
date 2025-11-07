document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".scroll-animate, .scroll-animate-left, .scroll-animate-right"
  );

  function handleScroll() {
    const triggerBottom = window.innerHeight * 1.0
    ;

    animatedElements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
