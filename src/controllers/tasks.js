const db = require("../db");
const { convertCompletedToBool } = require("../utils");

async function createTask(task) {
  const [id] = await db.from("tasks").insert(task);

  if (!id) {
    return null;
  }

  return { id, ...task, notes: task.notes === undefined ? null : task.notes };
}

async function getAllTasks() {
  const rawTasks = await db
    .from("tasks as t")
    .innerJoin("projects as p", "p.id", "t.project_id")
    .select(
      "t.id",
      "t.description as task_description",
      "t.notes",
      "t.completed",
      "p.name as project_name",
      "p.description as project_description"
    );

  const tasks = rawTasks.map(convertCompletedToBool);

  return tasks;
}

module.exports = {
  createTask,
  getAllTasks
};
