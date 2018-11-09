require('dotenv').config()
const PORT = process.env.EXPRESS_HOST_PORT

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session)
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');


const app = express();

app.get('/', (req,res) => {
	res.json('Welcome to your Home');
});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});
