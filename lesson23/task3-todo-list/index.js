const tasks = [
  { text: 'Buy milk', done: false, id: 'one' },
  { text: 'Pick up Tom from airport', done: false, id: 'two' },
  { text: 'Visit party', done: false, id: 'three' },
  { text: 'Visit doctor', done: true, id: 'four' },
  { text: 'Buy meat', done: true, id: 'five' },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.dataset.id = id;
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
const createBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');
const listItemElem = document.createElement('li');

function newList() {
  const inputValue = inputElem.value;

  if (inputValue.length === 0) {
    return null;
  }
  tasks.push({
    text: inputValue,
    done: false,
    id: Math.floor(Math.random() * (100 - 1) + 1).toString(),
  });

  inputElem.value = '';
  listElem.innerHTML = '';
  renderTasks(tasks);
}

createBtnElem.addEventListener('click', newList);

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
