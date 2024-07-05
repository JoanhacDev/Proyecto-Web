const navHTML = document.getElementById('nav-container');
navHTML.innerHTML = `
        <nav class="main-nav">
            <a href="https://supercell.com/en/games/brawlstars/"><img class="nav-img" src="../imgs/logo.png" alt=""></a>
            <ul class="nav-list">
                <li class="nav-item"><a class="nav-link" href="../index.html">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="brawlers.html">Brawlers</a></li>
                <li class="nav-item"><a class="nav-link" href="modos-juego.html">Modos de Juego</a></li>
                <li class="nav-item"><a class="nav-link" href="competitivo.html">Competitivo</a></li>
            </ul>
            <label for="toogle" id="label-toogle"><i class="ph ph-sun"></i><i class="ph ph-moon"></i></label>
            <input type="checkbox" id="toogle">
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

const toogleMode = document.getElementById("toogle");
const labelToogle = document.getElementById("label-toogle");

toogleMode.addEventListener("click", (e) => {
    let checked = e.target.checked;
    document.body.classList.toggle("dark");
});