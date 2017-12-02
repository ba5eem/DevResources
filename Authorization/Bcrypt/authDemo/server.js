//jshint esversion: 6
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const passport = require('passport');
const redis = require('connect-redis')(session);
const bcrypt = require('bcrypt');
const db = require('./models');
const LocalStrategy = require('passport-local').Strategy;
const saltRounds = 12;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('assets'));


app.use(session({
  store: new redis(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user,done) => {
  console.log("serializing");
  return done(null, {
    id: user.id,
    username: user.username
  });
});

passport.deserializeUser((user, done) => {
  console.log('deserializing');
  db.users.findOne({where: { id: user.id}})
  .then(user => {
    return done(null, {
      id: user.id,
      username: user.username
    });
  });
});

passport.use(new LocalStrategy(function(username, password, done) {
    db.users.findOne({where: { username: username } })
    .then( user => {
      if(user === null) {
        return done(null, false, {message: 'bad username or password'});
      }
      else { 
        bcrypt.compare(password, user.password)
        .then (res => {
          console.log(res);
          if (res) {return done(null, user); }
          else {
            return done(null, false, {message: 'bad username or password'});
          }
        });
      }
    })
    .catch(err =>{
      console.error('error: ', err);
  });
}));

app.get('/', (req, res)=>{
  res.json("Smoke Test");
});

app.get('/login',(req,res)=>{
  res.render('home');
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/'
  }));

app.get('/logout', (req,res) =>{
  req.logout();
  req.sendStatus(200);
});

app.get('/register',(req,res)=>{
  res.render('edit');
});

app.post('/register', (req,res) =>{
  bcrypt.genSalt(saltRounds, function(err,salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      db.users.create({
        username: req.body.username,
        password: hash
      })
      .then( (user) => {
        console.log(user);
        res.redirect('/');
      })
      .catch((err) => {
        return res.send('Stupid Username'); 
      });
    });
  });
});

function isAuthenticated(req, res, next){
  console.log(req.isAuthenticated());
  if(req.isAuthenticated()){next();}
  else{res.redirect('/');}
}
app.get('/secret', isAuthenticated, (req,res)=>{
  console.log('req.user: ', req.user);
  console.log('req.user id: ', req.user.id);
  console.log('req.username: ', req.user.username);
  console.log('req.user.password: ', req.user.password);
  res.send('you found the secret');
});

const server = app.listen(3000,()=>{
  db.sequelize.sync({force: false});
  console.log("Enter The Matrix on port 3000");
});