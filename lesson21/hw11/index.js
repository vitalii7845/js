export function squaredNumbers() {
  const liItNumb = document.querySelectorAll('.number');
  [...liItNumb].map(
    (el, index) =>
      (el.dataset.squaredNumber =
        [...liItNumb].map((el) => el.dataset.number)[index] ** 2)
  );
}
// squaredNumbers();

// export function squaredNumbers() {
//   const liArray = Array.from(document.querySelectorAll('.number'));
//   liArray.map((li) => {
//     const data = li.dataset.number;
//     li.dataset.squaredNumber = data * data;
//   });
// }

// export function squaredNumbers() {
//   const liItNumb = document.querySelectorAll('.number');
//   // console.dir([...liItNumb].map((el) => el.dataset.number));
//   const resSquaredNum = [...liItNumb].map(
//     (el, index) =>
//       (el.dataset.squaredNumber =
//         [...liItNumb].map((el) => el.dataset.number)[index] ** 2)
//   );
//   return resSquaredNum;
// }
// squaredNumbers();
