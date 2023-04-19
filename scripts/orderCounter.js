"use strict";

// Скрипт забезпечує взаємодію форми замовлення з користувачем:
// дає (або забороняє ) доступ до обраного типу продукту (по меню або custom)
// рахує вартість замовлення, враховуючи наявність знижок за промокодом
// складає замовлення до загального списку

const pizzaByMenu = document.getElementById("pizzaByMenu");
const customPizza = document.getElementById("customPizza");
const customPizzaBlock = document.querySelector(".order__customPizza");
const pizzaTypeByMenu = document.getElementById("pizzaType");
const supplementsItems = document.querySelectorAll(".order__supplements-item");
const supplementsItemsInp = document.querySelectorAll(
  ".order__supplements-item input"
);
const supplementsItemsBlock = document.querySelector(".order__supplements");
const totalPriceCell = document.querySelector(".order__price-total");
const totalPriceBtn = document.querySelector(".order__price-button");
const addToOrderBtn = document.querySelector(".reservation__btn");

let isSupplementsItemsInpActive = false;

function handleChoiceTypeOfPizza(event) {
  customPizzaBlock.classList.remove("disabled");
  pizzaTypeByMenu.classList.remove("disabled");

  if (event.target.value === pizzaByMenu.value) {
    customPizzaBlock.classList.add("disabled");
    pizzaTypeByMenu.removeAttribute("disabled");
    supplementsItemsInp.forEach((el) => {
      el.disabled = true;
    });
    isSupplementsItemsInpActive = false;
  }
  if (event.target.value === customPizza.value) {
    pizzaTypeByMenu.classList.add("disabled");
    pizzaTypeByMenu.setAttribute("disabled", "true");
    supplementsItemsInp.forEach((el) => {
      el.disabled = false;
    });
    isSupplementsItemsInpActive = true;
  }
}

pizzaByMenu.addEventListener("click", handleChoiceTypeOfPizza);
customPizza.addEventListener("click", handleChoiceTypeOfPizza);

// при активації створення кастомної піци, підсвічує обрані інгредієнти
supplementsItemsBlock.addEventListener("click", () => {
  if (isSupplementsItemsInpActive) {
    supplementsItems.forEach((element) => {
      element.addEventListener("click", () => {
        element.classList.toggle("checked");
      });
    });
  }
});

function handlePercentForSale() {
  const percentForSale = document.getElementById("cuponSale").innerText;
  return percentForSale > 0 ? (100 - +percentForSale) / 100 : 1;
}

function handlePizzaByMenu() {
  return isSupplementsItemsInpActive
    ? 1
    : document.getElementById("pizzaType").value;
}

function handlePizzaSizeSelect() {
  return document.getElementById("pizzaSize").value;
}

function handleCustomPizza() {
  let customPizzaPrice = 0;
  supplementsItemsInp.forEach((element) => {
    if (element.checked) {
      customPizzaPrice += +element.value;
    }
  });
  return isSupplementsItemsInpActive ? customPizzaPrice : 1;
}

function handleQuantityOfItem() {
  return document.getElementById("quantity-pizzaType").value;
}

function countTotalPrice() {
  return (
    handlePizzaByMenu() *
    handleCustomPizza() *
    handlePizzaSizeSelect() *
    handlePercentForSale() *
    handleQuantityOfItem()
  );
}

totalPriceBtn.addEventListener("click", () => {
  totalPriceCell.innerText = countTotalPrice();
});

addToOrderBtn.addEventListener("click", () => {
  const orderedItem = document.createElement("input");
  orderedItem.setAttribute("type", "text");
  orderedItem.setAttribute("name", "ordered-item");
  orderedItem.value = `${totalPriceCell.innerText} $`;

  document.querySelector(".orderList").appendChild(orderedItem);
});
