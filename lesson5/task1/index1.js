/* eslint-disable prettier/prettier */




function getSum(first, second) {
  let amount =0;
  for (let i = first; i <= second; i++) {
    if (i % 2 === 0) { 
      amount += i;
    } else {
      continue;
    }
  }
  return amount;
}





const result = getSum(10, 30);
console.log(result);














// const square = num => num * num;


// const result =square(10);
// console.log(result);

// const getSquare = num => num * num;

// const getSquare = (num) => {
//   return num * num;
// }

// const result = getSquare(5);
// console.log(result);

// function getSquare(num) {
//   return num * num;
// }

// const result = getSquare(5);
// console.log(result);



// const getSum = function(a, b) {
//   return a + b;
// }
// const result = getSum(20, 5);
// alert(result);




// function getEvenOdd(num) {
//   if (num % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }




// function getEvenOdd(number) {
//   let mesagge = '';
//   if (number % 2 === 0) {
//     mesagge = 'even';
//   }
//   else if (number % 2 !== 0){
//     mesagge = 'odd';
//   }
//   return mesagge;
// }
// console.log(getEvenOdd(50));

// function sayHi(name) {
//   const greeting = 'Hi, ' + name;
//   console.log(greeting);
//   console.log(arguments);
// }

// const prefix = 'Hi, ';

// function sayHi(name, anotherName = 'anonimus') {
//   const greeting = prefix + name + ' and ' + anotherName;
//   console.log(greeting);
// }
// sayHi('Tom');


// function sayHi(name) {
//   console.log('Hi, ' + name);
// }

// sayHi('Tom');



// function sum(a, b) {
//   return (a + b);
// }

// console.log(sum(5, 10));

// // function getSum(a, b) {
// //   console.log(a + b);
// // }
