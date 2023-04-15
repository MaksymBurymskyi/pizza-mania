"use strict";

// даний скрипт виконує перемикання темної і світлої тем,
// приховує хедер на останній секції.

const sunIcon = document.querySelector(".daytime__sun");
const moonIcon = document.querySelector(".daytime__moon");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const reservationForm = document.querySelector(".reservation__form");
const contactsForm = document.querySelector(".contacts__form");
const aboutUsTabs = document.querySelectorAll(".aboutUs__tab");
const footer = document.querySelector(".footer");

const currentTime = new Date().toLocaleTimeString();
const nightVueTime = new Date("Fri Mar 23 2023 19:00:00").toLocaleTimeString();
const dayVueTime = new Date("Fri Mar 23 2023 06:00:00").toLocaleTimeString();

const lastSection = document.getElementById("ContactUs");
const lastSectionHeight = lastSection.offsetHeight;

moonIcon.addEventListener("click", toggleTimeMode);
sunIcon.addEventListener("click", toggleTimeMode);

function toggleTimeMode() {
  moonIcon.classList.toggle("hide");
  sunIcon.classList.toggle("hide");
  container.classList.toggle("darkBgd");
  container.classList.toggle("lightBgd");
  header.classList.toggle("darkBgd");
  header.classList.toggle("lightBgd");
  reservationForm.classList.toggle("formBgdDark");
  reservationForm.classList.toggle("formBgdLight");
  contactsForm.classList.toggle("formBgdDark");
  contactsForm.classList.toggle("formBgdLight");
  footer.classList.toggle("footer-darkBgd");
  footer.classList.toggle("footer-lightBgd");

  aboutUsTabs.forEach((element) => {
    element.classList.toggle("formBgdDark");
    element.classList.toggle("formBgdLight");
  });
}

// додаткове перемикання теми в залежності від часу доби
if (currentTime < nightVueTime && currentTime > dayVueTime) {
  toggleTimeMode();
}

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= lastSection.offsetTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});
