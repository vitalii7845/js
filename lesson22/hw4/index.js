const searchBtnElem = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');

const funcSearchInput = () => {
  console.log(searchInput.value);
};

searchBtnElem.addEventListener('click', funcSearchInput);
