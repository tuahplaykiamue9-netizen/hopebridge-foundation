// ===============================
// HOPEBRIDGE DONATION FORM
// ===============================

const amountButtons = document.querySelectorAll(".amount-options button");
const customAmount = document.getElementById("customAmount");

let selectedAmount = 0;

// Select a donation amount
amountButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove selection from all buttons
    amountButtons.forEach(function (btn) {
      btn.classList.remove("selected");
    });

    // Select the button clicked
    button.classList.add("selected");

    // Get the amount
    const amountText = button.textContent.replace("GHS", "").trim();

    selectedAmount = Number(amountText);

    // Clear custom amount
    customAmount.value = "";
  });
});

// Custom donation amount
customAmount.addEventListener("input", function () {
  if (customAmount.value > 0) {
    selectedAmount = Number(customAmount.value);

    // Remove selected button
    amountButtons.forEach(function (button) {
      button.classList.remove("selected");
    });
  }
});
const amountButtons = document.querySelectorAll(".amount-options button");
const customAmount = document.getElementById("customAmount");

let selectedAmount = 0;

amountButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    amountButtons.forEach(function (btn) {
      btn.classList.remove("selected");
    });

    button.classList.add("selected");

    const amountText = button.textContent.replace("GHS", "").trim();

    selectedAmount = Number(amountText);

    customAmount.value = "";
  });
});

customAmount.addEventListener("input", function () {
  if (customAmount.value > 0) {
    selectedAmount = Number(customAmount.value);

    amountButtons.forEach(function (button) {
      button.classList.remove("selected");
    });
  }
});
