import { getAdults, withdraw, reverseArray } from './index.js';

it('should get revers array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});
it('should get revers array', () => {
  const result = reverseArray('1, 2, 3');
  expect(result).toEqual(null);
});
it('should get revers array', () => {
  const result = reverseArray(['a', 'b', 'c']);
  expect(result).toEqual(['c', 'b', 'a']);
});

it('should get amount for client', () => {
  const result = withdraw(['Ann', 'Bob', 'Jon'], [1200, 300, 279], 'Bob', 110);
  expect(result).toEqual(190);
});
it('should get amount for client', () => {
  const result = withdraw(['Ann', 'Bob', 'Jon'], [1200, 100, 279], 'Bob', 110);
  expect(result).toEqual(-1);
});

it('should get name, age >= 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual(['John Doe', 'Bob']);
});
it('should get name, age >= 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).not.toEqual(['Tom']);
});
it('should get name, age >= 18', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).not.toEqual([18, 19]);
});