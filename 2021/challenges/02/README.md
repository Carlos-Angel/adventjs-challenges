[**ver mas retos**](../../README.md)

## Reto 02: ¡Ayuda al elfo a listar los regalos!

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque **ten cuidado,** porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un **\_** delante de la palabra, por ejemplo **\_playstation**, que significa que **está tachado y no se tiene que contar.**

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```js
const carta = 'bici coche balón _playstation bici coche peluche';
```

```js
const regalos = listGifts(carta);

console.log(regalos);
/*
output:
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 **¡Cuidado con contar espacios vacíos!**

## Estado: Resuelto

```js
export default function listGifts(letter) {
  const arrayGifs = letter.trim().split(' ');
  const list = {};

  arrayGifs.forEach((gif) => {
    if (list[gif]) {
      list[gif] = list[gif] + 1;
    } else {
      if (gif[0] !== '_' && gif) {
        list[gif] = 1;
      }
    }
  });
  return list;
}
```
