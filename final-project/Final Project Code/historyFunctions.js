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