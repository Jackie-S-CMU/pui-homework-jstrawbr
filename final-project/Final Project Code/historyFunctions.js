// Populate page with local storage

// function createDraftElement(draft) {
//     let template = document.querySelector("#history-template");
//     console.log("Template = ", template);
//     let clone = template.content.cloneNode(true);
//     console.log("Clone = ", clone);
//     draft.element = clone.querySelector('.history');
//     console.log("Draft element = ", draft.element);
// }

// function createHistoryElement() {
//     let historyArea = document.querySelector(".history-area");
//     console.log(historyArea);
//     let paragraph = document.createElement("p");
//     paragraph.setAttribute("id", "history-draft")
//     historyArea.appendChild(paragraph);
// }

function retrieveFromLocalStorage() {
    let historyArea = document.querySelector(".history-area");
    
    let allDraftsString = localStorage.getItem('storedDrafts');
    let allDraftsArray = JSON.parse(allDraftsString);
    
    for (let i=0; i<allDraftsArray.length; i++) {
        let paragraph = document.createElement("p");
        paragraph.setAttribute("id", "history-draft")
        paragraph.textContent = allDraftsArray[i].draftBody;
        historyArea.appendChild(paragraph);
    }
}