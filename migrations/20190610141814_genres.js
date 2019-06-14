exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('genres', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('genres');
};

exports.config = { transaction:false }