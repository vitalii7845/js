const textInputElem = document.querySelector('.text-input');

const handleChange = (event) => {
  console.log(event.target.value);
};

textInputElem.addEventListener('change', handleChange);

// _____________________________ draf solution
// dont work
// const textInputElem = document.querySelector('.text-input');
// const handleChange = (event) => {
//   // console.log(event.target.value);
//   console.log(event.target.textContent); // pusta stroka
// };

// textInputElem.addEventListener('change', handleChange);
