var greeting = 'Hello';

function sayHi() {
  greeting = 'Hi';
  console.log(greeting);

  if (false) {
    var greeting;
  }
}
sayHi();
console.log(greeting);

// var a = 17;

// if (a) {
//   var a = 1;
//   console.log(a);
// }

// let a = 17;

// if (a) {
//   let a = 1;
//   console.log(a);
// }

// console.log(a);
