class Stack {
  constructor () {
    this.items = [];
  }

  add (value) {
    this.items.push(value);
  }

  pop () {
    if (!this.items) {
      return null;
    }
    return this.items.pop();
  }

  peek () {
    if (!this.items) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.max = new Stack();
  }

  add (value) {
    this.stack.push(value);
    if (!this.max || value >= this.max.peek()) {
      this.max.push(value);
    }
  }

  remove () {
    let removed = this.stack.pop();
    if (this.max.peek() === removed) {
      this.max.pop();
    }

    return removed;
  }

  findMax () {
    return this.max.peek();
  }
}