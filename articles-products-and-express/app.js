//jshint esversion: 6
const express         = require('express');
const adawat         = require('adawat');
const baseem = require('baseem');
const app             = express();
const PORT            = process.env.PORT || 4000;
const exphbs          = require('express-handlebars');
const methodOverride  = require('method-override');
const bodyParser      = require('body-parser');
const products        = require('./routes/products.js');
const articles        = require('./routes/articles.js');
var Product           = require('./db/Products');
var item              = new Product();

app.engine('.hbs',exphbs({defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.get('/', ( req, res ) => {
  console.log(adawat([3,1,7,2,90,22,14,9]));//using my npm package adawat :)
    res.render('home');
  });


app.use('/products',products);
app.use('/articles', articles);

app.use('/*', (req,res) => {
  res.json('404')
})


const server = app.listen(PORT, () => {
  console.log('adawat.tajid()');
});



