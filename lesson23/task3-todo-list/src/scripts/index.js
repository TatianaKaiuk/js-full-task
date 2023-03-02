
import { newList } from './todo-list.js';
import { renderTasks } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  newList();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
