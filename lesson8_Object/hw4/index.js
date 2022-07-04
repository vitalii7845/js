/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// alg
// 1. iteration all key of object
// 2. iteration all items of array
// 3. compare if object[key] == array(i) => copy  object[key] to new object
// 4. if  object[key] !== array(i) => continue
// 5 return new object

// input: object
// output: array

// solution

const pickProps = (obj, props) => {
  const pickProps = {};

  for (let key in obj) {
    for (let i of props) {
      if (key == i) {
        pickProps[key] = obj[key];
      }
    }
  }
  return pickProps;
};

// test data
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['f', 's', 'd', 'hex'])); // ==> { }
