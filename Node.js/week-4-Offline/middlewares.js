const express = require("express");
const app = express();
const port = 8000;
app.use(oldEnoughMiddleware);
function oldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  console.log(age);
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "sorry you are not old enough",
    });
  }
}
app.get("/route1", (req, res) => {
  res.json({
    msg: "you have successfully hit the route 1",
  });
});
app.listen(port, () => {
  console.log(`app is istening on port : ${port}`);
});
