const express 			= require('express');
const bodyParser 		= require('body-parser');
const knex 					= require('./knex/knex.js');
const passport 			= require('passport');
const bookshelf 		= require('bookshelf')(knex);
const session 			= require('express-session');
const RedisStore 		= require('connect-redis')(session);
const app           = express();
//db models
const Users        = require("./knex/models/Users");
// require in routes
const usersRoutes   = require('./routes/users.js');
const productRoutes = require('./routes/products.js');
const authRoutes    = require('./routes/auth.js');

const store = session({
    store: new RedisStore(),
    secret: 'keyboard cat',
    resave: false,
});


// session
app.use(store);
// passport - authentication
app.use(passport.initialize());
app.use(passport.session());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// routes for CRUD
app.use('/users', usersRoutes);
app.use('/products', productRoutes);
app.use('/auth', authRoutes);



app.use('*', (req, res) => {
	res.json('404');
});

app.listen(3000);


