const profileMenu = document.getElementById('profileMenu');
const navProfileLink = document.querySelector('.navbar-center li:last-child a');

function toggleMenu() {
    profileMenu.classList.toggle('open');
}

function closeMenu(event) {
    if (!profileMenu.contains(event.target) && !navProfileLink.contains(event.target)) {
        profileMenu.classList.remove('open');
    }
}

document.addEventListener('click', closeMenu);


