// geter and setter

const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
console.log(user.fullName); // john Doe => get

user.setFullName('Tom Hardy');
console.log(user.fullName); // Tom Hardy
console.log(user.firstName); // Tom

// ___________________________
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };
// console.log(user.fullName); // john Doe => get

// user.fullName = 'Tom Hardy';
// console.log(user.fullName); // Tom Hardy => set
// console.log(user.firstName); // Tom
