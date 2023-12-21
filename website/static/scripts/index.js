


function showResourcesFlyover() {
    
    if (window.innerWidth > 800) {
        let flyover = document.querySelector(".resourcesFlyover");
        if (flyover.style.display == 'block') {
            flyover.style.display = 'none';
        } else {
            flyover.style.display = 'block';    
        }
    }
}

function showUserInfo() {
    
    let arrow = document.querySelector('#userInfoArrow');
    if (arrow.style.transform == 'rotate(180deg)') {
        arrow.style.transform = 'rotate(0deg)';
    } else {
        arrow.style.transform = 'rotate(180deg)';
    }
    arrow.style.transition = '0.5s'

    if (window.innerWidth > 800) {
        let flyover = document.querySelector(".userFlyover");
        if (flyover.style.display == 'block') {
            flyover.style.display = 'none';
        } else {
            flyover.style.display = 'block';    
        }
    }
}

let closeBtn = document.querySelector('.messageDismissButton');

if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none';
    })
}

let userInfo = document.querySelector('.navUserInfo');

if (userInfo) {
    userInfo.addEventListener('click', showUserInfo);
}

