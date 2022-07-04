 /* eslint-disable prettier/prettier */

const m = 10;
const n = 20;
let result = 1;
let i = m;

do {
  if (i % 2 === 1) {
    result *= i;
  }
  i++;
} while (i <= n);

console.log(result);



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


// suma chusel vid 0 do n
// let n = 10;
// let sum = 0;

// do {
//   sum += n;
//   n -= 1;
// } while (n > 0);

// console.log('Result: ' + sum);
