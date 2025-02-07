const express = require("express");
const jwt = require("jsonwebtoken");
const seceret = "boomboom";
const app = express();
const port = 3000;
app.use(express.json());
const users = [];
app.use(logger);
function auth(req, res, next) {
  // here we will deal with authentication
  // we can slo end the request early
  // this auth middleware should also pass the data to the next route handler

  const token = req.headers.token;
  const decodedData = jwt.verify(token, seceret);
  req.username = decodedData.username; // this will modify the req or manipulating the req

  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.josn("you are not logged in!");
  }
}
function logger(req, res, next) {
  console.log(`${req.method} request came`);
  next();
}
// localhost:3000 ,  to avoid CORS error
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // __dirname hold your current directory
});
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
app.get("/me", auth, (req, res) => {
  // this endppoint should not worry about decoding the token, it should
  // be managed by a middleware we sould not repeat ourselves
  // here we will worry about finding the user only
  if (users.find((u) => u.username == req.username)) {
    // we need to know req kisne bheji hai jiska username
    // dhoondhna hai because we are not dojng token verification here anymore !
    res.json({
      username: req.username,
    });
  } else {
    res.json({
      msg: "wrong credentials",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
