const express = require("express");
const app = express();
const port = 3000;

app.post("/user/signup", (req, res) => {
  res.send("Hello World!");
});
app.post("/user/login", (req, res) => {
  res.send("Hello World!");
});
app.post("/user/course/purchase", (req, res) => {
  res.send("Hello World!");
});
app.get("/user/purchases", (req, res) => {
  // you will expect user to buy a course
  res.send("Hello World!");
});
app.get("/courses", (req, res) => {
  res.send("Hello World!");
});
app.post("/admin/login", (req, res) => {
  res.send("Hello World!");
});
app.post("/admin/signup", (req, res) => {
  res.send("Hello World!");
});
app.post("/admin/createcourse", (req, res) => {
  res.send("Hello World!");
});
app.delete("/admin/deletecourse", (req, res) => {
  res.send("Hello World!");
});
app.get("/admin/coursecontent", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
