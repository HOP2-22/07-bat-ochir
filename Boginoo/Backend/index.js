const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./router/link");
const usersRouter = require("./router/user.js");
const connection = mongoose.connection;
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;

mongoose.connect(URI);

app.use(express.json());

app.use(cors());
app.use("/link", Router);
app.use("/user", usersRouter);

connection.once("open", () => {
  console.log("connect MONGODB server");
});

app.listen(PORT, () => {
  console.log(PORT, "listening on port");
});
