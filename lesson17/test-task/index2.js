// defer(func, ms) => function

function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};
const deferredHi = defer(user.sayHi, 1000);
deferredHi.call({ name: 'Bob' });

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func.call(this, ...arguments), ms);
//   };
// }

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'am ${this.name}!`);
//   },
// };
// const deferredHi = defer(user.sayHi, 1000);
// deferredHi.call({ name: 'Bob' });

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func(...arguments), ms);
//   };
// }

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi, I'am ${this.name}!`);
//   },
// };
// const deferredHi = defer(user.sayHi.bind(user), 1000);
// deferredHi();

// example2
// const sum = (a, b) => {
//   console.log(a + b);
// };
// const deferredSum = defer(sum, 1000);

// const sum = (a, b) => {
//   console.log(a + b);
// };

// // sayHi();

// const deferredSum = defer(sum(5, 9), 1000);

// deferredSum();

// example1
// const sayHi = () => {
//   console.log('Hi');
// };

// // sayHi();

// const deferredSayHi = defer(sayHi, 1000);

// deferredSayHi();
