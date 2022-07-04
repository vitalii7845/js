const splitText = (text, len = 10) => {
  if (typeof text !== 'string') return null;
  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join('\n');
};

// test data
console.log(splitText('Hello what are you doing today or tomorow', 6));
console.log(splitText('Hello what are you doing today or tomorow'));
