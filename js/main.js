const navMenu = document.querySelector('.nav-menu');
const navList = document.querySelector('.nav-list');
const linksNav = document.querySelectorAll('.nav-link');

navMenu.addEventListener('click', () => {
    navList.classList.toggle('nav-list-show');
});

linksNav.forEach(function (link) {
    link.addEventListener('click', () => {
        navList.classList.remove('nav-list-show');
    })
})