const db = require("../db");

async function createTask(task) {
  const [id] = await db.from("tasks").insert(task);

  if (!id) {
    return null;
  }

  return { id, ...task, notes: task.notes === undefined ? null : task.notes };
}

module.exports = {
  createTask
};
