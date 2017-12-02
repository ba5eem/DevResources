module.exports = function(sequlize, DataTypes){
  var User = sequlize.define("User", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  });
  return User;
};

