document.addEventListener('DOMContentLoaded', () => {
    // Sun and Moon switch
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const body = document.body;

    sun.addEventListener('click', () => {
        body.classList.remove('night')
    });

    moon.addEventListener('click', () => {
        body.classList.add('night');
        body.classList.add('nightmoon');
    });


    // Menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');

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
