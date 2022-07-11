// vehicle and ship

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
  // __proto__: vehicle, not gud practice
};

Object.setPrototypeOf(ship, vehicle);

ship.move();

// console.log(ship);
// ship.move(); // moving

// vehicle.move();
// // console.log(vehicle.toString); // ƒ toString() { [native code] }
// console.log(vehicle); // {move: ƒ, stop: ƒ}
