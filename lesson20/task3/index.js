export class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    return (this.balance += amount);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('No enough funds');
      return;
    }
    return (this.balance -= amount);
  }
}

// tast data
// const wallet1 = new Wallet();

// console.log(wallet1.getBalance());
// wallet1.deposit(100);
// console.log(wallet1.getBalance());
// wallet1.withdraw(75);
// console.log(wallet1.getBalance());
// wallet1.withdraw(26);
// console.log(wallet1.getBalance());
// wallet1.withdraw(25);
// console.log(wallet1.getBalance());
