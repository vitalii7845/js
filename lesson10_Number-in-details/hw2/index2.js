// input: number, number, number
// output: array

// const getRandomNumbers = (length, from, to) => {
//   const fromCeil = Math.ceil(from);
//   const toCeil = Math.ceil(to);

//   if (from >= to || toCeil === fromCeil) {
//     return null;
//   }
//   return new Array(length)
//     .fill()
//     .map((el) => Math.floor(Math.random() * (toCeil - fromCeil) + fromCeil));
// };

// var.2
const getRandomNumbers = (length, from, to) => {
  const fromCeil = Math.ceil(from);
  const toCeil = Math.ceil(to);

  if (from >= to || toCeil === fromCeil) {
    return null;
  }
  const arrRendNum = new Array(length)
    .fill()
    .map((el) => Math.floor(Math.random() * (toCeil - fromCeil) + fromCeil));
  return arrRendNum;
};

// test data
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null

console.log(getRandomNumbers(10, 1, 4));
console.log(getRandomNumbers(10, 1, 4));
console.log(getRandomNumbers(10, 1, 4));
console.log(getRandomNumbers(10, 1, 4));
console.log(getRandomNumbers(10, 1, 4));

console.log(getRandomNumbers(3, 0.7, 1.2));
console.log(getRandomNumbers(3, 0.2, 0.7));
console.log(getRandomNumbers(3, 0.7, 0.2));
