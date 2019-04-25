
exports.up = function(knex, Promise) {
  return knex.schema.createTable('genres', function(genres) {
    genres.increments();

    genres.string('genre_name', 50)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('genres');
};
