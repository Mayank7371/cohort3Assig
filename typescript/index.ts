let x: number = 1;
let y: any = 1; //anything
y = "mayank";
y = true;
y = 2;

function greeting(name: string) {
  // dont use any it is not a good practice
  console.log(`hello, ${name}`);
}
greeting("mayank");
// greeting(1); compiler will complain

function sum(x: number, y: number) {
  const sum1 = x + y;
  return sum1;
}
console.log(sum(2, 3));

function isLegal(age: number): boolean {
  // it is the return type of a function (boolean or anyhting else you can write here)
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
const ans = isLegal(12);
console.log(ans);
// functional arguments

function callback(fn: () => void) {
  setTimeout(fn, 1000);
}
function fn() {
  console.log(`hi there`);
}
callback(fn);
