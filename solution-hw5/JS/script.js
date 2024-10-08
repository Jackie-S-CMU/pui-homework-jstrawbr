// Based on lab

// Create rolls and add to cart array

const cart = [];

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

// Create elements

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

    rollImageElement.src = "../assets/products/" + rolls[roll.type].imageFile;
    rollNameElement.innerText = roll.type;
    rollGlazingElement.innerText = roll.glazing;
    rollPackElement = roll.size;
}
// // First attempt

// // Create rolls and add to cart array

// const cart = [];

// class Roll {
//     constructor(rollType, rollGlazing, packSize, rollPrice) {
//         this.type = rollType;
//         this.glazing = rollGlazing;
//         this.size = packSize;
//         this.basePrice = rollPrice;

//         this.element = null;
//     }
// }

// const originalRoll = new Roll("Original", "Sugar Milk", 1, 2.49); // TODO: Can you get the base prices out of the json?
// const walnutRoll = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
// const raisinRoll = new Roll("Raisin", "Sugar Milk", 3, 2.99); 
// const appleRoll = new Roll("Apple", "Original", 3, 3.49);

// cart.push(originalRoll, walnutRoll, raisinRoll, appleRoll);

// // Create pricing information

// let glazePrice = 0;
// let packPrice = 1;
// let totalPrice = 0;

// const glazingOptions = [ // TODO: Consistent quotation marks throughout
//     {
//         glazing:"Keep Original",
//         price: 0,
//     },
//     {
//         glazing:"Sugar Milk",
//         price: 0,
//     },
//     {
//         glazing:"Vanilla Milk",
//         price: 0.50,
//     },
//     {
//         glazing:"Double Chocolate",
//         price: 1.50,
//     },
// ];

// const packSizes = [
//     {
//         size: 1,
//         price: 1,
//     },
//     {
//         size: 3,
//         price: 3,
//     },
//     {
//         size: 6,
//         price: 5,
//     },
//     {
//         size: 12,
//         price: 10,
//     },
// ];

// function glazingChange(roll) {
//     for (let i = 0; i<glazingOptions.length; i++) {
//         if (glazingOptions[i].glazing === roll.glazing) {
//             glazePrice = 0;
//             glazePrice = glazePrice + glazingOptions[i].price;
//         }
//     }
//     return glazePrice;
// }

// function packChange(roll) {
//     for (let i=0; i<packSizes.length; i++) {
//         if (packSizes[i].size === roll.size) {
//             packPrice = 1;
//             packPrice = packPrice + packSizes[i].price - 1;
//         }
//     }
//     return packPrice;
// }

// function updateRollPrice(roll) {
//     glazingChange(roll);
//     packChange(roll);
//     const finalPrice = ((roll.basePrice + glazePrice) * packPrice).toFixed(2);
//     return finalPrice;
// }

// // Add cart item details to page

// function createCartItem(roll) {
//     const cartTemplate = document.querySelector('#all-rolls');
//     const clone = cartTemplate.content.cloneNode(true);
//     roll.element = clone.querySelector('.cart-item');

//     const cartElement = document.querySelector(".template-container");
//     cartElement.prepend(roll.element);

//     updateCart(roll);
//     updateTotalPrice(roll);
// }

// function updateCart(roll) {
//     const imageElement = roll.element.querySelector(".cart");
//     const nameElement = roll.element.querySelector("#roll-name-element");
//     const glazingElement = roll.element.querySelector("#glazing-element");
//     const packSizeElement = roll.element.querySelector("#pack-size-element");
//     const priceElement = roll.element.querySelector(".cart-price");
//     const removeElement = roll.element.querySelector(".remove")

//     imageElement.src = '../assets/products/' + rolls[roll.type]["imageFile"];
//     nameElement.textContent = roll.type + " Cinnamon Roll";
//     glazingElement.textContent = roll.glazing;
//     packSizeElement.textContent = roll.size;
//     priceElement.textContent = updateRollPrice(roll);
// }

// function updateTotalPrice(roll){
//     for (let i=0; i<cart.length; i++) {
//         totalPrice = totalPrice + updateRollPrice(cart[i]);
//     }
//     console.log(totalPrice);
//     return totalPrice;
// }

// createCartItem(originalRoll);
// createCartItem(walnutRoll);
// createCartItem(raisinRoll);
// createCartItem(appleRoll);





