"use strict";

// скрипт допомагає керувати табами, які побудовані на input type="radio" і дає змогу закрити всі таби

const aboutUsTabChecker = document.querySelectorAll(".aboutUs__tab-checker");

aboutUsTabChecker.forEach((element) => {
  element.addEventListener("click", function () {
    const lastCheckedElement = this.dataset.id || "no-data";
    if (lastCheckedElement === this.id) {
      this.checked = false;
      this.dataset.id = "no-data";
    } else {
      this.dataset.id = this.id;
    }
  });
});
