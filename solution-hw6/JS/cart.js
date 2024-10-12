// Retrieve stored cart

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    const cartArray = JSON.parse(cartArrayString);
    return cartArray;
}

let cart = retrieveFromLocalStorage();

// Calculate prices

function calculateRollPrice(roll) {
    let rollPrice = 0;
    rollPrice = roll.size * roll.basePrice;
    return rollPrice;
}

function calculateCartPrice() {
    cartPrice = 0;
    for (let i=0; i<cart.length; i++){
        cart[i].size
        cartPrice = cartPrice + cart[i].size * cart[i].basePrice;
    }
    return cartPrice;
}

// Update elements

for (const roll of cart) {
    createElement(roll);
}

function createElement(roll) {
    // Set up template components
    const template = document.querySelector("#roll-template");
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cart-item");
    const rollListElement = document.querySelector("#roll-list");
    rollListElement.prepend(roll.element);

    // Add event listener to remove button
    const removeButton = roll.element.querySelector(".remove");
    removeButton.addEventListener("click", () => {removeRoll(roll)});

    // Call functions

    updateElement(roll);
}

function updateElement(roll) {
    let rollImageElement = roll.element.querySelector(".roll-image");
    let rollNameElement = roll.element.querySelector("#roll-name-element");
    let rollGlazingElement = roll.element.querySelector("#glazing-element");
    let rollPackElement = roll.element.querySelector("#pack-size-element");
    let rollPriceElement = roll.element.querySelector(".cart-price");

    rollImageElement.src = "../assets/products/" + rolls[roll.type].imageFile;
    rollNameElement.innerText = roll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = "Glazing: " + roll.glazing;
    rollPackElement.innerText = "Pack size: " + roll.size;
    rollPriceElement.innerText = "$" + calculateRollPrice(roll);
}

function updateCartPrice() {
    let CartPriceElement = document.querySelector("#total-price-element");
    CartPriceElement.innerText = "$" + calculateCartPrice();
}

updateCartPrice();

// Remove rolls

function removeRoll(roll) {
    // Remove nodes
    roll.element.remove();
    
    // Remove cart array items
    const rollIndex = cart.indexOf(roll);
    cart.splice(rollIndex, 1);

    // Update local storage
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);
    console.log("Current contents of cart in local storage: " + localStorage.getItem('storedCart'));

    // Update total price
    updateCartPrice();
}