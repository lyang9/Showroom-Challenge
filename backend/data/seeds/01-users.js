
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'ckIrECaP'},
        { username: 'nCtUreON'},
        { username: 'etparcUl'},
        { username: 'coMpeCOp'},
        { username: 'ecTicKMa'},
      ]);
    });
};
