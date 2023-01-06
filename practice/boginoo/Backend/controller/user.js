const express = require("express");
const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();
// getUserallUser

// getUserallUser

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = await userModel.create({
      email: email,
      password: hashPassword,
    });
    console.log("sajhdjkashdjksahjhdsa");
    res.status(200).json({ message: "created successfully", data: newUser });
  } catch (error) {
    console.error("asdhags");
    res.status(404).json({ message: error.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const newUser = await userModel.find();
    res.send(newUser);
    // res
    //   .status(200)
    //   .json({ message: "created successfully", data: newUser.email });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "failed" });
  }
};
const access_key = "123";
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  const match = await bcrypt.compare(password, user.password);
  const token = jwt.sign({ user: user.email }, access_key);
  if (match) {
    res.status(200).json({ message: "login successfully", token: token });
  } else {
    res.status(404).json({ message: "failed" });
  }
};
