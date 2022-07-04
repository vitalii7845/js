// 'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */

function getKeys(obj) {
  let keysObj = Object.keys(obj);
  return keysObj.forEach(pomp => console.log(pomp));
}

// test data
// const users = {
//   Tom: 17,
//   'John Doe': 19,
//   Bob: 18,
// };
// getKeys(users);

// getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel
