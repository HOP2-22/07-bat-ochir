const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Task = new Schema({
  orignal_link: { type: String, required: true },
  short_link: { type: String, unique: true, required: true },
});

const Data = mongoose.model("links", Task);
module.exports = Data;
