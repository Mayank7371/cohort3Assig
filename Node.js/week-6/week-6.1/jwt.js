const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
const JWT_SECRET = "mayanklovesbhawanshi";
app.use(express.json());
const users = [];
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
    res.send("you are signed up");
  }

  res.end();
});
app.post("/signin", (req, res) => {
  // we want to convert the username of a user and return the JWT to them
  const username = req.body.username;
  const password = req.body.password;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && password == password) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    ); // this is what creates the token by converting the username using JWT_SECERET
    res.json({
      token,
    });
  } else {
    res.status(403).send({
      msg: "Invalid username or password",
    });
  }
  console.log(users);
});
app.get("/me", (req, res) => {
  const token = req.headers.authorization; // or token
  const decodedInfo = jwt.verify(token, JWT_SECRET); // this line of code will get back in decodedInfo
  //   the json object  {username : "mayank"} basically decoding the jwt
  const username = decodedInfo.username;

  const user = users.find((user) => user.username === username); // instead of finding the user through the token
  //   now we will find the user through the username
  if (user) {
    res.send({
      username: user.username,
      password: user.password,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
