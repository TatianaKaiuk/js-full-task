import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

const createBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

// const listElem = document.querySelector('.list');

export function newList() {
  const inputValue = inputElem.value;

  if (inputValue.length === 0) {
    return null;
  }
  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    text: inputValue,
    done: false,
    id: Math.floor(Math.random() * (100 - 1) + 1).toString(),
  });

  inputElem.value = '';
  setItem('tasksList', newTasksList);
  //   listElem.innerHTML = '';
  renderTasks();
}
createBtnElem.addEventListener('click', newList);
