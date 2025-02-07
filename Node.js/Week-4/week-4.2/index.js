const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.json({
    msg: "hey there! the server is up and running",
  });
  z;
});
app.listen(port, () => {
  console.log(`app is listening on port : ${port}`);
});
