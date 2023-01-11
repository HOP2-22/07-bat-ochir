const express = require("express");
const User = require("../model/model");
// getUserallUser
exports.getUser = async (req, res) => {
  const user = await User.find();
  res.send(user);
};
// getUser

// getPost
exports.getPost = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};
// getUptade

// getDelete
exports.getDelete = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  res.send(user);
};
