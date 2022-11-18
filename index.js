const menuBtn = document.getElementById("menu-img");
const closeMenuBtn = document.getElementById("img-close");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
