
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: "task-1", notes: "task-1-notes", project_id: 1, completed: false},
        {id: 2, description: "task-2", notes: "task-2-notes", project_id: 1, completed: false },
        {id: 3, description: "task-3", project_id: 1, completed: true},

        {id: 4, description: "task-4", notes: "task-4-notes", project_id: 2, completed: false},
        {id: 5, description: "task-5", notes: "task-5-notes", project_id: 2, completed: false },
        {id: 6, description: "task-6", project_id: 2, completed: true},

        {id: 7, description: "task-7", notes: "task-7-notes", project_id: 3, completed: false},
        {id: 8, description: "task-8", notes: "task-8-notes", project_id: 3, completed: true },
        {id: 9, description: "task-9", project_id: 3, completed: true},
      ]);
    });
};
