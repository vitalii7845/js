export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (newAge < 0) {
    return false;
  }
  if (newAge >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return this.age;
};

// test data
const user = new User('John', 25);
const user1 = new User('Boris', 16);
user.sayHi();
console.log(user.setAge(24));
console.log(user.requestNewPhoto());
console.log(user1.setAge(-1));
console.log(user1.setAge(26));
console.log(user);
console.log(user1);
