const express = require("express");
const { getUser, createUser, addUser, patch } = require("../Users/data");
const postRouter = express.Router();

postRouter.get("/users", getUser);

postRouter.post("/post", createUser);

postRouter.get("/addUser", addUser);

postRouter.patch("/update", patch);

module.exports = postRouter;
