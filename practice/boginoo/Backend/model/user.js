const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Task = new Schema({
  email: { type: String },
  password: { type: String },
});

const userModel = mongoose.model("users", Task);
module.exports = userModel;
