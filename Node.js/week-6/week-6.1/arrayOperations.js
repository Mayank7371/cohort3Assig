// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArray.filter((num) => num > 3)); // it returns the whole array tht satisfes the
// // condition
// console.log(myArray.find((num) => num > 3)); // it returns the first num that satisfies the
// // condition
// // The find() method returns the first element in an array that satisfies a provided testing function.
// //  If no element satisfies the function, it returns undefined.
// const arr = [];
// arr.push({
//   username: "mayank",
//   password: "mayank123",
// });
// function user(username) {
//   if (arr.find((u) => u.username === username)) {
//     console.log("user found");
//   } else {
//     console.log("user not found");
//   }
// }
// user("mayank"); // user found
// user("mayank1"); // user not found

// const newArr = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log(newArr);

// function generateToken() {
//   const newArr = "abcdefghijklmnopqrstuvwxyz".split("");
//   let token = "";
//   for (let i = 0; i < newArr.length; i++) {
//     token = token + newArr[Math.floor(Math.random() * newArr.length)];
//   }
//   return token;
// }
// const newToken = generateToken();
// console.log(newToken);

let options = "abcdefghijklmnopqrstuvwxyz123456789".split("");
console.log(options);
