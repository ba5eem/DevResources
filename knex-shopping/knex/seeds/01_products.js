
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'pizza', description: 'something', price: '$99.99'},
        {id: 2, title: 'tesla model 3', description: 'something', price: '$99.99'},
        {id: 3, title: 'BFR flight to MOON', description: 'something', price: '$99.99'}
      ]);
    });
};
