const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

// test data
const arrNumbers = [
  68,
  0,
  -7,
  'hello',
  '145ojnb',
  NaN,
  undefined,
  null,
  Infinity,
  -Infinity,
  15.8,
  -4.9,
  0.8,
];
console.log(getFiniteNumber(arrNumbers));
console.log(getFiniteNumberV2(arrNumbers));
console.log(getNaN(arrNumbers));
console.log(getNaNV2(arrNumbers));
console.log(getIntegers(arrNumbers));
console.log(arrNumbers);
