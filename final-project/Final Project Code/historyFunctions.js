// Populate page with local storage

window.onload = retrieveFromLocalStorage();

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