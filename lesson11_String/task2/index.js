const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

const sortContacts = (contacts, sortVar = true) => {
  if (!Array.isArray(contacts)) return null;
  if (!sortVar) return contacts.sort((a, b) => b.name.localeCompare(a.name));
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};

// test data
console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts, false));
console.log(sortContacts(547, true));
console.log(sortContacts(547, false));
