export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
}
reverseArray([1, 2, 3, 4, 5]);
//
export function withdraw(clients, balances, client, amount) {
  const index = clients.indexOf(client);
  if (amount > balances[index]) {
    return -1;
  }
  balances[index] -= amount;
  return balances[index];
}
withdraw(['Ann', 'Bob', 'Jon'], [1200, 300, 279], 'Bob', 110);
//
export const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
