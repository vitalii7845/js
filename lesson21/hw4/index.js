// v.1
// export function setTitle(text) {
//   document.querySelector('.title').textContent = text;
// }

export function setTitle(text) {
  const findElement = document.querySelector('.title');
  findElement.textContent = `${text}`;
}

setTitle('Hello bro');
