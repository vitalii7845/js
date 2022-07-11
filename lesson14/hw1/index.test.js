import { add, decrease, reset, getMemo } from './index.js';

it('have to get sum', () => {
  add(22);
  const result = getMemo();
  expect(result).toEqual(22);
});

it('have to decrease', () => {
  decrease(5);
  const result = getMemo();
  expect(result).toEqual(17);
});

it('have to reset', () => {
  reset();
  const result = getMemo();
  expect(result).toEqual(0);
});
