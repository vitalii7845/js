// algoritm to do
// 1. find clients with  value index client
// 2. compare if enough money in items array balances and value amount
// 1.1. if not enough => return value -1
// 1.2 if enough =>  return  items balances - amount
// 2.return result

// input: array, array, string, number
// output: number

// >>>>>>>>>>> draft solution
// const withdraw = (clients, balances, client, amount) => {
//   if (balances[clients.indexOf(client)] < amount) {
//     return -1;
//   } else if (balances[clients.indexOf(client)] > amount) {
//     balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount;
//   }
//   return balances[clients.indexOf(client)];
// };

// finaly solution

const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] < amount ? -1 : balances[clients.indexOf(client)] - amount;

//test data
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 100));

// const testArrayClients = ['Ann', 'John', 'Bob', 'Stan', 'Olga'];
// const testArrayBalances = [1500, 600, 75, 569, 15];
// console.log(withdraw(testArrayClients, testArrayBalances, 'John', 55));
// console.log(withdraw(testArrayClients, testArrayBalances, 'Stan', 600));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
