const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my HomePage");
});

app.get("/cats", (req, res) => {
  res.send("Meow~~");
});

app.get("/r/:para/:postId", (req, res) => {
  const { para, postId } = req.params;
  console.log(req.params);
  res.send(`<h1>result is ${para}, postID is ${postId}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>You are Founded ${q}, 계속 찾으셈`);
});

app.get("/dogs", (req, res) => {
  res.send("Keong Keong Wall Wall Woof WOOf");
});

app.post("/dogs", (req, res) => {
  res.send(
    "<h2>야~~야아아아아아 개애~짓는 소리 좀 안나게 하라 씨바아아아알</h2>"
  );
});

app.get("*", (req, res) => {
  res.send(`Nothing to Found this Page`);
});

app.listen(8080, () => {
  console.log("Listening on the Port 8080");
});
