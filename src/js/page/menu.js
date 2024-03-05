document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuIconBox = document.querySelector(".menu__icon-box i");
  const menuLinks = document.querySelectorAll(".menu ul > li > a");

  menuIconBox.addEventListener("click", function () {
    menu.classList.toggle("menu-visible");
  });

  menu.addEventListener("mouseleave", function () {
    menu.classList.remove("menu-visible");
  });
});
