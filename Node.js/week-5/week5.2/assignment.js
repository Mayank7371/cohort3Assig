const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;
// logger middleware
app.use(express.json());
app.use(cors());
// function logger(req, res, next) {
//   const a = req.method;
//   const b = req.url;
//   const c = req.hostname;
//   console.log(a, b, c);
//   next();
// }
// app.use(logger);
app.post("/sum", (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    answer: a + b,
  });
});
app.listen(port, () => {
  console.log(`server is listening on port : ${port}`);
});
