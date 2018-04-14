const constainsCycle = (head) => {
  let slowPointer = head;
  let fastPointer = head.next;

  while (fastPointer) {
    if (slowPointer.value === fastPointer.value) {
      return true;
    } else {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
  }

  return false;
}

