const users = [
  {
    detail: [
      { id: 1, title: "hool", isDone: "false" },
      { id: 2, title: "tsuiwan", isDone: "false" },
    ],
  },
];
const post = { id: 3, title: "gulyash", isDone: "false" };

exports.getUsers = (request, response) => {
  response.send(users);
};

exports.getPost = (request, response) => {
  users[0].detail.push(post);
  response.send(users);
};
exports.getDelete = (request, response) => {
  users[0].detail.pop();
  response.send(users);
};
exports.getPatch = (request, response) => {
  users[0].detail.map((user, index) => {
    user.isDone = !user.isDone;
  });

  response.send(users);
};
