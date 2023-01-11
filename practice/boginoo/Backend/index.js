const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const connect = require("./Database/index");
const USER_Router = require("./router/user");
const Port = process.env.PORT;

const app = express();

const Router = require("./router/ashgdajhsrouter");

connect();
app.use(express.json());
app.use("/user", Router);
// app.use("/", USER_Router);

app.listen(Port, () => {
  console.log(Port, "listening on port");
});
