const express = require("express");

const { register, getAllUser, loginUser } = require("../controller/user");

const USER_Router = express.Router();

USER_Router.post("/register", register);
USER_Router.get("/getalluser", getAllUser);
USER_Router.post("/getalluser", loginUser);

module.exports = USER_Router;
