module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING
  });

  users.associated = function(models) {
    //associations can be defined here
  };
  return users;
};