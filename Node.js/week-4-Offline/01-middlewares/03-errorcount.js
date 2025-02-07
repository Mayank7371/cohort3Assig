const express = require("express");

const app = express();
let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
// app.use(errorHandler);
app.get("/user", function (req, res) {
  throw new Error("some error");
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
  res.status(200).json({ errorCount });
});
//we define error handling middleware at the end of our file
// error handling middlewares take 4 arguments
// whenever there is an error express defaultly sends code 500 we don't want that

app.use(function (err, req, res, next) {
  res.status(404).send({
    msg: "there is an error",
  });
  errorCount = errorCount + 1;
});

module.exports = app;

// the test command for this is  npx jest ./tests/03-errorcount.spec.js
