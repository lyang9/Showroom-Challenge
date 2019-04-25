
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {genre_name: 'superhero'},
        {genre_name: 'action'},
        {genre_name: 'comedy'},
        {genre_name: 'thriller'},
        {genre_name: 'crime'},
        {genre_name: 'drama'},
        {genre_name: 'animation'},
      ]);
    });
};
