const baseUrl = 'https://62e6b6620e5d74566aeb7770.mockapi.io/API/v1/usersList';

const inputElements = document.querySelectorAll('.form-input');
const formElement = document.querySelector('.login-form');
const formData = {};

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

function onBtnSwitch(event) {
  event.preventDefault();
  if (formElement.reportValidity()) {
    const buttonElem = document.querySelector('.submit-button');
    buttonElem.removeAttribute('disabled');
  }
  const formData = Object.fromEntries(new FormData(formElement));
  return formData;
}

function onFormSubmit(event) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElement));

  createUser(formData)
    .then(response => response.json())
    .then(result => alert(JSON.stringify(result)))
    .then(() => formElement.reset());
}

formElement.addEventListener('input', onBtnSwitch);
formElement.addEventListener('submit', onFormSubmit);
