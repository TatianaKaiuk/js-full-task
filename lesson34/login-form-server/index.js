import { createData, getData } from './scripts/dataGetaway.js';

const btnElem = document.querySelector(`.submit-button`);
const formElem = document.querySelector(`.login-form`);
const inputElem = document.querySelector(`.form-input`);

const changeInput = () => {
  if (formElem.reportValidity()) {
    btnElem.removeAttribute('disabled');
  } else {
    btnElem.setAttribute('disabled', true);
  }
};
formElem.addEventListener('change', changeInput);

const sendingData = () => {
  const formData = Object.fromEntries(new FormData(formElem));
  createData(formData).then(() => console.log(formData));
  formElem.reset();
};

btnElem.addEventListener('click', sendingData);

const onFormSubmit = (event) => {
  event.preventDefault();
  getData().then((res) => alert(JSON.stringify(res)));
};

btnElem.addEventListener(`click`, onFormSubmit);
