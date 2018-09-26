const bookshelf = require('./bookshelf');

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAttribute: 'user_id',
  hasTimestamps: true 
})

const all = () => Users.fetchAll()




module.exports = {
	all,

};

