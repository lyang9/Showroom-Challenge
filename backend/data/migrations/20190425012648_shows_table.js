
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shows', function(shows) {
    shows.increments();

    shows.string('title', 30)
      .notNullable();
    shows.binary('img_url', 250)
      .notNullable();
    
    shows.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users');

    shows.integer('genre_id')
      .unsigned()
      .references('id')
      .inTable('genres');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shows');
};
