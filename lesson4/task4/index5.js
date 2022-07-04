/* eslint-disable prettier/prettier */

let sum = 0;

for (let i = 1; i <= 1000; i++) {
  sum += i;
}

const amount = sum / 1234; 
const divAmount = Math.floor(amount);

const modAmount = sum % 1234;  // 730

const result = divAmount > modAmount;

console.log(result);

console.log('sum:', sum); //500500
console.log('amount:', amount); //405.59157212317666
console.log('divAmount:', divAmount); //405
console.log('modAmount:', modAmount); //730










// let sum = 0;

// for (let i = 0; i <=10000000; i++) {
//   sum += i;
// }

// console.log(sum);






// let sum = 0;

// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 !== 0) {
//     console.log('Found');
//     sum +=i;
//   } else {
//     continue;
//   }
// }

// if (sum * 5 > 5000) {
//   console.log('Bigger');
// } else {
//   console.log('Smaller or equal');
// }






// const start = 2;
// const end = 20;
// let result = 0;

// if (start > 0 && end > start && end <= 100) {
//   for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//       console.log(i);
//     }
//     else if (i % 2 === 0 && i % 4 !==0) {
//        result += i;
//     }
//     else if (i % 3 === 0) {
//       result -= i;
//     }
//     else if (i % 4 === 0) {
//       result *= i;
//     }
//     else {
//       continue;
//     }
//   }
// }

// const n = 7;
// let sum = '';

// for (let i = 1; i <= n; i++) {
//   const iToString = String(i);
//   sum += iToString;
// }

// console.log(sum);
