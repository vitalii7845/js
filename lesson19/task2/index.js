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

export function getOwnProps(obj) {
  const propObj = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      propObj.push(prop);
    }
  }
  return propObj;
}

// test data
console.log(getOwnProps(ship));
console.log(getOwnProps(vehicle));
