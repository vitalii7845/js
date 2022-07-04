// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing
// -> final solution

// algoritm to do
// 1. check if arr is array
// 1.1. if arr is not array => return null
// 1.2 if arr is array => continue
// 2. iterate arr all component and myltiply on himself

// input: array
// output: array

// draft solution
// const squareArray = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const resultSquareArray = arr.slice().reduce(function (acc, element) {
//     return acc.concat(element * element);
//   }, []);

//   return resultSquareArray;
// };

// test data
// const testArray = [5, 2, 6, 8, 4];
// const testNotArray = 15;
// console.log(squareArray(testArray));
// console.log(squareArray(testNotArray));
// console.log(testArray);

// finaly solution

const squareArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(item => item * item);
};

// test data
// const testArray = [5, 2, 6, 8, 4];
// const testNotArray = 15;

// console.log(squareArray(testArray));
// console.log(squareArray(testNotArray));

// console.log(testArray);
// console.log(testNotArray);
