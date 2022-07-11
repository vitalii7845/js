// callbackPrompt

const callbackPrompt = {
  message: `'Tell me your number'`,
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDerredPrompt(ms) {
    // setTimeout(() => this.showPrompt(), ms);
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDerredPrompt(1000);
