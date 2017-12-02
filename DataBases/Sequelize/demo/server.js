//jshint esversion: 6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models');
const User = db.user;
const Task = db.task;
var b;

app.use(bodyParser.urlencoded({extended: true}));

app.post('/tasks', ( req, res ) => {
  b = req.body;
  return Task.create({ title: b.title})
  .then( (newTask) => {
    return res.json(newTask);
  });
});



app.post('/users', ( req, res ) => {
  b = req.body;
  return User.create({ username: b.username,
  password: b.password,
  age: b.age,
  income: b.income })
  .then( (newUser) => {
    return res.json(newUser);
  });
});

app.get('/users', ( req, res ) => {
  return User.findAll()
  .then(users => {
    return res.json(users);
  });
});


app.post('/users/:id/task',(req,res)=>{
  const userId = req.params.id;
  const title = req.body.title;
  
  return User.findById(userId)
  .then((user) => {
    return Task.create({title: title, userId: user.id});
  })
  .then(newTask =>{
    return res.json(newTask);
  });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  return User.findById(userId,{
    include: [{ model: Task }]
  })
  .then(userWithTasks => {
    return res.json(userWithTasks);
  })
  .catch(err => {
    console.error(err);
  });
});

app.get('/tasks', ( req, res ) => {
  return Task.findAll()
  .then(tasks => {
    return res.json(tasks);
  });
});


app.delete('/gallery/:id/edit', (req, res) => {
  const id = req.params.id;

  Gallery.destroy({where : {id : id}})
    .then((data) => {
      let locals ={
        data : data
      };
      return res.redirect('/gallery');
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

app.listen(3000, () =>{
  db.sequelize.sync({ force: false });
  console.log("Server listening on port 3000");
});