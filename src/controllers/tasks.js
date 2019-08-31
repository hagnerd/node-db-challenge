const db = require("../db");

async function createTask(task) {
  const [id] = await db.from("tasks").insert(task);

  if (!id) {
    return null;
  }

  return { id, ...task, notes: task.notes === undefined ? null : task.notes };
}

function getAllTasks() {
  return db
    .from("tasks as t")
    .innerJoin("projects as p", "p.id", "t.project_id")
    .select(
      "t.id",
      "t.description as task_description",
      "t.notes",
      "t.completed as task_completed",
      "p.name as project_name",
      "p.description as project_description"
    );
}

module.exports = {
  createTask,
  getAllTasks
};
