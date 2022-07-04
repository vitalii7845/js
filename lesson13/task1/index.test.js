// simple assertions

it('17 is 17', () => {
  expect(17).toEqual(17);
});

it('18 not a 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

it('should get even numbers', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  expect(result).toEqual([2, 4, 6, 8, 10]);
});
