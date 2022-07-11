export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) return false;
    this.age = value;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

// test data
// const user1 = new User('Claus', 19);
// console.log(user1);
// const user2 = new User('Barry', 36);
// console.log(user2);

// console.log(User.createEmpty());

// console.log(User.prototype.sayHi);
// console.log(User.prototype.requestNewPhoto);
// console.log(User.prototype.setAge);

// user1.sayHi();
// user1.requestNewPhoto();

// console.log(user1.setAge(-1));
// console.log(user1);
// console.log(user1.setAge(24));
// console.log(user1);
// console.log(user1.setAge(26));
// console.log(user1);
