const singleUseBtn = document.querySelector('.single-use-btn');

const clickBtn = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', clickBtn);
};

singleUseBtn.addEventListener('click', clickBtn);
