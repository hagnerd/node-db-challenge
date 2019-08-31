
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'test-1', description: "A test description"},
        {id: 2, name: 'test-2', completed: false},
        {id: 3, name: 'test-3', description: "another test description", completed: true}
      ]);
    });
};
