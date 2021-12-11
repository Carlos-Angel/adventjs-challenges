function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1];
  let cambio = change;
  const rta = coins.map((coin) => {
    const countCoins = parseInt(cambio / coin);
    if (countCoins > 0) cambio -= countCoins * coin;
    return countCoins > 0 ? countCoins : 0;
  });
  return rta.reverse();
}

const result1 = getCoins(51);
const result2 = getCoins(3);
const result3 = getCoins(5);
const result4 = getCoins(16);
const result5 = getCoins(100);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
