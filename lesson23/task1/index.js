// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
// const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// const formData = formFields.reduce(function (acc, formField) {
// const prop = formField[0]; // здесь "name" инпута
// const value = formField[1]; // здесь "value" инпута
// если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
// const [prop, value] = formField;
// return {
// используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
// ...acc,
// используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));

const emailInputElem = document.querySelector(`#email`); // получаем ссылки
const passwordInputElem = document.querySelector(`#password`);

const emailErrorElem = document.querySelector(`.error-text_email`);
const passwordErrorElem = document.querySelector(`.error-text_password`);

const isRequired = (value) => (value ? undefined : `Required`); // пишем ошибки и проверку
const isEmail = (value) =>
  value.includes(`@`) ? undefined : `Should be an email`; // если проверка проходит, ничего не происходит, если нет - ошибку выбевает

const validatorsByField = {
  // чтобы код в дальнейшем не повторялся, указываем в обьекте,
  email: [isRequired, isEmail], // какие проверку какому полю нужны, в виде массива с именем функции
  password: [isRequired],
};
const validate = (fieldName, value) => {
  // функция которая принимает имя поля и его значение
  const validators = validatorsByField[fieldName]; // подставляем с обьекта значения
  return validators // абра кадабра
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(`, `);
};

const onEmailChange = (event) => {
  // указываем аргументы для функции validate
  const errorText = validate(`email`, event.target.value); // email и его значение
  emailErrorElem.textContent = errorText; // подставляем текст
};

const onPasswordChange = (event) => {
  // указываем аргументы для функции validate
  const errorText = validate(`password`, event.target.value); // email и его значение
  passwordErrorElem.textContent = errorText; // подставляем текст
};

emailInputElem.addEventListener('input', onEmailChange); // добавляем обработчик
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form'); // получаем доступ к элементу

const onFormSubmit = (event) => {
  event.preventDefault(); // отменяем настройки браузера по умолчанию
  const formData = [...new FormData(formElem)] // получаем все введенные данные
    .reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {});
  alert(JSON.stringify(formData)); // выводим данные
};

formElem.addEventListener('submit', onFormSubmit);
