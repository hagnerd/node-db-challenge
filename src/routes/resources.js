const router = require("express").Router();
const Resources = require("../controllers/resources");

function validateResourceInput(req, res, next) {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({
      message: "Please provide a name for your resource"
    });

    return;
  }

  next();
}

router.get("/", (req, res) => {});

router.post("/", validateResourceInput, async (req, res) => {
  try {
    const resource = await Resources.createResource(req.body);

    res.status(201).json({
      resource
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});

module.exports = router;
