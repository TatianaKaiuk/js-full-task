import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export function newList() {
  const inputElem = document.querySelector('.task-input');
  const text = inputElem.value;

  if (!text) {
    return;
  }
  inputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };
 // console.log(newTask);

  createTask(newTask) // вызываем функ на изминения данных
    .then(() => getTasksList()) // получаем данные
    .then((newTasksList) => {
      // сохраняем и добавляем в локалстореч
      setItem('tasksList', newTasksList);
      renderTasks(); // обновляем список
    });
}
