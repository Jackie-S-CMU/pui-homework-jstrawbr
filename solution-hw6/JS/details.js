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

// Add to cart and update local storage

let cart = retrieveFromLocalStorage();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartArrayString);
    console.log("Current contents of cart in local storage: " + localStorage.getItem('storedCart'));
}

// Retrieving cart from local storage

function retrieveFromLocalStorage() {  
    let cartArrayString = localStorage.getItem('storedCart');
    let cartArray = JSON.parse(cartArrayString);

    if (cartArray === null) {
        cartArray = [];
    }
    return cartArray;
}