document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');
    const bodyElement = document.getElementById('body');

    function toggleMode() {
      const body = document.body;
      const sun = document.getElementById("sun");
      const moon = document.getElementById("moon");
  
      if (body.classList.contains("night")) {
          body.classList.remove("night");
          body.classList.add("day");
          sun.style.display = "block";
          moon.style.display = "none";
      } else {
          body.classList.remove("day");
          body.classList.add("night");
          sun.style.display = "none";
          moon.style.display = "block";
      }
  }
  
  document.getElementById("sun").addEventListener("click", toggleMode);
  document.getElementById("moon").addEventListener("click", toggleMode);
  
     menuIcon.addEventListener('click', (event) => {
        event.stopPropagation(); 
        menuItems.classList.toggle('active');
      });
  
      document.addEventListener('click', (event) => {
        if (menuItems.classList.contains('active')) {
          menuItems.classList.remove('active');
        }
      });

      menuItems.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      const cursorDot = document.querySelector("[data-cursor-dot]");
      const cursorOutline = document.querySelector("[data-cursor-outline]");
      
      window.addEventListener("mousemove", (e) => {
          const posX = e.clientX;
          const posY = e.clientY;
      
          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;
      
          cursorOutline.style.left = `${posX}px`; // Adjust position to center outline around dot
          cursorOutline.style.top = `${posY}px`;
      
          cursorOutline.animate({
              left: `${posX}px`,
              top: `${posY}px`
          }, { duration: 500, fill: "forwards" });
      });
      
      // Hide the default cursor
      document.body.style.cursor = 'none';
      
});

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.fade-in-up-target').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 100 }, // Start state
      {
        opacity: 1,
        y: 0, // End state
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', // Animation starts when element is 80% from the top of the viewport
          end: 'bottom 20%', // Animation ends when element is 20% from the bottom of the viewport
          scrub: true // Smoothly animates while scrolling
        }
      }
    );
  });

  gsap.utils.toArray('.fade-in-left-target').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, x: -100 }, // Start state
      {
        opacity: 1,
        x: 0, // End state
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true
        }
      }
    );
  });

  gsap.utils.toArray('.fade-in-right-target').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, x: 100 }, // Start state
      {
        opacity: 1,
        x: 0, // End state
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true
        }
      }
    );
  });
});


