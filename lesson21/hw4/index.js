// v.1
// function setTitle(text) {
//   const findElement = document.querySelector('.title');
//   findElement.textContent = `${text}`;
// }

function setTitle(text) {
  document.querySelector('.title').textContent = `${text}`;
}

setTitle('Hello bro');

export { setTitle };
