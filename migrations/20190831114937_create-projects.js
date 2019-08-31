/*
 * Project {
 *   id: ID! (increments)
 *   name: String!
 *   description: String
 *   completed: Boolean! (@defaults = false = 0)
 * }
 *
 *
 * */

exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();

    tbl.text("name").notNullable();

    tbl.text("description");

    tbl
      .boolean("completed").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
