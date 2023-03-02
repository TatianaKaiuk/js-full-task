// export const tasks = [
//   { text: 'Buy milk', done: false, id: 'one' },
//   { text: 'Pick up Tom from airport', done: false, id: 'two' },
//   { text: 'Visit party', done: false, id: 'three' },
//   { text: 'Visit doctor', done: true, id: 'four' },
//   { text: 'Buy meat', done: true, id: 'five' },
// ];

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getItem = (key) => JSON.parse(localStorage.getItem(key));
