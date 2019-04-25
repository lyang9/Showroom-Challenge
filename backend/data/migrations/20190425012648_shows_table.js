
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shows', function(shows) {
    shows.increments();

    shows.string('title', 30)
      .unique()
      .notNullable();
    shows.string('img_url', 100)
      .unique()
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
