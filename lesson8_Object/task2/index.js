// alg
// 1. iteration all items of object
// 2. push (or concat) value of object items to array
// 3 return array

// input: object
// output: array

// solution

const concatProps = obj => {
  const concatProps = [];

  for (let value in obj) {
    concatProps.push(obj[value]);
  }
  return concatProps;
};

// test data
console.log(concatProps({}));
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));
