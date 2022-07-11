// metods

const user = {
  name: `'John'`,
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age} years old.`);
  },
};

const func = user.sayHi;
func.apply({ name: `'Tom'` }, [`17, 'Hello'`]);

// or
// const anotherUther = { name: 'Tom'};
// func.apply(anotherUther, [17, 'Hello']);
// func.call(anotherUther, 17, 'Hello');

// func(17, 'Hello');

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   name: 'Artur',
//   getFullName() {
//     console.log(`${this.name} ${this.lastName}`);
//   },
// };

// const func = user.getFullName;

// func.apply({ name: 'Tom' });
// func.call({ name: 'Tom' });

// func.call();
// user.getFullName();
// const func = user.getFullName.bind(user);

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// // user.getFullName();

// // const func = user.getFullName.bind(user);
// const func = user.getFullName.bind({name: 'Tom'});

// func();

// .bind()

// const user = {
//   username: 'John',
//   age: 17,
//   sayHi: function () {
//     console.log(`Hi, I am ${this.username}.`);
//   },
//   sayHiv2(num) {
//     console.log(num);
//     console.log(`Hi, I am ${this.username}.`);
//   },
// };

// user.sayHi = function () {
//   console.log(`Hi, I am ${this.username}.`);
// };
