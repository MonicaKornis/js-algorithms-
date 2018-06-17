function isValidBST(root) {
  return checker(root, -Infinity, Infinity);
}

function checker(node, min, max) {
  if(node === null) {
    return true;
  }

  if(node.val <= min || node.val >= max){
        return false;
    }

  return isValidBST(node.left,min, node.val) && isValidBST(node.right,node.val, max);
}
