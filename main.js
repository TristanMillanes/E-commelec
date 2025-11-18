// navigation and sliding announcement animation

document.addEventListener('DOMContentLoaded', function() {
  // Navigation link sliding box animation
  const nav = document.querySelector('nav');
  if (nav) {
    const links = nav.querySelectorAll('ul li a');
    const slideBox = document.createElement('span');
    slideBox.className = 'nav-slide-box';
    nav.appendChild(slideBox);
    function moveBoxTo(link) {
      const rect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      slideBox.style.width = rect.width + 'px';
      slideBox.style.height = rect.height + 'px';
      slideBox.style.left = (rect.left - navRect.left) + 'px';
      slideBox.style.top = (rect.top - navRect.top) + 'px';
      slideBox.style.opacity = 1;
    }
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        moveBoxTo(link);
      });
      link.addEventListener('mouseenter', function() {
        moveBoxTo(link);
      });
    });
    nav.addEventListener('mouseleave', function() {
      slideBox.style.opacity = 0;
    });
  }
  
});
