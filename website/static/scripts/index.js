function showUserInfo() {
    let arrow = document.querySelector("#userInfoArrow");
    if (arrow.style.transform == "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)";
    } else {
        arrow.style.transform = "rotate(180deg)";
    }
    arrow.style.transition = "0.5s";

    let options = document.querySelector(".userOptions");

    if (window.getComputedStyle(options).maxHeight == "80px") {
        options.style.maxHeight = "0";
    } else {
        options.style.maxHeight = "80px";
    }
}

function addNote() {
    let newNote = document.querySelector(".newNoteContainer");
    newNote.style.display = "block";

}

let closeBtns = document.querySelectorAll(".messageDismissButton");

if (closeBtns) {
    Array.from(closeBtns).forEach(closeBtn => {
        closeBtn.addEventListener("click", (e) => {
            e.target.parentElement.style.display = "none";
        });
    })
    
}

let userInfo = document.querySelector(".navUserInfo");

if (userInfo) {
    userInfo.addEventListener("click", showUserInfo);
}

