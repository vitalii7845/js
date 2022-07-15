export function setButton(buttonText) {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
}
setButton('button text');

// function setButton(buttonText) {
//   const result = document.querySelector('body');
//   result.innerHTML = buttonText;
//   result.innerHTML = `<button>${buttonText}</button>`;

//   return result;
// }
// setButton('button text');

// v. 2
// export function setButton(buttonText) {
//   document.querySelector('body').textContent = `<button>${buttonText}</button>`;
// }
// setButton('button text');

// v.3
// const buttonText = 'button text';
// function setButton(buttonText) {
//   const selecElem = document.querySelector('body');
//   selecElem.innerHTML = `<button>${buttonText}</button>`;
// selecElem.textContent = `<button>${buttonText}</button>`;
// }

// setButton(buttonText);
