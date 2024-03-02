const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* Remove menu when click  */

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*  End nav and menu  */
let swiperHome = new Swiper(".home__swiper", {
  // Optional parameters

  loop: true,
  grabCursor: true,
  slidesPerView: "auto",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: "auto",
    },
    1152: {
      centeredSlides: "auto",
      spaceBetween: -64,
    },
  },
});
const blur = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", blur);

/* Animation */

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
});
sr.reveal(`.home__swiper, .home__footer, .about__data, .visit__data`);
sr.reveal(`.home__circle`, { scale: 1.5, delay: 300 });
sr.reveal(`.home__subcircle`, { scale: 1.5, delay: 500 });
sr.reveal(`.home__title`, { scale: 1, origin: "bottom", delay: 1200 });
sr.reveal(`.swiper-button-prev, ..swiper-button-next`, { origin: "bottom" });
