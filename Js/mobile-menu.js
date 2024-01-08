const mobileMenu =
  document.querySelector(
    ".mobile-menu"
  );
const menuBtn0pen =
  document.querySelector(
    ".menu-btn-open"
  );
const menuBtnClose =
  document.querySelector(
    ".menu-btn-close"
  );

const toggleMenu = () =>
  mobileMenu.classList.toggle(
    "is-open"
  );

menuBtn0pen.addEventListener(
  "click",
  toggleMenu
);
menuBtnClose.addEventListener(
  "click",
  toggleMenu
);
