const express = require("express");
const app = express();
const port = 6000;
const Router = require("./router/router");
app.use(Router);

app.listen(port, () => {
  console.log(port + "success");
});
