// algoritm to do
// 1. check if arr is array
// 1.1. if arr is not array => return null
// 1.2 if arr is array => continue
// 2. iterate arr all component => sum all => get arithmetic mean

// input: array
// output: number

// draft solution
// const arrAverage = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const sumArrAverage = arr.reduce(function (acc, element) {
//     return acc + element;
//   }, 0);

//   return sumArrAverage / arr.length;
// };

// // test data
// const testArray = [5, 2, 6, 8, 4];
// const testNotArray = 15;
// console.log(arrAverage(testArray));
// console.log(arrAverage(testNotArray));
// console.log(arrAverage());
// console.log(testArray);

// finaly solution

const arrAverage = arr => {
  if (!Array.isArray(arr)) return null;

  return arr.reduce((acc, element) => acc + element) / arr.length;
};

// test data
// const testArray = [5, 2, 6, 8, 4];
// const testNotArray = 15;
// console.log(arrAverage(testArray));
// console.log(arrAverage(testNotArray));
// console.log(arrAverage());
// console.log(testArray);
