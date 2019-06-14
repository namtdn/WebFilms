
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('films').del()
    .then(function () {
      // Inserts seed entries
      return knex('films').insert([
        {   
            id: 1,
            name: '1st Film',
            link: '../storage/1.webm',
            description: 'Just a normal music video',
            date: 2019,
        },
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
