/*
 * Resource {
 *   id: ID! (@auto increments)
 *   name: String!
 *   description: String
 * }
 *
 * */


exports.up = function(knex) {
  return knex.schema.createTable('resources', tbl => {
    tbl.increments(); // Primary Key
    tbl.text('name').notNullable();
    tbl.text('description');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources'); 
};
