'use strict';

// event (this in arrow functions)

const user = {
  name: 'Tom',
  sayHi() {
    console.log(this);
  },
};

// user.sayHi();
// const func = user.sayHi;
// func(); // undefined

// setTimeout(user.sayHi, 100); // window
// setTimeout(user.sayHi.bind(user), 100); // window
// setTimeout(() => user.sayHi(), 100); // window

const events = {
  guests: [
    { name: 'Tom', email: 'qwer@gmail.com', age: 17 },
    { name: 'Bob', email: 'br@gmail.com', age: 20 },
  ],
  message: 'Welcom to the party',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Hi ${name}. ${this.message}`,
        email,
      }));
  },
};

console.log(events.getInvitations());

// const events = {
//   guests: [
//     { name: 'Tom', email: 'qwer@gmail.com', age: 17 },
//     { name: 'Bob', email: 'br@gmail.com', age: 20 },
//   ],
//   message: 'Welcom to the party',
//   getInvitations() {
//     return this.guests
//       .filter(({ age }) => age >= 18)
//       .map(function ({ name, email }) {
//         return {
//           text: `Hi ${name}. ${this.message}`,
//           email,
//         };
//       }, events); // not use, old
//   },
// };
// console.log(events.getInvitations());

// const obj = {
//   name: 'Tom',
//   sayHi() {
//     console.log(this.name);
//     // console.log(this); // global obj
//   },
// };

// obj.sayHi(); // Tom

// const func = obj.sayHi;
// func(); // ''
// console.log(this); // window whith strict

// function func() {
//   console.log(this);
// }

// func(); // undefined with strict

// const funcSecond = obj.sayHi(); // incorect Tom in.js:6
// funcSecond(); // incorect not a function

// var a = 1; //bad practice
// window.a = 1;
// console.log(window.a);
// let b = 2;
// console.log(window.b); //undefined

// window.user = {
//   name: ,
//   id:
// };
