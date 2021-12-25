function groupBy(collection, it) {
  let typeGroup = typeof it;
  const group = {};

  collection.forEach((item) => {
    const type =
      typeGroup === 'function'
        ? it(item)
        : it === 'length'
        ? item.length
        : typeof it === 'string' && typeof item === 'object'
        ? item[it]
        : item;

    if (group[type]) {
      group[type].push(item);
    } else {
      group[type] = [item];
    }
  });

  return group;
}

const result1 = groupBy([6.1, 4.2, 6.3], Math.floor); // { 6: [6.1, 6.3], 4: [4.2] }
const result2 = groupBy(['one', 'two', 'three'], 'length'); // { 3: ['one', 'two'], 5: ['three'] }
const result3 = groupBy([{ age: 23 }, { age: 24 }], 'age'); // { 23: [{age: 23}], 24: [{age: 24}] }

const result4 = groupBy([1397639141184, 1363223700000], (timestamp) =>
  new Date(timestamp).getFullYear(),
);
// { 2013: [1363223700000], 2014: [1397639141184] }

const result5 = groupBy(
  [
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
  ],
  'rating',
);

console.log('result 1 = ', result1);
console.log('result 2 = ', result2);
console.log('result 3 = ', result3);
console.log('result 4 = ', result4);
console.log('result 5 = ', result5);
