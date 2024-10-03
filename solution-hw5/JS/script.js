// Create rolls and add to cart array

const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

const originalRoll = new Roll("Original", "Sugar Milk", 1, 2.49);
const walnutRoll = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
const raisinRoll = new Roll("Raisin", "Sugar Milk", 3, 2.99); 
const appleRoll = new Roll("Apple", "Original", 3, 3.49);

cart.push(originalRoll, walnutRoll, raisinRoll, appleRoll);

// Update cart page with roll details

const cartTemplate = document.querySelector('#cart-section');
const clone = cartTemplate.content.cloneNode(true);

cart.element = clone.querySelector('.roll');

const cartItemElement = document.querySelector('.cart-item');
cartItemElement.prepend(cart);

// updateElement(chosenRoll);

// function updateElement(chosenRoll) {

// }



