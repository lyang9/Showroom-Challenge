
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(comments) {
    comments.increments();

    comments.string('comment_body', 250)
      .notNullable();

    comments.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users');

    comments.integer('show_id')
      .unsigned()
      .references('id')
      .inTable('show');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
