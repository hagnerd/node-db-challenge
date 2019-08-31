const db = require("../db");

async function getAllProjects() {}

async function createProject(project) {
  const [id] = await db.from("projects").insert(project);

  if (!id) {
    // throw null back up to the router to let it handle
    // the error
    return null;
  }

  return { id, ...project };
}

module.exports = {
  createProject
};
