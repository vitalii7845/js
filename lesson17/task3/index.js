//  defer(func, ms) => function

export function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

const user = {
  name: 'Artur',
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  },
};

const userHi = user.sayHi.bind(user);
const deferedHi = defer(userHi, 2000);
deferedHi();

const userHiSecond = user.sayHi;
const deferedHiSecond = defer(userHiSecond, 1500);
deferedHiSecond.call({ name: 'Boris' });

// function defer(func, ms) {
//   return function () {
//     setTimeout(() => func.apply(this, arguments), ms);
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
