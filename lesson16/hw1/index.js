// alg
// 1. check argument is number, if argument !== number => return null
// 2. check if argument == '' return []
// 3. iteration from 0 to argumet => return function to array
// 4. finaly output => array argumet-numer functions

// input: number
// output: array of function (number)

// draf solution
// function createArrayOfFunctions(num) {
//   let arr = [];
//   if (num == undefined) return arr;
//   if (typeof num !== 'number') return null;

//   for (var i = 0; i < num; i += 1) {
//     arr[i] = function () {
//       return i;
//     };
//   }
//   return arr;
// }

// draff solution2
// const createArrayOfFunctions = (num) => {
//   let arr = [];
//   if (num === undefined) return arr;
//   if (typeof num !== "number") return null;

//   for (var i = 0; i < num; i += 1) {
//     arr[i] = () => i;
//   }
//   return arr;
// };

// finaly solution
export const createArrayOfFunctions = (num) => {
  let arr = [];
  if (num === undefined) return arr;
  if (typeof num !== 'number') return null;

  for (let i = 0; i < num; i += 1) {
    arr[i] = () => i;
  }
  return arr;
};

// export { createArrayOfFunctions };

// test data
console.log(createArrayOfFunctions(5)[2]());
console.log(createArrayOfFunctions(8)[4]());
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions('Hello'));
