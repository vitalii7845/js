const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

const numbers = [2, 6, 9, 7, 8, 9];
const noArray = 56;

console.log(reverseArray(numbers));
console.log(reverseArray(noArray));

console.log(numbers);
console.log(noArray);
