const baseUrl = `https://6416cdc647092b8b613500f9.mockapi.io/api/v1/tasks`;

const mapTasks = (tasks) => {
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id })); // перезаписуем id в нужном формате, в котором генерирует браузер
};

export const getTasksList = () => {
  // получаем данные с сервера
  return fetch(baseUrl)
    .then((resoponse) => resoponse.json())
    .then((tasks) => mapTasks);
};

export const createTask = (taskData) => {
  // для добавления на сервер
  return fetch(baseUrl, {
    // обязательно указываем данные ниже, что делаем и какие данные передаем
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData), // обязательно приводим данные в формат JSON
  });
};

export const updateTask = (taskId, updatedTasksData) => {
  // функция для обновления
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTasksData),
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
