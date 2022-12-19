const express = require("express");

const Router = express.Router();
const {
  getUsers,
  getPost,
  getDelete,
  getPatch,
} = require("../controller/controller.js");

Router.get("/users", getUsers);
Router.post("/post", getPost);
Router.delete("/delete", getDelete);
Router.patch("/update", getPatch);

module.exports = Router;
