const buttons = document.querySelectorAll('.btn');
const handleClick = (event) => {
  console.log(event.target.textContent);
};
[...buttons].map((el) => el.addEventListener('click', handleClick));

// dont work
// const buttons = document.querySelectorAll('.btn');
// const handleClick = (event) => {
//   console.log(event.target.textContent);
// };
// button.addEventListener('click', handleClick);

// work only first button
// const buttons = document.querySelector('.btn');
// const handleClick = (event) => {
//   console.log(event.target.textContent);
// };
// button.addEventListener('click', handleClick);
