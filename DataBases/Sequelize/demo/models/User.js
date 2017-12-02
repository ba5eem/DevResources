//jshint esversion: 6
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    username: DataTypes.STRING
  }, {
    tableName: 'users'
  });

  User.associate = ((models) => {
    User.hasMany(models.task);
  });
  return User;
};