const express = require('express');
const app = express();
const port = 3000;
const colors = require('colors');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Estás accediendo a la ruta principal'.bgGreen.black.bold);
    res.render('index')
});

app.get('/brawlers', (req, res) => {
    console.log('Estás accediendo a la ruta brawlers'.bgCyan.black.bold);
    res.render('brawlers')
});

app.get('/modos-de-juego', (req, res) => {
    console.log('Estás accediendo a la ruta modos de juego'.bgYellow.black.bold);
    res.render('modos-juego')
});

app.get('/competitivo' , (req, res) => {
    console.log('Estás accediendo a la ruta competitivo'.bgRed.black.bold);
    res.render('competitivo')
});

app.use((req, res) => {
    console.log('404'.bgMagenta.black.bold);
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Servidor en: http://localhost:${port}`);
});