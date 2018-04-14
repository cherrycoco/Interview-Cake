const deleteNode = (node) => {
  node.value = node.next.value;
  node.next = node.next.next;
}

// check to system for side effects because the next node is now dangling so all of the previous pointers to the next node is now pointing to nowhere.
// if the deleted node is the last node, the previous node should be pointing to null instead of a node with value of null.