function shouldBuyFidelity(times) {
  const ticketPrice = 12;
  const fidelityCard = 250;
  const percentageDiscount = 75;
  let accumulate = fidelityCard;
  for (let index = 1; index <= times; index++) {
    accumulate += ticketPrice * Math.pow(percentageDiscount / 100, index);
  }
  return accumulate > ticketPrice * times ? false : true;
}

const result1 = shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
const result2 = shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad
const result3 = shouldBuyFidelity(0); // false -> Mejor comprar tickets de un sólo uso

console.log(result1);
console.log(result2);
console.log(result3);
