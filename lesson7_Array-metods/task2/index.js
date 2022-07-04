const sortDesc = numbers => numbers.slice().sort((a, b) => b - a);

const arr = [5, 9, 1, 8, 7, 3, 5, 1, 2, 95, 54];
console.log(sortDesc(arr));
console.log(arr);
