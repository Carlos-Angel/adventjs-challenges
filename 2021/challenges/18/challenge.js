function fixFiles(files) {
  const filesCount = {};
  return files.map((file) => {
    const repeat = filesCount[file] ? `(${filesCount[file]})` : '';
    const newFile = repeat ? `${file}${repeat}` : file;
    if (!filesCount[file]) filesCount[file] = 1;
    else filesCount[file]++;

    return newFile;
  });
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'];
console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
