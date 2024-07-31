document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');
    const bodyElement = document.body;

    // Function to toggle between day and night mode
    function toggleMode() {
        bodyElement.classList.toggle('night');
        bodyElement.classList.toggle('day');
    }

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

