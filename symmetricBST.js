function isSymmetric(root) {
  return symmeticSubtree(root,root);
}

function symmeticSubtree(left,right) {
  if(left === null && right === null ) return true;
  if(left === null || right === null ) return false;
  return (left === right ) && (symmeticSubtree(left.right,right.left)) && (symmeticSubtree(left.left,right.right));
}
