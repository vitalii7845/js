const getTotalRevenue = transactions => {
  return Object.values(transactions)
    .flat()
    .map(transactions => transactions.amount)
    .reduce((acc, numb) => acc + numb);
};

// test data
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];

// console.log(getTotalRevenue(dayTransactions));
