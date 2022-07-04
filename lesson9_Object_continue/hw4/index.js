const rooms = {
  room1: [{ name: 'Borus' }, { name: 'Artem' }, { name: 'Taras' }, { name: 'Oleg' }],

  room2: [{ name: 'Vasul' }],

  room3: [{ name: 'Olga' }, { name: 'Bob' }, { name: 'Jack' }],

  room4: [{ name: 'Ira' }, { name: 'Nikosh' }, { name: 'Jack' }],
};

const getPeople = obj => {
  const arrPeoplesNamesList = Object.values(obj)
    .flat()
    .map(obj => obj.name);
  return arrPeoplesNamesList;
};

// test data
console.log(getPeople(rooms));
