const router = require("express").Router();
const Projects = require("../controllers/projects");

function validateProjectInput(req, res, next) {
  const { name, description = null, completed = false } = req.body;

  if (!name) {
    res.status(400).json({
      message: "Please provide a name for your project"
    });
    return;
  }

  req.projectInput = { name, description, completed };
  next();
}

router.get("/", async (_req, res) => {
  try {
    const projects = await Projects.getAllProjects();

    res.json({
      projects
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});
router.post("/", validateProjectInput, async (req, res) => {
  try {
    const project = await Projects.createProject(req.projectInput);

    res.status(201).json({
      project
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});

module.exports = router;
