const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Task = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Data = mongoose.model("users", Task);
module.exports = Data;
