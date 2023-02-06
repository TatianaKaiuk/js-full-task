const tasks = [
  { text: 'Buy milk', done: 'false' },
  { text: 'Pick up Tom from airport', done: 'false' },
  { text: 'Visit party', done: 'false' },
  { text: 'Visit doctor', done: 'true' },
  { text: 'Buy meat', done: 'false' },
];

tasks.forEach(
  (el) => (el.id = Math.floor(Math.random() * (100 - 1) + 1).toString())
);

const listElem = document.querySelector('.list');
const inputElem = document.querySelector('.task-input');
const listItemElem = document.createElement('li');

const newList = (event) => {
  const inputValue = event.target.value;
  tasks.push({ text: inputValue });
  // listItemElem.append(inputValue);
};

inputElem.addEventListener(`change`, newList);

const checkbox = document.createElement('input');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => b.done - a.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('list__item-checkbox');

      checkbox.dataset.id = id;
      //  checkbox.checked = done;

      // if (done) {
      //   listItemElem.classList.add('list__item_done');
      // }

      // checkbox.addEventListener('change', chen);

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// function chen() {
//   listItemElem.classList.add('list__item_done');
// }
//  checkbox.addEventListener('change', chen);

const clickOnCheckbox = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const idNumber = event.target.dataset.id;
  // const elemList = tasks.find(idNumber);
  const elemId = document.getElementById(idNumber);
  elemId.done = true;
  listItemElem.classList.add('list__item_done');
};

listItemElem.addEventListener(`change`, clickOnCheckbox);

// put your code here
const createBtnElem = document.querySelector('.create-task-btn');

const getLi = (event) => {
  const textInput = event.target.value;
  listItemElem.classList.add('list__item');
  checkbox.setAttribute('type', 'checkbox');

  checkbox.classList.add('list__item-checkbox');

  listItemElem.append(checkbox, textInput);

  return listItemElem;
};

const getNewText = () => {
  if (listItemElem.length === 0) {
    return;
  }
  listElem.append(listItemElem);
};
inputElem.addEventListener(`change`, getLi);
createBtnElem.addEventListener('click', getNewText);
createBtnElem.addEventListener('click', function () {
  inputElem.value = '';
});
