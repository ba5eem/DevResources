
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {email: 'lol@lol.com', password: 'password'},
        {email: 'alliance@horde.com',password: 'password1'},
        {email: 'druid@moonkin.com', password: 'rowValue3'}
      ]);
    })
    .then( function() {
      return knex('task').del()
      .then( function(){
        return knex('task').insert([
          {name: 'collect herbs', user_id:1 },
          {name: 'make empty vial', user_id:1 },
          {name: 'brew potion', user_id:2 }
        ])
      })
    })
};


