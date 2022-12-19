const express = require("express");
const { getUser, getPost } = require("../controller/controller.js");

const Router = express.Router();

Router.get("/users", getUser);
Router.post("/post", getPost);

module.exports = Router;
