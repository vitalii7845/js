// alg
// 1. obj => in array;
// 2. filter array => users >= 18;
// 3. get name from filter array

// draft solution
// const getAdults = obj => {
//   const arrayAdults = Object.entries(obj);
//   const filteredArrayAdults = arrayAdults.filter(user => user[1] >= 18);
//   const resultGetAdults = filteredArrayAdults.map(user => user[0]);
//   return resultGetAdults;
// };

// const users = { John: 19, Tom: 17, Bob: 18 };
// const zeroUsers = {};

// // test data
// console.log(getAdults(users));
// console.log(getAdults(zeroUsers));

// finali solution
const getAdults = obj => {
  const limitAge = 18;
  const arrayAdults = Object.entries(obj)
    .filter(user => user[1] >= limitAge)
    .map(user => user[0]);
  return arrayAdults;
};

// test data
// const users = { John: 19, Tom: 17, Bob: 18 };
// const zeroUsers = {};
// console.log(getAdults(users));
// console.log(getAdults(zeroUsers));
