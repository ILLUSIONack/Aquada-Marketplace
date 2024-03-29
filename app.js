const express = require('express')
const app = express()
const port = 8000
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

app.get('/products', (req, res) => res.render('pages/products.html'));
app.get('/services', (req, res) => res.render('pages/services.html'));
app.get('/cart', (req, res) => res.render('pages/cart.html'));
app.get('/emptycart', (req, res) => res.render('pages/emptycart.html'));

app.get('/register', (req, res) => res.render('pages/register.html'));
app.get('/accountnav', (req, res) => res.render('partials/accountNav.html'));
app.get('/shrimps', (req, res) => res.render('pages/shrimps.html'));
app.get('/shrimpsdescription', (req, res) => res.render('pages/shrimpsdescription.html'));

app.get('/productdescription', (req, res) => res.render('pages/productdescription.html'));


app.listen(port, () => console.log(`Aquada app listening on port ${port}!`))