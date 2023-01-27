const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Task = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, "и-мэйл хаяг оруулнуу"],
  },
  password: { type: String, required: true },
});

const Data = mongoose.model("users", Task);
module.exports = Data;
