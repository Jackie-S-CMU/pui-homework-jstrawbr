// Populate page with local storage and apply metadata

window.onload = retrieveFromLocalStorage();

function retrieveFromLocalStorage() {
    let historyArea = document.querySelector(".history-area");
    
    let allDraftsString = localStorage.getItem('storedDrafts');
    let allDraftsArray = JSON.parse(allDraftsString);
    
    for (let i=0; i<allDraftsArray.length; i++) {
        let draftID = allDraftsArray[i].draftID;
        
        let paragraph = document.createElement("p");
        paragraph.setAttribute("class", "history-draft")
        paragraph.setAttribute("id", draftID);
        paragraph.textContent = allDraftsArray[i].draftBody;
        historyArea.appendChild(paragraph);
    }
}

//////// //////// //////// //////// CLEAR HISTORY //////// //////// //////// ////////

let clearButton = document.querySelector(".clear-history-button");
clearButton.addEventListener("click", showAlert);

let cancelButton = document.querySelector("#cancel")
cancelButton.addEventListener("click", hideAlert);

let confirmButton = document.querySelector("#clear-confirm");
confirmButton.addEventListener("click", clearHistory);

function clearHistory() {
    localStorage.clear("storedDrafts");
    location.reload();
}

function showAlert() {
    let alert = document.querySelector("#alert");
    alert.style.display = "block";
}

function hideAlert() {
    let alert = document.querySelector("#alert");
    alert.style.display = "none";
}

//////// //////// //////// //////// DARK MODE LIBRARY CUSTOMIZATION //////// //////// //////// ////////

const options = {
    time: '0.5s', // default: '0.3s'
    backgroundColor: '#FFFEFC',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    saveInCookies: false, // default: true,
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);

function toggle() {
    darkmode.toggle();
}

let darkmodeSwitch = document.querySelector("input");
darkmodeSwitch.addEventListener("click", toggle);