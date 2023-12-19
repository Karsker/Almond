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
