const navHTML = document.getElementById('nav-container');
navHTML.innerHTML = `
        <nav class="main-nav">
            <img class="nav-img" src="../imgs/logo.png" alt="">
            <ul class="nav-list">
                <li class="nav-item"><a class="nav-link" href="../index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="brawlers.html">Brawlers</a></li>
                <li class="nav-item"><a class="nav-link" href="modos-juego.html">Modos de Juego</a></li>
                <li class="nav-item"><a class="nav-link" href="competitivo.html">Competitivo</a></li>
            </ul>
            <i class="ph ph-list nav-menu"></i>
        </nav>`

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