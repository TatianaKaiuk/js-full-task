export const getMinSquaredNumber = arr => {
const square = arr.map(num => (num * num));
return Math.min(...square);
}
console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])); // 4