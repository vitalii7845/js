// v.3
const withdraw = (clients, balances, client, amount) => {
  const indexOfClient = clients.indexOf(client);
  return amount > balances[indexOfClient]
    ? -1
    : balances[indexOfClient] - amount;
};

// var.2
// function withdraw(clients, balances, client, amount) {
//   const clientIndex = clients.indexOf(client);

//   if (balances[clientIndex] < amount) {
//     return -1;
//   }

//   balances[clientIndex] -= amount;
//   return balances[clientIndex];
// }

// v.1
// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);

//   if (amount > balances[index]) {
//     return -1;
//   }

//   balances[index] -= amount;
//   return balances[index];
// };

function getRandomNumbers(lenght, start, end) {
  if (Math.abs(end - start) < 1) {
    return null;
  }

  const min = Math.ceil(start);
  const max = Math.ceil(end);
  return new Array(lenght)
    .fill()
    .map((el) => Math.floor(Math.random() * (max - min) + min));
}
