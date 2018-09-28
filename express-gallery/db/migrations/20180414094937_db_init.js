
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('user_id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    // table.timestamp('created_at').defaultTo(knex.fn.now());
    // table.timestamp('updated_at').defaultTo(knex.fn.now());

    // shorthand notation for created_at updated_at
    table.timestamps(true, true);
  })
  .createTable('task', table => {
    table.increments('task_id').primary();
    table.string('name').notNullable();
    table.boolean('is_complete').defaultTo(false);
    table.integer('user_id').references('user_id').inTable('user').onDelete('cascade');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task')
                    .dropTable('user');
};
