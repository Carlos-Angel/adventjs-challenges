function contains(store, product) {
  let existProduct = false;

  Object.keys(store).forEach((item) => {
    if (typeof store[item] === 'string') {
      if (store[item] === product) {
        existProduct = true;
      }
    } else {
      existProduct = contains(store[item], product);
    }

  });

  return existProduct;
}

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};

console.log(contains(almacen, 'camiseta'));