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


}
