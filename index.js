const server = require("./src/server");

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`🚀 The server is listening on port ${PORT}`);
});
