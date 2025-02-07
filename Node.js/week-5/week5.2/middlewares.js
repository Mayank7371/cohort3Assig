const express = require("express");

const app = express();
const port = 3000;
// basic implementation of express.json() middleware
app.use(express.json());
// defining a middleware
let request = 0;
function countReqMiddleware(req, res, next) {
  request = request + 1;
  console.log(request);

  next();
}
// Middleware for getting the url,method and hostname of the user
const UMHmiddleware = (req, res, next) => {
  const a = req.method;
  const b = req.hostname;
  const c = req.url;
  console.log(a, b, c);
  next();
};
app.use(UMHmiddleware);
app.get("/sum", countReqMiddleware, function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.post("/multiply", countReqMiddleware, function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  res.json({
    ans: a * b,
  });
});
app.listen(port, () => {
  console.log(`Express app is listening on port ${port}`);
});

app.use(function (req, res, next) {
  console.log("request received");
  next();
});
