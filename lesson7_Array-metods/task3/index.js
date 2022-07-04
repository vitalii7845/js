// const flatArray = arr => arr.flat().slice().sort((a, b) => a - b); 
 

const flatArray = arr => arr.flat().slice().sort((a, b) => a - b); 




const testArray = [1, 2, 5, [8, 9, 1], 5];
console.log(flatArray(testArray));
console.log(testArray);



 = numbers => numbers.slice().sort((a, b) => a - b);

const arr = [5, 9, 1, 8, 7, 3, 5, 1, 2, 95, 54];
console.log(sortDesc(arr));
console.log(arr);