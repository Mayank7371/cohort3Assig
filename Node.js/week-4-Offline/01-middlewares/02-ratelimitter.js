const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

// what is happening after 1 second, it is going back to being an empty object after 1 sec
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);
// what will happen here
/*
first the req will reach ->   const userId = req.headers["user-id"];
then it will reach to the else block because no of req = 0
now it will become 1
second time it will reach to the if block and number of req will become 2,3,4,5
when it will be 6
control will reach 
 if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).send("no entry");
    } 
*/
app.use(function (req, res, next) {
  const userId = req.headers["user-id"];
  //numberOfRequestsForUser[userId] = 1
  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
    if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).send("no entry");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
});
// maintain a count of requests middleware (extra for knowledge)
// function countReqMiddleware(req, res, next) {
//   numberOfRequestsForUser[req.headers["user-id"]]++;
// }

// app.use(countReqMiddleware);

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});
module.exports = app;

// command for running this code
// npx jest ./tests/02-ratelimitter.spec.js
