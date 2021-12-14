function getMinJump(obstacles) {
  let minJump = 0;
  let jumpsTemp;
  const obstaclesOrdered = obstacles.sort((a, b) => a - b);

  for (
    let jump = 1;
    jump < obstaclesOrdered[obstaclesOrdered.length - 1];
    jump++
  ) {
    let isJumpIncorrect = false;
    let jumps = 0;

    // jump plus
    for (
      let i = 0;
      i < obstaclesOrdered[obstaclesOrdered.length - 1] + 1;
      i += jump
    ) {
      if (obstaclesOrdered.find((item) => item === i)) {
        // jump incorrect
        isJumpIncorrect = true;
      }
      jumps++;
    }

    if (!isJumpIncorrect && minJump === 0) {
      minJump = jump;
      jumpsTemp = jumps;
    }

    if (!isJumpIncorrect && jumpsTemp < jumps) {
      minJump = jump;
      jumpsTemp = jumps;
    }
  }

  return minJump;
}

const result1 = getMinJump([1, 2, 3, 5]); // -> 4
const result2 = getMinJump([3, 7, 5]); // -> 2
const result3 = getMinJump([9, 5, 1]); // -> 2
const result4 = getMinJump([5, 3, 6, 7, 9]); // -> 4
const result5 = getMinJump([2, 4, 6, 8, 10]); // -> 7

console.log(result1);
console.log(result2);
console.log(result3);

console.log(result4);
console.log(result5);
