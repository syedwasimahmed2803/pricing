document.addEventListener("DOMContentLoaded", function () {
  var initialPrices = ["&dollar;19.99", "&dollar;24.99", "&dollar;39.99"];
  var changedPrices = ["&dollar;199.99", "&dollar;249.99", "&dollar;399.99"];
  var toggleSwitch = document.getElementById("toggleSwitch");
  var priceTextElements = document.querySelectorAll(".priceText");

  toggleSwitch.addEventListener("change", function () {
    priceTextElements.forEach(function (element, index) {
      if (toggleSwitch.checked) {
        element.innerHTML = initialPrices[index];
      } else {
        element.innerHTML = changedPrices[index];
      }
    });
  });
});
