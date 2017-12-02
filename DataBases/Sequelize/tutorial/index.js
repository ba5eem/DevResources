//jshint esversion: 6

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://127.0.0.1:5432/demo');

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection made");
  })
  .catch(err => {
    console.error('unable to connect to DB', err);
  });

  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

  User.sync({force: true}).then(() => {
    return User.create({
      firstName: 'Bruce',
      lastName: 'Wayne'
    });
  });

  User.findAll().then(users => {
    console.log(users);
  });
