import { makeCounter } from './index';

it('should use counter1 and get zero', () => {
  const result = makeCounter(counter1);

  expect(result).toEqual([1, 4, 9]);
});

it('should keep add numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0
console.log(counter1()); // 2
console.log(counter2()); // 1
