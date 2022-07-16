const inputElem = document.querySelector('.text-input');
const inputChange = () => console.log(inputElem.value);
inputElem.addEventListener('change', inputChange);

// function inputChange() {
//   console.log(inputElem.value);
// }

// v.1
// const inputElem = document.querySelector('.text-input');
// inputElem.addEventListener('change', () => {
//   console.log(inputElem.value);
// });

// v.2
// const inputElem = document.querySelector('.text-input');
// inputElem.addEventListener('change', () => {
//   const inputValue = inputElem.value;
//   console.log(inputValue);
// });

// // v.3
// const inputElem = document.querySelector('.text-input');
// inputElem.addEventListener('change', () => console.log(inputElem.value)
// );
