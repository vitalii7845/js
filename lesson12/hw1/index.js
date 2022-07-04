// draf solution
// const reverseString = (str) => {
//   if (typeof str !== 'string') return null;
//   const splitStr = str.split('');
//   const strArrRevers = splitStr.reverse();
//   const joinArray = strArrRevers.join('');

//   return joinArray;
// }

// finaly solution
const reverseString = str => {
  if (typeof str !== 'string') return null;
  return str.split('').reverse().join('');
};
// test data
console.log(reverseString('Hello'));
