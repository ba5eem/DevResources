//jshint esversion: 6

const express = require('express');
const app = express();
const db = require('./models');
const User = db.user;





app.post('/users', (req, res) => {
  User.create({username: req.body.username})
  .then( (user) => {
    res.json(user);
  });
});

// app.get('/users', (req,res) => {
//   User.findAll()
//   .then( (users) => {
//     res.json(users);
//   });
// });

app.listen(3000, () => {
  db.sequelize.sync();
});
