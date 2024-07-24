document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const body = document.body;
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');

    // Initial visibility settings
    sun.style.display = 'block';
    moon.style.display = 'none';

    // Function to switch to night mode
    function switchToNightMode() {
        body.classList.add('night');
        sun.style.display = 'none';
        moon.style.display = 'block';
    }

    // Function to switch to day mode
    function switchToDayMode() {
        body.classList.remove('night');
        moon.style.display = 'none';
        sun.style.display = 'block';
    }

    // Event listeners for sun and moon
    sun.addEventListener('click', switchToNightMode);
    moon.addEventListener('click', switchToDayMode);

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


