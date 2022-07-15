export function getSection(num) {
  const findSpanEl = document.querySelector(`span[data-number='${num}']`);
  const resGetSection = findSpanEl.closest('.box').dataset.section;
  return resGetSection;
}
// console.log(getSection(4));
