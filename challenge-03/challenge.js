const letter1 = 'bici coche (balón) bici coche peluche'; // -> ✅
const letter2 = '(muñeca) consola bici'; // ✅

const letter3 = 'bici coche (balón bici coche'; // -> ❌
const letter4 = 'peluche (bici [coche) bici coche balón'; // -> ❌
const letter5 = '(peluche {) bici'; // -> ❌
const letter6 = '() bici'; // ❌

function isValid(letter) {
  const gifs = letter.trim().split(' ');
  let statusLetter = true;
  gifs.forEach((gif) => {
    if (/\[+|{+|]+|}+/g.test(gif)) statusLetter = false;
    if (/\(\)/g.test(gif)) statusLetter = false;
  });
  return statusLetter;
}

console.log('letter 1 is', isValid(letter1));
console.log('letter 2 is', isValid(letter2));
console.log('letter 3 is', isValid(letter3));
console.log('letter 4 is', isValid(letter4));
console.log('letter 5 is', isValid(letter5));
console.log('letter 6 is', isValid(letter6));
