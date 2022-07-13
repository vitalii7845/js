export function getItemsList() {
  const selectElements = document.querySelectorAll('.technology');
  console.dir(selectElements);
  return selectElements;
}

export function getItemsArray() {
  const selectElements = document.querySelectorAll('.tool');
  const selectElementsArr = Array.from(selectElements);
  console.dir(selectElementsArr);
  return selectElementsArr;
}

// test data
getItemsList();
getItemsArray();
