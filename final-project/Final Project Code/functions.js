/* Potential libraries:
    - Countdown timer: https://albert-gonzalez.github.io/easytimer.js/ 
    - Slider: https://www.cssscript.com/range-slider-rolling-counter/
*/

// CTRL F TBD

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

//////// //////// //////// //////// CHANGE NUMBER OF VISIBLE LINES //////// //////// //////// ////////

let slider = document.querySelector("#lines-slider");

slider.addEventListener("input", (event) => {
    let curtain = document.querySelector("#curtain")
    let sliderValue = document.querySelector("#lines-slider").value;

    if (sliderValue === "1") {
        curtain.style.height = "40vh"
    }

    else if (sliderValue === "2") {
        curtain.style.height = "30vh"
    }

    else if (sliderValue === "3") {
        curtain.style.height = "23vh"
    }

    else if (sliderValue === "4") {
        curtain.style.height = "14vh"
    };
})


function updateCurtain() {

    if (sliderValue = 1) {
        curtain.style.height = "30vh"
    }

    else if (sliderValue = 2) {
        curtain.style.height = "25vh"
    }

    else if (sliderValue = 3) {
        curtain.style.height = "20vh"
    }

    else if (sliderValue = 4) {
        curtain.style.height = "15vh"
    }

    console.log("slider selected!");
}

//////// //////// //////// //////// WORD COUNTER //////// //////// //////// ////////

// Retrieve word count

function countWords() {
    let writingArea = document.querySelector("#writing-area");
    let writing = writingArea.innerText;

    return writing.split(" ").length + 1; // Source: https://stackoverflow.com/questions/18679576/counting-words-in-string
}

// Update UI with word count

function updateWordCount() {
    let wordCounter = document.querySelector("#word-count");
    let wordCount = countWords();

    wordCounter.innerText = "Words: " + wordCount;
}

// Run word counter on page load and every time the user adds or removes words

window.onload = runWordCount();

function runWordCount() {
    updateWordCount();
    
    let writingArea = document.querySelector("#writing-area");
    writingArea.addEventListener("keydown", updateWordCount);    
}

//////// //////// //////// //////// CURTAIN FALL BEHAVIOR //////// //////// //////// ////////

// Lower curtain

function lowerCurtain() {
    let curtain = document.querySelector("#curtain")
    curtain.style.height = "30vh";
}

// Trigger curtain fall event NEEDS TO INCLUDE 'KEEP GOING'

window.onload = triggerCurtain();

function triggerCurtain() {
    let writingArea = document.querySelector("#writing-area");
    writingArea.addEventListener("keydown", triggerDelay, { once: true });
}

// Trigger curtain fall delay interval

function triggerDelay() {
    setTimeout(lowerCurtain, 1000);
}

//////// //////// //////// //////// SAVED DRAFT BEHAVIOR //////// //////// //////// ////////

// Trigger behavior

let saveButton = document.querySelector(".save-draft-button");
saveButton.addEventListener("click", saveBehavior);

function saveBehavior() {
    addNewDraft();
    rescindCurtain();
    grayOutText();
    addDraftOptions();
}

// Save text to local storage and history

class Draft {
    constructor (body) {
        this.draftBody = body;

        this.element = null;
    }
}

let allDrafts = [];

function addNewDraft(body) {
    let writingArea = document.querySelector("#writing-area");
    let writing = writingArea.textContent;
    
    let draft = new Draft(writing);
    allDrafts.push(draft);
    saveDraftToStorage();
    return draft;
}

function saveDraftToStorage() {
    let allDraftsString = JSON.stringify(allDrafts);
    localStorage.setItem('storedDrafts', allDraftsString);
}

function populateFromLocalStorage() {  
    let draftArrayString = localStorage.getItem('storedDrafts');
    let allDrafts = JSON.parse(draftArrayString);

    if (allDrafts === null) {
        allDrafts = [];
    }
    return allDrafts;
}

// Page styling

function rescindCurtain() {
    let curtain = document.querySelector("#curtain")
    curtain.style.height = "1vh";
}

function grayOutText() {
    let writingArea = document.querySelector("#writing-area");
    writingArea.style.color = "#D3D3D3";
    writingArea.style.height = "35vh";
}

function returnDefaultText() {
    let writingArea = document.querySelector("#writing-area");
    writingArea.style.color = "#000";
    writingArea.style.height = "50vh";
}

// Change button state // TBD

// Keep going or save draft options

function addDraftOptions() {
    let container = document.querySelector("#draft-options");
    
    let keepGoingButton = document.createElement("button");
    keepGoingButton.setAttribute("id", "keep-going-button");
    keepGoingButton.textContent = "Keep going";
    container.appendChild(keepGoingButton);
    keepGoingButton.addEventListener("click", keepGoingDraft);

    let newDraftButton = document.createElement("button");
    newDraftButton.setAttribute("id", "new-draft-button");
    newDraftButton.textContent = "New draft";
    container.appendChild(newDraftButton);
    newDraftButton.addEventListener("click", reloadForNewDraft);
};

function removeDraftOptions() {
    let container = document.querySelector("#draft-options");
    let keepGoingButton = document.querySelector("#keep-going-button");
    let newDraftButton = document.querySelector("#new-draft-button");

    container.removeChild(keepGoingButton);
    container.removeChild(newDraftButton);
}

function keepGoingDraft(){
    lowerCurtain();
    returnDefaultText();
    removeDraftOptions();
}

function reloadForNewDraft() {
    location.reload();
}

//////// //////// //////// //////// COPY TEXT TO CLIPBOARD //////// //////// //////// ////////

let copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", copyDraftToClipboard);

function copyDraftToClipboard() {
    let writing = retrieveDraftText();
    navigator.clipboard.writeText(writing);
}

//////// //////// //////// //////// START NEW DRAFT //////// //////// //////// ////////

// Give warning (from unsaved draft)



//////// //////// //////// //////// CHANGE NUMBER OF VISIBLE LINES //////// //////// //////// ////////

//////// //////// //////// //////// COUNTDOWN TIMER //////// //////// //////// ////////