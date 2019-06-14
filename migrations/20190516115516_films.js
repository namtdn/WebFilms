
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('films', function (table) {
       table.increments('id');
       table.string('name', 255).notNullable();
       table.text('link', 255).notNullable();
       table.string('description', 255).notNullable();
       table.string('date', 255).notNullable();
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("films")
};