const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice();
};

const numbers = [2, 6, 9, 7, 8, 9];

console.log(cloneArr(numbers));
console.log(numbers);
