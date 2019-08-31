/* INTERMEDIARY TABLE
 *  ProjectsResources {
 *    project_id: ID! (@foreign_key = "projects")
 *    resource_id: ID! (@foreign_key = "resources")
 *  }
 */

exports.up = function(knex) {
  return knex.schema.createTable("projects_resources", tbl => {
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects_resources");
};
