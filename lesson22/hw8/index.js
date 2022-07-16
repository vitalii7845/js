const checkBoxElem = document.querySelector('.task-status');

const handleCheck = (event) => {
  console.log(event.target.checked);
};

checkBoxElem.addEventListener('change', handleCheck);
