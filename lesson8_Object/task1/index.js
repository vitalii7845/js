const transformToObject = arr => {
  const transformToObject = {};

  arr.forEach(element => {
    transformToObject[element] = element;
  });
  return transformToObject;
};

// test data
const testArray = [];
const testArrayFirst = [15, 28, 65, 77];
const testArraySecond = ['Tom', 'Oleg', 'Bil', 'Boris'];
const testArrayThird = ['Oleg', 5, 9, 1, ['Yana', 'Volodumur'], 'Jack', [8, 5, 9], 19];

console.log(transformToObject(testArray));
console.log(transformToObject(testArrayFirst));
console.log(transformToObject(testArraySecond));
console.log(transformToObject(testArrayThird));

console.log(testArrayFirst);
console.log(testArraySecond);
