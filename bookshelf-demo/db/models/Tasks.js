const bookshelf = require('./bookshelf')

const Tasks = bookshelf.Model.extend({
  tableName: 'task',
  idAttribute: 'task_id',
  hasTimestamps: true
})

module.exports = Tasks