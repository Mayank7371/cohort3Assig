const myArray = [1, 2, 3, 4, 5];
function transform(i) {
  return i * 2;
}
const newArray = myArray.map(transform);
console.log(newArray);
