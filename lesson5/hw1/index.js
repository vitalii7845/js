/* eslint-disable no-plusplus */

function getPrimes(num) {
 goto : for(let i = 2; i <= num; i++) {

    for (let b = 2; b < i; b++) {
      if (i % b === 0) continue goto;
    }

    console.log(i);
  }
}

// getPrimes(10);

// getPrimes(100);
getPrimes(2);



// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   // Для всех i...

//   for (let j = 2; j < i; j++) {
//     // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert(i); // простое число
// }









// function findDivCount(a, b, n) {
//   let result = 0;
//   for (let i = a; i <= b; i++) {
//     if (i % n === 0) {
//       result += 1;
//     } else {
//       continue;
//     }
//   }
// return result;
// }

// console.log(findDivCount(10, 30, 6));






// function sum(from, to) {
//   let amount = 0;
//   for (let i = from; i <= to; i++) {
//     amount += i;
//   }
//   return amount;
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   const result = sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
//   return result;
// }


// console.log(sum(5, 10)); // ===> 45
// console.log(sum(11, 11)); // ===> 11

// console.log(compareSums(5, 10, 5, 10)); // ===> false
// console.log(compareSums(5, 15, 3, 5)); // ===> true
// console.log(compareSums(-2, 5, 5, 9)); // ===> false




// function increaser(a, index) {
//   let result = 0;
//   if (a > index) {
//     result = a + index;
//   } else {
//     result = a;
//   }
//   return result;
// }