function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
    let l1Num = '';
    let l2Num = '';

    let currentNode = l1;

    while (currentNode !== null) {
       l1Num = l1Num + l1.val.toString();
        currentNode = l1.next;
    }


};

let list = new ListNode(1);
list.next = new ListNode(3);
