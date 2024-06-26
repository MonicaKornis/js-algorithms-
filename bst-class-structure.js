class BST {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
    this.traverseDfs = this.traverseDfs.bind(this);
    this.traverseBfs = this.traverseBfs.bind(this);
  }

  insert(value) {
    if(value <= this.value) {
      if(this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if(this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if(this === null ) {
      console.log(false);
      return false;
    }

    if(this.value === value) {
      console.log(true);
      return true;
    } else if (value < this.value) {
      this.left.contains(value);
    } else if (value > this.value) {
      this.right.contains(value);
    }
  }

  traverseDfs() {
    function recurse(bst) {


      if(bst.left) recurse(bst.left);
      if(bst.right) recurse(bst.right);
    }

    recurse(this);
  }

  traverseBfs(action = () => {}) {
    let root = this;
    let queue = [];

    queue.push(root);

    while(queue.length > 0 ) {
      console.log(root.value);
      if(root.left) queue.push(root.left);
      if(root.right) queue.push(root.right);
      queue.shift();
      root = queue[0];
    }
  }
}
//
let a = new BST(7);
a.insert(4);
a.insert(9);
a.insert(2);
a.insert(5);
a.insert(8);
a.insert(10);
a.contains(5);
console.log('dsafd');

function traverse(node) { //preorder
  console.log(node.value);
  if(node.left) traverse(node.left);
  if(node.right) traverse(node.right);
}

traverse(a);
