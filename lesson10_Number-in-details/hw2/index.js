const getRandomNumbers = (length, start, end) => {
  if ((end - start < 1 && Math.ceil(start) === Math.ceil(end)) || start > end) return null;
  let arrayRandomNumbers = [];
  arrayRandomNumbers.length = length;
  return arrayRandomNumbers.fill().map(item => {
    item = Math.random() * (end - start) + start;
    if (item >= 0) return Math.ceil(item);
    return Math.floor(item);
  });
};

// test data
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));

console.log(getRandomNumbers(4, -8, 7));
console.log(getRandomNumbers(4, -8, 7));
console.log(getRandomNumbers(4, -8, 7));
