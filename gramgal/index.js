const express = require('express');
const app = express();
const bp = require('body-parser');
const exphbs = require('express-handlebars');
const data = require('./db/data');


app.use(express.static('public'));
app.use(bp.urlencoded({ extended: true }));

app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs'); 


app.get('/', (req, res) => {
	console.log(data);
  res.render('home', {data});
});


app.listen(9000);