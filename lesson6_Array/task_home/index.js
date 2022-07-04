/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */

function sortAsc(array) {
  if (!Array.isArray(array))
  {
    return null;
  } else {
    let sortedArray = [];
    for (;array.length; ) {
      sortedArray.push(array.splice(array.indexOf(Math.min(...array)), 1)[0]);
    }
    return sortedArray;
  }
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  } else {
    let sortedArray = [];
    for (; array.length; ) {
      sortedArray.push(array.splice(array.indexOf(Math.max(...array)), 1)[0]);
    }
    return sortedArray;
  }
}



console.log(sortAsc([3, 2, 1, 1, 5, 4]));
console.log(sortAsc([3, 2, 1, 1, 5, 4, 9, 54, 8, 64, 96]));

console.log(sortDesc([3, 2, 1, 1, 5, 4]));
console.log(sortDesc([3, 2, 1, 1, 5, 4, 9, 54, 8, 64, 96]));



// function up() {
// let a = [3, 2, 1, 1, 5, 4],
// c = [];
// for (; a.length; ) {
//   c.push(a.splice(a.indexOf(Math.min(...a)), 1)[0]);
// }
// console.log(c);
// }




// function sortDesc(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   } 
// }



// function up() {
// let a = [3, 2, 1, 1, 5, 4],
// c = [];
// for (; a.length; ) {
//   c.push(a.splice(a.indexOf(Math.min(...a)), 1)[0]);
// }
// console.log(c);
// }

// function down() {
// let a = [3, 2, 1, 1, 5, 4],
//   c = [];
// for (; a.length; ) {
//   c.push(a.splice(a.indexOf(Math.max(...a)), 1)[0]);
// }
// console.log(c);
// }

//  up();
// down();



// function uniqueCount(array) {
//   let uniqueAmount = 0;
//   if (!Array.isArray(array))
//   {
//     return null;
//   }
//   else 
//   {
//     array = [...new Set(array)];
//    uniqueAmount = array.length;
//   } 
//     return uniqueAmount;
// }

// console.log(uniqueCount([1,4,1,8,3,4,8,8,5,25,105,8,1,5]));




// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   } else {
//     array = [...new Set(array)];
//     return array;
//   }
// }

// console.log(removeDuplicates([2, 8, 6, 6, 5, 3, 55, 2, 2, 8, 9, 8, 2, 6, 10]));



// function withdraw(clients, balances, client, amount) {
//   //   const problem = -1;

//   for (let i = 0; i < clients.length; i++) {
//     if (client === clients[i]) {
//       if (balances[i] < amount) {
//         return -1;
//       } else {
//         balances[i] -= amount;
//         return balances[i];
//       }
//     }
//   }
// }

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// function sor(a,b){
// if(a>b) return -1;
// if(a<b) return 1;
// return 0;
// }

// var mas=[16,7,45,0,9,2,3];
// mas.sort(sor);
// alert(mas); //[45,16,9,7,3,2,0]
// undefined
// function sor(a,b){
// if(a>b) return -1;
// if(a<b) return 1;
// return 0;
// }

// var mas=[16,7,45,0,9,2,3];
// mas.sort(sor);
// return(mas); //[45,16,9,7,3,2,0]






// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   } else {
//     const testValue = array[0];
//     for(let i = 1; i <= array.length; i++) {
//       if (testValue === array[i]) {
//         array.splice(i);
//         continue;
//       }
//       else if(testValue === array[i])
//     }
//   }
// }
//   if (!Array.isArray(array)) {
//     return null;

// function removeDuplicates(array) {
//   let obj = {};
//   let retArr = [];

//   if (!Array.isArray(array)) {
//     return null;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       obj[array[i]] = true;
//     }
//     for (let element in obj) {
//       retArr.push(element);
//     }
//   }
//   return retArr;
// }

// console.log(removeDuplicates([2, 8, 6, 9, 8, 2, 6]));

// const includes = (arr, num) => {
//   for (let element of arr) {
//     if (element === num) {
//       return true;
//     } else {
//       continue;
//     }
//   }
//   return false;
// };

//      return false;

// examples
// console.log(includes([1, 4, 8, 3], 3));
// console.log(includes([1, 4, 8, 3], 5));

// includes([1, 4, 8, 3], 3); // ==> true
// includes([1, 4, 8, 3], 5); // ==> false

// const getSubArray = (arr, numberOfElements) => {
//   arr.length = numberOfElements;
//   return arr;
// };

// console.log(getSubArray([11,4,8,3], 2));
// console.log(getSubArray([11, 4, 8, 3, 2, 6, 8, 9], 5));

// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     let maxElement = arr[0];
//     let minElement = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > maxElement) {
//         maxElement = arr[i];
//       }
//       if (arr[i] < minElement) {
//         minElement = arr[i];
//       } else {
//         continue;
//       }
//     }
//     const taskResult = maxElement + minElement > 1000;
//     return taskResult;
//   }
// }

// console.log(checker([1036,464, 599, 375, 621, 545]));
// console.log(checker([3, 4, 4, 75, 1, 5]));
// console.log(checker('hello'));

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     const cloneArray = arr.slice();
//     return cloneArray;
//   }
// }

// console.log(cloneArr([1, 2, 5, 6, 9]));
// console.log(cloneArr('arr'));

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     const copyArrRevers = arr.slice();
//     copyArrRevers.reverse();

//     return copyArrRevers;
//   }
// }

// console.log(reverseArray([1, 2, 5, 6, 9]));
// console.log(reverseArray('arr'));

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else {
//     const copyArr = arr.slice();
//     for (let i = 0; i < copyArr.length; i++) {
//       if (copyArr[i] % 2 === 0) {
//         copyArr[i] += delta;
//       } else {
//         continue;
//       }
//     }
//     return copyArr;
//   }
// }

// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
// console.log(increaseEvenEl([7, 11, 1], 10));
// console.log(increaseEvenEl([], 120));

// // examples
// increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
// increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
// increaseEvenEl([], 120); // ===> []

// /**
//  * @param {number[]} arr
//  * @return {boolean}
//  */
// const checkSum = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   } else if (Array.isArray(arr)) {
//     let sumOfNumbers = 0;
//     for (let num of arr) {
//       sumOfNumbers += num;
//     }
//     const taskResult = sumOfNumbers > 100
//     return taskResult;
//   }
// }
// // examples
// console.log(checkSum([10, 10, 10])); // ===> false
// console.log(checkSum([10, 99, 1]));
// console.log(checkSum([-6, -3, 200]));
// checkSum([10, 99, 1]); // ===> true
// checkSum([-6, -3, 200]); // ===> true

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }  else if (Array.isArray(arr)) {
//       const copyArr = arr.slice();
//       for (let i = 0; i < copyArr.length; i++) {
//         copyArr[i] *=  copyArr[i];
//       }
//       return copyArr;
//   }
// }
// //let i = 0; i < numbers.length; i++
// // examples
// console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
// console.log(squareArray([10, 0, -4]));
// console.log(squareArray([1]));

// function createEmptyArray(len) {
//   const arr = new Array(len);
//   return arr;
// }

// console.log(createEmptyArray(10));
