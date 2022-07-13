export function finishForm() {
  const password = document.querySelector('input[type = "text"]');
  password.type = 'password';
  const login = document.createElement('input');
  login.type = 'text';
  login.name = 'login';
  const formElem = document.querySelector('.login-form');
  formElem.prepend(login);
}

finishForm();
