//Hash Tables allow us to look-up and insert data in constant time or O(1)
//Hash Tables can be a lot faster than trees or other data structures.

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

HashTable.prototype.insert = function(key,value) {
  let index = this.hash(key);
  //insert the key into the HashTable's hashing function



};
