// // script.js
// document.addEventListener("DOMContentLoaded", () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartItemsElement = document.getElementById("cart-items");
//     const totalPriceElement = document.getElementById("total-price");

//     // Function to update cart in DOM
//     function updateCart() {
//         cartItemsElement.innerHTML = "";
//         let total = 0;

//         cart.forEach(item => {
//             const li = document.createElement("li");
//             li.textContent = `${item.name} - Rs. ${item.price}`;
//             cartItemsElement.appendChild(li);
//             total += item.price;
//         });

//         totalPriceElement.textContent = `Total: Rs. ${total}`;
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }

//     // Add to cart logic
//     document.querySelectorAll(".add-to-cart").forEach(button => {
//         button.addEventListener("click", () => {
//             const product = button.closest(".product");
//             const id = product.dataset.id;
//             const name = product.dataset.name;
//             const price = parseInt(product.dataset.price, 10);

//             cart.push({ id, name, price });
//             updateCart();
//         });
//     });

//     // Initialize cart on page load
//     updateCart();
// });
