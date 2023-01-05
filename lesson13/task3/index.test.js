import {getMinSquaredNumber} from './index.js';

it ('should get min square fron array', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});
it ('should get null if not array', () => {
    const result = getMinSquaredNumber('string')
     expect(result).toEqual(null);
});
it ('получаем null если пустщй массив', () => {
const result = getMinSquaredNumber([]);
expect(result).toEqual(null);
})