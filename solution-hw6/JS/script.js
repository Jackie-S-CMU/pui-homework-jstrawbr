// Update details page info

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const pageHeader = document.querySelector('#type');
pageHeader.innerText = rollType + ' Cinnamon Roll';

const pageImage = document.querySelector('.description-photo');
pageImage.src = '../assets/products/' + rolls[rollType].imageFile;

const pagePrice = document.querySelector('#price-dollar');
const rollPrice = rolls[rollType].basePrice;
pagePrice.innerText = "$" + rollPrice;

// Update content based on dropdown selects

let basePrice = rolls[rollType].basePrice;
let glazePrice = 0;
let packPrice = 1;

let chosenGlazing = "";
let chosenPack = "";

const glazingOptions = [
    {
        glazing:'Keep original',
        price: 0,
    },
    {
        glazing:'Sugar milk',
        price: 0,
    },
    {
        glazing:'Vanilla milk',
        price: 0.50,
    },
    {
        glazing:'Double chocolate',
        price: 1.50,
    },
];

const packSizes = [
    {
        size:'1',
        price: 1,
    },
    {
        size:'3',
        price: 3,
    },
    {
        size:'6',
        price: 5,
    },
    {
        size:'12',
        price: 10,
    },
];

const glazingSelection = document.querySelector('#glazing-select');
for (i = 0; i<glazingOptions.length; i++) {
    const selectionItem = glazingOptions[i];
    const newOption = document.createElement('option');
        newOption.textContent = selectionItem.glazing;
    glazingSelection.appendChild(newOption);
};

const packSelection = document.querySelector('#pack-select');
for (i = 0; i<packSizes.length; i++) {
    const selectionItem = packSizes[i];
    const newOption = document.createElement('option');
        newOption.textContent = selectionItem.size;
    packSelection.appendChild(newOption);
};

function updatePrice() {
    let displayedPrice = document.querySelector('#price-dollar');
    let finalPrice = ((basePrice + glazePrice) * packPrice).toFixed(2);
    displayedPrice.innerHTML = "$" + String(finalPrice);
}

function glazingChange(element) {
    for (let i = 0; i<glazingOptions.length; i++) {
        if (glazingOptions[i].glazing === element.value) {
            glazePrice = 0;
            glazePrice = glazePrice + glazingOptions[i].price;
        }
    }
    updatePrice();   
}

function packChange(element) {
    for (let i=0; i<packSizes.length; i++) {
        if (packSizes[i].size === element.value) {
            packPrice = 1;
            packPrice = packPrice + packSizes[i].price - 1;
        }
    }
    updatePrice();
}

// Add to Cart button functionality

const cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// // Learned how to access selected values as below here: https://stackoverflow.com/questions/5913/getting-the-text-from-a-drop-down-box

function updateCart() {   
    const newRoll = new Roll (
        rollType,
        glazingSelection.options[glazingSelection.selectedIndex].text,
        packSelection.options[packSelection.selectedIndex].text,
        basePrice
    )
    cart.push(newRoll);
    saveToLocalStorage();
}

const button = document.querySelector('#cart-button');
button.addEventListener("click", updateCart);

// Saving cart to local storage

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);
    console.log("Current contents of cart in local storage: " + localStorage.getItem('storedCart'));
}

// // Retrieving cart from local storage // DO I ACTUALLY NEED THIS

// function retrieveFromLocalStorage() {
//     const cartArrayString = localStorage.getItem('storedCart');
//     const cartArray = JSON.parse(cartArrayString);
//     console.log(cartArray);
// }





// //////////// HW5 /////////////

// let cart = [];

// // Create rolls and add to cart array

// class Roll {
//     constructor(rollType, rollGlazing, packSize, rollPrice) {
//         this.type = rollType;
//         this.glazing = rollGlazing;
//         this.size = packSize;
//         this.basePrice = rollPrice;

//         this.element = null;
//     }
// }

// function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {
//     const newRoll = new Roll(rollType, rollGlazing, packSize, rollPrice);
//     cart.push(newRoll);
//     return newRoll;
// }

// const originalRoll = addNewRoll("Original", "Sugar Milk", 1, 2.49);
// const walnutRoll = addNewRoll("Walnut", "Vanilla Milk", 12, 3.49);
// const raisinRoll = addNewRoll("Raisin", "Sugar Milk", 3, 2.99); 
// const appleRoll = addNewRoll("Apple", "Original", 3, 3.49);

// // Calculate prices

// function calculateRollPrice(roll) {
//     let rollPrice = 0;
//     rollPrice = roll.size * roll.basePrice;
//     return rollPrice;
// }

// function calculatePagePrice() {
//     pagePrice = 0;
//     for (let i=0; i<cart.length; i++){
//         cart[i].size
//         pagePrice = pagePrice + cart[i].size * cart[i].basePrice;
//     }
//     return pagePrice;
// }

// // Update elements

// for (const roll of cart) {
//     createElement(roll);
// }

// function createElement(roll) {
//     // Set up template components
//     const template = document.querySelector("#roll-template");
//     const clone = template.content.cloneNode(true);
//     roll.element = clone.querySelector(".cart-item");
//     const rollListElement = document.querySelector("#roll-list");
//     rollListElement.prepend(roll.element);

//     // Add event listener to remove button
//     const removeButton = roll.element.querySelector(".remove");
//     removeButton.addEventListener("click", () => {removeRoll(roll)});

//     // Call functions

//     updateElement(roll);
// }

// function updateElement(roll) {
//     let rollImageElement = roll.element.querySelector(".roll-image");
//     let rollNameElement = roll.element.querySelector("#roll-name-element");
//     let rollGlazingElement = roll.element.querySelector("#glazing-element");
//     let rollPackElement = roll.element.querySelector("#pack-size-element");
//     let rollPriceElement = roll.element.querySelector(".cart-price");

//     rollImageElement.src = "../assets/products/" + rolls[roll.type].imageFile;
//     rollNameElement.innerText = roll.type + " Cinnamon Roll";
//     rollGlazingElement.innerText = "Glazing: " + roll.glazing;
//     rollPackElement.innerText = "Pack size: " + roll.size;
//     rollPriceElement.innerText = "$" + calculateRollPrice(roll);
// }

// function updatePagePrice() {
//     let pagePriceElement = document.querySelector("#total-price-element");
//     pagePriceElement.innerText = "$" + calculatePagePrice();
// }

// updatePagePrice();

// // Remove rolls

// function removeRoll(roll) {
//     // Remove nodes
//     roll.element.remove();
    
//     // Remove cart array items
//     const rollIndex = cart.indexOf(roll);
//     cart.splice(rollIndex, 1);

//     // Update total price
//     updatePagePrice();
// }