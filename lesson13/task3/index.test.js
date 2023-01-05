import {getMinSquaredNumber} from './index.js';

it ('should get min square fron array', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});