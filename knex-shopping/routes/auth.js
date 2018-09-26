const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knex/knex.js');
const route = express.Router();

// parse application/x-www-form-urlencoded
route.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
route.use(bodyParser.json())



route.get('/', (req,res) => {
	res.json('auth page');
});

module.exports = route;
