const express = require("express");

const {
  createUser,
  getUsers,
  getUserByEmail,
  login,
  updateUserPass,
  getUser,
} = require("../controller/user.js");

const Data = require("../model/user");

const usersRouter = express.Router();
const middleware = express.Router();

usersRouter.delete("/deleteAll", async (req, res) => {
  await Data.deleteMany();
  res.json({ success: true });
});

usersRouter.post("/createUser", createUser);
usersRouter.get("/getUsers", getUsers);
usersRouter.get("/getUser", getUser);
usersRouter.get("/getUserByEmail", getUserByEmail);
usersRouter.post("/login", login);
usersRouter.patch("/updateUserPass", updateUserPass);

module.exports = usersRouter;
