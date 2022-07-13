export function manageClasses() {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.toggle('three_done');
  const fourElement = document.querySelector('.four');
  if (fourElement.classList.contains('some-class')) {
    fourElement.classList.add('another-class');
  }
}
// manageClasses();
