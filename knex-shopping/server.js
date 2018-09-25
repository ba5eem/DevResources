const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./knex/knex.js');
const bookshelf = require('bookshelf')(knex);
const app = express();

//db routes
const User = bookshelf.Model.extend({
	tableName: 'users'
});


function success(arg){
	// do success stuff here
	console.log(arg)
};

function failed(arg){
	// do failed stuff here
	console.log(arg);
};

User.where('id',1).fetch()
.then((res) => success(res))
.catch((err) => failed(err))





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


