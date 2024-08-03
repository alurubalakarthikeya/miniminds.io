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
  const fadeInUpTargets = document.querySelectorAll('.fade-in-up-target');
  const fadeInLeftTargets = document.querySelectorAll('.fade-in-left-target');
  const fadeInRightTargets = document.querySelectorAll('.fade-in-right-target');

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Adjust this value as needed
  };

  let debounceTimer;
  const debounce = (callback, delay) => {
    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => callback.apply(this, args), delay);
    };
  };

  const observerCallback = debounce((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('fade-in-up-target')) {
          entry.target.classList.add('fadeInUp-animation');
        } else if (entry.target.classList.contains('fade-in-left-target')) {
          entry.target.classList.add('fadeInLeft-animation');
        } else if (entry.target.classList.contains('fade-in-right-target')) {
          entry.target.classList.add('fadeInRight-animation');
        }
        observer.unobserve(entry.target); // Optionally unobserve the element after the animation
      }
    });
  }, 100); // Adjust the debounce delay as needed

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  [...fadeInUpTargets, ...fadeInLeftTargets, ...fadeInRightTargets].forEach(target => {
    observer.observe(target);
  });
});
