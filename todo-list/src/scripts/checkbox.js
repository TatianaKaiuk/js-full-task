import { renderTasks } from './render.js';
import { setItem, getItem } from './storage.js';
import { getTasksList, updateTask } from './tasksGateway.js';



export const clickOnCheckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;

  const tasksList = getItem('tasksList');
  const { text, createData } = tasksList.find((task) => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    createData,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
