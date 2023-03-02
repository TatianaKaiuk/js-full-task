import { setItem, getItem } from './storage';

const listElem = document.querySelector('.list');

const createListItem = ({ text, done, id }) => {
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
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(createListItem);
  listElem.append(...tasksElems);
};
