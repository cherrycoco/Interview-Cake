class Stack {
  constructor () {
    this.items = [];
  }

  add (value) {
    this.items.push(value);
  }

  remove () {
    if (!this.items) {
      return null;
    }

    return this.items.pop();
  }
};

class Queue {
  constructor() {
    this.stackIn = new Stack ();
    this.stackOut = new Stack ();
  }

  enqueue (value) {
    this.stackIn.add(value);
  }

  dequeue () {
    if (this.stackOut.items.length === 0) {
      while(this.stackIn.items.length > 0) {
        let removed = this.stackIn.remove();
        this.stackOut.add(removed);
      };
    } 
    return this.stackOut.remove();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.stackIn);
console.log(queue.stackOut);
console.log(queue.dequeue());
queue.enqueue(3);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue.stackIn);
console.log(queue.stackOut);