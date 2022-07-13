/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// addPropertyV1;
// input: object, string, any type (value)
// output: changed object
// alg
// 1. add to obj key & value
// 2. return obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

//addPropertyV2
// input: object, string, any type (value)
// output: assigned object
// alg
// 1. to change first obj => add input key & value
// 2. return assigned first obj

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

//addProperty3
// input: object, string, any type (value)
// output: assigned new object
// alg
// 1. assign new obj with input obj, key & value
// 2. return assigned new obj;

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

//addProperty4
// input: object, string, any type (value)
// output: new object
// alg
// 1. create new obj (use spred operator) & change to add input key & value
// 2. return new obj

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
// const transaction = {
//   value: 170,
// };

// console.log('input obj before:', transaction);
// const res1 = addPropertyV4(transaction, 'currency', 'USD');
// const res2 = addPropertyV4(res1, 'amount', 300);
// console.log('result test 1:', res1);
// console.log('result test 2:', res2);
// console.log(addPropertyV4(transaction, 'city', null));
// console.log('input obj after:', transaction);
