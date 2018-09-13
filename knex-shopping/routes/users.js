const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knex/knex.js');
const route = express.Router();

// parse application/x-www-form-urlencoded
route.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
route.use(bodyParser.json())


route.get('/', (req,res) => {
	knex.select().from('users').then(data => {
		res.json(data);
	});
});

route.get('/:id', (req,res) => {
	knex.select().from('users').where({
		id: req.params.id
	}).then(data => {
		res.json(data);
	})
});

route.post('/new', (req,res) => {
	let { email, password } = req.body;
	knex('users').insert({
		email: email,
		password: password
	}).then(data => {
		console.log(data);
	}).catch(err => console.log('err: ' ,err));
	res.json('success');
});


route.put('/edit/:id', (req,res) => {
	let { email } = req.body;
	let { id } = req.params;

	knex('users').where({ id: id }).update({
		email: email
	}).then(data => {
		console.log('then:', data)
	}).catch(err => console.log(err));
	res.json('ola');
});

module.exports = route;
