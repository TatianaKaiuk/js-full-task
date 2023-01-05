import { calc } from './calculator.js';

it('неправильный тип данных', () => {
  const result = calc([1 + 2]);
  expect(result).toEqual(null);
});
it('should get sum', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});
it('should get difference', () => {
  const result = calc('3 - 2');
  expect(result).toEqual('3 - 2 = 1');
});
it('should get division', () => {
  const result = calc('6 / 2');
  expect(result).toEqual('6 / 2 = 3');
});
it('should get multiplication', () => {
  const result = calc('6 * 2');
  expect(result).toEqual('6 * 2 = 12');
});