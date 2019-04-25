
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(users) {
    users.increments();

    users.string('username', 25)
      .unique()
      .notNullable();
   });
};

exports.down = function(knex, Promise) {
  // rollback
  return knex.schema.dropTableIfExists('users');
};
