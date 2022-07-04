// input:array[numbers]
// output: number || null

// alg
// 1. check if array = !array || array.lenght != 0 => return null
// 2. array[numbers] => array[numbers * numbers]
// 3. find min value of squared number
// 4. return min squared number

// 1test. input array[] => output null
// 2test. input string => null
// 3test. inpun array[numbers] => output min squared number

// draf solution
// const getMinSquaredNumber = arr => {
//   if (!Array.isArray(arr) || arr.length === 0) return null;
//   const arrSquared = arr.map(num => num * num);
//   return Math.min(...arrSquared);
// };

// finaly solution
export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.min(...arr.map(num => num * num));
};

// test data
// const testEmptyArray = [];
// const testString = 'Hello';
// const testArray = [5, 9, 7, -4, 2.9];

// console.log(getMinSquaredNumber(testEmptyArray)); // null
// console.log(getMinSquaredNumber(testString)); // null
// console.log(getMinSquaredNumber(testArray)); // 8.41
