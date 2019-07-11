class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(array) {
  if(array.length < 1) return array;
  let center = Math.round((array.length-1)/2);
  let root = new Node(array[center]);

  let left = array.slice(0,center);
  let right = array.slice(center+1);

  if(left.length > 0) root.left = sortedArrayToBST(left);
  if(right.length > 0) root.right = sortedArrayToBST(right);

  return root; 

}
