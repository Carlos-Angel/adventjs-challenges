function createXmasTree(height) {
  let tree = '';
  let nivel = 1;

  if (typeof height !== 'number') {
    throw new Error('la altura del árbol debe ser un numero');
  }

  if (!Number.isInteger(height)) {
    throw new Error('la altura del árbol debe ser un entero');
  }

  if (height <= 0 || height > 100) {
    throw new Error(
      'La altura del árbol debe ser mayor a cero y menor o igual a 100',
    );
  }

  for (let index = 1; index < height; index++) {
    const repeatUnderscore =
      index === 1 ? (height * 2) / 2 - 1 : (height * 2) / 2 - nivel / 2;

    const underscores = '_'.repeat(repeatUnderscore);
    tree += `${underscores}${'*'.repeat(nivel)}${underscores}\n`;

    nivel += 2;
  }
  tree += `${'*'.repeat(nivel)}\n`;
  const underscores = '_'.repeat((height * 2) / 2 - 1);
  tree += `${underscores}${'#'}${underscores}\n`;
  tree += `${underscores}${'#'}${underscores}`;
  return tree;
}

console.log(createXmasTree(1));

export default function createXmasTree(height) {
  let tree = '';
  let nivel = 1;

  for (let index = 1; index < height; index++) {
    const repeatUnderscore =
      index === 1 ? (height * 2) / 2 - 1 : (height * 2) / 2 - nivel / 2;

    const underscores = '_'.repeat(repeatUnderscore);
    tree += `${underscores}${'*'.repeat(nivel)}${underscores}\n`;

    nivel += 2;
  }

  tree += `${'*'.repeat(nivel)}\n`;

  const underscores = '_'.repeat((height * 2) / 2 - 1);
  tree += `${underscores}${'#'}${underscores}\n`;
  tree += `${underscores}${'#'}${underscores}`;
  return tree;
}

console.log(createXmasTree(1));
