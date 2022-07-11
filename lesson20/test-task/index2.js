// wallet

class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('No enouhg funds');
      return;
    }

    this.#balance -= amount;
  }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposit(45);
console.log(wallet1.getBalance());
wallet1.withdraw(34);
console.log(wallet1.getBalance());
wallet1.withdraw(12);
console.log(wallet1.getBalance());
wallet1.withdraw(11);
console.log(wallet1.getBalance());

// console.log(wallet1.#balance); // ne mozna
//
//
//
// _________________________________
// class Wallet {
//   constructor() {
//     this._balance = 0;
//   }

//   getBalance() {
//     return this._balance;
//   }

//   deposit(amount) {
//     this._balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this._balance) {
//       console.log('No enouhg funds');
//       return;
//     }

//     this._balance -= amount;
//   }
// }

// const wallet1 = new Wallet();
// //wallet1._balance(); // js dozvolyae ale ne mae bytu peredbacheno developeramu

// console.log(wallet1.getBalance());
// wallet1.deposit(45);
// console.log(wallet1.getBalance());
// wallet1.withdraw(34);
// console.log(wallet1.getBalance());
// wallet1.withdraw(12);
// console.log(wallet1.getBalance());
// wallet1.withdraw(11);
// console.log(wallet1.getBalance());
