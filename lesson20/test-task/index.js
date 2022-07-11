class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compare(user1, user2) {
    return user1.age - user2.age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

const user1 = new User('Claus', 19);
console.log(user1);

const user2 = new User('Barry', 36);
console.log(user2);

console.log(User.compare(user1, user2));

console.log(user1.sayHi);
console.log(User.sayHi); // undefind
console.log(User.prototype.sayHi);
console.log(User.sayHi);

// _______________________________________
//
//
//
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }

//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }

//   setAge(value) {
//     if (value < 0) {
//       return false;
//     }
//     if (this.age >= 25) {
//       this.requestNewPhoto();
//     }
//     return value;
//   }
// }

// const user1 = new User('Claus', 19);
// console.log(user1);

// _____________first_function_____________________

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New photo request was sent for ${this.name}`);
// };

// User.prototype.setAge = function (value) {
//   if (value < 0) {
//     return false;
//   }
//   if (this.age >= 25) {
//     this.requestNewPhoto();
//   }
//   return value;
// };
