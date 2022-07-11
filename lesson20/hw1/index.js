'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

// export
class Order {
  constructor(price, city, type) {
    this.id = `${Math.random()}`;
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) return true;
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') return true;
    return false;
  }
}

// test data
const order1 = new Order(1500, 'Lviv', 'Buy');
const order2 = new Order(900, 'Dnipro', 'Buy');
const order3 = new Order(850, 'Rivne', 'Sell');
const order4 = new Order(1800, 'Ternopil', 'Sell');

console.log(order1.checkPrice());
order1.isValidType();
order1.confirmOrder();
console.log(order1);

// order2.checkPrice();
order2.isValidType();
order2.confirmOrder();
console.log(order2);

console.log(order3.checkPrice());
// order3.isValidType();
order3.confirmOrder();
console.log(order3);

order4.checkPrice();
order4.isValidType();
// order4.confirmOrder();
console.log(order4);
