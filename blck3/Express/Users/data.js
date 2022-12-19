const { response } = require("express");

const users = [
  { id: 1, name: "batuka", isDone: false },
  { id: 2, name: "bataa", isDone: false },
  { id: 3, name: "backa", isDone: false },
];
exports.getUser = (request, response) => {
  response.status(200).json({ users: users });
};

exports.createUser = (request, response) => {
  users.push({ id: users.length + 1, ...request.body });
  response.status(200).json({ message: "new user create" });
};
exports.addUser = (request, response) => {
  if (!request.body.name) {
    response.status(404).json({ message: "name not found" });
  }
  users.push({ id: "5", name: "added name" });
  response.status(200).json({ message: "user added successfully" });
};

exports.patch = (request, response) => {
  users.isDone = !users.isDone;
  users.map((user) => (user.isDone = !users.isDone));
  response.send({
    messages: "successfully",
    users: users,
  });
};
