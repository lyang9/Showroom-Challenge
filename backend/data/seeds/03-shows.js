
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shows').del()
    .then(function () {
      // Inserts seed entries
      return knex('shows').insert([
        {title: 'Avengers: Endgame', img_url: 'https://i.ebayimg.com/thumbs/images/g/ocMAAOSwgaxcrKUL/s-l96.jpg', user_id: 1, genre_id: 1},
        {title: 'Spider-Man: Into the Spider-Verse', img_url: 'https://img00.deviantart.net/08d6/i/2019/046/9/6/spiderman_into_the_spiderverse_v2_by_edgina36-dcztwdn.png', user_id: 1, genre_id: 2},
        {title: 'Game of Thrones', img_url: 'https://m.media-amazon.com/images/I/51Ep4em2vxL._AA256_.jpg', user_id: 1, genre_id: 6},
        {title: 'Fresh off the Boat', img_url: 'https://www.sdcitytimes.com/wp-content/uploads/2015/02/fotb.jpg', user_id: 2, genre_id: 6},
        {title: 'Men in Black 2', img_url: 'http://www.sonypicturesmuseum.com/public/uploads/collectionasset/image/men-in-black-2-POSTER-1@2x.jpg', user_id: 2, genre_id: 2},
        {title: 'The Lion King', img_url: 'https://c-sf.smule.com/sf/s36/arr/39/6c/9a1d94ef-c13f-4b9c-894c-c3b96db436ca.jpg', user_id: 3, genre_id: 7},
        {title: 'Incredibles 2', img_url: 'https://thecinephiliac.files.wordpress.com/2018/07/incre.jpg?w=336&h=498', user_id: 3, genre_id: 7},
        {title: 'Crazy Rich Asians', img_url: 'https://m.media-amazon.com/images/I/61HR6PAdDYL._AA256_.jpg', user_id: 4, genre_id: 3},
        {title: 'The Rookie', img_url: 'https://cdn.technadu.com/wp-content/uploads/2019/03/The-Rookie-696x392.png', user_id: 5, genre_id: 5},
        {title: 'Line of Duty', img_url: 'https://pics.filmaffinity.com/line_of_duty_tv_series-605974923-large.jpg', user_id: 5, genre_id: 4},
      ]);
    });
};
