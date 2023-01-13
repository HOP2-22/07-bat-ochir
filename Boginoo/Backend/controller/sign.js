const express = require("express");
const Data = require("../model/sign.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await Data.create({
    email: email,
    password: hashedPassword,
  });

  res.status(200).json(newUser);
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
  const { email, password } = req.body;

  const user = await Data.findOne({ email: email });

  const match = await bcrypt.compare(password, user.password);

  const token = jwt.sign(
    {
      user: user.email,
    },
    ACCESS_TOKEN_KEY
  );

  res.status(200).json(match);
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
