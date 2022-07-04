'use strict';
/**
 * @param {number} num
 * @return {number[]}
 */

const multiRound = num => [
  Math.floor(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Math.round(num * 100) / 100,
  +num.toFixed(2),
];

// test data
console.log(multiRound(59.7954));
console.log(multiRound(59.7));
console.log(multiRound(-59.754));
console.log(multiRound(11.12556));
console.log(multiRound(6.112));
