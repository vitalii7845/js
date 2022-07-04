// algoritm to do
// 1. iterate arr all component
// 2. if (arr component include text) && (arr component lenght > 5)  => return it component

// input: array, text
// output: array

// // draft solution
// const filterNames = (arr, text) => {
//   const filterNames = arr.filter(item => item.includes(text) && item.length > 5);
//   return filterNames;
// };

// test data
// const testArray = ['Ann', 'Jon', 'Boris', 'Oliviya', 'Nastya'];
// console.log(filterNames(testArray, 'ya'));
// console.log(testArray);

// finaly solution
const filterNames = (arr, text) => {
  return arr.filter(item => item.includes(text) && item.length > 5);
};

// test data
// const testArray = ['Ann', 'Jon', 'Boris', 'Oliviya', 'Nastya'];
// console.log(filterNames(testArray, 'ya'));
// console.log(testArray);
