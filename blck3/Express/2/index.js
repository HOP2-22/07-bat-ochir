const express = require("express");
const Router = require("./router/router.js");

const port = 8000;
const app = express();

app.use(Router);

app.listen(port, () => {
  console.log(port, " =>  assan");
});
