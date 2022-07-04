const cleanTransactionsList = arr => {
  return arr
    .filter(item => typeof +item === 'number' && !isNaN(item))
    .map(item => '$' + (+item).toFixed(2));
};

// test data
const testArray = ['  1.9', '16.4', 17, '1 dollar '];
console.log(cleanTransactionsList(testArray));
console.log(testArray);
