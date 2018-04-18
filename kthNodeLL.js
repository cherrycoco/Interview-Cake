// const kthToLastNode = (k, head) => {
//   let count = 0;
//   let node = head;

//   while (node) {
//     count++;
//     node = node.next; 
//   }

//   node = head;
//   while (count - k >= 0) {
//     if (count === k) {
//       return node.value;
//     }
//     node = node.next; 
//     count--;
//   }
// }

const kthToLastNode = (k, head) => {
  let leftPointer = head;
  let rightPointer = head; 

  for (let i = 0; i < k; i++) {
    rightPointer = rightPointer.next;
  }

  while (rightPointer) {
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }

  return leftPointer.value;
}


function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}
  var a = new LinkedListNode("Angel Food");
  var b = new LinkedListNode("Bundt");
  var c = new LinkedListNode("Cheese");
  var d = new LinkedListNode("Devil's Food");
  var e = new LinkedListNode("Eccles");
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

console.log(kthToLastNode(2, a));