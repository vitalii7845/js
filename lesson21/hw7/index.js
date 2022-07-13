export const createButton = (buttonText) => {
  const newButton = document.createElement('button');
  newButton.textContent = `${buttonText}`;
  document.querySelector('body').append(newButton);
};
createButton('Press button now');
