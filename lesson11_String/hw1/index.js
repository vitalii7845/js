const splitString = (someText, newStringLenght = 10) => {
  if (typeof someText !== 'string') return null;

  const arrayWithString = [];
  let indexIteration = 0;

  while (true) {
    let chunk = someText.substr(indexIteration, newStringLenght);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < newStringLenght) {
      chunk += '.'.repeat(newStringLenght - chunk.length);
    }
    arrayWithString.push(chunk);
    indexIteration += newStringLenght;
  }
  return arrayWithString;
};

// test data
const someTextTest = 'Hello world. What are you doing now? Goodbay';
const newStringLenghtTest = 9;
console.log(splitString(someTextTest, newStringLenghtTest));
console.log(splitString(someTextTest));
console.log(splitString(someTextTest, 5));
