import { animate, stagger, text } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';

document.addEventListener("DOMContentLoaded", () => {
    
    const { words } = text.split('.titulo-nav',  {
    words: { wrap: 'clip' },
})

animate(words, {
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 1750, ease: 'in(3)' }
    ],
    duration: 1750,
    ease: 'out(3)',
    delay: stagger(100),
    loop: true,
});

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");
 
if (menuToggle && navList) {
    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
}

});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-text");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  });
