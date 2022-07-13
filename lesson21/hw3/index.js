// v.1
// function getTitle() {
//   const selectElements = document.querySelector('.title').textContent;
//   return selectElements;
// }

function getTitle() {
  return document.querySelector('.title').textContent;
}
console.log(getTitle());

function getDescription() {
  return document.querySelector('.about').innerText;
}
console.log(getDescription());

function getPlans() {
  return document.querySelector('.plans').innerHTML;
}
console.log(getPlans());

function getGoal() {
  return document.querySelector('.goal').outerHTML;
}
console.log(getGoal());

export { getTitle, getDescription, getPlans, getGoal };
