"use strict";

// валідація контактних даних клієнтів

const nameInput = document.getElementById("name");
const nameErr = document.querySelector(".nameErr");
const emailInput = document.getElementById("email");
const emailErr = document.querySelector(".emailErr");
const phoneInput = document.getElementById("phone");
const phoneErr = document.querySelector(".phoneErr");

function handleNameInput(input) {
  nameErr.innerHTML = "";
  const nameInp = input.value;
  const isNum = /[0-9]/.test(nameInp);

  if (isNum) {
    nameErr.innerHTML = "Name cannot contain numbers";
  }
  if (nameInp.length < 2) {
    nameErr.innerHTML = "Too short name";
  }
  if (!nameInp) {
    nameErr.innerHTML = "Please enter a name";
  }
}

nameInput.addEventListener("blur", (event) => handleNameInput(event.target));

function handleEmailInput(input) {
  const email = input.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  email ? (emailErr.innerHTML = "") : (emailErr.innerHTML = "wrong email");
}

emailInput.addEventListener("blur", (event) => handleEmailInput(event.target));

function handlePhoneInput(input) {
  const phone = input.value.match(/^\+380\d{9}$/);
  phone
    ? (phoneErr.innerHTML = "")
    : (phoneErr.innerHTML = "wrong phone format");
}

phoneInput.addEventListener("blur", (event) => handlePhoneInput(event.target));

function handleSubmit(event) {
  event.preventDefault();

  handleNameInput(nameInput);
  handleEmailInput(emailInput);
  handlePhoneInput(phoneInput);

  if (nameErr.innerHTML || emailErr.innerHTML || phoneErr.innerHTML) {
    showModalIncorrectlyInput();
  } else {
    showModalCorrectlyInput(event);
  }
}

function showModalIncorrectlyInput() {
  Swal.fire({
    icon: "warning",
    title: "Check that the input is correct",
    text: "And try sending again",
    background: "#f4f4f4",
    color: "#7b3000",
    confirmButtonColor: "#FF8C42",
  });
}
function showModalCorrectlyInput(event) {
  Swal.fire({
    title: "Send an order?",
    text: "You can check and send again!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#FF8C42",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes!",
    color: "#7b3000",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: "Your order has been sent",
        title: "Success",
        icon: "success",
        background: "#f4f4f4",
        color: "#7b3000",
        confirmButtonColor: "#FF8C42",
      });
      setTimeout(() => {
        event.target.form.submit();
      }, 4000);
    }
  });
}
