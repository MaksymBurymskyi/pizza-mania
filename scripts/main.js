"use strict";

const sunIcon = document.querySelector(".daytime__sun");
const moonIcon = document.querySelector(".daytime__moon");
const container = document.querySelector(".container");
const currentTime = new Date().toLocaleTimeString();
const nightVueTime1 = new Date("Fri Mar 23 2023 19:00:00").toLocaleTimeString();
const nightVueTime2 = new Date("Fri Mar 23 2023 06:00:00").toLocaleTimeString();

moonIcon.addEventListener("click", toggleTimeMode);
sunIcon.addEventListener("click", toggleTimeMode);

function toggleTimeMode() {
  moonIcon.classList.toggle("hide");
  sunIcon.classList.toggle("hide");
  container.classList.toggle("darkBgd");
  container.classList.toggle("lightBgd");
}

if (currentTime < nightVueTime1 && currentTime > nightVueTime2) {
  toggleTimeMode();
}
