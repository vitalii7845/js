// user

function User(name, age) {
  // {} add data
  this.name = name;
  this.age = age;
  // return { ... }
  // this.sayHi = function () {
  //   console.log(`Hi, I am ${this.name}`);
  // };
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const user1 = new User('Tom', 17);
// console.log(user1);
user1.sayHi();

const user2 = new User('Bob', 18);
user2.sayHi();

console.log(user2.sayHi === user1.sayHi); // true

// alert([1, 2, 3]) // to string
// alert({a: 1, b: 2, c: 3}) // to string
// Array.toString();
