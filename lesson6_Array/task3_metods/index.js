/* eslint-disable prettier/prettier */
// array metods .pop(), .push(), .shift(), .unshift(),

//const people = ['Tom', 'Ann', 'Bob'];

// people[5] = 'Jack';
// people.length = 10; //add array size
// people.length = 2; //cut array size

// people[people.length] = 'Jack'; // add to end

// people.unshift('Bond', 'Stan'); // add to start
// people.push('John', 'Nikosh');  // add to end
// const lastElement = people.pop(); // delete to end
// const firstElemet = people.shift(); // delete to start

// console.log(lastElement);
// console.log(firstElemet);
// console.log(people);
// console.log(people.length);

//___________from, to => [n % 3 === 0]



function getSpecialNumbers(from, to) {
  let specialNumbers = [];

  for (let i = from; i <= to; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }
  return specialNumbers;
}

const specialNumbers = getSpecialNumbers (10, 30);
console.log(specialNumbers);
