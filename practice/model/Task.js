const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Task = new Schema({
  fristname: { type: String },
  age: { type: Number },
});

const User = mongoose.model("users", Task);
module.exports = User;
