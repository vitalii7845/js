const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  const absValues = arr.map(num => Math.abs(num));
  return Math.max(...absValues);
};

// test data
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
