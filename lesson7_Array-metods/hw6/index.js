const sum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const amount = arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  return amount;
};

// test data
const numbers = [1, 2, -3, 4];
const noArray = 'Hello';

console.log(sum(numbers));
console.log(sum(noArray));

console.log(numbers);
console.log(noArray);

// [1, 2, 3, 4].reduce(function (acc, num) {
//   return acc + num;
// }, 0);
