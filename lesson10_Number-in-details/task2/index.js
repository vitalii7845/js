const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));
const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));
const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

const elementList = [4, 5, 6, 9.9, 96.7, 2.7, 0.9, -75, -8.6];

console.log(getParsedIntegers(elementList));
console.log(getParsedIntegersV2(elementList));
console.log(getParsedFloats(elementList));
console.log(getParsedFloatsV2(elementList));
