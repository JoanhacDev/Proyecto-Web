const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const colors = require('colors');

const path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        } else if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));


app.get('/', (req, res) => {
    console.log('Estás accediendo a la ruta principal'.bgGreen.black.bold);
    res.render('index')
});

app.get('/brawlers', (req, res) => {
    console.log('Estás accediendo a la ruta brawlers'.bgCyan.black.bold);
    res.render('pages/brawlers')
});

app.get('/modos-de-juego', (req, res) => {
    console.log('Estás accediendo a la ruta modos de juego'.bgYellow.black.bold);
    res.render('pages/modos-juego')
});

app.get('/competitivo', (req, res) => {
    console.log('Estás accediendo a la ruta competitivo'.bgRed.black.bold);
    res.render('pages/competitivo')
});

app.use((req, res) => {
    console.log('pages/404'.bgMagenta.black.bold);
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`Servidor en: http://localhost:${port}`);
});