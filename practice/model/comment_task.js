const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment_schema = new Schema({
  comment: { type: String },
  postID: { type: String },
  ownerID: { type: String },
});
const Comment = mongoose.model("comments", Comment_schema);

module.exports = Comment;
