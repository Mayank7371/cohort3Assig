const { log } = require("node:console");

class Person {
  constructor(fname, lname, contact) {
    // this constructor is responsible for base initialization means when you want to create something new
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    // meaning agar kisi ko bhi person class ka object banana hai to bhai meko ye teen data to chaiye hi chaiye
  }

  getName() {
    console.log(this.fname, this.lname);
  }
  getContact() {
    console.log(this.contact);
  }
}
const p1 = new Person("simon", "minter", 87563875);
p1.getContact();
p1.getName();
