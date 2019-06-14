const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { Id: 1, 
          fullName:'admin',
          userName: 'admin',
          password:bcrypt.hashSync('123456', 10),
          role:'admin'
        },
        { Id: 2, 
          fullName:'nam',
          userName: 'nam',
          password:bcrypt.hashSync('123456', 10),
          role:'user'
        },
        { Id: 3, 
          fullName:'duy',
          userName: 'duy',
          password:bcrypt.hashSync('123456', 10),
          role:'user'
        }
      ]);
    });
};