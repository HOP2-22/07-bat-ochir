const express = require("express");
const {
  getPost,
  getUserById,
  getPostCreate,
  getDelete,
  getUptade,
  getListBYId,
  getListByTag,
} = require("../controller/post_controller.js");

const Post_Router = express.Router();
Post_Router.get("/post", getPost);
Post_Router.get("/:id/getUserById", getUserById);
Post_Router.post("/post/create", getPostCreate);
Post_Router.delete("/post/:id", getDelete);
Post_Router.patch("/post/:id", getUptade);
Post_Router.get("/:id/post", getListBYId);
Post_Router.get("/tag/:tag/post", getListByTag);

module.exports = Post_Router;
