// Linked Lists - Length & Count
//
// Implement Length() to count the number of nodes in a linked list.
//
// length(null) === 0
// length(1 -> 2 -> 3 -> null) === 3
// Implement Count() to count the occurrences of an integer in a linked list.
//
// count(null, 1) === 0
// count(1 -> 2 -> 3 -> null, 1) === 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) === 4
// I've decided to bundle these two functions within the same Kata since they are both very similar.
//

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  if(head === null) return 0;
  if(head.next === null) return 1;

  let i = 0;
  let start = head;
  while(start !== null) {
    i ++
    start = start.next
  }
  return i;
}

function count(head, data) {
  // Your code goes here.
  if(head === null) return 0;

  let i = 0;
  let start = head;
  while(start !== null) {
    if(start.data === data) i ++;
    start = start.next
  }
  return i;
}
