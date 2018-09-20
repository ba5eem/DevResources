const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knex/knex.js');
const route = express.Router();

// parse application/x-www-form-urlencoded
route.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
route.use(bodyParser.json())


route.get('/', (req,res) => {
	knex.from('products').select('*')
	.then(response => {
		res.json(response);
	})
	.catch(err => {
		res.json('oopps.. i didnt find anything');
	})
});

route.get('/:id', (req,res) => {
	let { id } = req.params;
	knex.from('products').select('*').where({
		id: id
	}).then(response => {
		console.log(response);
		res.json(response);
	}).catch(err => {
		console.log('err');
		res.json('oh snapp not working')
	})
});

route.post('/new', (req,res) => {
	
})

module.exports = route;
