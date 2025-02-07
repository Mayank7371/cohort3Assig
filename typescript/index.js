"use strict";
let x = 1;
let y = 1; //anything
y = "mayank";
y = true;
y = 2;
function greeting(name) {
    // dont use any it is not a good practice
    console.log(`hello, ${name}`);
}
greeting("mayank");
// greeting(1); compiler will complain
function sum(x, y) {
    const sum1 = x + y;
    return sum1;
}
console.log(sum(2, 3));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal(12);
console.log(ans);
