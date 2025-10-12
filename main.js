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

  // Sliding announcement bar animation (JavaScript version)
  const track = document.getElementById('slidingAnnouncementTrack');
  const bar = document.getElementById('slidingAnnouncement');
  if (track && bar) {
    let pos = bar.offsetWidth;
    const textWidth = track.offsetWidth;
    let animFrame;
    function animate() {
      pos -= 5; // Increase speed (was pos--)
      if (pos < -textWidth) {
        pos = bar.offsetWidth;
      }
      track.style.transform = `translateX(${pos}px)`;
      animFrame = requestAnimationFrame(animate);
    }

    // Show/hide logic for every 2 minutes
    function showAnnouncement() {
      bar.style.display = 'flex';
      // Reset position so text slides in from the right every time
      pos = bar.offsetWidth;
      track.style.transform = `translateX(${pos}px)`;
      // Start animation on next frame to ensure bar is visible
      setTimeout(() => {
        animate();
      }, 10);
      setTimeout(hideAnnouncement, 28000); // Show for 15 seconds
    }
    function hideAnnouncement() {
      bar.style.display = 'none';
      cancelAnimationFrame(animFrame);
      setTimeout(showAnnouncement, 20000); // 
    }
    // Start the cycle
    hideAnnouncement();
  }
});
