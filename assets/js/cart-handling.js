// Cart Handling
var cartItems = [];

function formatCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

function calculateTotalPrice() {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
  return total;
}

document.querySelectorAll(".cart").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();

    var cartId = this.parentElement.querySelector('input[type="number"]').id;
    var cartValue = this.parentElement.querySelector('input[type="number"]').value;
    var pricePerItem = this.getAttribute("price");

    if (cartValue > 0) {
      var totalPrice = cartValue * pricePerItem;
      var item = { name: this.parentElement.parentElement.querySelector("h3").textContent, quantity: cartValue, price: totalPrice };
      cartItems.push(item);
      console.clear();
      console.table(cartItems, ["name", "quantity", "price"]);
      console.log("Total harga keseluruhan: " + formatCurrency(calculateTotalPrice()));
    } else {
      console.log("Jumlah belanjaan tidak valid.");
    }
  });
});
