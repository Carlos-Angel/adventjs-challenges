function missingReindeer(ids) {
  const orderedIds = ids.sort((a, b) => a - b);
  let idMissing = orderedIds[orderedIds.length - 1] + 1;
  for (let id = 0; id < orderedIds[orderedIds.length - 1]; id++) {
    if (!orderedIds.includes(id)) idMissing = id;
  }
  return idMissing;
}

const result1 = missingReindeer([0, 2, 3]); // -> 1
const result2 = missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
const result3 = missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
const result4 = missingReindeer([3, 0, 1]); // -> 2
const result5 = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
const result6 = missingReindeer([0]); // -> 1 (¡es el último el que falta!)

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
