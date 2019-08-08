var topNav = document.getElementById('topNav');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        topNav.classList.add('whitec');
    } else {
        topNav.classList.remove('whitec');
    }
})