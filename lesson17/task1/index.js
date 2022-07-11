// alg
// do function which greate fullName from firstName and lastName
// return fullName

// input: obj
// output: string (fullName)

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
const resGetFullName = user.getFullName();
console.log(resGetFullName);

// tast data
// console.log(user.getFullName());

// const resGetFullName = user.getFullName();
// console.log(resGetFullName);
