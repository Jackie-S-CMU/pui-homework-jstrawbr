/* Libraries used:
    - Countdown timer: https://albert-gonzalez.github.io/easytimer.js/ 
*/


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

let saveButton = document.querySelector("#save-draft-button");
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
}

// Change button state

// Keep going or save draft options

function addDraftOptions() {
    let keepGoing = document.createElement("button");
    keepGoing.textContent = "Keep going"
    
    let newDraft = document.createElement("button");
    newDraft.textContent = "New draft"

    let container = document.querySelector("#draft-options");
    container.appendChild(keepGoing);
    container.appendChild(newDraft);
}

//////// //////// //////// //////// COPY TEXT TO CLIPBOARD //////// //////// //////// ////////

//////// //////// //////// //////// START NEW DRAFT //////// //////// //////// ////////

//////// //////// //////// //////// DARK MODE //////// //////// //////// ////////

//////// //////// //////// //////// CHANGE NUMBER OF VISIBLE LINES //////// //////// //////// ////////