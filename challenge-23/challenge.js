function canReconfigure(from, to) {
  if (from.length !== to.length) return false;
  const newGift = new Map();

  return from.split('').reduce((rta, item, i) => {
    if (newGift.has(item)) {
      if (newGift.get(item) !== to[i]) return false;
    } else {
      if ([...newGift.values()].includes(to[i])) return false;
      newGift.set(item, to[i]);
    }
    return rta;
  }, true);
}

let from = 'BAL';
let to = 'LIB';
console.log(canReconfigure(from, to)); // true

from = 'CON';
to = 'JUU';
console.log(canReconfigure(from, to)); // false

from = 'MMM';
to = 'MID';
console.log(canReconfigure(from, to)); // false

from = 'AA';
to = 'MID';
console.log(canReconfigure(from, to)); // false -> no tiene la misma longitud
