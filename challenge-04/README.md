[**ver mas retos**](../README.md)

## Reto 04: ¡Es hora de poner la navidad en casa!

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento **5**, se pintaría esto:

```js
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteríscos **\*\*\*** con la altura proporcionada y, a los lados, usamos el guión bajo **\_** para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.

Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de **#**.

Otro ejemplo con un árbol de altura **3**:

```js
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea **\n** para cada línea para que se forme bien el árbol.

## Estado: Resuelto

```js
export default function createXmasTree(height) {
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
```
