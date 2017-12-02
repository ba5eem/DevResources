//jshint esversion: 6

const express = require('express');
const exphbs  = require('express-handlebars');
const app     = express();
const port    = process.env.PORT || 8080;

app.engine('.hbs',exphbs({ 
  defaultLayout: 'main', 
  extname: '.hbs' }));

app.set('view engine', '.hbs');




app.get('/', ( req, res ) => {
  res.render('home', {foo: 'Home Page', movies:['Star Wars', 'Matrix', 'IT', 'Mulan', 'ID4']});
});

app.listen(port, () => {
  console.log("Server listening on: ", port);
});



