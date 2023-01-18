const express = require("express");
const Router = express.Router();
const {
  getUser,
  deleteShort,
  createShort,
  getLinkByUser,
} = require("../controller/link.js");

Router.get("/", getUser);
Router.post("/", createShort);
Router.delete("/:id", deleteShort);
Router.get("/:usernameId", getLinkByUser);

// Router.patch("/update", getUpdate);
// Router.delete("/delete", getDelete);

module.exports = Router;
