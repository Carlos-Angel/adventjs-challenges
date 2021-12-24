function checkIsSameTree(treeA, treeB) {
  const countDecorations = (bigTree) => {
    let decoradors = bigTree.value || 0;

    decoradors += bigTree.left ? countDecorations(bigTree.left) : 0;
    decoradors += bigTree.right ? countDecorations(bigTree.right) : 0;

    return decoradors;
  };

  return countDecorations(treeA) === countDecorations(treeB);
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

console.log(checkIsSameTree(tree, tree)); // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

console.log(checkIsSameTree(tree, tree2)); // false
console.log(checkIsSameTree(tree2, tree2)); // true
