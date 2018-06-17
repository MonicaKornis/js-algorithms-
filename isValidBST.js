function bstChecker(root) {
  return isValidBST(root, Infinity, -Infinity);
}

function isValidBST(node, max, min) {
  if(node === null) {
    return true;
  }

  if(node.val > max || node.min < min ) {
    return false;
  }

  return isValidBST(node.left,node.val,min) && isValidBST(node.right,max,node.val);
}
