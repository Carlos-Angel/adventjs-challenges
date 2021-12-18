function decodeNumbers(symbols) {
  const decoder = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };

  const symbolsArray = symbols.split('');

  return symbolsArray.reduce((rta, symbol, index) => {
    if (rta !== NaN && decoder[symbol]) {
      if (index > 0) {
        if (decoder[symbolsArray[index - 1]] < decoder[symbolsArray[index]]) {
          rta = rta - decoder[symbolsArray[index - 1]] * 2;
        }

        rta = rta + decoder[symbol];
        return rta;
      } else {
        return decoder[symbol];
      }
    } else {
      return NaN;
    }
  }, 0);
}

console.log(decodeNumbers('...')); // 3
console.log(decodeNumbers('.,')); // 4 (5 - 1)
console.log(decodeNumbers(',.')); // 6 (5 + 1)
console.log(decodeNumbers(',...')); // 8 (5 + 3)
console.log(decodeNumbers('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')); // 49 (50 - 1)
console.log(decodeNumbers('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')); // 300
console.log(decodeNumbers(';!')); // 50
console.log(decodeNumbers(';.W')); // NaN
