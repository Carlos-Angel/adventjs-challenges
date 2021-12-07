function sumPairs(numbers, result) {
  const numbersTwo = [...numbers];
  let a, b;
  numbers.forEach((number, index) => {
    numbersTwo.forEach((item, index2) => {
      if (!a && !b) {
        if (number + item === result && index !== index2) {
          a = number;
          b = item;
        }
      }
    });
  });
  return a || b ? [a, b] : null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
