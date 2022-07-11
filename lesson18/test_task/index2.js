// pseudo arrays

function argsSum() {
  return [...arguments].reduce((acc, elem) => {
    return acc + elem;
  }, 0);
}

console.log(argsSum(5, 5, 6, 6, 1, 1));

// function argsSum() {
//   return [].reduce.apply(arguments, [
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   ]);
// }

// call
// function argsSum() {
//   return [].reduce.call(
//     arguments,
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0
//   );
// }

console.log(argsSum(5, 5, 6, 6, 1, 1));

// [].reduce((acc, elem) => { return  }, 0)

// function func() {
//   console.log(arguments);
//   //console.log(typeOf arguments); // object
// }

// func(1, 2, 3, 4);
