const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Task = new Schema({
  orignal_link: { type: String },
  short_link: { type: String },
});

const Data = mongoose.model("links", Task);
module.exports = Data;
