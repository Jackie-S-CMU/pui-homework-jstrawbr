//window on load

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

function glazingChange(element) {
    
    for (let i = 0; i<glazingOptions.length; i++) {
        if (glazingOptions[i].glazing === element.value) {
            const glazePrice = glazingOptions[i].price;
            return glazePrice;
        }
    }

    // how do i make use of that variable outside the loop



    // document.querySelector("#glazing-select").addEventListener('change', null);
}



