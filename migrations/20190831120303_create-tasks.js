/*
 * Task {
 *   id: ID! (@auto increments)
 *   description: String!
 *   notes: String
 *   project_id: ID! (@foreign_key = projects, @constraint = must_exist)
 *   completed: Boolean! (@default = false = 0)
 * }
 *
 */

exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    tbl.increments(); // Primary key

    tbl.text("description").notNullable();
    tbl.text("notes");

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.boolean("completed").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
