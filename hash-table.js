//Hash Tables allow us to look-up and insert data in constant time or O(1)
//Hash Tables can be a lot faster than trees or other data structures.
// Worst case scenario is O(n).
//At each index in the array is a linked-list of keys and values - this helps resolve collisions


function HashTable(size) {
  // we can pass in the number of 'buckets' that we cant to create
    this.hashTable = new Array(size);
    this.numBuckets = this.hashTable.length;
}

let myHT = new HashTable(20);

function HashNode(key, value, next) {
  this.key = key;
  this.value = value ;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  // we want an algorithsm that takes a particular key and returns an index so that
  // when a particular input/key is given we always return the same index for that input
  // one way to do this is my adding the values of each letter in the key
  let total = 0;
  for( let i = 0; i < key.length; i ++) {
    total += key.charCodeAt(i);
  }

  let bucketIndex = total % this.numBuckets;
  //this ensures that we always return an index less than the number of buckets
  return bucketIndex;
};

//the insert function uses they key and value to create a new HashNode 0p\
HashTable.prototype.insert = function(key,value) {
  let index = this.hash(key);
  //insert the key into the HashTable's hashing function
  if(!this.buckets[index]) {
    //if the bucket is empty, create a new Node at that index
    this.buckets[index] = new HashNode(key,value);
  } else if (this.buckets[index].key === key) {
    //if the key already exists in the hashtable just update the value
    this.buckets[index].value = value;
  } else {
    let currentNode = this.buckets[index];
    while(currentNode.next !== null ) {
      if(currentNode.next.key === key) {
        //if key is encountered  - reassign value of key to the new value
        currentNode.next.value = value;
        return ;
      }
      // set currentNode equal to next node
      currentNode = currentNode.next;
    }
    //when we find a node that is followed by null - then we add a new node with the
    //current key and value to follow the current node
    currentNode.next = new HashNode(key,value);
  }
};


//searches the current HashTable and uses the key to find the desired node
HashTable.prototype.get = function(key) {
  let index = this.hash(key); //returns the index of this key with the hashing function
  if(!this.buckets[index]) return null;
  let currentNode = this.buckets[index];
  while(currentNode) {
    //we will traverse the linked list to find the node with the given key
    if(currentNode.key === key) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null; //if the node isn't found - return null
};

//we must iterate through all the buckets and every node on the node train
// to retrive all the nodes in the HashMap - we'll store all of them in an array
HashTable.prototype.returnAll = function() {
  let allNodes = [];
  for(let i = 0; i < this.numBuckets; i++) {
    let currentNode = this.buckets[i];
    while(currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};
