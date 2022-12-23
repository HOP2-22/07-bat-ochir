const express = require("express");
const mongoose = require("mongoose");
const connection = mongoose.connection;
const URI =
  "mongodb+srv://batuka:batukatoshy@cluster0.trqwvbt.mongodb.net/Practice?retryWrites=true&w=majority";
const Port = 8800;
const app = express();
const Router = require("./router/router");
const Post_Router = require("./router/post_router");
mongoose.connect(URI);
connection.once("open", () => {
  console.log("connect MONGODB server");
});
app.use(express.json());
app.use(Router);
app.use(Post_Router);

app.listen(Port, () => {
  console.log(Port, "listening on port");
});
