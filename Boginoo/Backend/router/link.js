const express = require("express");
const Data = require("../model/link");
const Router = express.Router();
const {
  getUser,
  deleteShort,
  createShort,
  getLinkByUser,
  getBackLink,
} = require("../controller/link.js");
Router.delete("/deleteAll", async (req, res) => {
  await Data.deleteMany();
  res.json({ success: true });
});

Router.get("/", getUser);
Router.post("/", createShort);
Router.delete("/:id", deleteShort);
Router.get("/:usernameId", getLinkByUser);
Router.get("/next/:shortlink", getBackLink);

// Router.patch("/update", getUpdate);
// Router.delete("/delete", getDelete);

module.exports = Router;
