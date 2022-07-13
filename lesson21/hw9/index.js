export function finishForm() {
  const formElem = document.querySelector('.login-form');
  const loginInp = document.createElement('input');
  loginInp.name = 'login';
  loginInp.type = 'text';
  formElem.prepend(loginInp);
  const passwInp = document.querySelector('[name="password"]');
  passwInp.type = 'password';
}
finishForm();
