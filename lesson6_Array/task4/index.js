/* eslint-disable prettier/prettier */
// spread and дуструктиризація

// const numbers = [11, 22, 33, 55, 66];

// function sum(numbers) {
//   let sumOfNumbers = 0;

//   for(let num of numbers) {
//     sumOfNumbers += num;
//   }

//   return sumOfNumbers;
// }

// const sumOfNumbers = sum(numbers);

// console.log('Result:' + sumOfNumbers);




// const a = numbers[0];
// const b = numbers[1];

// const [a, b, c, d, e, f] = numbers;
// const [a, b, ...arr] = numbers;


// console.log(a, b, [1, 2, 3, ...arr, 6, 7]);

// function swap(arr) {
//   const [start, ...rest] = arr;

//   return [...rest, start];
// }




function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}



function swapManual(numbers) {
  const copyNumbers = numbers.slice();
 copyNumbers.push(copyNumbers.shift());
  return copyNumbers;
}
  // for (let i = 0; i <= numbers.lenght-1; i++) {
  //   if ()
  // }
// const arr = new Array;
// arr = numbers;
 
// arr.push(arr.shift());
// return arr;

// numbers.push(numbers.shift());
//   return numbers;

  // const arr = numbers;
  // const startNumber = arr.shift();
  // arr.push(startNumber);
  // return arr;


// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

