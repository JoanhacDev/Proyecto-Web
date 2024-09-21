/**
 * Navegacion
 */
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
/**
 * Modo Oscuro
 */
const toogleMode = document.getElementById("toogle");
const labelToogle = document.getElementById("label-toogle");

toogleMode.addEventListener("click", (e) => {
    let checked = e.target.checked;
    document.body.classList.toggle("dark");
});