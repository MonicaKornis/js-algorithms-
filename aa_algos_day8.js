// Sums Upon Sums
// Given a scrambled list of n unique integers between 0 and n find what number is missing.
//
// A) Solve this problem in O(nlog(n)) time, O(n) space
//
// B) Solve this problem in O(n) time, O(n) space.
//
// C) Solve this problem in O(n) time, O(1) space

function sumSums(list) {
  let listSum = 0;
  let allSum = 0;
  for (let i = 0; i < list.length; i++) {
    listSum += list[i];
  }

  for (let i = Math.min(...list); i < Math.max(...list) + 1; i++) {
    allSum += i;
  }

  return allSum - listSum;
}

sumSums([2,3,4,1,6]);

// bonus_stack
// Implement a stack with a method max that returns the maximum value of the stack. max should run in O(1) time.

class MaxStack {
  constructor() {
    this.stack = [];
    this.max;
  }

  push(num) {
    if(this.stack.length === 0) {
      this.max = num;
    } else {
      if(this.max < num) this.max = num;
    }
    this.stack.push(num);
  }

  popNum() {
    if (this.stack.length < 1) throw new Error('no values present');
    this.stack.pop();
  }

  maxNum() {
    if (this.stack.length < 1) throw new Error('no values present');
    return this.max;
  }
}

let s = new MaxStack();
s.push(1);
s.push(2);
s.push(5);
s.push(2);
s.maxNum();
