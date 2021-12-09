function maxProfit(prices) {
  let ganancia = 0;
  prices.forEach((price, index) => {
    for (let i = index; i < prices.length; i++) {
      if (ganancia < prices[i] - price) {
        ganancia = prices[i] - price;
      }
    }
  });

  return ganancia > 0 ? ganancia : -1;
}

const pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)
