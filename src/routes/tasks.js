const router = require("express").Router();
const Tasks = require("../controllers/tasks");
const Projects = require("../controllers/projects");

async function validateTaskInput(req, res, next) {
  const { project_id, description, notes, completed = false } = req.body;

  if (!project_id || !description) {
    res.status(400).json({
      message: "Please provide a project_id and a description for your task"
    });
    return;
  }

  const project = await Projects.getProjectById(project_id);

  if (!project) {
    res.status(404).json({
      message: `No projet exists with project_id ${project_id}`
    });
    return;
  }

  req.taskInput = {
    project_id,
    description,
    notes,
    completed
  };

  next();
}

router.get("/", async (_req, res) => {
  try {
    const tasks = await Tasks.getAllTasks();

    res.json({
      tasks
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});

router.post("/", validateTaskInput, async (req, res) => {
  try {
    const task = await Tasks.createTask(req.taskInput);

    if (!task) {
      res.status(500).json({
        error: "Error inserting into the database"
      });
      return;
    }

    res.status(201).json({
      task
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});

module.exports = router;
