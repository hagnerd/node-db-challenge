const server = require("express")();

server.get("/", (_, res) => res.json({ message: "Hello, World" }));

module.exports = server;
