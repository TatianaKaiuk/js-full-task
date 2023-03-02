import { renderTasks } from './render.js';
import { setItem, getItem } from './storage';

// const listElem = document.querySelector('.list');

export const clickOnCheckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('tasksList');
  const taskData = tasksList.map((task) => {
    if (task.id === event.target.dataset.id) {
      const done = event.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', taskData);

  renderTasks();
};
// listElem.addEventListener(`click`, clickOnCheckbox);
