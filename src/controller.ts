import fs from "fs";
import path from "path";

import { ServerResponse, IncomingMessage } from "http";
import { Task } from "./ITask";

const getTasks = (req: IncomingMessage, res: ServerResponse) => {
  return fs.readFile(
    path.join(__dirname, "store.json"),
    "utf8",
    (err, data) => {
      //Read store.json file
      //Check out any errors
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            error: err,
          }),
        );
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: true,
            message: JSON.parse(data),
          }),
        );
      }
    },
  );
};
