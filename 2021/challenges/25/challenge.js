function canMouseEat(direction, game) {
  const mouse = 'm';
  const food = '*';
  let isMatch = false;

  for (let i = 0; i < game.length; i++) {
    const positionMouse = game[i].findIndex((item) => item === mouse);
    if (positionMouse !== -1) {
      switch (direction) {
        case 'up':
          if (i != 0) {
            isMatch = game[i - 1][positionMouse] === food;
          }
          break;
        case 'down':
          if (i !== game.length - 1) {
            isMatch = game[i + 1][positionMouse] === food;
          }
          break;
        case 'left':
          if (positionMouse > 0) {
            isMatch = game[i][positionMouse - 1] === food;
          }
          break;
        case 'right':
          if (positionMouse < game[i].length) {
            isMatch = game[i][positionMouse + 1] === food;
          }
          break;
      }
      if (isMatch) i = game.length;
    }
  }
  return isMatch;
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

console.log(canMouseEat('up', room)); // false
console.log(canMouseEat('down', room)); // true
console.log(canMouseEat('right', room)); // false
console.log(canMouseEat('left', room)); // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
];

console.log(canMouseEat('up', room2)); // false
console.log(canMouseEat('down', room2)); // false
console.log(canMouseEat('right', room2)); // true
console.log(canMouseEat('left', room2)); // false
