const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const users = [];
function generateToken() {
  let options = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
  let token = "";
  for (let i = 0; i < options.length; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(users);

  if (users.find((u) => u.username === username && password === password)) {
    res.json({
      msg: "You are already registered signedup, signin to continue!",
    });
  } else {
    users.push({
      username: username,
      password: password,
    });
  }

  res.end();
});
app.post("/signin", (req, res) => {
  let options = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
  let token = "";
  for (let i = 0; i < options.length; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  res.json({
    msg: "Your token has been generated!",
    token,
  });
  app.get("/me", (req, res) => {
    const token = req.headers.authorization; // or token
    const user = users.find((user) => user.token === token);
    if (user) {
      res.send({
        username: user.username,
      });
    } else {
      res.status(401).send({
        message: "Unauthorized",
      });
    }
  });
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`your app is running on port ${PORT}`);
});

