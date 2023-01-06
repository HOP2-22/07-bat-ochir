const express = require("express");
const { getUser, getCreate } = require("../controller/controller");

const Router = express.Router();

Router.get("/", getUser);
Router.post("/create", getCreate);

module.exports = Router;
