const router = require('express').Router();
const Users = require('../db/models/Users');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

passport.serializeUser( (user, done) => {
  console.log('serializeUser', user)
  done(null, {
    email: user.email,
    zomg: 'randomData'
  })
})

passport.deserializeUser( (user, done) => {
  console.log('deserializing User', user)
  Users
    .where({email: user.email})
    .fetch()
    .then( user => {
      user = user.toJSON();
      done(null, user)
    })
    .catch( err => {
      console.log('err', err)
    })
})

passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
  console.log('local is being called')
  Users
    .where({email})
    .fetch()
    .then( user => {
      console.log('user in local strategy', user)
      user = user.toJSON();
      // if (user.password === password) {
      //   done(null, user )
      // } else {
      //   done(null, false)
      // }
      bcrypt.compare(password, user.password)
        .then( res => {
          if (res) {
            done(null, user)
          } else {
            done(null, false)
          }
        })
    })
    .catch( err => {
      done(null, false)
    })
}))


const SALT_ROUND = 12

router.post('/auth/register', (req, res) => {

  const { email, password } = req.body;

  bcrypt.genSalt(12)
    .then( salt => {
      console.log('salt', salt)
      return bcrypt.hash(password, salt)
    })
    .then( hash => {
      console.log('hash', hash)
      return Users 
                .forge({email, password: hash})
                .save()
    })
    .then( user => {
      user = user.toJSON()
      res.json(user) // Never send the entire user object back to client! It has their password!
      // res.sendStatus(200)
      // res.redirect('/api/auth/secret')
    })
    .catch( err => {
      console.log('err', err)
      res.json(err)
      // res.sendStatus(500)
    })
})

router.post('/auth/login', passport.authenticate('local', {failureRedirect: '/'}), (req, res) => {
  // grab the user on record
  // compare req.body.password to password on record

  res.send('YAY IM IN!!!!')
})

router.post('/auth/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/auth/secret',isAuthenticated, (req, res) => { 
  res.send('YOU HAVE FOUND DA SEKRET')
})

function isAuthenticated(req, res, done) {
  if (req.isAuthenticated()) {
    done()
  } else {
    res.redirect('/')
  }
}

module.exports = router;