const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post_task = new Schema({
  text: { type: String },
  likes: { type: Number },
  tags: { type: Array },
  publishDate: { type: String },
  owner: { type: String },
});

const User = mongoose.model("posts", Post_task);
module.exports = User;
