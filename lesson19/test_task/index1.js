// own props

const vehicle = {
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Aurora',
  hasWheels: false,
  liftAnchorDown() {
    console.log('Lifting anchor down');
  },
  liftAnchorUp() {
    console.log('Lifting anchor up');
  },
};

Object.setPrototypeOf(ship, vehicle);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

// or

console.log(Object.keys(ship));
