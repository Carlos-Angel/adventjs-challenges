function countPackages(carriers, currierID) {
  let packages = 0;
  let carrier = 0;
  while (carriers[carrier][0] != currierID) {
    carrier++;
  }

  packages += carriers[carrier][1];
  for (let i = 0; i < carriers[carrier][2].length; i++) {
    packages += countPackages(carriers, carriers[carrier][2][i]);
  }
  return packages;
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []],
];

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []],
];

console.log(countPackages(carriers, 'dapelu')); // return: 9 plus: 5 de dapelu, 2 de midu y 2 de jelowing = 9

console.log(countPackages(carriers2, 'camila')); // return: 15 plus: 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
