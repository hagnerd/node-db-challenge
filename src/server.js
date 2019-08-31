const express = require("express");
const projectsRoute = require("./routes/projects");

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRoute);

server.get("/", (_, res) => res.json({ message: "Hello, World" }));

module.exports = server;
