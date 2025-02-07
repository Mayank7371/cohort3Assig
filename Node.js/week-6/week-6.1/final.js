const express = require("express");
const jwt = require("jsonwebtoken");
const seceret = "mayanklovesbhanu";
const app = express();
const port = 3000;
app.use(express.json());
const users = [];
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (users.find((u) => u.username == username && password == password)) {
    res.json({
      msg: "You are already registered",
    });
  } else {
    users.push({
      username,
      password,
    });
    res.json({
      msg: "you are now signed in",
    });
  }
});
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  if (users.find((u) => u.username == username && password == password)) {
    const token = jwt.sign(
      {
        username: username, // what data do i need to put in this token
        password: password,
      },
      seceret
    );
    res.json({
      token,
    });
  }
});
app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decode = jwt.verify(token, seceret);
  const username = decode.username;
  const password = decode.password;
  res.json({
    username: username,
    password: password,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
