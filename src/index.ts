import * as http from "http";

const server = http.createServer((req, res) => {
  res.write("Bitch");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
