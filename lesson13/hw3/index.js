export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};
// console.log(reverseArray(56));
// console.log(reverseArray(null))
// console.log(reverseArray([2, 6, 9, 7, 8, 9]));
// console.log(reverseArray([1, 2, 3, 4, 5, 6]));

export const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] < amount ? -1 : balances[clients.indexOf(client)] - amount;

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100));
// console.log(withdraw(['Ann', 'John', 'Bob', 'Stan', 'Olga'], [1500, 600, 75, 569, 15], 'Stan', 600));
// console.log(withdraw(['Ann', 'John', 'Bob', 'Stan', 'Olga'], [1500, 600, 75, 569, 15], 'John', 55));

export const getAdults = obj => {
  const getAdults = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      getAdults[key] = obj[key];
    }
  }
  return getAdults;
};

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// console.log(getAdults({ Ann: 56, Andrey: 7 }));
// console.log(getAdults({ Ann: 17, Andrey: 7 }));
