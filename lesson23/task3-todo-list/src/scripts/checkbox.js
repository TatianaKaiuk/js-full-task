import { renderTasks } from "./render.js";

import { tasks } from "./storage.js";

const listElem = document.querySelector('.list');

 const clickOnCheckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find((task) => task.id === event.target.dataset.id);
  Object.assign(taskData, { done: event.target.checked });
  listElem.innerHTML = '';
  renderTasks(tasks);
};
listElem.addEventListener(`click`, clickOnCheckbox);