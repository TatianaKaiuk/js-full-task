import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './render.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => { // после загрузки страницы получаем данные  сервера
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList); // и созраняем  локалсторедж
    renderTasks();
  });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
