const express = require("express");

const {
  createUser,
  getUsers,
  getUserByEmail,
  login,
  updateUserPass,
} = require("../controller/sign.js");

const usersRouter = express.Router();
const middleware = express.Router();

usersRouter.post("/createUser", createUser);
usersRouter.get("/getUsers", getUsers);
usersRouter.get("/getUserByEmail", getUserByEmail);
usersRouter.post("/login", login);
usersRouter.patch("/updateUserPass", updateUserPass);

module.exports = usersRouter;
