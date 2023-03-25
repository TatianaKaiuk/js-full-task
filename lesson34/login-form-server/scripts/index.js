import { createData, getData } from './dataGetaway.js';

// const emailInputElem = document.querySelector(`#email`);
// const passwordInputElem = document.querySelector(`#password`);
// const nameInputElem = document.querySelector(`#name`);
const btnElem = document.querySelector(`.submit-button`);
const formElem = document.querySelector(`.login-form`);
const imputElem = document.querySelector(`.form-input`);
btnElem.setAttribute('disabled', Boolean);

const formData = Object.fromEntries(new FormData(formElem));

// const changeElem = (data) => {
//   data.array.forEach((element) => {
//     if (element.reportValidity()) {
//       btnElem.disabled = false;
//     }
//   });
// };
// changeElem(formData);
// imputElem.addEventListener('change', changeElem(formData));

imputElem.addEventListener(
  'submit',
  function () {
    imputElem.reportValidity();
  },
  false
);



const sendingData = () => {
  createData(formData);
  formElem.reset('');
};

btnElem.addEventListener('click', sendingData);

const onFormSubmit = (event) => {
  event.preventDefault();
  getData().then((resolt) => alert(JSON.stringify(resolt)));
};

btnElem.addEventListener(`submit`, onFormSubmit);
