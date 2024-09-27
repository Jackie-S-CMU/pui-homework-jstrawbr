const cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");




const pageHeader = document.querySelector('#type');
pageHeader.innerText = rollType + ' Cinnamon Roll';

const pageImage = document.querySelector('.description-photo');
pageImage.src = '../assets/products/' + String(rollType).toLowerCase() + '-cinnamon-roll.jpg';