exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "resource-1", description: "an optional description" },
        { id: 2, name: "resource-2" },
        { id: 3, name: "resource-3" }
      ]);
    });
};
