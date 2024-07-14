document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuItems = document.getElementById('menu-items');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const body = document.body;

    menuIcon.addEventListener('click', function() {
        menuItems.classList.toggle('active');
    });

    sun.addEventListener('click', function() {
        body.classList.remove('night');
    });

    moon.addEventListener('click', function() {
        body.classList.add('night');
    });
});


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function(e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"})
});
