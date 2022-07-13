export function finishList() {
  const list = document.querySelector('.list');
  const fiveLiIt = document.querySelector('.special');

  const firstLiIt = document.createElement('li');
  const fourthLiIt = document.createElement('li');
  const sixthLiIt = document.createElement('li');
  const eightLiIt = document.createElement('li');

  firstLiIt.textContent = '1';
  fourthLiIt.textContent = '4';
  sixthLiIt.textContent = '6';
  eightLiIt.textContent = '8';

  list.prepend(firstLiIt);
  list.append(eightLiIt);
  fiveLiIt.before(fourthLiIt);
  fiveLiIt.after(sixthLiIt);
}
// finishList();

// does not work correctly
// function finishList() {
//   const newListItem = document.createElement('li');
//   const listEt = document.querySelector('.list');
//   const specListIt = document.querySelector('.special');
//   listEt.append((newListItem.textContent = '8'));
//   listEt.prepend((newListItem.textContent = '1'));
//   specListIt.before((newListItem.textContent = '4'));
//   specListIt.after((newListItem.textContent = '6'));
// }
// finishList();
