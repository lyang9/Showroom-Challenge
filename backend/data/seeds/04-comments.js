
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment_body: 'Avengers: Endgame is above all the best Marvel superhero movie to date.', user_id: 1, show_id: 1},
        {comment_body: 'Visually stunning. Great storyline. Great cast. Amazing soundtrack.', user_id: 1, show_id: 2},
        {comment_body: 'This TV series is magnificent! I read a book and I must say that A Game Of Thrones is one of the best books I read', user_id: 1, show_id: 3},
        {comment_body: 'This was the most hilarious show ever. So many of the concepts are so true ha ha.', user_id: 2, show_id: 4},
        {comment_body: 'There was no plot, and the acting was terrible.', user_id: 2, show_id: 5},
        {comment_body: 'This is truly one of the best Disney movies ever. I really enjoyed it.', user_id: 3, show_id: 6},
        {comment_body: 'I cannot believe it has been 14 years since The Incredibles came out. This movie is fantastic, loved the story and the characters.', user_id: 3, show_id: 7},
        {comment_body: 'Materialistic story and superficial acting.', user_id: 4, show_id: 8},
        {comment_body: 'Good pilot! Well excecuted first episode. Feels sometimes like an episode of southland.', user_id: 5, show_id: 9},
        {comment_body: 'Line of duty is an exceptional police drama.', user_id: 5, show_id: 10}
      ]);
    });
};
