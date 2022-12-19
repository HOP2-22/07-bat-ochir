const users = [
  {
    detail: [
      { id: 1, title: "hool", isDone: "false" },
      { id: 2, title: "tsuiwan", isDone: "false" },
    ],
  },
];

const add = { id: 3, title: "tsuiwan", isDone: "false" };
const { id } = res.body;

exports.getUser = (req, res) => {
  res.send(users);
};
exports.getPost = (req, res) => {
  users[0].detail.push(add);
  res.send(users);
};

exports.getPatch = (req, res) => {};
