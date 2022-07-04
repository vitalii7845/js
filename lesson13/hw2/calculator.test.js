import { calc } from './calculator';

it('should get not string', () => {
  const result = calc(157);

  expect(result).toEqual(null);
});

it('should check plus', () => {
  const result = calc('5 + 5');

  expect(result).toEqual('5 + 5 = 10');
});

it('should check minus', () => {
  const result = calc('5 - 5');

  expect(result).toEqual('5 - 5 = 0');
});

it('should check multyply', () => {
  const result = calc('5 * 5');

  expect(result).toEqual('5 * 5 = 25');
});

it('should checkdivide', () => {
  const result = calc('20 / 5');

  expect(result).toEqual('20 / 5 = 4');
});
