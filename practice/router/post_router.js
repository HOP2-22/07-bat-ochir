const express = require("express");
const { getPost } = require("../controller/post_controller.js");

const Post_Router = express.Router();
Post_Router.get("/", getPost);

module.exports = Post_Router;
