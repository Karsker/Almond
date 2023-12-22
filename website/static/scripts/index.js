function showUserInfo() {
    let arrow = document.querySelector("#userInfoArrow");
    if (arrow.style.transform == "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)";
    } else {
        arrow.style.transform = "rotate(180deg)";
    }
    arrow.style.transition = "0.5s";

    let options = document.querySelector(".userOptions");

    if (window.getComputedStyle(options).maxHeight == "40px") {
        options.style.maxHeight = "0";
    } else {
        options.style.maxHeight = "40px";
    }
}

let closeBtn = document.querySelector(".messageDismissButton");

if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
        e.target.parentElement.style.display = "none";
    });
}

let userInfo = document.querySelector(".navUserInfo");

if (userInfo) {
    userInfo.addEventListener("click", showUserInfo);
}