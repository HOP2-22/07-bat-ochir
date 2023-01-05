const express = require("express");
const Data = require("../model/model");
// getUserallUser
exports.getUser = async (req, res) => {
  const user = await Data.find();
  res.send(user);
};
exports.getCreate = async (req, res) => {
  const body = req.body;
  const user = await Data.create(body);
  res.send(user);
};
