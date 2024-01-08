const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 0,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    1280: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slide-button.next",
    prevEl: ".slide-button.prev",
  },
});
