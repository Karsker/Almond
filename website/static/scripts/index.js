function showResourcesFlyover() {
    if (window.innerWidth > 800) {
        let flyover = document.querySelector("#flyoverContainer");
        if (flyover.style.display == 'block') {
            flyover.style.display = 'none';
        } else {
            flyover.style.display = 'block';    
        }
    }
}

closeBtn = document.querySelector('.messageDismissButton');
console.log(closeBtn);
if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none';
    })
}