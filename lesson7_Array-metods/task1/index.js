const getSpecialNumbers = numbers => {
  const result = numbers.filter(num => num % 3 === 0);

  return result;
};

const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);
const arr = [5, 6, 9, 20, 21, 27, 5, 7, 5, 9, 15, 30, 5];
console.log(getSpecialNumbers(arr));
