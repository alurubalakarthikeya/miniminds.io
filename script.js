document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('visible');
});


document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');
    const sunElement = document.querySelector('.sun');
    const moonElement = document.querySelector('.moon');
    const bodyElement = document.body;
    let clickCounter = 0;

// Function to toggle between day and night mode
   function toggleMode() {
    clickCounter++;
     if (clickCounter % 2 !== 0) {
        // Odd click: switch to night mode
        bodyElement.classList.add('night');
        sunElement.style.display = 'none';
        moonElement.style.display = 'block';
    } else {
        // Even click: switch to day mode
        bodyElement.classList.remove('night');
        sunElement.style.display = 'block';
        moonElement.style.display = 'none';
    }
  }
  sunElement.addEventListener('click', toggleMode);
  moonElement.addEventListener('click', toggleMode);
  sunElement.style.display = 'block';
  moonElement.style.display = 'none';

    // Menu toggle
    menuIcon.addEventListener('click', () => {
        menuItems.classList.toggle('active');
    });

    // Cursor effect
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
});

