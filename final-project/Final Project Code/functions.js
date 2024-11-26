/* Potential libraries:
    - Countdown timer: https://albert-gonzalez.github.io/easytimer.js/ 
    - Slider: https://www.cssscript.com/range-slider-rolling-counter/
*/

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
    curtain.style.height = "25vh";
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
    saveDraft();
    rescindCurtain();
    grayOutText();
    addDraftOptions();
}

// Save text to local storage

function retrieveDraftText() {
    let writingArea = document.querySelector("#writing-area");
    let writing = writingArea.innerText;
    return writing;
}

function saveDraft() {
    let draftStorage = "";
    draftStorage = retrieveDraftText();
    
    localStorage.setItem("storedDrafts", draftStorage);
    console.log("Current storage: " + localStorage.getItem("storedDrafts"))
}

// Save to history page

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

// Change button state

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

//////// //////// //////// //////// CHANGE NUMBER OF VISIBLE LINES //////// //////// //////// ////////