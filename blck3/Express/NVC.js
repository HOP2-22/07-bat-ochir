const express = require("express");

const port = 8000;
const app = express();
const arr = [
  { id: 1, name: "batuka", gender: "male" },
  { id: 2, name: "bataa", gender: "male" },
  { id: 3, name: "javhaa", gender: "male" },
];
let hobby = "sports";
app.get("/", (req, res) => {
  res.send(arr);
});
app.post("/Posted", (req, res) => {
  let post = arr;
  res.send(post);
});
app.put("/Uptadepost", (req, res) => {
  arr.push(hobby);
  res.send(arr);
});
app.delete("/Deletepost", (req, res) => {
  arr.length -= 1;
  res.send(arr);
});

app.listen(port, () => {
  console.log("assan");
});
