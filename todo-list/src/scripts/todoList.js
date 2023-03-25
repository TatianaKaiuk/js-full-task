import { newList } from './createTasks.js';
import { clickOnCheckbox } from './checkbox.js';
import { clickOnDeleteBtn } from './deleteTask.js';

export const initTodoListHandlers = () => {
  const deleteTaskElem = document.querySelector('.list-item__delete-btn');
  deleteTaskElem.addEventListener(`click`, clickOnDeleteBtn);
  
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', newList);

  const listElem = document.querySelector('.list');
  listElem.addEventListener(`click`, clickOnCheckbox);

};
