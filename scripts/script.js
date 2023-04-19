"use strict";

// скрипт виконує додаткові функції на сторінці

// поточна дата та час передаються у форму
const showCurrDate = document.getElementById("date");

function showTime() {
  const date = new Date();
  const currentTime =
    date.toLocaleDateString() + " " + date.toLocaleTimeString();

  showCurrDate.value = currentTime;
  setTimeout(showTime, 1000);
}

showTime();
