import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { deleteTask, getTasksList } from './tasksGateway.js';

export const clickOnDeleteBtn = (e) => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (!isDeleteBtn) {
    return;
  }

  const taskId = e.target.dataset.id;
  console.log(taskId);

  const tasksList = getItem('tasksList');
  const id = tasksList.find((task) => task.id === taskId);
  deleteTask(id)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
    });
    renderTasks();
};

const deleteTaskElem = document.querySelector('.list-item__delete-btn');
deleteTaskElem.addEventListener('click', clickOnDeleteBtn);
