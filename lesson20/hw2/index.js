/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((el) => el._name);
  }

  getUserIds() {
    return this._users.map((el) => el._id);
  }

  getUserNameById(userId) {
    const findUserId = this._users.find((el) => el._id === userId);
    return findUserId._name;
  }
}

// examples
const user = new User('1', 'Tom', '851');
const user1 = new User('2', 'Bob', '852');
const user2 = new User('3', 'Artur', '853');
const user3 = new User('4', 'Taras', '854');
const user4 = new User('5', 'Andriy', '855');
const user5 = new User('6', 'Victor', '856');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const userRepository1 = new UserRepository([
  user,
  user1,
  user2,
  user3,
  user4,
  user5,
]);

console.log(userRepository1.getUserNames());
console.log(userRepository1.getUserIds());
console.log(userRepository1.getUserNameById('5'));
