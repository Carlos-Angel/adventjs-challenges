function checkSledJump(heights) {
  let check = true;
  let up = true,
    down = false;
  for (let index = 0; index < heights.length; index++) {
    if (index != 0) {
      if (heights[index - 1] < heights[index]) {
        up = true;
        down = false;
      } else if (heights[index - 1] > heights[index]) {
        down = true;
        up = false;
      } else {
        check = false;
        index = heights.length;
      }
    }
  }

  if (!check) return false;

  return !up && down;
}

// const result1 = checkSledJump([1, 2, 3, 2, 1]); // true: sube y baja de forma estricta
// checkSledJump([0, 1, 0]); // -> true: sube y baja de forma estricta
// checkSledJump([0, 3, 2, 1]); // -> true: sube y baja de forma estricta
// checkSledJump([0, 1000, 1]); // -> true: sube y baja de forma estricta

const result1 = checkSledJump([1, 2, 3]); // false: no sube de forma estricta
// checkSledJump([1, 2, 3]); // false: sólo sube
// checkSledJump([1, 2, 3, 2, 1, 2, 3]); // false: sube y baja y sube... ¡no vale!
//[0, 3, 2, 1] sería correcto... al final sube de golpe a 3 y luego baja...
console.log(result1);
