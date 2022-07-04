import getMinSquaredNumber from './getMinSquaredNumber';

it('should get empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should get string', () => {
  const result = getMinSquaredNumber('Hello');

  expect(result).toEqual(null);
});

it('should get array', () => {
  const result = getMinSquaredNumber([5, 9, 7, -4, 2.9]);

  expect(result).toEqual(8.41);
});
