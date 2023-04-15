"use strict";

// Скрипт відповідає за модальні вікна, які показують знижку за промокодом.
// Враховує час отримання та використання промокоду.
// В даному варіанті для зберігання даних використовується localStorage.

function showPromoCode(text, title, imageUrl, imageAlt, background, color) {
  Swal.fire({
    text: text,
    title: title,
    imageUrl: imageUrl,
    imageWidth: 360,
    imageHeight: 320,
    imageAlt: imageAlt,
    background: background,
    color: color,
    confirmButtonColor: "#FF8C42",
  });
}

function getPromoCode() {
  const imageUrl = "../img/sale.jpg";
  const imageAlt = "Promo - 10% for free";
  const background = "#2F2F2F";
  const color = "#FF8C42";

  if (!localStorage.promoCode) {
    const promoCode = Math.floor(Math.random() * 1000000);
    localStorage.promoCode = promoCode;
    localStorage.promoCodeData = new Date();
    showPromoCode(
      "You can use it within a month",
      `Your promo code ${localStorage.promoCode}`,
      imageUrl,
      imageAlt,
      background,
      color
    );
  } else if (+localStorage.promoCode === 0) {
    showPromoCode(
      "You can get a promo next month",
      "Your promo has already been used",
      "../img/pizza-sales.jpg",
      "The promo has already been used",
      "#f4f4f4",
      "#7b3000"
    );
  } else if (+localStorage.promoCode) {
    const currentDate = new Date();
    const oneMonts = 2630000000;
    const savedDate = new Date(localStorage.promoCodeData);
    const expDate = currentDate - savedDate;
    if (expDate < oneMonts) {
      showPromoCode(
        `You already have the promo code ${localStorage.promoCode}`,
        "Hurry up to use it",
        imageUrl,
        imageAlt,
        background,
        color
      );
    } else {
      showPromoCode(
        "Try to get new promo code",
        "Unfortunately, your promo code is rusty",
        imageUrl,
        imageAlt,
        background,
        color
      );
      localStorage.clear();
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "Try again later",
      background: "#f4f4f4",
      color: "#7b3000",
      confirmButtonColor: "#FF8C42",
    });
    localStorage.clear();
  }
}
