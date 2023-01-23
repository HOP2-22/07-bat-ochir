const express = require("express");
const Data = require("../model/link");

exports.getUser = async (req, res) => {
  try {
    const user = await Data.find();
    console.log(Data);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
exports.getPost = (req, res) => {
  try {
    const user = Data.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error });
  }
};

exports.createShort = async (req, res) => {
  const { ownerID } = req.body;
  let stringId = (Math.random() + 1).toString(36).substring(7);

  const createdShort = await Data.create({
    orignal_link: req.body.orignal_link,
    short_link: stringId,
    ownerID: ownerID,
  });
  res.send(createdShort);
};
exports.deleteShort = async (req, res) => {
  try {
    const id = req.params.id;
    const delete_short = await Data.findByIdAndDelete(id);
    res.status(200).json(delete_short);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

exports.getLinkByUser = async (req, res) => {
  const { usernameId } = req.params;
  console.log(usernameId);
  const Links = await Data.find({ ownerID: usernameId });
  console.log(Links);
  res.status(200).json(Links);
};
