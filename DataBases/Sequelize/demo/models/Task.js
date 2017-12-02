//jshint esversion: 6
module.exports = function(sequelize, DataTypes) {
  const Task = sequelize.define('task', {
    title: DataTypes.STRING
  }, {
    tableName: 'tasks'
  });

  Task.associate = ((models) => {
    Task.belongsTo(models.user);
  });

  return Task;
};