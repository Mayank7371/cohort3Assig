const { log } = require("node:console");
// object literals
const person = {
  fname: "harry",
  lname: "lewis",
  contact: 123456,
  getName: function () {
    console.log(this.fname, this.lname);
  },
};
console.log(person.getName());
// now if i have to make another object i will have to copy and paste this -> disadvantage

const person2 = {
  fname: "ethan",
  lname: "payne",
  contact: 123456,
};
const person3 = {
  fname: "tobi",
  lname: "brown",
  contact: 123456,
};
//  this is a lot of code repetition we can use constructor functions or function constructors to make objects

function Person(fname, lname, contact) {
  this.fname = fname;
  this.lname = lname;
  this.contact = contact;
  this.getName = function () {
    console.log(this.fname, this.lname);
  };
}

const person1 = new Person("simon", "minter", 890897);
console.log(person1.getName());
