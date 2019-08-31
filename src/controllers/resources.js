const db = require("../db");

async function createResource(resource) {
  const [id] = await db.from("resources").insert(resource);

  if (!id) {
    // There could be some error when inserting that causes the resource to not
    // be inserted. In that case we want to toss `null` back up to the router so
    // that error handling can be done at that level
    return null;
  }

  return { id, description: null, ...resource };
}

function getAllResources() {
  return db.select("*").from("resources");
}

module.exports = {
  createResource,
  getAllResources
};
