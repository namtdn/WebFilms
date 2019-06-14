exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {
            id: 1, 
            name: 'family'
        },
        {
            id: 2, 
            name: 'action'
        },
        {
            id: 3, 
            name: 'comedy'
        },
        {
            id: 4, 
            name: 'horror'
        },
      ]);
    });
};