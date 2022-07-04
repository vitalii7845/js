import { reverseArray, withdraw, getAdults } from './index';

it('should get number', () => {
  const result = reverseArray(56);
  expect(result).toEqual(null);
});

it('should get null', () => {
  const result = reverseArray(null);
  expect(result).toEqual(null);
});

it('should get array', () => {
  const result = reverseArray([2, 6, 9, 7, 8, 9]);
  expect(result).toEqual([9, 8, 7, 9, 6, 2]);
});

it('should get arrayV2', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([6, 5, 4, 3, 2, 1]);
});

it('should get arguments', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should get argumentsV2', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100);
  expect(result).toEqual(-1);
});

it('should get argumentsV3', () => {
  const result = withdraw(
    ['Ann', 'John', 'Bob', 'Stan', 'Olga'],
    [1500, 600, 75, 569, 15],
    'Stan',
    600,
  );
  expect(result).toEqual(-1);
});

it('should get argumentsV4', () => {
  const result = withdraw(
    ['Ann', 'John', 'Bob', 'Stan', 'Olga'],
    [1500, 600, 75, 569, 15],
    'John',
    55,
  );
  expect(result).toEqual(545);
});

it('should get some array', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get some array', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should get array not adults', () => {
  const result = getAdults({ Ann: 17, Andrey: 7 });
  expect(result).toEqual({});
});
