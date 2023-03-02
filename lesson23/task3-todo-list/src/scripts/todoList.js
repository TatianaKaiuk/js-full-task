import { newList } from './createTask.js';
import { clickOnCheckbox } from './checkbox.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', newList);

  const listElem = document.querySelector('.list');
  listElem.addEventListener(`click`, clickOnCheckbox);
};
