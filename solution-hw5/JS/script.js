// Variables referenced throughout

const cart = [];
let pagePrice = 0;

// Create rolls and add to cart array

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;
    }
}

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(newRoll);
}

const originalRoll = addNewRoll("Original", "Sugar Milk", 1, 2.49); // TODO: Can you get the base prices out of the json?
const walnutRoll = addNewRoll("Walnut", "Vanilla Milk", 12, 3.49);
const raisinRoll = addNewRoll("Raisin", "Sugar Milk", 3, 2.99); 
const appleRoll = addNewRoll("Apple", "Original", 3, 3.49);

// Calculate prices

function calculateRollPrice(roll) {
    let rollPrice = 0;
    rollPrice = roll.size * roll.basePrice;
    return rollPrice;
}

function calculatePagePrice() {
    for (let i=0; i<cart.length; i++){
        cart[i].size
        pagePrice = pagePrice + cart[i].size * cart[i].basePrice;
    }
    return pagePrice;
}

// Update elements

for (const roll of cart) {
    createElement(roll);
}

function createElement(roll) {
    const template = document.querySelector("#roll-template");
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector(".cart-item");
    const rollListElement = document.querySelector("#roll-list");
    rollListElement.prepend(roll.element);

    updateElement(roll);
}

function updateElement(roll) {
    let rollImageElement = roll.element.querySelector(".roll-image");
    let rollNameElement = roll.element.querySelector("#roll-name-element");
    let rollGlazingElement = roll.element.querySelector("#glazing-element");
    let rollPackElement = roll.element.querySelector("#pack-size-element");
    let rollPriceElement = roll.element.querySelector(".cart-price");

    rollImageElement.src = "../assets/products/" + rolls[roll.type].imageFile;
    rollNameElement.innerText = roll.type;
    rollGlazingElement.innerText = roll.glazing;
    rollPackElement.innerText = roll.size;
    rollPriceElement.innerText = "$" + calculateRollPrice(roll);
}

function updatePagePrice() {
    let pagePriceElement = document.querySelector("#total-price-element");
    pagePriceElement.innerText = "$" + calculatePagePrice();
}

updatePagePrice();

// Remove nodes



