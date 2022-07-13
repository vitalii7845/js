export function setTitle(text) {
  const findElement = document.querySelector('.title');
  findElement.textContent = text;
}

// console.dir(setTitle('Hello bro'));

// v.1
// export function setTitle(text) {
//   document.querySelector('.title').textContent = text;
// }
