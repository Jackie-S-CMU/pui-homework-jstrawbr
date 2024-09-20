// const glazingOptions = {
//     'Keep original': 0, 'Sugar milk': 0, 'Vanilla milk': 0.50, 'Double chocolate': 1.50,
// }

// const packOptions = {
//     '1': 1, '3': 3, '6': 5, '12': 10,
// }

// function glazingChoice {
//     const choice = document.querySelector('#glazing-select');
//     choice.addEventListener('change', updatePrice);
// }

// // function calculatePrice(glazingChoice, packChoice) { // Choice will be what the user has selected
// //     const basePrice = 2.49;
    
// //     const glazingPrice = glazingOptions[glazingChoice];
// //     const packPrice = packOptions[packChoice];

// //     const finalPrice = (basePrice+glazingPrice)*packPrice;
// //     return finalPrice
// // }

let glazingOptions = [
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

const glazingSelection = document.querySelector('#glazing-select');
for (i = 0; i<glazingOptions.length; i++) {
    const selectionItem = glazingOptions[i];
    const newOption = document.createElement('option');
        newOption.textContent = selectionItem.glazing;
    glazingSelection.appendChild(newOption);
};

const packSelection = document.querySelector('#pack-select');
for (i = 0; i<glazingOptions.length; i++) {
    const selectionItem = glazingOptions[i];
    const newOption = document.createElement('option');
        newOption.textContent = selectionItem.price;
    packSelection.appendChild(newOption);
};

// function updatePrice() {
//     let glazingOption = document.querySelector('#glazing-select').value;
//     let packOption = document.querySelector('#pack-select').value;

//     let priceAdaptation = 

//     let optionName = 


//     // access the price adaptation for each selector, for both glazing and pack function is called find

//     // calculate total price and update inner text
// }




