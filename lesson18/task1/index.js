export const event = {
  guests: [
    { name: 'Tom', age: 17, email: 'qwer@gmail.com' },
    { name: 'Bob', age: 20, email: 'br@gmail.com' },
    { name: 'John', age: 30, email: 'hello@gmail.com' },
  ],
  message: 'Welcom to the party',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
