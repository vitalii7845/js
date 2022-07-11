// wallet - zimstvovanie metodov
// [1, 2, 3, 4];
// Math.max(1, 2, 3, 4); // 3
// Math.max.apply(null, [-1, 4, 19, 8]); // 19

const wallet = {
  transactions: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());

// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax() {
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions);
//   },
// };

// console.log(wallet.getMax());
// console.log(wallet.getMin());
