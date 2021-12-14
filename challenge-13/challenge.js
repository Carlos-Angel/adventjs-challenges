function wrapGifts(gifts) {
  if (gifts.length === 0) return [];
  const gifLength = gifts[0].length;
  const giftsEnvolved = gifts.map((gif) => `*${gif}*`);

  giftsEnvolved.unshift('*'.repeat(gifLength + 2));
  giftsEnvolved.push('*'.repeat(gifLength + 2));

  return giftsEnvolved;
}

const result1 = wrapGifts(['📷', '⚽️']);
const result2 = wrapGifts(['🏈🎸', '🎮🧸']);
const result3 = wrapGifts(['📷']);

console.log(result1);
console.log(result2);
console.log(result3);
