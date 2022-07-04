







function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    let sumOfNumbers = 0;
    for (let i = 0; i < arr.length; i++) {
      sumOfNumbers += arr[i];
    }
    return sumOfNumbers;
  }
}

console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null



const numbers = [11, 22, 33, 44, 55, 66, 77];

function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}

const arrayBounds = getArrayBounds(numbers);
console.log(arrayBounds);
