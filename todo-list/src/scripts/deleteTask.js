import { renderTasks } from './render';
import { getItem, setItem } from './storage';
import { deleteTask, getTasksList } from './tasksGateway';


export const clickOnDeleteBtn = (e) => {
  const isDeleteBtn = e.target.classList.contains('.list-item__delete-btn');

  if (!isDeleteBtn) {
    return;
  }

  const taskId = e.terget.dataset.id;
  console.log(taskId);
  const tasksList = getItem('tasksList');
  tasksList.map((task) => {
    if (task.id === taskId) {
      deleteTask(taskId)
        .then(() => getTasksList())
        .then((newTasksList) => {
          setItem('tasksList', newTasksList);
        });
    }
    return renderTasks();
  });
};

