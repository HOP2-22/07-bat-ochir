const express = require("express");
const Data = require("../model/user.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await Data.create({
      email: email,
      password: hashedPassword,
    });

    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getUsers = async (req, res) => {
  const users = await Data.find();

  res.status(200).json(users);
};
exports.getUserByEmail = async (req, res) => {
  const user = await Data.find({
    email: req.params.id,
  });

  res.status(200).json(user);
};

const ACCESS_TOKEN_KEY = "secret123";

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Data.findOne({ email: email });
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "password is dont match" });
    }
    const token = jwt.sign(
      {
        user: user.email,
      },
      ACCESS_TOKEN_KEY
    );
    res.status(200).json({ match: match, user: user, token });
  } catch (error) {
    res.status(400).json({ message: "password is dont match" });
  }
};
exports.updateUserPass = async (req, res, next) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const updatedUser = await Data.findOneAndUpdate(
    { email: email },
    { password: hashedPassword },
    {
      runValidators: true,
    }
  );

  res.status(200).json(updatedUser);
};
exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
};
exports.getUser = async (req, res) => {
  const token = req.headers.token || "";
  if (!token) {
    return res.status(404).json({ message: "Invalid token" });
  }
  const data = await jwt.decode(token, ACCESS_TOKEN_KEY);
  res.status(200).json(data);
};
