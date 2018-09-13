const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./knex/knex.js');
const app = express();

// require in routes
const usersRoutes = require('./routes/users.js');
const productRoutes = require('./routes/products.js');
const cartRoutes = require('./routes/cart.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// routes for CRUD
app.use('/users', usersRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.use('*', (req, res) => {
	res.json('404');
});

app.listen(3000);


