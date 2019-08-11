const express = require('express')
const app = express()
const port = 3000
const nunjucks = require('nunjucks');

nunjucks.configure(__dirname + '/views', {
    autoescape: true,
    express: app,
});

app.set('view engine', 'html');
app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => res.render('pages/index.html'));

app.get('/search', (req, res) => res.render('pages/search.html', {
    search_query: "glycinate"
}));

app.get('/product', (req, res) => res.render('pages/products.html'));

app.get('/register', (req, res) => res.render('pages/register.html'));

app.get('/productdescription', (req, res) => res.render('pages/productdescription.html'));

app.listen(port, () => console.log(`Aquada app listening on port ${port}!`))