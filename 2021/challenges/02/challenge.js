const letter = 'bici coche balón _playstation bici coche  peluche';

function listGifts(letter) {
  const arrayGifs = letter.trim().split(' ');
  const list = {};

  arrayGifs.forEach((gif) => {
    if (list[gif]) {
      list[gif] = list[gif] + 1;
    } else {
      if (gif[0] !== '_' && gif) {
        list[gif] = 1;
      }
    }
  });
  return list;
}

console.log(listGifts(letter));
