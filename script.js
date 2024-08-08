document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const menuItems = document.getElementById('menu-items');
  const bodyElement = document.getElementById('body');
/*Function for Day-Night Mode*/
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
/*Function for Day-Night Mode*/
/*Function for Menu bar*/
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
/*Function for Menu bar*/
/*Function for Cursor*/
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
    document.body.style.cursor = 'none';
});
/*Function for Cursor*/
/*Scroll Animation*/
document.addEventListener("DOMContentLoaded", function() {
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.fade-in-up-target').forEach(el => {
  gsap.fromTo(el, 
    { opacity: 0, filter: blur(5), y: 100 },
    {
      opacity: 1,
      filter: blur(0),
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        end: 'bottom 10%',
        scrub: true
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
        start: 'top 97%',
        end: 'bottom 10%',
        scrub: true
      }
    }
  );
});

gsap.utils.toArray('.fade-in-right-target').forEach(el => {
  gsap.fromTo(el, 
    { opacity: 0}, 
    {
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        end: 'bottom 10%',
        scrub: true
      }
    }
  );
});
});
/*Scroll Animation*/
/*Sign-In function*/
function signIn() {
  const heroContent = document.getElementById('hero-content');
  heroContent.innerHTML = `
    <h4 style="font-weight: 350; margin-bottom: 10px;">Sign <span>In</span></h4>
    <form id="sign-in-form">
      <div class="form-group">
        <input type="email" id="email" name="email" required>
        <label for="email">Email:</label>
      </div>
      <div class="form-group">
        <input type="password" id="password" name="password" required>
        <label for="password">Password:</label>
      </div>
      <button id="submit" class="sign-in" type="submit">Sign In</button>
    </form>
    <p>Don't have an account? <a href="#" onclick="signUp()">Sign up</a></p>
  `;
}
/*Sign-In function*/
/*Sign Up interface*/
function signUp() {
  const heroContent = document.getElementById('hero-content');
  heroContent.innerHTML = `
      <h4 style="font-weight: 350; margin-bottom: 10px;">Sign <span>Up</span></h4>
      <form>
          <div class="form-group">
              <input type="text" id="username" name="username" required>
              <label for="username">Username:</label>
          </div>
          <div class="form-group">
              <input type="email" id="email" name="email" required>
              <label for="email">Email:</label>
          </div>
          <div class="form-group">
              <input type="password" id="password" name="password" required>
              <label for="password">Password:</label>
          </div>
          <button class="sign-in" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#" onclick="signIn()">Sign in</a></p>
  `;
}
/*Sign Up interface*/
/*Loader Animation*/
  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("load", function() {
      const loader = document.getElementById('pulse-wrapper');
      loader.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  });
/*Loader Animation*/
/*Handling the pointer while scrolling*/
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

function handleScroll() {
    cursorDot.classList.add('cursor-hidden');
    cursorOutline.classList.add('cursor-hidden');
}

function handleScrollEnd() {
    setTimeout(() => {
        cursorDot.classList.remove('cursor-hidden');
        cursorOutline.classList.remove('cursor-hidden');
    }, 100); // Adjust the timeout to the desired delay
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', handleScrollEnd);
/*Handling the pointer while scrolling*/