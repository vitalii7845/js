// algoritm to do
// 1. copy input object to newObject;
// 2. return newObj;

// input: object
// output: object

// solution

const copyObj = obj => Object.assign({}, obj);

const student = {
  Stan: 18,
  Bob: 19,
};

// console.log(copyObj(student));
