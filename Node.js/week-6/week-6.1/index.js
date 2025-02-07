// creating an express app on authentication
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const users = [];
function generateToken(req, res, next) {
  const newArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let token = "";
  for (let i = 0; i < newArr.length; i++) {
    token = token + newArr[Math.floor(Math.random() * newArr.length)];
  }
  return token;
}
function signupHandler(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  if (users.find((u) => u.username === username && u.password === password)) {
    res.json({
      msg: "you are already registered!!",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });
  console.log(users);
  res.json({
    msg: "hey! you are signed up",
  });
  next();
}

app.post("/signup", signupHandler);
app.post("/signin", generateToken, (req, res) => {});
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
