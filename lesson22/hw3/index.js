const checkboxElem = document.querySelector('.task-status');
const funcChecElem = () => {
  console.log(checkboxElem.checked);
};

checkboxElem.addEventListener('change', funcChecElem);

// checkboxElem.value === checkboxElem.value;
