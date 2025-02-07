const express = require("express");
const app = express();
const port = 3000;
const users = [{}];
app.use(express.json());
const registerUser = (req, res, next) => {
  // we want to register the user in the in memory database
  const username = req.body.username;
  const password = req.body.password;
  if (users.find((u) => u.username === username)) {
    res.json({
      msg: "You are already registered!",
    });
    return;
  }
  users.push({
    username: username,
    password: password,
  });
  console.log(users);
  res.json({
    msg: "You are signed up!",
  });
  next();
};
const generateToken = (req, res, next) => {
  let options = "abcdefghijklmnopqrstuvwxyz123456789".split("");
  let token = "";
  for (let i = 0; i < options.length; i++) {
    token = token + options[Math.floor(Math.random() * options.length)];
  }
  return token;
};
app.post("/signup", registerUser);
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = generateToken();
  res.json({ token });
});
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
