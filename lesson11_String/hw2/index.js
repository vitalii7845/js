// input: string!, strin2;
// output: number = quantity of entries of string2 in string1;

const countOccurrences = (text = '', str) => {
  if (str.length === 0) return null;
  return text.split(str).length - 1;
};

// test data
// console.log(countOccurrences('Hello world', 'l'));
// console.log(countOccurrences('over',''));
// console.log(countOccurrences('', ' '));

// const texyTest = 'Game over';
// const strTest = 'e';
// console.log(countOccurrences(texyTest, strTest));
