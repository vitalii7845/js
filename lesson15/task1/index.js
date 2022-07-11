const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

export { makeCounter };

const counter1 = makeCounter();
const counter2 = makeCounter();

// test data
// console.log(counter1()); // 0
// console.log(counter1()); // 1
// console.log(counter2()); // 0
// console.log(counter1()); // 2
// console.log(counter2()); // 1
