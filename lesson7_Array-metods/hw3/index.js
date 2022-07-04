// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing
// -> final solution

// algoritm to do
// 1. check if arr is array
// 1.1. if arr is not array => return null
// 1.2 if arr is array => continue
// 2. iterate all arr items for check is even number
// 2.1 if items is even number => item plus delta

// input: array, number
// output: array

// >>>>>>>>>>> draft solution

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) return null;

//   const increaseEvenEl = arr.map(item => (item % 2 === 0 ? item + delta : item));

//   return increaseEvenEl;
// };

// //test data
// const testArray = [5, 2, 6, 8, 4];
// const testNotArray = 15;
// console.log(increaseEvenEl(testArray, testNotArray));
// console.log(increaseEvenEl(testNotArray, testNotArray));
// console.log(testArray);
// console.log(testNotArray);

// finaly solution

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) return null;

  return arr.map(item => (item % 2 === 0 ? item + delta : item));
};

//test data
const testArray = [5, 2, 6, 8, 4];
const testNotArray = 15;

console.log(increaseEvenEl(testArray, testNotArray));
console.log(increaseEvenEl(testNotArray, testNotArray));

console.log(testArray);
console.log(testNotArray);
