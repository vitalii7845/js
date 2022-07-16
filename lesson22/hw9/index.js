const buttons = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

[...buttons].map((el) => el.addEventListener('click', handleClick));
