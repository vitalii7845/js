/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// alg
// 1. iteration all items of object
// 2. compare if object[key] >= minAge => copy  object[key] to new object
// 2.1. if object[key] < minAge  => continue
// 3 return new object

// input: object
// output: object

// solution

const minAge = 18;

const getAdults = obj => {
  const getAdults = {};

  for (const key in obj) {
    if (obj[key] >= minAge) {
      getAdults[key] = obj[key];
    }
  }
  return getAdults;
};

// test data
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 }));
// ==> { Ann: 56 }
console.log(getAdults({ Ann: 17, Andrey: 7 }));
