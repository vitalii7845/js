export function getTitleElement() {
  const titlEl = document.querySelector('.title');
  console.dir(titlEl);
  return titlEl;
}

export function getInputElement() {
  const inputEl = document.querySelector('input[type = "text"]');
  console.dir(inputEl);
  return inputEl;
}

// test data
getTitleElement();
getInputElement();
