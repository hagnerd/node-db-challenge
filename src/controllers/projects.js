const db = require("../db");

function getAllProjects() {
  return db.select("*").from("projects");
}

async function createProject(project) {
  const [id] = await db.from("projects").insert(project);

  if (!id) {
    // throw null back up to the router to let it handle
    // the error
    return null;
  }

  return { id, ...project };
}

async function getProjectById(id) {
  const [project] = await db
    .select("*")
    .from("projects")
    .where({ id });

  return !!project;
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById
};
