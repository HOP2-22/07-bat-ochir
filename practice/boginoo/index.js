const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connection = mongoose.connection;
require("dotenv").config();

console.log(process.env.MONGODB_URI);

// const Port = process.env.Port || 8080;

// dotenv.config({ path: "./Backend/config/config.env" });

// const app = express();
// app.use(cors());
// const Router = require("./Backend/router/router");

// mongoose.connect(process.env.MONGODB_URI);
// connection.once("open", () => {
//   console.log("connect MONGODB server");
// });
// app.use(express.json());
// app.use("/user", Router);

// app.listen(Port, () => {
//   console.log(Port, "listening on port");
// });
