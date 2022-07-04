/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  const addId = { id: userId };
  return Object.assign(userData, addId);
}

function addPropertyV3(userData, userId) {
  const addId = { id: userId };
  const copyUserData = Object.assign({}, userData, addId);
  return copyUserData;
}

function addPropertyV4(userData, userId) {
  const copyUserData = { id: userId };
  return Object.assign({ ...userData }, copyUserData);
}

// // test data
// const user = {
//   name: 'Sam',
// };

// console.log(addPropertyV1(user, 1248));
// console.log(user);
// console.log(addPropertyV2(user, 659));
// console.log(user);
// console.log(addPropertyV3(user, '987'));
// console.log(user);
// console.log(addPropertyV4(user, -147));
// console.log(user);
