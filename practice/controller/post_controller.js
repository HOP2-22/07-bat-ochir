const express = require("express");
const User = require("../model/post_task");
//Get List
exports.getPost = async (req, res) => {
  const user = User.findById();
  res.send(user);
};
// Get List By User
// exports.getUserById = async (req, res) => {};
// // Get List By Tag
// exports.getPost = async (req, res) => {};
// // Get Post by id
// exports.getUpdate = async (req, res) => {};
// // Create Post
// exports.getDelete = async (req, res) => {};
// // Update Post
// exports.getDelete = async (req, res) => {};
// // Delete Post
