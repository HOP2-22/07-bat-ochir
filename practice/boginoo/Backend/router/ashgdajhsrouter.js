const express = require("express");
const { getUser, getPost } = require("../controller/controller.js");

const Router = express.Router();

Router.get("/", getUser);
Router.post("/create", getPost);

module.exports = Router;
