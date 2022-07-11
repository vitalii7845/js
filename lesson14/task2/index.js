'use strict';

/**
 * @return {object}
 */

export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text) {
    sender = text;
  }

  return {
    setMessage,
    setSender,
    sendMessage,
  };
}

const messenger1 = createMessenger();
const messenger2 = createMessenger();
const messenger3 = createMessenger();

const messanger1 = createMessenger();
messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
