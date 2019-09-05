const express = require("express");
const projectsRoute = require("./routes/projects");
const resourceRoute = require("./routes/resources");
const taskRoute = require("./routes/tasks");

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRoute);
server.use("/api/resources", resourceRoute);
server.use("/api/tasks", taskRoute);

server.get("/", (_, res) => res.json({ message: "Hello, World" }));

module.exports = server;
