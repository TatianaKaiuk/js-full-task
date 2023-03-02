import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

// const createBtnElem = document.querySelector('.create-task-btn');

// const listElem = document.querySelector('.list');

export function newList() {
  const inputElem = document.querySelector('.task-input');
  const inputValue = inputElem.value;

  if (!inputValue) {
    return null;
  }
  inputElem.value = '';

  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    text: inputValue,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.floor(Math.random() * (100 - 1) + 1).toString(),
  });

  setItem('tasksList', newTasksList);
 
  renderTasks();
}
// createBtnElem.addEventListener('click', newList);
