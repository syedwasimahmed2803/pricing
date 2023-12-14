document.addEventListener("DOMContentLoaded", function () {
  var initialPrices = [
    "<span>&dollar;</span>19.99",
    "<span>&dollar;</span>24.99",
    "<span>&dollar;</span>39.99",
  ];
  var changedPrices = [
    "<span>&dollar;</span>199.99",
    "<span>&dollar;</span>249.99",
    "<span>&dollar;</span>399.99",
  ];
  var toggleSwitch = document.getElementById("toggleSwitch");
  var priceTextElements = document.querySelectorAll(".priceText");

  toggleSwitch.addEventListener("change", function () {
    priceTextElements.forEach((element, index) => {
      if (toggleSwitch.checked) {
        element.innerHTML = initialPrices[index];
      } else {
        element.innerHTML = changedPrices[index];
      }
    });
  });
});
