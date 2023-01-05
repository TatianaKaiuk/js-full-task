export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
const square = arr.map(num => (num * num));
return Math.min(...square);
}
console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])); // 4