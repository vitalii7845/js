/* eslint-disable prettier/prettier */


let result = 1;

for (let m = 10; m <= 20; m++) {
  if (m % 2 === 1) continue;
  result *= m;
}

console.log('Result: ' + result);

// let result = 0;

// while (true) {
//   const userInput = prompt('Your number');
//   if (!userInput) {
//     break;

//   }
//   result += Number(userInput);
// }

// console.log('Result:' + result);

// for (let i = 1; i <= 5; i++) {
//   console.log('\n=> ' + i + ' <=\n\n');

//   for (let j = 1; j <= 10; j++) {
//     console.log(i + ' x ' + j + ' = ' + i * j);
//   }
// }

// task3_lesson4
// for (let i = 1; i <= 5; i++) {
//   console.log('\n=> ' + i + ' <=');

//   for (let j = 1; j <= 10; j++) {
//     console.log(i + ' x ' + j + ' = ' + i * j);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + ' x ' + j + ' = ' + i * j);
//   }
//   console.log('=> ' + i + ' <=');
//   console.log('\n');
//   // console.log('\n=> ' + i + ' <=');
// }

// let result = 1;
// for (let m = 10; m <= 20; m++) {
//   if (m % 2 === 1) {
//     result *= m;
//   }
// }
// console.log(result);

// let m = 10;
// const n =20;
// let result = 1;

// do {
//   if(m % 2 === 1) {
//     result *= m;
//   }
//   m++;
// } while (m <= n)

// console.log('Result: ' + result);
