let basePrice = 2.49;
let glazePrice = 0;
let packPrice = 1;

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
