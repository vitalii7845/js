/* eslint-disable prettier/prettier */
// const arr = new Array();

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const numberOfElements =numbers.length;

// console.log(numberOfElements); //3
// console.log('Element #1: ' + numbers[1]);
// console.log('Element #0: ' + numbers[0]);
// console.log('Element last: ' + numbers[numbers.length - 1]);

// [11, 22, 33, 55, 66] => [length, first elem, last elem]

const numbers = [11, 22, 33, 44, 55, 66, 77];

function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

const arrayBounds = getArrayBounds(numbers);
console.log(arrayBounds);

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// function getArrayBound(arr) {
//   return [arr.length, arr[0], arr[arr.length - 1]];
// }

// const arrayBound = getArrayBound(numbers);
// console.log(arrayBound);
