// alg
// time out(ms)promt => message 'Tell me your number' => console.log(inpur nomber)

//input: object function
//output: string (phone number)

const callbackPrompt = {
  message: 'Tell me you phonenumber',
  showPrompt() {
    const phoneNumber = prompt(`${this.message}`);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(callbackPrompt), ms);
  },
};

// export { callbackPrompt };

callbackPrompt.showDeferredPrompt(2000);

// export const callbackPrompt = {
//   message: 'Tell me your number',
//   showPrompt() {
//     const phoneNumber = prompt(`${this.message}`);
//     console.log(phoneNumber);
//   },
//   showDeferredPrompt(ms) {
//     setTimeout(this.showPrompt.bind(callbackPrompt), ms);
//   },
// };

// // test data
// callbackPrompt.showDeferredPrompt(1000);
// // callbackPrompt.showDeferredPrompt(0);
