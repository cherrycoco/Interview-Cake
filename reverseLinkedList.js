const reverseLinkedList = (head) => {
  let prevNode = null;
  let currentNode = head;
  let nextNode; 
  
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode; 
    currentNode = nextNode; 
  }

  return prevNode; 
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

let a = new LinkedListNode('a');
let b = new LinkedListNode('b');
let c = new LinkedListNode('c');

a.next = b;
b.next = c;
console.log(reverseLinkedList(a));