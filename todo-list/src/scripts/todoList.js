import { newList } from './createTasks.js';
import { clickOnCheckbox } from './checkbox.js';
import { clickOnDeleteBtn } from './deleteTask.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', newList);

  const listElem = document.querySelector('.list');
  listElem.addEventListener(`click`, clickOnCheckbox);

  const deleteTaskElem = document.querySelector('.list');
  deleteTaskElem.addEventListener(`click`, clickOnDeleteBtn);
};
