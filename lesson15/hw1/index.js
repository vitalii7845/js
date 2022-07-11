export const createCalculator = () => {
  let result = 0;

  const add = num => {
    result += num;
  };

  const decrease = num => {
    result -= num;
  };
  const reset = () => {
    result = 0;
  };

  const getMemo = () => {
    return result;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

// test data
const calculator1 = createCalculator();
const calculator2 = createCalculator();

calculator1.decrease(15); // -15
console.log(calculator1.getMemo()); // -15
calculator1.add(25);
console.log(calculator1.getMemo()); // 10
calculator1.reset();

calculator2.add(20); // 20
calculator2.decrease(15); // 5
console.log(calculator2.getMemo()); // 5
calculator2.reset(); // 0
console.log(calculator2.getMemo()); // 0
