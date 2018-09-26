const PORT = process.env.EXPRESS_CONTAINER_PORT;

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session)
const passport = require('passport');

const Tasks = require('./db/models/Tasks');
const Users = require('./db/models/Users');
const AuthRoutes = require('./routes/auth')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  store: new RedisStore(),
  secret: 'oompah loompah',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('sanity check')
})
app.use('/api', AuthRoutes)

// get all users
app.get('/api/users', (req, res) => {
  Users
  .fetchAll()
  .then( users => {
    res.json(users.serialize());
  })
  .catch( err => {
    res.json(err);
  })
})

// get all tasks by user_id
app.get('/api/users/:user_id/tasks', (req, res) => {
  const { user_id } = req.params;
  Tasks
    .where({user_id})
    .fetchAll()
    .then( tasks => {
      res.json(tasks.serialize())
    })
    .catch( err => {
      res.json(err);
    })
})

// create task by user id
app.post('/api/users/:user_id/tasks/new', (req, res) => {
  const { user_id } = req.params;
  const payload = {
    name: req.body.name
  }
  Tasks
    .forge(payload)
    .save()
    .then( result => {
      res.json(result)
    })
    .catch( err => {
      console.log('error', err)
      res.json(err);
    })
})

// update task by task id
app.put('/api/tasks/:task_id/edit', (req, res) => {
  const { task_id } = req.params;
  
  const payload = {
    name: req.body.name,
    is_complete: req.body.is_complete
  }

  Tasks
    .where({task_id})
    .fetch()
    .then( task => {
      return task.save(payload)
    })
    .then( result => {
      console.log('result', result)
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    })
})

// delete task by task id
app.delete('/api/tasks/:task_id/delete', (req, res) => {
  const { task_id } = req.params;
  
  Tasks
    .where({ task_id })
    .destroy()
    .then( result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})