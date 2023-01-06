const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URL;
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("datbase connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connect;
