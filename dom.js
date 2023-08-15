document.addEventListener("DOMContentLoaded", function () {
  // Get references to necessary elements
  const cartList = document.getElementById("cart-list");
  const totalElement = document.getElementById("total");

  // Add event listener to the cart list
  cartList.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const cartItem = clickedElement.closest(".cart-item");
    const priceElement = cartItem.querySelector(".price");
    const quantityElement = cartItem.querySelector(".quantity");

    // Check which button was clicked and perform corresponding action
    if (clickedElement.classList.contains("quantity-minus")) {
      if (parseInt(quantityElement.textContent) > 1) {
        quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
      }
    } else if (clickedElement.classList.contains("quantity-plus")) {
      quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    } else if (clickedElement.classList.contains("delete")) {
      cartItem.remove();
    } else if (clickedElement.classList.contains("like")) {
      clickedElement.classList.toggle("liked");
    }

    // Recalculate total price
    updateTotalPrice();
  });

  // Function to update total price
  function updateTotalPrice() {
    let totalPrice = 0;
    const priceElements = document.querySelectorAll(".price");
    const quantityElements = document.querySelectorAll(".quantity");

    // Calculate total price based on item prices and quantities
    for (let i = 0; i < priceElements.length; i++) {
      totalPrice +=
        parseFloat(priceElements[i].textContent.slice(1)) *
        parseInt(quantityElements[i].textContent);
    }

    // Update total price displayed
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }

  // Initial total price calculation
  updateTotalPrice();
});
