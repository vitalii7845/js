/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */

const superRound = (num, prec) => [
  Math.floor(num * 10 ** prec) / 10 ** prec,
  Math.trunc(num * 10 ** prec) / 10 ** prec,
  Math.ceil(num * 10 ** prec) / 10 ** prec,
  Math.round(num * 10 ** prec) / 10 ** prec,
  +num.toFixed(prec),
];

// test data
console.log(superRound(0.12556, 2));
console.log(superRound(-11.12556, 2));
console.log(superRound(11.12556, 4));
console.log(superRound(11.12556, 3));
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
