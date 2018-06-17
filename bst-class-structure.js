class BST {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
    this.traverseDfs = this.traverseDfs.bind(this);
    this.traverseBfs = this.traverseBfs.bind(this);
  }

  insert(value) {
    // console.log(this.value);
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
      console.log(bst.value);


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

let a = new BST(3);
a.insert(5);
a.insert(1);
a.insert(2);
a.insert(39);
a.contains(5);
// a.traverseDfs();
a.traverseBfs();
console.log('dsafd');
