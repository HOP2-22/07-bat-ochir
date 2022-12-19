const express = require("express");
const postRouter = require("./router/posts");
const port = 7000;
const app = express();

app.use(postRouter);

app.listen(port, () => {
  console.log("assan");
});
