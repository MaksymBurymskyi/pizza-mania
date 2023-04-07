/* Dark Mode Toggle****** */
const sunIcon = document.querySelector(".daytime__sun");
const moonIcon = document.querySelector(".daytime__moon");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const sunImg = document.querySelector(".img__moon");
const moonImg = document.querySelector(".img__sun");
const menu = document.querySelector(".menu__text");
const textWhite = document.querySelector(".text__white");
// const header = document.querySelector('.header');

moonIcon.addEventListener("click", toggleTimeMode);
sunIcon.addEventListener("click", toggleTimeMode);

function toggleTimeMode() {
  moonImg.classList.toggle("hide");
  sunImg.classList.toggle("hide");
  moonIcon.classList.toggle("hide");
  sunIcon.classList.toggle("hide");
  container.classList.toggle("bgdBlack");
  container.classList.toggle("bgdWhite");
  header.classList.toggle("bgdBlack");
  header.classList.toggle("bgdWhite");
  menu.classList.toggle("colorBlack");
  menu.classList.toggle("colorWhite");
  textWhite.classList.toggle("colorBlack");
  textWhite.classList.toggle("colorWhite");
}

/* Baner Sale ****** */
function baner() {
  Swal.fire({
    text: "Your promo code",
    title: "sale",
    imageUrl: "../img/sale.jpg",
    imageWidth: 400,
    imageHeight: 320,
    imageAlt: "Custom image",
    background: "#2F2F2F",
    color: "#FF8C42",
    confirmButtonColor: "#FF8C42",
  });
}
