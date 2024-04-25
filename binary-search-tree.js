//Binary search trees are organized in the following way:
 // - the value of each left child node must be less than its parent node.
 // - the value of each right child node must be greater than the parent node


//constructor function
 function BST(value) {
   this.value = value;
   this.right = null;
   this.left = null;
 }

BST.prototype.insert = function(value) {
  //if the current value is less than the node value then we will check
  //to see if there is a left node - if there is not, then we will create a new node

  if(value <= this.value) {
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
    //if there is a left node then we will call the method recursively
    //to see where we can insert a subtree via our base case
  } else if(value > this.value) {
    //if the value is greater then the current root node then we will check to see if we
    // have a right node
    if(!this.right) this.right = new BST(value);
    //if there isn't a right node then we can create a new subtree
    else this.right.insert(value);
    //else we will recursively call the insert method to find the appropriate place to insert the subtree
  }
};
//Note: insertion in BSTs have a runtime of O(log n)

BST.prototype.contains = function(value) {
  if(this.value === value) {
    console.log(true);
    return true;
  }
  // if we find the value return true - base case
  if(this.value > value) { //if the value is less than the root node

    if (!this.value.left) {
      console.log(false);
      return false; //return false if left side is empty
    } else {
      return this.left.contains(value);
    }
  } else if (this.value < value) { //if value is greater than root node - search right side
    if (!this.value.right) {
        console.log(false);
        return false;
    } else {
      return this.right.contains(value);
    }
  }
};

//Note: searching a binary search tree is also O(log n)
BST.prototype.dfsTraversal = function(iteratorFunc) {


  function recurse(bst) {
    if(bst === null ) {
      return;
    }
    //
    // console.log(bst.value);
//
    iteratorFunc(bst.value);

    if(bst.left !== null) {
      recurse(bst.left);
    }
    if(bst.right !== null) {
      recurse(bst.right);
    }
  }

  recurse(this);
};


const pushOrderNodes = (value) => {
  // console.log(value);
  console.log('hi');
};

let tree = new BST(4);
tree.insert(3);
tree.insert(5);
tree.insert(2);
tree.insert(1);
// tree.contains(4);
// tree.contains(10);
tree.dfsTraversal(pushOrderNodes);
tree.dfsTraversal(pushOrderNodes);
