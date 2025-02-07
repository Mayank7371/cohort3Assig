// const path = require("path");
// const { log } = require("util");
// console.log(__dirname); // it will print what directory were you in
// console.log(path.join(__dirname, "/index.js")); // it lets you join various paths
//  "chalk": "^5.3.0" -> the problem with this ^ is every developer will get different version of chalk
// the package-lock.json locks the dependencies by removing the ^ so that the versions get locked
// commander is a package that helps us to create cli
// here i am o=going to create a cli of my own and push it onto github
// this progrm below counts the number of words in a txt file
const { log } = require("console");
const fs = require("fs");
function main(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    // console.log(data);
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " ") {
        total++;
      }
    }
    console.log(total);
  });
}
main("a.txt");
// for understanding
// const myName = "mayank";
// console.log(myName[3]);
